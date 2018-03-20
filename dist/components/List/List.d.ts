/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { TextSize } from '../Block';
import './List.css';
export { TextSize };
export interface ListProps extends NestableBaseComponentProps {
    /**
     * Whether this is an ordered or unordered list.
     */
    type: 'ordered' | 'unordered';
    /**
     * Determines font-size and line-height as usual, but also handles padding between list items
     * and margin below the list. If not provided, the List and ListItems will be auto-sized to the
     * closest parent Block with textSize.
     */
    textSize?: TextSize;
}
/**
 * A typographical list, rendering either a `<ul>` or `<ol>` element.
 */
export default class List extends React.Component<ListProps, {}> {
    render(): JSX.Element;
}
