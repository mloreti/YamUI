/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps as LayoutListItemProps } from '../../util/BaseComponent/props';
import './LayoutList.css';
export { LayoutListItemProps };
/**
 * To be nested within a `LayoutList` component.
 */
export default class LayoutListItem extends React.Component<LayoutListItemProps, {}> {
    render(): JSX.Element;
}
