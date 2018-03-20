/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IconSize } from './enums';
import './Icon.css';
export { IconSize };
export interface IconProps extends BaseComponentProps {
    /**
     * Sets icon style to `display: block`. This is helpful if the inline icon's `line-height` is
     * taller than the current line's `line-height`, and is creating extra vertical space.
     */
    block?: boolean;
    /**
     * Manual color override (by default the icon inherits its parent's color). Can be any valid CSS
     * color.
     */
    color?: string;
    /**
     * Icon size, which also accounts for `font-size` and `line-height`. If not set, size will
     * match the nearest <Block> or <Text> parent with textSize specified.
     */
    size?: IconSize;
}
export interface IconStyles {
    height?: string;
    width?: string;
    color?: string;
}
/**
 * An `Icon` renders an SVG icon.
 */
export default class BaseIcon extends React.Component<IconProps, {}> {
    protected getClassName(): string;
    protected getStyle(): IconStyles;
}
