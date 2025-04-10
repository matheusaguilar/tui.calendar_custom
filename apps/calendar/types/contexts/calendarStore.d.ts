import type { Options } from "../types/options";
import type { CalendarStore, Dispatchers } from "../types/store";
export declare const initCalendarStore: (options?: Options) => import("../types/store").InternalStoreAPI<CalendarStore>;
declare const StoreProvider: ({ children, store, }: import("../types/components/common").PropsWithChildren<{
    store: import("@t/store").InternalStoreAPI<CalendarStore>;
}>) => import("preact").VNode<any>, useStore: <StateSlice>(selector: import("../types/store").StateSelector<CalendarStore, StateSlice>, equalityFn?: import("../types/store").EqualityChecker<StateSlice>) => StateSlice, useInternalStore: () => import("../types/store").InternalStoreAPI<CalendarStore>;
export { StoreProvider, useInternalStore, useStore };
export declare function useDispatch(): Dispatchers;
export declare function useDispatch<Group extends keyof Dispatchers>(group: Group): Dispatchers[Group];
