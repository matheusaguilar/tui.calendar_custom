import { h } from 'preact';
import { CellBarType } from "../../constants/grid";
interface Props {
    type?: CellBarType;
    number: number;
    onClickButton: () => void;
    className: string;
}
export declare function MoreEventsButton({ type, number, onClickButton, className }: Props): h.JSX.Element;
export {};
