import type { CalendarStore, PopupParamMap, SetState } from "../types/store";
export declare enum PopupType {
    SeeMore = "seeMore",
    Form = "form",
    Detail = "detail"
}
export declare type PopupSlice = {
    popup: {
        [PopupType.SeeMore]: PopupParamMap[PopupType.SeeMore] | null;
        [PopupType.Form]: PopupParamMap[PopupType.Form] | null;
        [PopupType.Detail]: PopupParamMap[PopupType.Detail] | null;
    };
};
export declare type PopupDispatchers = {
    showSeeMorePopup: (param: PopupParamMap[PopupType.SeeMore]) => void;
    showFormPopup: (param: PopupParamMap[PopupType.Form]) => void;
    showDetailPopup: (param: PopupParamMap[PopupType.Detail], isOpenedInSeeMorePopup: boolean) => void;
    hideSeeMorePopup: () => void;
    hideFormPopup: () => void;
    hideDetailPopup: () => void;
    hideAllPopup: () => void;
};
export declare function createPopupSlice(): PopupSlice;
export declare function createPopupDispatchers(set: SetState<CalendarStore>): PopupDispatchers;
