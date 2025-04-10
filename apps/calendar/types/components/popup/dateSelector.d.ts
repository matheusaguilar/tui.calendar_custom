import type { DateRangePicker } from 'tui-date-picker';
import type { FormStateDispatcher } from "../../hooks/popup/useFormState";
import TZDate from "../../time/date";
interface Props {
    start: TZDate;
    end: TZDate;
    isAllday?: boolean;
    formStateDispatch: FormStateDispatcher;
}
export declare const DateSelector: import("preact").FunctionalComponent<Omit<Props, "ref"> & {
    ref?: import("preact").Ref<DateRangePicker> | undefined;
}>;
export {};
