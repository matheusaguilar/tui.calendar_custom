import type { CalendarState } from "../../types/store";
declare type Slice<S> = S extends (state: CalendarState) => infer T ? T : never;
export declare function useTransientUpdate<Selector extends (state: CalendarState) => any, Subscriber extends (slice: Slice<Selector>) => void>(selector: Selector, subscriber: Subscriber): void;
export {};
