import type TZDate from "../time/date";
import type { TimeUnit } from "../types/events";
/**
 * @param date
 * @param {TZDate} [start] - start time
 * @param {TZDate} [end] - end time
 * @returns {number} The percent value represent current time between start and end
 */
export declare function getTopPercentByTime(date: TZDate, start: TZDate, end: TZDate): number;
/**
 * @typedef {Object} VerticalPositionsByTime
 * @property {number} top - top percent
 * @property {number} height - height percent
 */
/**
 *
 * @param {TZDate} start target time which is converted to percent value
 * @param {TZDate} end target time which is converted to percent value
 * @param {TZDate} minTime start time
 * @param {TZDate} maxTime end time
 * @returns {VerticalPositionsByTime} verticalPositions
 */
export declare function getTopHeightByTime(start: TZDate, end: TZDate, minTime: TZDate, maxTime: TZDate): {
    top: number;
    height: number;
};
/**
 * Get a previous grid time before the time
 * @param {TZDate} time - target time
 * @param slot
 * @param unit
 * @returns {TZDate} - next grid time
 */
export declare function getPrevGridTime(time: TZDate, slot: number, unit: TimeUnit): TZDate;
/**
 * Get a next grid time after the time
 * @param {TZDate} time - target time
 * @param slot
 * @param unit
 * @returns {TZDate} - next grid time
 */
export declare function getNextGridTime(time: TZDate, slot: number, unit: TimeUnit): TZDate;
