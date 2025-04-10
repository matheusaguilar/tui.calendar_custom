import TZDate from "./date";
import type { TimeUnit } from "../types/events";
import type { TimeGridRow } from "../types/grid";
import type { CellStyle, FormattedTimeString } from "../types/time/datetime";
export declare enum Day {
    SUN = 0,
    MON = 1,
    TUE = 2,
    WED = 3,
    THU = 4,
    FRI = 5,
    SAT = 6
}
export declare const WEEK_DAYS = 7;
/**
 * pad left zero characters
 */
export declare function leadingZero(number: number, length: number): string;
export declare const MS_PER_DAY = 86400000;
export declare const MS_PER_HOUR = 3600000;
export declare const MS_PER_MINUTES = 60000;
/**
 * The number of milliseconds 20 minutes for event min duration
 */
export declare const MS_EVENT_MIN_DURATION: number;
export declare const SIXTY_SECONDS = 60;
/**
 * Returns the minutes, milliseconds, and step count from the timeGridRow
 * @param timeGridRows
 * @returns Object
 */
export declare function getTimeSteps(timeGridRows: TimeGridRow[]): {
    STEPS: number;
    STEP_MINUTES: number;
    MS_PER_STEP_MINUTES: number;
};
/**
 * Return formatted string as basis of supplied string.
 *
 * Supported Token Lists.
 *
 * - YYYY => 1988
 * - MM => 01 ~ 12
 * - DD => 01 ~ 31
 * - YYYYMMDD => 19880925
 */
export declare function toFormat(date: TZDate, strFormat: string): string;
/**
 * Convert value to milliseconds
 */
export declare function millisecondsFrom(type: TimeUnit, value: number): number;
/**
 * Return 00:00:00 supplied date
 */
export declare function toStartOfDay(date?: number | TZDate | Date): TZDate;
/**
 * Make date array from supplied parameters
 */
export declare function makeDateRange(startDate: TZDate, endDate: TZDate, step: number): TZDate[];
/**
 * Clone supplied date
 */
export declare function clone(date: TZDate): TZDate;
/**
 * Compare two dates.
 *
 * when first date is latest then seconds then return -1.
 *
 * return +1 reverse, and return 0 is same.
 */
export declare function compare(d1: TZDate, d2: TZDate): number;
export declare function isSameYear(d1: TZDate, d2: TZDate): boolean;
export declare function isSameMonth(d1: TZDate, d2: TZDate): boolean;
export declare function isSameDate(d1: TZDate, d2: TZDate): boolean;
export declare function max(d1: TZDate, d2: TZDate): TZDate;
export declare function min(d1: TZDate, d2: TZDate): TZDate;
/**
 * Convert date string to date object.
 * Only listed below formats available.
 *
 * - YYYYMMDD
 * - YYYY/MM/DD
 * - YYYY-MM-DD
 * - YYYY/MM/DD HH:mm:SS
 * - YYYY-MM-DD HH:mm:SS
 */
export declare function parse(str: string, fixMonth?: number): TZDate;
/**
 * Return 23:59:59 supplied date.
 * If you want to use milliseconds, use format 'YYYY-MM-DDTHH:mm:ss.sssZ' based on http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15
 */
export declare function toEndOfDay(date?: number | TZDate): TZDate;
export declare function isWeekend(day: Day): boolean;
export declare function isSunday(day: Day): boolean;
export declare function isSaturday(day: Day): boolean;
/**
 * Whether date is between supplied dates with date value?
 */
export declare function isBetweenWithDate(d: TZDate, d1: TZDate, d2: TZDate): boolean;
export declare function toStartOfMonth(date: TZDate): TZDate;
export declare function toStartOfYear(d: TZDate): TZDate;
export declare function toEndOfMonth(date: TZDate): TZDate;
/**
 * Calculate grid left(%), width(%) by narrowWeekend, startDayOfWeek, workweek
 */
export declare function getRowStyleInfo(days: number, narrowWeekend: boolean, startDayOfWeek: number, workweek: boolean): {
    rowStyleInfo: CellStyle[];
    cellWidthMap: string[][];
};
export declare function addMilliseconds(d: TZDate, step: number): TZDate;
export declare function addMinutes(d: TZDate, step: number): TZDate;
export declare function addHours(d: TZDate, step: number): TZDate;
export declare function setTimeStrToDate(d: TZDate, timeStr: FormattedTimeString): TZDate;
export declare function addDate(d: TZDate, step: number): TZDate;
export declare function subtractDate(d: TZDate, steps: number): TZDate;
/**
 * Inspired by `date-fns`
 *
 * See more: https://github.com/date-fns/date-fns/blob/master/src/addMonths/index.ts
 */
export declare function addMonths(d: TZDate, step?: number): TZDate;
export declare function addYear(d: TZDate, step: number): TZDate;
export declare function getDateDifference(d1: TZDate, d2: TZDate): number;
