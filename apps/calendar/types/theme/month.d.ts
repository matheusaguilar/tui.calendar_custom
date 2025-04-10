import type { DeepPartial } from 'ts-essentials';
import type { MonthTheme, ThemeState } from "../types/theme";
export declare function createMonthTheme(monthTheme?: DeepPartial<MonthTheme>): {
    month: Required<ThemeState>['month'];
};
