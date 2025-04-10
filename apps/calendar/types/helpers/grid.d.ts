import type EventUIModel from "../model/eventUIModel";
import TZDate from "../time/date";
import { Day } from "../time/datetime";
import type { CalendarData, EventModelMap } from "../types/events";
import type { CommonGridColumn, GridPositionFinder, TimeGridData } from "../types/grid";
import type { MonthOptions, WeekOptions } from "../types/options";
export declare const EVENT_HEIGHT = 22;
export declare const TOTAL_WIDTH = 100;
export declare function isWithinHeight(containerHeight: number, eventHeight: number): ({ top }: EventUIModel) => boolean;
export declare function isExceededHeight(containerHeight: number, eventHeight: number): ({ top }: EventUIModel) => boolean;
export declare function getExceedCount(uiModel: EventUIModel[], containerHeight: number, eventHeight: number): number;
export declare function getGridWidthAndLeftPercentValues(row: TZDate[], narrowWeekend: boolean, totalWidth: number): {
    widthList: number[];
    leftList: number[];
};
export declare function getWidth(widthList: number[], start: number, end: number): number;
export declare const isInGrid: (gridDate: TZDate) => (uiModel: EventUIModel) => boolean;
export declare function getGridDateIndex(date: TZDate, row: TZDate[]): number;
export declare const getLeftAndWidth: (startIndex: number, endIndex: number, row: TZDate[], narrowWeekend: boolean) => {
    left: number;
    width: number;
};
export declare const getEventLeftAndWidth: (start: TZDate, end: TZDate, row: TZDate[], narrowWeekend: boolean) => {
    width: number;
    left: number;
};
export declare function getRenderedEventUIModels(row: TZDate[], calendarData: CalendarData, narrowWeekend: boolean): {
    uiModels: EventUIModel[];
    gridDateEventModelMap: Record<string, EventUIModel[]>;
};
export declare const getWeekViewEvents: (row: TZDate[], calendarData: CalendarData, { narrowWeekend, hourStart, hourEnd, weekStartDate, weekEndDate, }: WeekOptions & {
    weekStartDate: TZDate;
    weekEndDate: TZDate;
}) => EventModelMap;
export declare function createDateMatrixOfMonth(renderTargetDate: Date | TZDate, { workweek, visibleWeeksCount, startDayOfWeek, isAlways6Weeks, }: MonthOptions): TZDate[][];
export declare function getWeekDates(renderDate: TZDate, { startDayOfWeek, workweek }: WeekOptions): TZDate[];
export declare function getColumnsData(datesOfWeek: TZDate[], // 5 or 7 dates
narrowWeekend?: boolean): CommonGridColumn[];
export declare function createTimeGridData(datesOfWeek: TZDate[], options: {
    hourStart: number;
    hourEnd: number;
    narrowWeekend?: boolean;
    timeStep: number[];
}): TimeGridData;
export declare function createDayHorizontalViewTimeGridData(calendarIds: string[], datesOfWeek: TZDate[], options: {
    hourStart: number;
    hourEnd: number;
    narrowWeekend?: boolean;
    timeStep: number[];
}): TimeGridData;
export declare function createGridPositionFinder({ rowsCount, columnsCount, container, narrowWeekend, startDayOfWeek, }: {
    rowsCount: number;
    columnsCount: number;
    container: HTMLElement | null;
    narrowWeekend?: boolean;
    startDayOfWeek?: Day;
}): GridPositionFinder;
