import type { EventBus } from "../utils/eventBus";
import type { ExternalEventTypes, InternalEventTypes } from "../types/eventBus";
export declare const EventBusProvider: import("preact").Provider<EventBus<ExternalEventTypes & InternalEventTypes> | null>;
export declare const useEventBus: () => EventBus<ExternalEventTypes & InternalEventTypes>;
