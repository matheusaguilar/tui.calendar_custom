import type { GridSelectionType } from "../slices/gridSelection";
export declare type EventDraggingArea = 'dayGrid' | 'timeGrid';
export declare type EventDraggingBehavior = 'move' | 'resize';
export declare type EventDragging<EventId extends string = any> = `event/${EventDraggingArea}/${EventDraggingBehavior}/${EventId}`;
export declare type GridSelectionDragging = `gridSelection/${GridSelectionType}`;
export declare type DraggingTypes<EventId extends string = any> = GridSelectionDragging | EventDragging<EventId> | 'panelResizer';
