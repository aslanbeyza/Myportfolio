import { createHash } from "node:crypto";

import { portfolioThemeScript } from "../src/lib/portfolio/theme-script";

const b64 = createHash("sha256")
  .update(portfolioThemeScript, "utf8")
  .digest("base64");
console.log("Paste into csp.ts as PORTFOLIO_THEME_SCRIPT_CSP_HASH:");
console.log(`  '\\'sha256-${b64}\\''`);
