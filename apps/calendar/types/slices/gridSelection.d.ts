import type { GridSelectionData } from "../types/components/gridSelection";
import type { CalendarStore, SetState } from "../types/store";
export declare type GridSelectionSlice = {
    gridSelection: {
        dayGridMonth: GridSelectionData | null;
        dayGridWeek: GridSelectionData | null;
        timeGrid: GridSelectionData | null;
        accumulated: {
            dayGridMonth: GridSelectionData[] | [];
        };
    };
};
export declare type GridSelectionType = Exclude<keyof GridSelectionSlice['gridSelection'], 'accumulated'>;
export declare type GridSelectionDispatchers = {
    setGridSelection: (type: GridSelectionType, gridSelection: GridSelectionData | null) => void;
    addGridSelection: (type: GridSelectionType, gridSelection: GridSelectionData | null) => void;
    clearAll: () => void;
};
export declare function createGridSelectionSlice(): GridSelectionSlice;
export declare function createGridSelectionDispatchers(set: SetState<CalendarStore>): GridSelectionDispatchers;
