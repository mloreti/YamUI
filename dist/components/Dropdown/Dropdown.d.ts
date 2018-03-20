/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { BaseIcon } from '../Icon';
import './Dropdown.css';
export declare type DropdownOptionKey = string | number;
export { DropdownMenuItemType };
export interface DropdownOption {
    /**
     * Unique identifier for the given option.
     */
    key: DropdownOptionKey;
    /**
     * The visible option text.
     */
    text: string;
    /**
     * An optional YamUI Icon to be rendered on the left.
     */
    icon?: typeof BaseIcon;
    /**
     * Optional bold text to be displayed before the main text.
     */
    label?: string;
    /**
     * Type of menu item. Specify this for headers or dividers, leave blank for standard options.
     */
    itemType?: DropdownMenuItemType;
}
export interface DropdownProps extends BaseComponentProps {
    /**
     * Items to be presented to the user.
    **/
    options: DropdownOption[];
    /**
     * Label text that will be rendered above the dropdown.
    **/
    label?: string;
    /**
     * Input placeholder text. Displayed until option is selected.
    **/
    placeHolder?: string;
    /**
     * Initially selected option.
    **/
    selectedKey?: DropdownOptionKey;
    /**
     * Function to call when user changes the selected item.
    **/
    onChanged?: (key: DropdownOptionKey) => void;
}
/**
 * A `Dropdown` is a list in which the selected item is always visible, and the others are visible
 * on demand by clicking a button.
 */
export default class Dropdown extends React.Component<DropdownProps, {}> {
    render(): JSX.Element;
    private getChevronIcon();
    private getOptionText(label, text);
    private getOptionContent(item);
    private getPlaceholder();
    private getOption(item?);
    private getSelectedOption(item?);
    private getFabricOptions();
    private handleChanged(option);
}
