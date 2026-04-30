import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";

import { portfolioThemeScript } from "./portfolio/theme-script";
import {
  buildCSPHeader,
  PORTFOLIO_THEME_SCRIPT_CSP_HASH,
} from "./csp";

describe("buildCSPHeader", () => {
  it("inline theme script hash matches portfolioThemeScript (update csp if theme-script changes)", () => {
    const computed =
      "'sha256-" +
      createHash("sha256").update(portfolioThemeScript, "utf8").digest("base64") +
      "'";
    expect(computed).toBe(PORTFOLIO_THEME_SCRIPT_CSP_HASH);
  });

  it("allows inline styles required by motion and font runtime", () => {
    const header = buildCSPHeader({ nonce: "test-nonce", isDevelopment: false });

    expect(header).toContain("style-src 'self' 'unsafe-inline' fonts.googleapis.com");
    expect(header).toContain("style-src-attr 'unsafe-inline'");
  });

  it("keeps unsafe-eval limited to development", () => {
    const developmentHeader = buildCSPHeader({
      nonce: "dev-nonce",
      isDevelopment: true,
    });
    const productionHeader = buildCSPHeader({
      nonce: "prod-nonce",
      isDevelopment: false,
    });

    expect(developmentHeader).toContain(PORTFOLIO_THEME_SCRIPT_CSP_HASH);
    expect(developmentHeader).toContain(
      "script-src 'self' 'nonce-dev-nonce' "
    );
    expect(developmentHeader).toContain("'strict-dynamic'");
    expect(developmentHeader).toContain("'unsafe-eval'");
    expect(productionHeader).not.toContain("'unsafe-eval'");
  });
});
