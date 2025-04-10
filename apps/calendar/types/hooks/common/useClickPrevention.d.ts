export declare function useClickPrevention({ onClick, onDblClick, delay, }: {
    onClick: (e: MouseEvent) => void;
    onDblClick: (e: MouseEvent) => void;
    delay?: number;
}): ((e: MouseEvent) => void)[];
