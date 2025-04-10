import EventUIModel from "./eventUIModel";
import TZDate from "../time/date";
import type { DateType, EventCategory, EventObject, EventObjectWithDefaultValues, EventState } from "../types/events";
export default class EventModel implements Omit<EventObjectWithDefaultValues, '__cid'> {
    id: string;
    calendarId: string;
    title: string;
    body: string;
    isAllday: boolean;
    start: TZDate;
    end: TZDate;
    goingDuration: number;
    comingDuration: number;
    location: string;
    attendees: string[];
    category: EventCategory;
    dueDateClass: string;
    recurrenceRule: string;
    state: EventState;
    isVisible: boolean;
    isPending: boolean;
    isFocused: boolean;
    isReadOnly: boolean;
    isPrivate: boolean;
    color?: string;
    backgroundColor?: string;
    dragBackgroundColor?: string;
    borderColor?: string;
    customStyle: {};
    raw: any;
    /**
     * whether the event includes multiple dates
     */
    hasMultiDates: boolean;
    constructor(event?: EventObject);
    static schema: {
        required: string[];
        dateRange: string[];
    };
    init({ id, calendarId, title, body, isAllday, start, end, goingDuration, comingDuration, location, attendees, category, dueDateClass, recurrenceRule, state, isVisible, isPending, isFocused, isReadOnly, isPrivate, color, backgroundColor, dragBackgroundColor, borderColor, customStyle, raw, }?: EventObject): void;
    setAlldayPeriod(start?: DateType, end?: DateType): void;
    setTimePeriod(start?: DateType, end?: DateType): void;
    /**
     * @returns {TZDate} render start date.
     */
    getStarts(): TZDate;
    /**
     * @returns {TZDate} render end date.
     */
    getEnds(): TZDate;
    /**
     * @returns {number} instance unique id.
     */
    cid(): number;
    /**
     * Check two  are equals (means title, isAllday, start, end are same)
     * @param {EventModel}  event model instance to compare.
     * @returns {boolean} Return false when not same.
     */
    equals(event: EventModel): boolean;
    /**
     * return duration between start and end.
     * @returns {number} duration milliseconds (UTC)
     */
    duration(): number;
    valueOf(): this;
    /**
     * Returns true if the given EventModel coincides with the same time as the
     * calling EventModel.
     * @param {EventModel | EventUIModel} event The other event to compare with this EventModel.
     * @param {boolean = true} usingTravelTime When calculating collision, whether to calculate with travel time.
     * @returns {boolean} If the other event occurs within the same time as the first object.
     */
    collidesWith(event: EventModel | EventUIModel, usingTravelTime?: boolean): boolean;
    toEventObject(): EventObjectWithDefaultValues;
    getColors(): {
        color: string | undefined;
        backgroundColor: string | undefined;
        dragBackgroundColor: string | undefined;
        borderColor: string | undefined;
    };
}
export declare function isTimeEvent({ model }: EventUIModel): boolean;
