import { h } from 'preact';
import type { FormStateDispatcher } from "../../hooks/popup/useFormState";
interface Props {
    title?: string;
    isPrivate?: boolean;
    formStateDispatch: FormStateDispatcher;
}
export declare function TitleInputBox({ title, isPrivate, formStateDispatch }: Props): h.JSX.Element;
export {};
