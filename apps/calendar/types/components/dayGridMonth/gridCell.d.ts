import { h } from 'preact';
import type EventUIModel from "../../model/eventUIModel";
import type TZDate from "../../time/date";
import type { StyleProp } from "../../types/components/common";
interface Props {
    date: TZDate;
    style?: StyleProp;
    parentContainer?: HTMLDivElement | null;
    events?: EventUIModel[];
    contentAreaHeight: number;
}
export declare function GridCell({ date, events, style, parentContainer, contentAreaHeight }: Props): h.JSX.Element;
export {};
