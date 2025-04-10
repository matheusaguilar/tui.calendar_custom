import type { ComponentProps } from 'preact';
import { h } from 'preact';
import type { DayGridMonth } from "./dayGridMonth";
import type { getRenderedEventUIModels } from "../../helpers/grid";
import type { GridPositionFinder } from "../../types/grid";
declare type Props = Pick<ComponentProps<typeof DayGridMonth>, 'dateMatrix' | 'cellWidthMap'> & {
    gridPositionFinder: GridPositionFinder;
    renderedUIModels: ReturnType<typeof getRenderedEventUIModels>[];
    rowIndex: number;
};
export declare function ResizingGuideByRow({ dateMatrix, cellWidthMap, gridPositionFinder, renderedUIModels, rowIndex, }: Props): h.JSX.Element | null;
export {};
