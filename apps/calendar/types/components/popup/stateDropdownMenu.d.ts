import { h } from 'preact';
import type { EventState } from "../../types/events";
interface Props {
    setOpened: (isOpened: boolean) => void;
    setEventState: (eventState: EventState) => void;
}
export declare function StateDropdownMenu({ setOpened, setEventState }: Props): h.JSX.Element;
export {};
