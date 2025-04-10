import type { RefCallback } from 'preact';
export declare function useDOMNode<Node extends HTMLElement>(): [Node | null, RefCallback<Node>];
