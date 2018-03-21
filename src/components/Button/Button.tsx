/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { Button as FabricButton } from 'office-ui-fabric-react/lib/components/Button/Button';
import { BaseButton } from 'office-ui-fabric-react/lib/components/Button/BaseButton';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import Block, { TextSize } from '../Block';
import Spinner, { SpinnerColor, SpinnerSize } from '../Spinner';
import { ButtonColor, ButtonStatus, ButtonIconPosition, ButtonSize, ButtonType } from './enums';
import BaseIcon from '../Icon/BaseIcon';
import './Button.css';

export { ButtonColor, ButtonStatus, ButtonIconPosition, ButtonSize, ButtonType };

const hrefBlacklist = ['', '#', 'javascript://'];
export type FabricButtonType = HTMLAnchorElement | HTMLDivElement | HTMLButtonElement | BaseButton | FabricButton;
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

export type ButtonProps = RegularButtonProps | LoadingButtonProps | LinkButtonProps;

/**
 * A `Button` allows a user to take an action.
 */
export default class Button extends React.Component<ButtonProps> {
  public static propTypes = {
    // TypeScript does not support negated types, so we need to do a runtime validation instead.
    href(props: LinkButtonProps, propName: string, componentName: string) {
      const href = props.href;
      if (typeof href !== 'string') {
        return;
      }
      if (hrefBlacklist.indexOf(href) > -1) {
        return new Error(
          `Invalid prop ${propName} supplied to ${componentName}: "${href}".
          Please use a Button for actions, NavigationLink (or Button with href) for navigation.`,
        );
      }
    },
  };

  public static defaultProps = {
    color: ButtonColor.SECONDARY,
    iconPosition: ButtonIconPosition.LEFT,
    size: ButtonSize.REGULAR,
    status: ButtonStatus.ENABLED,
    type: ButtonType.BUTTON,
  };

  public render() {
    const { ariaLabel, type, onClick, onFocus, onBlur, onMouseEnter, onMouseLeave } = this.props;

    const href = (this.props as LinkButtonProps).href;
    const status = (this.props as RegularButtonProps).status;
    const isDisabled = status === ButtonStatus.DISABLED || status === ButtonStatus.LOADING;

    return (
      <BaseButton
        ariaLabel={ariaLabel}
        className={this.getClasses()}
        disabled={isDisabled}
        href={href}
        type={href ? '' : type}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {this.getContents()}
        {this.isLoading() && this.getSpinner()}
      </BaseButton>
    );
  }

  private getContents() {
    const { icon: Icon, iconPosition, size, text } = this.props;

    const textSize = size === ButtonSize.SMALL ? TextSize.SMALL : TextSize.MEDIUM_SUB;

    const buttonIcon = Icon && (
      <span className={`y-button--icon-wrapper-${iconPosition}`}>
        <Icon />
      </span>
    );

    const className = this.isLoading() ? 'y-button--content__hidden' : '';

    return (
      <Block textSize={textSize} className={className}>
        {iconPosition === 'left' && buttonIcon}
        {text}
        {iconPosition === 'right' && buttonIcon}
      </Block>
    );
  }

  private getSpinner() {
    const { color, size } = this.props;

    const loadingText = (this.props as LoadingButtonProps).loadingText;

    const spinnerColor = color === ButtonColor.PRIMARY ? SpinnerColor.DARK : SpinnerColor.LIGHT;
    const spinnerSize = size === ButtonSize.SMALL ? SpinnerSize.XSMALL : SpinnerSize.SMALL;

    return (
      <span className="y-button--spinner">
        <Spinner color={spinnerColor} size={spinnerSize} text={loadingText} hideText={true} isCentered={true} />
      </span>
    );
  }

  private getClasses() {
    const { className, color, status, size, fullWidth } = this.props;

    const classes: string[] = ['y-button', `y-button__color-${color}`, `y-button__size-${size}`];
    if (status !== ButtonStatus.ENABLED) {
      classes.push(`y-button__state-${status}`);
    }
    if (fullWidth) {
      classes.push('y-button__fullWidth');
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }

  private isLoading() {
    return this.props.status === ButtonStatus.LOADING;
  }
}
