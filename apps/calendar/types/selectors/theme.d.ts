import type { ThemeState } from "../types/theme";
/**
 * Selectors for the theme state.
 * Use selectors with `useTheme` hooks only.
 */
export declare const commonThemeSelector: (state: ThemeState) => import("../types/theme").CommonTheme;
export declare const weekThemeSelector: (state: ThemeState) => import("../types/theme").WeekTheme;
export declare const monthThemeSelector: (state: ThemeState) => import("../types/theme").MonthTheme;
export declare const weekDayGridLeftSelector: (theme: ThemeState) => import("../types/theme").DayGridLeftTheme;
export declare const weekTimeGridLeftSelector: (theme: ThemeState) => import("../types/theme").TimeGridLeftTheme;
export declare const monthMoreViewSelector: (theme: ThemeState) => {
    backgroundColor: string;
    border: string;
    boxShadow: string;
    width: number | null;
    height: number | null;
};
export declare const monthGridCellSelector: (theme: ThemeState) => {
    headerHeight: number | null;
    footerHeight: number | null;
};
