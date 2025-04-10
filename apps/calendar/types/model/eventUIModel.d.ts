import type EventModel from "./eventModel";
import TZDate from "../time/date";
interface EventUIProps {
    top: number;
    left: number;
    width: number;
    height: number;
    exceedLeft: boolean;
    exceedRight: boolean;
    croppedStart: boolean;
    croppedEnd: boolean;
    goingDurationHeight: number;
    modelDurationHeight: number;
    comingDurationHeight: number;
    duplicateEvents: EventUIModel[];
    duplicateEventIndex: number;
    duplicateStarts?: TZDate;
    duplicateEnds?: TZDate;
    duplicateLeft: string;
    duplicateWidth: string;
    collapse: boolean;
    isMain: boolean;
}
/**
 * Set of UI-related properties for calendar event.
 * @class
 * @param {EventModel} event EventModel instance.
 */
export default class EventUIModel implements EventUIProps {
    model: EventModel;
    top: number;
    left: number;
    width: number;
    height: number;
    /**
     * represent render start date used at rendering.
     *
     * if set null then use model's 'start' property.
     * @type {TZDate}
     */
    renderStarts?: TZDate;
    /**
     * represent render end date used at rendering.
     *
     * if set null then use model's 'end' property.
     * @type {TZDate}
     */
    renderEnds?: TZDate;
    /**
     * whether the actual start-date is before the render-start-date
     * @type {boolean}
     */
    exceedLeft: boolean;
    /**
     * whether the actual end-date is after the render-end-date
     * @type {boolean}
     */
    exceedRight: boolean;
    /**
     * whether the actual start-date is before the render-start-date for column
     * @type {boolean}
     */
    croppedStart: boolean;
    /**
     * whether the actual end-date is after the render-end-date for column
     * @type {boolean}
     */
    croppedEnd: boolean;
    /**
     * @type {number} percent
     */
    goingDurationHeight: number;
    /**
     * @type {number} percent
     */
    modelDurationHeight: number;
    /**
     * @type {number} percent
     */
    comingDurationHeight: number;
    /**
     * the sorted list of duplicate events.
     * @type {EventUIModel[]}
     */
    duplicateEvents: EventUIModel[];
    /**
     * the index of this event among the duplicate events.
     * @type {number}
     */
    duplicateEventIndex: number;
    /**
     * represent the start date of a group of duplicate events.
     *
     * the earliest value among the duplicate events' starts and going durations.
     * @type {TZDate}
     */
    duplicateStarts?: TZDate;
    /**
     * represent the end date of a group of duplicate events.
     *
     * the latest value among the duplicate events' ends and coming durations.
     * @type {TZDate}
     */
    duplicateEnds?: TZDate;
    /**
     * represent the left value of a duplicate event.
     * ex) calc(50% - 24px), calc(50%), ...
     *
     * @type {string}
     */
    duplicateLeft: string;
    /**
     * represent the width value of a duplicate event.
     * ex) calc(50% - 24px), 9px, ...
     *
     * @type {string}
     */
    duplicateWidth: string;
    /**
     * whether the event is collapsed or not among the duplicate events.
     * @type {boolean}
     */
    collapse: boolean;
    /**
     * whether the event is main or not.
     * The main event is expanded on the initial rendering.
     * @type {boolean}
     */
    isMain: boolean;
    constructor(event: EventModel);
    getUIProps(): EventUIProps;
    setUIProps(props: Partial<EventUIProps>): void;
    /**
     * return renderStarts property to render properly when specific event that exceed rendering date range.
     *
     * if renderStarts is not set. return model's start property.
     */
    getStarts(): TZDate;
    /**
     * return renderStarts property to render properly when specific event that exceed rendering date range.
     *
     * if renderEnds is not set. return model's end property.
     */
    getEnds(): TZDate;
    /**
     * @returns {number} unique number for model.
     */
    cid(): number;
    /**
     * Shadowing valueOf method for event sorting.
     */
    valueOf(): EventModel;
    /**
     * Link duration method
     * @returns {number} EventModel#duration result.
     */
    duration(): number;
    collidesWith(uiModel: EventModel | EventUIModel, usingTravelTime?: boolean): boolean;
    clone(): EventUIModel;
}
export {};
