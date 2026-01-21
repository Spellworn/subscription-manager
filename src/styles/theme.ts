import { useTheme } from "@emotion/react";
import type { Palette } from "../utils/themeHelper.ts";

interface SizeInterface {
  xs?: string;
  s?: string;
  m?: string;
  l?: string;
  xl?: string;
  xxl?: string;
  xxxl?: string;
}

export interface AppTheme {
  size: SizeInterface;
  palette: Palette;
}

export type AppThemeExtended = AppTheme & { palette: Palette };

export const theme = (palette: Palette): AppThemeExtended => {
  return {
    size: {
      xs: "0.5rem",
      s: "0.75rem",
      m: "1rem",
      l: "1.25rem",
      xl: "1.5rem",
      xxl: "2rem",
      xxxl: "3rem",
    },

    palette,
  };
};

export const useAppTheme = (): AppTheme => useTheme() as AppTheme;
