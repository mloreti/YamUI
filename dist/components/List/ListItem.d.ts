/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps as ListItemProps } from '../../util/BaseComponent/props';
export { ListItemProps };
/**
 * To be nested under a `List` component.
 */
export default class ListItem extends React.Component<ListItemProps, {}> {
    render(): JSX.Element;
}
