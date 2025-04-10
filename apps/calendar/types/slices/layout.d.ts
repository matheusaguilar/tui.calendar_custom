import type { CalendarStore, SetState } from "../types/store";
export declare type WeekGridRows = 'milestone' | 'task' | 'allday' | 'time' | string;
export declare type WeekViewLayoutSlice = {
    layout: number;
    weekViewLayout: {
        lastPanelType: string | null;
        dayGridRows: {
            [row in WeekGridRows]: {
                height: number;
            };
        };
        selectedDuplicateEventCid: number;
    };
};
declare type UpdateGridRowHeightParams = {
    rowName: WeekGridRows;
    height: number;
};
declare type UpdateGridRowHeightByDiffParams = {
    rowName: WeekGridRows;
    diff: number;
};
export declare type WeekViewLayoutDispatchers = {
    setLastPanelType: (type: string | null) => void;
    updateLayoutHeight: (height: number) => void;
    updateDayGridRowHeight: (params: UpdateGridRowHeightParams) => void;
    updateDayGridRowHeightByDiff: (params: UpdateGridRowHeightByDiffParams) => void;
    setSelectedDuplicateEventCid: (cid?: number) => void;
};
export declare function createWeekViewLayoutSlice(): WeekViewLayoutSlice;
export declare function createWeekViewLayoutDispatchers(set: SetState<CalendarStore>): WeekViewLayoutDispatchers;
export {};
