/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IconSize, BaseIcon } from '../Icon';
import { MenuItemType } from './enums';
import './MenuButton.css';
export { MenuItemType } from './enums';
export interface MenuButtonItem {
    /**
     * Unique key for this item.
     */
    key: string;
    /**
     * Text to display in the menu item.
     */
    text: string;
    /**
     * Type of menu item:
     *  Normal: Regular item
     *  Header: Header item
     *  Divider: Line divider item
     */
    type?: MenuItemType;
    /**
     * If item is disabled
     */
    isDisabled?: boolean;
    /**
     * On click method for this item.
     */
    onClick?: (ev?: React.MouseEvent<HTMLElement>) => void;
    /**
     * Href for a link. This will turn the item into a hyperlink that looks like a regular item.
     */
    href?: string;
    /**
     * Whether the link should open in a new window. This will do nothing if href isn't passed.
     */
    newWindow?: boolean;
    /**
     * YamUI Icon to display in the item content. Default is no icon.
     */
    icon?: typeof BaseIcon;
}
export interface MenuButtonProps extends BaseComponentProps {
    /**
     * Aria label for the MenuButton.
     */
    ariaLabel: string;
    /**
     * Menu items to show in the menu.
     */
    menuItems: MenuButtonItem[];
    /**
     * YamUI Icon to display as the click target. Default is the 'More' icon.
     * @default MoreIcon
     */
    icon?: typeof BaseIcon;
    /**
     * Size of the icon
     * @default IconSize.LARGE
     */
    iconSize?: IconSize;
}
export default class MenuButton extends React.Component<MenuButtonProps, {}> {
    static defaultProps: Partial<MenuButtonProps>;
    render(): JSX.Element;
    private getButtonClassNames();
    private getIcon();
    private getMenuProps();
    private getMenuItemContent(props);
}
