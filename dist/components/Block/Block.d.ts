/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { GutterSize } from '../FixedGrid/enums';
import { TextColor, TextSize } from '../Text/enums';
import './Block.css';
export { GutterSize, TextColor, TextSize };
export interface BlockProps extends NestableBaseComponentProps {
    /**
     * Gutter spacing to be added above this block.
     */
    topSpacing?: GutterSize;
    /**
     * Gutter spacing to be added below this block.
     */
    bottomSpacing?: GutterSize;
    /**
     * Padding to be added uniformly within this block.
     */
    padding?: GutterSize;
    /**
     * Padding to be added to the left and right. Will override a "padding" value.
     */
    horizontalPadding?: GutterSize;
    /**
     * Padding to be added to the top and bottom. Will override a "padding" value.
     */
    verticalPadding?: GutterSize;
    /**
     * Number of pixels to finely adjust the gutter spacing above this block. Positive pushes the
     * component down, negative pulls it up. Only use this to adjust for vertical rhythm in text.
     */
    push?: number;
    /**
     * Text alignment within this block.
     */
    textAlign?: 'left' | 'right' | 'center';
    /**
     * Text color within this block.
     */
    textColor?: TextColor;
    /**
     * Text size (`font-size` and `line-height`) within this block.
     */
    textSize?: TextSize;
    /**
     * Limits text content to a single line, hiding additional text with an ellipsis.
     */
    ellipsis?: boolean;
}
/**
 * A `Block` is a layout component to build consistent padding and vertical spacing between
 * components. It allows you to `push` a chunk of UI up or down by individual pixels to keep text in
 * the `4px` vertical rhythm. It's also the primary place you should set `textSize` in your UIs,
 * providing enumerated options for the supported `font-size`/`line-height` combinations.
 */
export default class Block extends React.Component<BlockProps, {}> {
    render(): JSX.Element;
    private getClasses();
    private getInnerClasses();
    private getStyle();
}
