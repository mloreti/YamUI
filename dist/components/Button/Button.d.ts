/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { Button as FabricButton } from 'office-ui-fabric-react/lib/components/Button/Button';
import { BaseButton } from 'office-ui-fabric-react/lib/components/Button/BaseButton';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { ButtonColor, ButtonStatus, ButtonIconPosition, ButtonSize, ButtonType } from './enums';
import BaseIcon from '../Icon/BaseIcon';
import './Button.css';
export { ButtonColor, ButtonStatus, ButtonIconPosition, ButtonSize, ButtonType };
export declare type FabricButtonType = HTMLAnchorElement | HTMLDivElement | HTMLButtonElement | BaseButton | FabricButton;
export interface BaseButtonProps extends BaseComponentProps {
    /**
     * Visible button text.
     */
    text: string;
    /**
     * Additional label that must be provided if the button text is not descriptive enough.
     */
    ariaLabel?: string;
    /**
     * Stretch the button to fill the available horizontal space.
     */
    fullWidth?: boolean;
    /**
     * Color describing the button's intent.
     * @default ButtonColor.SECONDARY
     */
    color?: ButtonColor;
    /**
     * Optional icon.
     */
    icon?: typeof BaseIcon;
    /**
     * Icon position.
     * @default ButtonIconPosition.LEFT
     */
    iconPosition?: ButtonIconPosition;
    /**
     * Button size.
     * @default ButtonSize.REGULAR
     */
    size?: ButtonSize;
    /**
     * Button type.
     * @default ButtonType.BUTTON
     */
    type?: ButtonType;
    /**
     * Click callback handler.
     */
    onClick?: React.MouseEventHandler<FabricButtonType>;
    /**
     * Focus callback handler.
     */
    onFocus?: React.FocusEventHandler<FabricButtonType>;
    /**
     * Blur callback handler.
     */
    onBlur?: React.FocusEventHandler<FabricButtonType>;
    /**
     * Mouse enter callback handler.
     */
    onMouseEnter?: React.MouseEventHandler<FabricButtonType>;
    /**
     * Mouse leave callback handler.
     */
    onMouseLeave?: React.MouseEventHandler<FabricButtonType>;
}
export interface RegularButtonProps extends BaseButtonProps {
    /**
     * Buttons cannot have a link.
     */
    href?: void;
    /**
     * Status of this button.
     * @default ButtonStatus.ENABLED
     */
    status?: ButtonStatus;
    /**
     * Screenreader text for loading state.
     */
    loadingText?: string;
}
export interface LoadingButtonProps extends RegularButtonProps {
    status: ButtonStatus.LOADING;
    loadingText: string;
}
export interface LinkButtonProps extends BaseButtonProps {
    /**
     * URL or a URL fragment that the link points to. If provided, the component will be rendered as a
     * link styled as a button.
     */
    href: string;
    /**
     * Links cannot be disabled nor loading.
     */
    status?: void;
    /**
    * Links cannot have a type.
    */
    type?: undefined;
}
export declare type ButtonProps = RegularButtonProps | LoadingButtonProps | LinkButtonProps;
/**
 * A `Button` allows a user to take an action.
 */
export default class Button extends React.Component<ButtonProps, {}> {
    static propTypes: {
        href(props: LinkButtonProps, propName: string, componentName: string): Error | undefined;
    };
    static defaultProps: {
        color: ButtonColor;
        iconPosition: ButtonIconPosition;
        size: ButtonSize;
        status: ButtonStatus;
        type: ButtonType;
    };
    render(): JSX.Element;
    private getContents();
    private getSpinner();
    private getClasses();
    private isLoading();
}
