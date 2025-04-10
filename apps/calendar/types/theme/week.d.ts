import type { DeepPartial } from 'ts-essentials';
import type { ThemeState, WeekTheme } from "../types/theme";
export declare function createWeekTheme(weekTheme?: DeepPartial<WeekTheme>): {
    week: Required<ThemeState>['week'];
};
