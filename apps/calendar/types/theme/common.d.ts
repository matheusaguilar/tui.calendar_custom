import type { DeepPartial } from 'ts-essentials';
import type { CommonTheme, ThemeState } from "../types/theme";
export declare function createCommonTheme(commonTheme?: DeepPartial<CommonTheme>): {
    common: Required<ThemeState['common']>;
};
