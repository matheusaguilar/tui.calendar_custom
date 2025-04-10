import type EventModel from "../model/eventModel";
import type EventUIModel from "../model/eventUIModel";
import type { CalendarDispatchers, CalendarSlice } from "../slices/calendar";
import type { DndDispatchers, DndSlice } from "../slices/dnd";
import type { GridSelectionDispatchers, GridSelectionSlice } from "../slices/gridSelection";
import type { WeekViewLayoutDispatchers, WeekViewLayoutSlice } from "../slices/layout";
import type { OptionsDispatchers, OptionsSlice } from "../slices/options";
import type { PopupDispatchers, PopupSlice } from "../slices/popup";
import type { TemplateDispatchers, TemplateSlice } from "../slices/template";
import type { ViewDispatchers, ViewSlice } from "../slices/view";
import type TZDate from "../time/date";
import type { EventState } from "./events";
import type { MonthOptions, WeekOptions } from "./options";
export declare type CalendarMonthOptions = Required<MonthOptions>;
export declare type CalendarWeekOptions = Required<WeekOptions>;
export declare type Rect = Pick<DOMRect, 'top' | 'left' | 'width' | 'height'>;
interface BasePopupParam {
    popupPosition?: PopupPosition;
    popupArrowPointPosition?: PopupArrowPointPosition;
    close?: () => void;
}
export declare type PopupParamMap = {
    seeMore: SeeMorePopupParam;
    form: EventFormPopupParam;
    detail: EventDetailPopupParam;
};
export interface SeeMorePopupParam extends BasePopupParam {
    date: TZDate;
    events: EventUIModel[];
}
export interface EventFormPopupParam extends BasePopupParam {
    isCreationPopup: boolean;
    event?: EventModel;
    title: string;
    location: string;
    start: TZDate;
    end: TZDate;
    isAllday: boolean;
    isPrivate: boolean;
    eventState?: EventState;
}
export interface EventDetailPopupParam extends BasePopupParam {
    event: EventModel;
    eventRect: Rect;
}
export declare type PopupPosition = {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
};
export declare type PopupArrowPointPosition = {
    top: number;
    left: number;
};
export declare type StateWithActions = Record<string, any>;
declare type PartialStateCreator<State extends StateWithActions, Key extends keyof State = keyof State> = (state: State) => Pick<State, Key> | State;
export declare type StateSelector<State extends StateWithActions, SelectedState> = (state: State) => SelectedState;
export declare type EqualityChecker<State> = (state: State, newState: State) => boolean;
export declare type StateListener<State> = (state: State, previousState: State) => void;
export declare type StateSliceListener<StateSlice> = (slice: StateSlice, previousSlice: StateSlice) => void;
export declare type SetState<State extends StateWithActions> = <Key extends keyof Omit<State, 'dispatch'>>(partialStateCreator: PartialStateCreator<Omit<State, 'dispatch'>, Key>) => void;
export declare type GetState<State extends StateWithActions> = () => State;
declare type Unsubscribe = () => void;
export interface Subscribe<State extends StateWithActions> {
    (listener: StateListener<State>): Unsubscribe;
    <StateSlice>(listener: StateSliceListener<StateSlice>, selector?: StateSelector<State, StateSlice>, equalityFn?: EqualityChecker<StateSlice>): Unsubscribe;
}
export interface InternalStoreAPI<State extends StateWithActions> {
    setState: SetState<State>;
    getState: GetState<State>;
    subscribe: Subscribe<State>;
    clearListeners: () => void;
}
export declare type StoreCreator<State extends StateWithActions> = (set: SetState<State>, get: GetState<State>, api: InternalStoreAPI<State>) => State;
export declare type CalendarState = OptionsSlice & TemplateSlice & PopupSlice & WeekViewLayoutSlice & CalendarSlice & ViewSlice & DndSlice & GridSelectionSlice;
export declare type Dispatchers = {
    options: OptionsDispatchers;
    popup: PopupDispatchers;
    weekViewLayout: WeekViewLayoutDispatchers;
    calendar: CalendarDispatchers;
    view: ViewDispatchers;
    dnd: DndDispatchers;
    gridSelection: GridSelectionDispatchers;
    template: TemplateDispatchers;
};
export declare type CalendarStore = CalendarState & {
    dispatch: Dispatchers;
};
export {};
