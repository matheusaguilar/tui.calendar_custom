import type EventUIModel from "../model/eventUIModel";
import type TZDate from "../time/date";
import type { CollapseDuplicateEventsOptions } from "../types/options";
/**
 * Filter that get events in supplied date ranges.
 * @param {TZDate} startColumnTime - start date
 * @param {TZDate} endColumnTime - end date
 * @returns {function} event filter function
 */
export declare function isBetween(startColumnTime: TZDate, endColumnTime: TZDate): (uiModel: EventUIModel) => boolean;
/**
 * Convert to EventUIModel and make rendering information of events
 * @param {EventUIModel[]} events - event list
 * @param {TZDate} startColumnTime - start date
 * @param {TZDate} endColumnTime - end date
 */
export declare function setRenderInfoOfUIModels(events: EventUIModel[], startColumnTime: TZDate, endColumnTime: TZDate, selectedDuplicateEventCid: number, collapseDuplicateEventsOptions?: CollapseDuplicateEventsOptions): EventUIModel[];
