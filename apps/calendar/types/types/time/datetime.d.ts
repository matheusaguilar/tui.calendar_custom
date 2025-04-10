import type TZDate from "../../time/date";
export declare type RawDate = {
    y: number;
    M: number;
    d: number;
    h: number;
    m: number;
    s: number;
    ms: number;
};
export interface CellStyle {
    width: number;
    left: number;
}
export interface CellInfo extends CellStyle {
    date: TZDate;
}
export declare type HoursString = `${2}${0 | 1 | 2 | 3 | 4}` | `${0 | 1}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`;
export declare type FormattedTimeString = `${HoursString}:${0 | 3}0`;
