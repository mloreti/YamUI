/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps as BoxProps } from '../../util/BaseComponent/props';
import './Box.css';
export { BoxProps };
/**
 * A Box is simply a div with a border and fixed padding. It also has `display: relative` so you can
 * absolutely-position elements like a close button. Boxes will primarily be used for card views.
 */
export default class Box extends React.Component<BoxProps, {}> {
    render(): JSX.Element;
}
