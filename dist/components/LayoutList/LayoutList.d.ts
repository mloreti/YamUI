/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { GutterSize } from '../FixedGrid';
import './LayoutList.css';
export { GutterSize };
export interface HorizontalListProps extends NestableBaseComponentProps {
    direction: 'horizontal';
    /**
     * Amount of spacing between list items. Defaults to 4px.
     * @default GutterSize.XSMALL
     */
    gutterSize?: GutterSize;
    /**
     * Align the horizontal list items to the left or right of the list's container.
     * @default 'left'
     */
    align?: 'left' | 'right';
}
export interface VerticalListProps extends NestableBaseComponentProps {
    direction: 'vertical';
    /**
     * Amount of spacing between list items. Defaults to none.
     * @default GutterSize.NONE;
     */
    gutterSize?: GutterSize;
}
export declare type LayoutListProps = HorizontalListProps | VerticalListProps;
/**
 * A `LayoutList` displays a list of items either horizontally or vertical. Horizontal list items
 * are evenly spaced with a fixed margin of 4px, and can be aligned to the right or left. Vertical
 * list items do not have any margin.
 */
export default class LayoutList extends React.Component<LayoutListProps, {}> {
    render(): JSX.Element;
    private getClasses();
}
