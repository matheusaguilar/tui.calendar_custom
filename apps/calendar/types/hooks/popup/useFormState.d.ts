import type { EventObject, EventState } from "../../types/events";
export declare enum FormStateActionType {
    init = "init",
    setCalendarId = "setCalendarId",
    setTitle = "setTitle",
    setLocation = "setLocation",
    setPrivate = "setPrivate",
    setAllday = "setAllday",
    setState = "setState",
    reset = "reset"
}
declare type FormStateAction = {
    type: FormStateActionType.init;
    event: EventObject;
} | {
    type: FormStateActionType.setCalendarId;
    calendarId: string;
} | {
    type: FormStateActionType.setTitle;
    title: string;
} | {
    type: FormStateActionType.setLocation;
    location: string;
} | {
    type: FormStateActionType.setPrivate;
    isPrivate: boolean;
} | {
    type: FormStateActionType.setAllday;
    isAllday: boolean;
} | {
    type: FormStateActionType.setState;
    state: EventState;
} | {
    type: FormStateActionType.reset;
};
export declare type FormStateDispatcher = (action: FormStateAction) => void;
export declare function useFormState(initCalendarId?: string): [EventObject, (action: FormStateAction) => void];
export {};
