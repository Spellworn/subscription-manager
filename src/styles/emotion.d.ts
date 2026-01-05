import "@emotion/react";
import type { AppTheme } from "./theme.ts";

declare module "@emotion/react" {
  export type Theme = AppTheme;
}
