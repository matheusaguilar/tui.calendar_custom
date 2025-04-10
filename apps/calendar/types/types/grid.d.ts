import type TZDate from "../time/date";
import type { ClientMousePosition } from "./mouse";
import type { FormattedTimeString } from './time/datetime';
export interface GridUIModel {
    day: number;
    width: number;
    left: number;
}
export interface GridPosition {
    columnIndex: number;
    rowIndex: number;
}
export interface CommonGridColumn {
    calendarId?: string;
    date: TZDate;
    left: number;
    width: number;
}
export interface TimeGridRow {
    top: number;
    height: number;
    startTime: FormattedTimeString;
    endTime: FormattedTimeString;
}
export interface TimeGridData {
    rows: TimeGridRow[];
    columns: CommonGridColumn[];
}
export declare type GridPositionFinder = (mousePosition: ClientMousePosition) => GridPosition | null;
