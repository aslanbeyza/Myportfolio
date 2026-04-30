import { describe, expect, it } from "vitest";

import { getPortfolioContent } from ".";

describe("portfolio content", () => {
  it("returns the approved english hero copy", () => {
    const content = getPortfolioContent("en");

    expect(content.hero.headline).toBe(
      "I build responsive, user-focused interfaces and modern web applications."
    );
    expect(content.hero.supportingText).toBe(
      "Product-side work with TypeScript, React, and REST APIs; end-to-end contributions with Node.js, Express, and NestJS when needed."
    );
  });

  it("returns translated content for turkish routes", () => {
    const content = getPortfolioContent("tr");

    expect(content.nav.items[0].label).toBe("Projeler");
    expect(content.contact.headline).toBe(
      "Birlikte anlamlı ürünler üretelim."
    );
  });

  it("returns translated content for spanish routes", () => {
    const content = getPortfolioContent("es");

    expect(content.nav.items[1].label).toBe("Experiencia");
    expect(content.notFound.title).toBe("Ruta no encontrada.");
  });
});
