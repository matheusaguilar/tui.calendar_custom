import type EventModel from "../model/eventModel";
import type EventUIModel from "../model/eventUIModel";
import TZDate from "../time/date";
import type { Filter } from "../utils/collection";
import Collection from "../utils/collection";
import type { CalendarData, DayGridEventMatrix, EventGroupMap, IDS_OF_DAY, Matrix3d } from "../types/events";
import type { WeekOptions } from "../types/options";
import type { Panel } from "../types/panel";
/**********
 * TIME GRID VIEW
 **********/
/**
 * make a filter function that is not included range of start, end hour
 * @param {number} hStart - hour start
 * @param {number} hEnd - hour end
 * @returns {function} - filtering function
 */
export declare function _makeHourRangeFilter(hStart: number, hEnd: number): (uiModel: EventModel | EventUIModel) => boolean;
/**
 * make ui model function depending on start and end hour
 * if time view options has start or end hour condition
 * it add filter
 * @param {number} hourStart - start hour to be shown
 * @param {number} hourEnd - end hour to be shown
 * @returns {function} function
 */
export declare function _makeGetUIModelFuncForTimeView(hourStart: number, hourEnd: number): (uiModelColl: Collection<EventUIModel>) => EventUIModel[];
/**
 * split event model by ymd.
 * @param {IDS_OF_DAY} idsOfDay - ids of days
 * @param {TZDate} start - start date
 * @param {TZDate} end - end date
 * @param {Collection<EventUIModel>} uiModelColl - collection of ui models.
 * @returns {object.<string, Collection>} splitted event model collections.
 */
export declare function splitEventByDateRange(idsOfDay: IDS_OF_DAY, start: TZDate, end: TZDate, uiModelColl: Collection<EventModel> | Collection<EventUIModel>): Record<string, Collection<EventUIModel | EventModel>>;
/**
 * create ui model for time view part
 * @param {IDS_OF_DAY} idsOfDay - model controller
 * @param {object} condition - find options
 *  @param {TZDate} condition.start - start date.
 *  @param {TZDate} condition.end - end date.
 *  @param {Collection} condition.uiModelTimeColl - collection of ui models.
 *  @param {number} condition.hourStart - start hour to be shown
 *  @param {number} condition.hourEnd - end hour to be shown
 * @returns {object} ui model for time part.
 */
export declare function getUIModelForTimeView(idsOfDay: IDS_OF_DAY, condition: {
    start: TZDate;
    end: TZDate;
    uiModelTimeColl: Collection<EventUIModel>;
    hourStart: number;
    hourEnd: number;
}): Record<string, Matrix3d<EventUIModel>>;
/**********
 * ALLDAY VIEW
 **********/
/**
 * Set hasMultiDates flag to true and set date ranges for rendering
 * @param {Collection} uiModelColl - collection of ui models.
 */
export declare function _addMultiDatesInfo(uiModelColl: Collection<EventUIModel>): void;
/**
 * create ui model for allday view part
 * @param {TZDate} start start date.
 * @param {TZDate} end end date.
 * @param {Collection} uiModelColl - ui models of allday event.
 * @returns {DayGridEventMatrix} matrix of allday event ui models.
 */
export declare function getUIModelForAlldayView(start: TZDate, end: TZDate, uiModelColl: Collection<EventUIModel>): DayGridEventMatrix;
/**********
 * READ
 **********/
/**
 * Populate events in date range.
 * @param {CalendarData} calendarData - data store
 * @param {object} condition - find options
 *  @param {IDS_OF_DAY} condition.idsOfDay - model controller
 *  @param {TZDate} condition.start start date.
 *  @param {TZDate} condition.end end date.
 *  @param {Array.<object>} condition.panels - event panels like 'milestone', 'task', 'allday', 'time'
 *  @param {function[]} condition.[andFilters] - optional filters to applying search query
 *  @param {Object} condition.options - week view options
 * @returns {object} events grouped by dates.
 */
export declare function findByDateRange(calendarData: CalendarData, condition: {
    start: TZDate;
    end: TZDate;
    panels: Panel[];
    andFilters: Filter<EventModel | EventUIModel>[];
    options: WeekOptions;
}): EventGroupMap;
