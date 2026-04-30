import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { getPortfolioContent } from "@/lib/content/portfolio";

import { Projects } from "./Projects";

function mockViewport(isDesktop: boolean) {
  vi.mocked(globalThis.matchMedia).mockImplementation((query: string) => ({
    matches: query === "(min-width: 1280px)" ? isDesktop : false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

describe("Projects", () => {
  it("renders dossier triggers for all project cards across locales", () => {
    mockViewport(false);

    for (const locale of ["en", "tr", "es"] as const) {
      const content = getPortfolioContent(locale).projects;
      const { unmount } = render(<Projects content={content} />);

      expect(
        screen.getByRole("heading", { name: content.intro })
      ).toBeInTheDocument();
      expect(screen.getAllByRole("article")).toHaveLength(content.items.length);
      expect(
        screen.getAllByRole("button", { name: new RegExp(content.expandLabel, "i") })
      ).toHaveLength(content.items.length);

      const firstArticle = screen
        .getByRole("heading", { name: content.items[0].name })
        .closest("article");
      const secondArticle = screen
        .getByRole("heading", { name: content.items[1].name })
        .closest("article");

      expect(firstArticle).not.toBeNull();
      expect(secondArticle).not.toBeNull();
      expect(within(firstArticle as HTMLElement).queryByRole("button")).not.toBeNull();
      expect(within(secondArticle as HTMLElement).queryByRole("button")).not.toBeNull();

      unmount();
    }
  });

  it("reveals the active dossier inline on mobile for the first project", async () => {
    mockViewport(false);

    const content = getPortfolioContent("en").projects;

    render(<Projects content={content} />);

    expect(screen.queryByText(content.summaryTitle)).not.toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(
      screen.getAllByRole("button", {
        name: new RegExp(content.expandLabel, "i"),
      })[0]
    );

    expect(
      screen.getByRole("button", {
        name: new RegExp(content.collapseLabel, "i"),
      })
    ).toBeInTheDocument();
    const activeArticle = screen
      .getAllByRole("heading", { name: /enterprise admin panel \(php\)/i })[0]
      .closest("article");

    expect(activeArticle).not.toBeNull();
    expect(
      within(activeArticle as HTMLElement).getByText(content.summaryTitle)
    ).toBeInTheDocument();
    expect(
      within(activeArticle as HTMLElement).getByText(
        content.responsibilitiesTitle
      )
    ).toBeInTheDocument();
    expect(
      within(activeArticle as HTMLElement).getByText(content.footprintTitle)
    ).toBeInTheDocument();

    const note = content.items[0].details?.note;
    if (note) {
      expect(within(activeArticle as HTMLElement).getByText(note)).toBeInTheDocument();
    }
    const badgeLabel = content.items[0].details?.badgeLabel;
    if (badgeLabel) {
      expect(
        within(activeArticle as HTMLElement).getByText(badgeLabel)
      ).toBeInTheDocument();
    }

    expect(screen.getByText(/PHP server tier/i)).toBeInTheDocument();
  });

  it("reveals second and third project dossiers inline on mobile", async () => {
    mockViewport(false);

    const content = getPortfolioContent("en").projects;

    render(<Projects content={content} />);

    const user = userEvent.setup();
    const ragArticle = screen
      .getByRole("heading", { name: /rag-powered ai assistant/i })
      .closest("article");

    expect(ragArticle).not.toBeNull();

    await user.click(within(ragArticle as HTMLElement).getByRole("button"));

    expect(
      within(ragArticle as HTMLElement).getByText(
        /End-to-end product practice \(planning, testing, iteration\)/i
      )
    ).toBeInTheDocument();

    const mtmArticle = screen
      .getByRole("heading", { name: /scalable api and backend services/i })
      .closest("article");

    expect(mtmArticle).not.toBeNull();

    await user.click(within(mtmArticle as HTMLElement).getByRole("button"));

    await waitFor(() => {
      expect(
        screen.queryByText(
          /End-to-end product practice \(planning, testing, iteration\)/i
        )
      ).not.toBeInTheDocument();
    });
    expect(
      within(mtmArticle as HTMLElement).getByText(
        /MongoDB and REST data\/API surface/i
      )
    ).toBeInTheDocument();
  });

  it("renders the shared dossier below the active desktop row and swaps rows cleanly", async () => {
    mockViewport(true);

    const content = getPortfolioContent("en").projects;

    const { container } = render(<Projects content={content} />);
    const rows = container.querySelectorAll("[data-project-row]");

    expect(rows).toHaveLength(1);

    const user = userEvent.setup();
    await user.click(
      screen.getAllByRole("button", {
        name: new RegExp(content.expandLabel, "i"),
      })[2]
    );

    expect(rows[0]?.querySelector(".project-dossier")).not.toBeNull();
    expect(
      screen.getByText(/MongoDB and REST data\/API surface/i)
    ).toBeInTheDocument();

    await user.click(
      screen.getAllByRole("button", {
        name: new RegExp(content.expandLabel, "i"),
      })[0]
    );

    await waitFor(() => {
      expect(
        screen.queryByText(/MongoDB and REST data\/API surface/i)
      ).not.toBeInTheDocument();
    });
    expect(rows[0]?.querySelector(".project-dossier")).not.toBeNull();

    const badgeLabel = content.items[0].details?.badgeLabel;
    if (badgeLabel) {
      expect(screen.getByText(badgeLabel)).toBeInTheDocument();
    }
    expect(screen.getByText(/REST contracts with internal/i)).toBeInTheDocument();
  });
});
