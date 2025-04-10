import type EventModel from "../../model/eventModel";
import type { Filter } from "../../utils/collection";
import Collection from "../../utils/collection";
import type { CalendarData } from "../../types/events";
export declare function useCalendarData(calendar: CalendarData, ...filters: Filter<EventModel>[]): {
    events: Collection<EventModel>;
    calendars: import("../../types/options").CalendarInfo[];
    idsOfDay: import("../../types/events").IDS_OF_DAY;
};
