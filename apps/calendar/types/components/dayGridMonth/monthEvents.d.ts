import type EventUIModel from "../../model/eventUIModel";
interface Props {
    name: string;
    contentAreaHeight: number;
    eventHeight?: number;
    events: EventUIModel[];
    className: string;
}
export declare const MonthEvents: import("preact").FunctionComponent<Props>;
export {};
