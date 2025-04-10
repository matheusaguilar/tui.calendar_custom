import type { SetState } from "../types/store";
import type { ThemeDispatchers, ThemeStore } from "../types/theme";
export declare function createThemeDispatch(set: SetState<ThemeStore>): ThemeDispatchers;
