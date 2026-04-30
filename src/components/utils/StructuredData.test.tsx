import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import StructuredData from "./StructuredData";

function getStructuredData(locale: "en" | "tr") {
  const { container } = render(<StructuredData locale={locale} />);
  const script = container.querySelector(
    'script[type="application/ld+json"]'
  );

  return JSON.parse(script?.innerHTML ?? "{}");
}

describe("StructuredData", () => {
  it("matches the root canonical URL format", () => {
    const data = getStructuredData("tr");

    expect(data["@graph"][0].url).toBe("https://www.beyzaaslan.dev/");
    expect(data["@graph"][1].url).toBe("https://www.beyzaaslan.dev/");
    expect(data["@graph"][2].url).toBe("https://www.beyzaaslan.dev/");
  });

  it("matches localized canonical URL format", () => {
    const data = getStructuredData("en");

    expect(data["@graph"][0].url).toBe("https://www.beyzaaslan.dev/en/");
    expect(data["@graph"][1].url).toBe("https://www.beyzaaslan.dev/en/");
    expect(data["@graph"][2].url).toBe("https://www.beyzaaslan.dev/en/");
  });
});
