import type { GridSelectionOptions, Options } from "../types/options";
import type { CalendarStore, SetState } from "../types/store";
export declare function initializeGridSelectionOptions(options: Options['gridSelection']): GridSelectionOptions;
export declare type OptionsSlice = {
    options: Omit<Required<Options>, 'template' | 'calendars' | 'theme'> & {
        gridSelection: GridSelectionOptions;
    };
};
export declare type OptionsDispatchers = {
    setOptions: (newOptions: Partial<OptionsSlice['options']>) => void;
};
export declare function createOptionsSlice(options?: Options): OptionsSlice;
export declare function createOptionsDispatchers(set: SetState<CalendarStore>): OptionsDispatchers;
