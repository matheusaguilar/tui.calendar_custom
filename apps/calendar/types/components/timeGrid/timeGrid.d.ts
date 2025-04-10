import { h } from 'preact';
import type EventUIModel from "../../model/eventUIModel";
import type { TimeGridData } from "../../types/grid";
interface Props {
    events: EventUIModel[];
    timeGridData: TimeGridData;
}
export declare function TimeGrid({ timeGridData, events }: Props): h.JSX.Element;
export {};
