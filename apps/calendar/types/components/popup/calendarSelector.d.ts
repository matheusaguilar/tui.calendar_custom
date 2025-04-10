import { h } from 'preact';
import type { FormStateDispatcher } from "../../hooks/popup/useFormState";
import type { CalendarInfo } from "../../types/options";
interface Props {
    calendars: CalendarInfo[];
    selectedCalendarId?: string;
    formStateDispatch: FormStateDispatcher;
}
export declare function CalendarSelector({ calendars, selectedCalendarId, formStateDispatch }: Props): h.JSX.Element;
export {};
