import type { CalendarState } from "../types/store";
export declare const monthVisibleEventCountSelector: (state: CalendarState) => number;
export declare const showNowIndicatorOptionSelector: (state: CalendarState) => boolean | undefined;
export declare const showTimezoneCollapseButtonOptionSelector: (state: CalendarState) => boolean;
export declare const timezonesCollapsedOptionSelector: (state: CalendarState) => boolean;
