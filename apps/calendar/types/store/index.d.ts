import type { PropsWithChildren } from "../types/components/common";
import type { EqualityChecker, InternalStoreAPI, StateSelector, StateWithActions } from "../types/store";
export declare function createStoreContext<State extends StateWithActions>(): {
    StoreProvider: ({ children, store, }: PropsWithChildren<{
        store: InternalStoreAPI<State>;
    }>) => import("preact").VNode<any>;
    useStore: <StateSlice>(selector: StateSelector<State, StateSlice>, equalityFn?: EqualityChecker<StateSlice>) => StateSlice;
    useInternalStore: () => InternalStoreAPI<State>;
};
