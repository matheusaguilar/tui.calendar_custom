import type EventModel from "../model/eventModel";
import EventUIModel from "../model/eventUIModel";
declare function compareNumbersASC(a: any, b: any): number;
declare function compareEventsASC(a: EventModel | EventUIModel, b: EventModel | EventUIModel): number;
export declare function bsearch(arr: any[], search: any, fn?: (item: any) => any, compareFn?: (item: any, searchArg: any) => number): number;
declare const _default: {
    bsearch: typeof bsearch;
    compare: {
        event: {
            asc: typeof compareEventsASC;
        };
        num: {
            asc: typeof compareNumbersASC;
        };
    };
};
export default _default;
export declare function first<T>(array: Array<T>): T;
export declare function last<T>(array: Array<T>): T;
export declare function findLastIndex<T>(array: T[], predicate: (value: T) => boolean): number;
export declare function fill<T>(length: number, value: T): T[];
