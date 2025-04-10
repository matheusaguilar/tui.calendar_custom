import { h } from 'preact';
interface Props {
    type: 'moreEvents' | 'form';
    close?: () => void;
}
export declare function ClosePopupButton({ type, close }: Props): h.JSX.Element;
export {};
