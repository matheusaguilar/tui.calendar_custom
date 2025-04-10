import type { GridSelectionType } from "../slices/gridSelection";
import type { DraggingTypes, EventDraggingArea } from "../types/drag";
export declare const DRAGGING_TYPE_CONSTANTS: {
    [K in Extract<DraggingTypes, 'panelResizer'>]: DraggingTypes;
};
export declare const DRAGGING_TYPE_CREATORS: {
    resizeEvent: (area: EventDraggingArea, id: string) => `event/dayGrid/resize/${string}` | `event/timeGrid/resize/${string}`;
    moveEvent: (area: EventDraggingArea, id: string) => `event/dayGrid/move/${string}` | `event/timeGrid/move/${string}`;
    gridSelection: (type: GridSelectionType) => "gridSelection/timeGrid" | "gridSelection/dayGridMonth" | "gridSelection/dayGridWeek";
};
