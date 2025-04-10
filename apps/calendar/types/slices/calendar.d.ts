import type EventModel from "../model/eventModel";
import type { CalendarData, EventObject } from "../types/events";
import type { CalendarColor, CalendarInfo } from "../types/options";
import type { CalendarStore, SetState } from "../types/store";
export declare type CalendarSlice = {
    calendar: CalendarData;
};
declare type UpdateEventParams = {
    event: EventModel;
    eventData: EventObject;
};
export declare type CalendarDispatchers = {
    createEvents: (events: EventObject[]) => void;
    updateEvent: (params: UpdateEventParams) => void;
    deleteEvent: (event: EventModel) => void;
    clearEvents: () => void;
    setCalendars: (calendars: CalendarInfo[]) => void;
    setCalendarColor: (calendarId: string, colorOptions: CalendarColor) => void;
    setCalendarVisibility: (calendarIds: string[], isVisible: boolean) => void;
};
export declare function createCalendarSlice(calendars?: CalendarInfo[]): CalendarSlice;
export declare function createCalendarDispatchers(set: SetState<CalendarStore>): CalendarDispatchers;
export {};
