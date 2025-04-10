import type { CalendarState } from "../types/store";
export declare const primaryTimezoneSelector: (state: CalendarState) => string;
export declare const customOffsetCalculatorSelector: (state: CalendarState) => ((timezoneName: string, timestamp: number) => number) | undefined;
export declare const timezonesSelector: (state: CalendarState) => import("../types/options").TimezoneConfig[];
