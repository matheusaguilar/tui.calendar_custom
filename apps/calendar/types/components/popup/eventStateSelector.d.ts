import { h } from 'preact';
import type { FormStateDispatcher } from "../../hooks/popup/useFormState";
import type { EventState } from "../../types/events";
interface Props {
    eventState?: EventState;
    formStateDispatch: FormStateDispatcher;
}
export declare function EventStateSelector({ eventState, formStateDispatch }: Props): h.JSX.Element;
export {};
