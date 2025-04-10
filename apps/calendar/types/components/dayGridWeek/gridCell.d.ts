import { h } from 'preact';
declare type Props = {
    isLastCell: boolean;
    width: string;
    left: string;
} & ExceedCountProps & CollapseButtonProps;
interface ExceedCountProps {
    index: number;
    exceedCount: number;
    isClicked: boolean;
    onClickExceedCount: (exceedCount: number) => void;
}
interface CollapseButtonProps {
    isClicked: boolean;
    isClickedIndex: boolean;
    onClickCollapseButton: () => void;
}
export declare function GridCell({ width, left, index, exceedCount, isClicked, onClickExceedCount, isClickedIndex, onClickCollapseButton, isLastCell, }: Props): h.JSX.Element;
export {};
