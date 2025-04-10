import { h } from 'preact';
import type { EventBus } from "./utils/eventBus";
import type { PropsWithChildren } from "./types/components/common";
import type { ExternalEventTypes } from "./types/eventBus";
import type { CalendarStore, InternalStoreAPI } from "./types/store";
import type { ThemeStore } from "./types/theme";
interface Props {
    theme: InternalStoreAPI<ThemeStore>;
    store: InternalStoreAPI<CalendarStore>;
    eventBus: EventBus<ExternalEventTypes>;
}
export declare function CalendarContainer({ theme, store, eventBus, children }: PropsWithChildren<Props>): h.JSX.Element;
export {};
