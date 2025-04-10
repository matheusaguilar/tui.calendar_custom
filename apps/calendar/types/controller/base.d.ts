import EventModel from "../model/eventModel";
import type EventUIModel from "../model/eventUIModel";
import type TZDate from "../time/date";
import Collection from "../utils/collection";
import type { CalendarData, EventObject, IDS_OF_DAY } from "../types/events";
import type { CalendarInfo } from "../types/options";
/**
 * Make a event collection
 * @returns {Collection<EventModel>} instance
 */
export declare function createEventCollection<T extends EventModel | EventUIModel>(...initItems: T[]): Collection<T>;
/**
 * Calculate contain dates in event.
 * @param {TZDate} start - start date of range
 * @param {TZDate} end - end date of range
 * @returns {array} contain dates.
 */
export declare function getDateRange(start: TZDate, end: TZDate): TZDate[];
export declare function isAllday(event: EventModel): boolean;
/**
 * function for group each event models.
 * @type {function}
 * @param {EventUIModel} uiModel - ui model instance
 * @returns {string} group key
 */
export declare function filterByCategory(uiModel: EventUIModel): import("../types/events").EventCategory;
/****************
 * Events CRUD
 ****************/
/**
 * Set date matrix to supplied event model instance.
 * @param {IDS_OF_DAY} idsOfDay - ids of day
 * @param {EventModel} event - instance of event model.
 */
export declare function addToMatrix(idsOfDay: IDS_OF_DAY, event: EventModel): void;
/**
 * Remove event's id from matrix.
 * @param {IDS_OF_DAY} idsOfDay - ids of day
 * @param {EventModel} event - instance of event model
 */
export declare function removeFromMatrix(idsOfDay: IDS_OF_DAY, event: EventModel): void;
export declare function addEvent(calendarData: CalendarData, event: EventModel): EventModel;
export declare function createEvent(calendarData: CalendarData, eventData: EventObject): EventModel;
export declare function createEvents(calendarData: CalendarData, events?: EventObject[]): EventModel[];
/**
 * Update an event.
 * @param {CalendarData} calendarData - data of calendar
 * @param {string} eventId - event id
 * @param {string} calendarId - calendar id
 * @param {EventObject} eventData - event data
 * @returns {boolean} success or failure
 */
export declare function updateEvent(calendarData: CalendarData, eventId: string, calendarId: string, eventData: EventObject): boolean;
/**
 * Delete event instance from controller.
 * @param {CalendarData} calendarData - data of calendar
 * @param {EventModel} event - event model instance to delete
 * @returns {EventModel} deleted model instance.
 */
export declare function deleteEvent(calendarData: CalendarData, event: EventModel): EventModel;
export declare function clearEvents(calendarData: CalendarData): void;
/**
 * Set calendar list
 * @param {CalendarData} calendarData - data of calendar
 * @param {Array.<Calendar>} calendars - calendar list
 */
export declare function setCalendars(calendarData: CalendarData, calendars: CalendarInfo[]): void;
/**
 * Return events in supplied date range.
 *
 * available only YMD.
 * @param {CalendarData} calendarData - data of calendar
 * @param {{start: TZDate, end: TZDate}} condition - condition of find range
 * @returns {object.<string, Collection>} event collection grouped by dates.
 */
export declare function findByDateRange(calendarData: CalendarData, condition: {
    start: TZDate;
    end: TZDate;
}): Record<string, EventModel[]>;
