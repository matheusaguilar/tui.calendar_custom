import type EventUIModel from "../../model/eventUIModel";
import type { EventDraggingArea, EventDraggingBehavior } from "../../types/drag";
export declare function useDraggingEvent(area: EventDraggingArea, behavior: EventDraggingBehavior): {
    isDraggingEnd: boolean;
    isDraggingCanceled: boolean;
    draggingEvent: EventUIModel | null;
    clearDraggingEvent: () => void;
};
