import { h } from 'preact';
import type { CalendarInfo } from "../../types/options";
interface Props {
    open?: boolean;
    calendars: CalendarInfo[];
    setOpened: (isOpened: boolean) => void;
    onChangeIndex: (index: number) => void;
}
export declare function CalendarDropdownMenu({ calendars, setOpened, onChangeIndex }: Props): h.JSX.Element;
export {};
