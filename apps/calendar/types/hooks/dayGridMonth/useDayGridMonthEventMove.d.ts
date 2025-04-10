import type { ComponentProps } from 'preact';
import type { MovingEventShadow } from "../../components/dayGridMonth/movingEventShadow";
export declare function useDayGridMonthEventMove({ dateMatrix, rowInfo, gridPositionFinder, rowIndex, }: ComponentProps<typeof MovingEventShadow>): import("../../model/eventUIModel").default | null;
