import type { ComponentChildren, h } from 'preact';
export declare type PropsWithChildren<Props = {}> = Props & {
    children?: ComponentChildren;
};
export declare type StyleProp = h.JSX.CSSProperties;
export declare type FormEvent = h.JSX.TargetedEvent<HTMLFormElement, Event>;
export declare type CalendarViewType = 'week' | 'month';
