import type EventModel from "../model/eventModel";
declare type CollisionParam = {
    start: number;
    end: number;
    targetStart: number;
    targetEnd: number;
    goingDuration: number;
    comingDuration: number;
    targetGoingDuration: number;
    targetComingDuration: number;
    usingTravelTime: boolean;
};
export declare function collidesWith({ start, end, targetStart, targetEnd, goingDuration, comingDuration, targetGoingDuration, targetComingDuration, usingTravelTime, }: CollisionParam): boolean;
export declare function isSameEvent(event: EventModel, eventId: string, calendarId: string): boolean;
export declare function isVisibleEvent(event: EventModel): boolean;
export {};
