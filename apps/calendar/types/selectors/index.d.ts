import type { CalendarState } from "../types/store";
export declare function topLevelStateSelector<State, Group extends keyof State>(group: Group): (state: State) => State[Group];
export declare const popupSelector: (state: CalendarState) => {
    seeMore: import("../types/store").SeeMorePopupParam | null;
    form: import("../types/store").EventFormPopupParam | null;
    detail: import("../types/store").EventDetailPopupParam | null;
};
export declare const calendarSelector: (state: CalendarState) => import("../types/events").CalendarData;
export declare const weekViewLayoutSelector: (state: CalendarState) => {
    lastPanelType: string | null;
    dayGridRows: {
        [x: string]: {
            height: number;
        };
    };
    selectedDuplicateEventCid: number;
};
export declare const templateSelector: (state: CalendarState) => import("../types/template").Template;
export declare const viewSelector: (state: CalendarState) => {
    currentView: import("../types/options").ViewType;
    renderDate: import("..").TZDate;
};
export declare const optionsSelector: (state: CalendarState) => Omit<Required<import("..").Options>, "template" | "calendars" | "theme"> & {
    gridSelection: import("../types/options").GridSelectionOptions;
};
export declare const dndSelector: (state: CalendarState) => {
    draggingItemType: import("../types/drag").DraggingTypes<any> | null;
    draggingState: import("../slices/dnd").DraggingState;
    initX: number | null;
    initY: number | null;
    x: number | null;
    y: number | null;
    draggingEventUIModel: import("../model/eventUIModel").default | null;
};
