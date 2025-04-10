import type EventModel from "../model/eventModel";
import type EventUIModel from "../model/eventUIModel";
import type TZDate from "../time/date";
import type { Filter } from "../utils/collection";
import type { CalendarData } from "../types/events";
/**
 * Find event and get ui model for specific month
 * @returns {object} ui model data
 * @param calendarData
 * @param condition
 */
export declare function findByDateRange(calendarData: CalendarData, condition: {
    start: TZDate;
    end: TZDate;
    andFilters?: Filter<EventModel | EventUIModel>[];
    alldayFirstMode?: boolean;
}): import("../types/events").Matrix3d<EventUIModel>;
