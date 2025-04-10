import type { Options } from "../types/options";
import type { CommonTheme, MonthTheme, ThemeDispatchers, ThemeState, ThemeStore, WeekTheme } from "../types/theme";
export declare const initThemeStore: (themeOptions?: Options['theme']) => import("../types/store").InternalStoreAPI<ThemeStore>;
declare const ThemeProvider: ({ children, store, }: import("../types/components/common").PropsWithChildren<{
    store: import("@t/store").InternalStoreAPI<ThemeStore>;
}>) => import("preact").VNode<any>, useInternalThemeStore: () => import("../types/store").InternalStoreAPI<ThemeStore>, useTheme: <StateSlice>(selector: import("../types/store").StateSelector<ThemeStore, StateSlice>, equalityFn?: import("../types/store").EqualityChecker<StateSlice>) => StateSlice;
export { ThemeProvider, useInternalThemeStore, useTheme };
export declare function useThemeDispatch(): ThemeDispatchers;
export declare function useCommonTheme(): CommonTheme;
export declare function useWeekTheme(): WeekTheme;
export declare function useMonthTheme(): MonthTheme;
export declare function useAllTheme(): ThemeState;
