import type { ComponentProps } from 'preact';
import type { ResizingGuideByColumn } from "../../components/timeGrid/resizingGuideByColumn";
import type EventUIModel from "../../model/eventUIModel";
export declare function useTimeGridEventResize({ gridPositionFinder, totalUIModels, columnIndex, timeGridData, }: ComponentProps<typeof ResizingGuideByColumn>): EventUIModel | null;
