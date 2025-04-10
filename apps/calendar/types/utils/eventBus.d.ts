import CustomEvents from 'tui-code-snippet/customEvents/customEvents';
import type { AnyFunc } from "../types/eventBus";
export interface EventBus<EventTypes extends {
    [key: string]: AnyFunc;
}> {
    on<EventName extends keyof EventTypes>(eventName: EventName, handler: EventTypes[EventName]): EventBus<EventTypes>;
    off<EventName extends keyof EventTypes>(eventName?: EventName, handler?: EventTypes[EventName]): EventBus<EventTypes>;
    once<EventName extends keyof EventTypes>(eventName: EventName, handler: EventTypes[EventName]): EventBus<EventTypes>;
    fire<EventName extends keyof EventTypes>(eventName: EventName, ...args: Parameters<EventTypes[EventName]>): EventBus<EventTypes>;
}
export declare class EventBusImpl<EventTypes extends {
    [key: string]: AnyFunc;
}> extends CustomEvents implements EventBus<EventTypes> {
    on<EventName extends keyof EventTypes>(eventName: EventName, handler: EventTypes[EventName]): this;
    off<EventName extends keyof EventTypes>(eventName?: EventName, handler?: EventTypes[EventName]): this;
    fire<EventName extends keyof EventTypes>(eventName: EventName, ...args: Parameters<EventTypes[EventName]>): this;
    once<EventName extends keyof EventTypes>(eventName: EventName, handler: EventTypes[EventName]): this;
}
