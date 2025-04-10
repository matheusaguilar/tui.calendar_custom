import TZDate from "../time/date";
import type { ViewType } from "../types/options";
import type { CalendarStore, SetState } from "../types/store";
export declare type ViewSlice = {
    view: {
        currentView: ViewType;
        renderDate: TZDate;
    };
};
export declare type ViewDispatchers = {
    changeView: (view: ViewType) => void;
    setRenderDate: (date: TZDate) => void;
};
export declare function createViewSlice(initialView?: ViewType): ViewSlice;
export declare function createViewDispatchers(set: SetState<CalendarStore>): ViewDispatchers;
