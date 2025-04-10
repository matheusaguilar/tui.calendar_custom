import { h } from 'preact';
import { CellBarType } from "../../constants/grid";
import type TZDate from "../../time/date";
interface Props {
    type?: CellBarType;
    exceedCount?: number;
    date: TZDate;
    onClickExceedCount: () => void;
}
export declare function CellHeader({ type, exceedCount, date, onClickExceedCount, }: Props): h.JSX.Element | null;
export {};
