import type { InternalStoreAPI, StateWithActions, StoreCreator } from "../types/store";
export declare function createStore<State extends StateWithActions>(storeCreator: StoreCreator<State>): InternalStoreAPI<State>;
