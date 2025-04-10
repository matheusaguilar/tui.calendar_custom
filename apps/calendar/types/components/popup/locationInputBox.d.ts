import { h } from 'preact';
import type { FormStateDispatcher } from "../../hooks/popup/useFormState";
interface Props {
    location?: string;
    formStateDispatch: FormStateDispatcher;
}
export declare function LocationInputBox({ location, formStateDispatch }: Props): h.JSX.Element;
export {};
