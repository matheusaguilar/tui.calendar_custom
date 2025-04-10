import { h } from 'preact';
import type { PropsWithChildren } from "../types/components/common";
interface FloatingLayers {
    container: HTMLDivElement | null;
    seeMorePopupSlot: HTMLDivElement | null;
    formPopupSlot: HTMLDivElement | null;
    detailPopupSlot: HTMLDivElement | null;
}
declare type FloatingLayerType = keyof FloatingLayers;
export declare function FloatingLayerProvider({ children }: PropsWithChildren): h.JSX.Element;
export declare const useFloatingLayer: (floatingLayerType: FloatingLayerType) => HTMLDivElement | null;
export {};
