// /*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
// import * as React from 'react';
// import { Button as RNButton } from 'react-native';

// import Block from '../Block/Block';

// export enum ButtonColor {
//   /**
//    * Primary blue. Only one primary action should be offered at one time.
//    */
//   PRIMARY = '#386cbb',
//   /**
//    * Most buttons should be secondary if multiple actions are offered.
//    */
//   SECONDARY = '#fff',
// }

// export enum ButtonStatus {
//   ENABLED = 'enabled',
//   DISABLED = 'disabled',
//   LOADING = 'loading',
// }

// export enum ButtonIconPosition {
//   LEFT = 'left',
//   RIGHT = 'right',
// }

// export enum ButtonSize {
//   REGULAR = 'regular',
//   SMALL = 'small',
// }

// export enum ButtonType {
//   BUTTON = 'button',
//   SUBMIT = 'submit',
//   RESET = 'reset',
// }


// export interface BaseButtonProps {
//    /**
//    * Visible button text.
//    */
//   text: string;

//   /**
//    * Stretch the button to fill the available horizontal space.
//    */
//   fullWidth?: boolean;

//   /**
//    * Color describing the button's intent.
//    * @default ButtonColor.SECONDARY
//    */
//   color?: string;

//   /**
//    * Button size.
//    * @default ButtonSize.REGULAR
//    */
//   size?: ButtonSize;
// }

// export interface RegularButtonProps extends BaseButtonProps {
//   /**
//    * Buttons cannot have a link.
//    */
//   href?: void;

//   /**
//    * Status of this button.
//    * @default ButtonStatus.ENABLED
//    */
//   status?: ButtonStatus;

//   /**
//    * Screenreader text for loading state.
//    */
//   loadingText?: string;
// }

// export interface LoadingButtonProps extends RegularButtonProps {
//   status: ButtonStatus.LOADING;
//   loadingText: string;
// }

// export interface LinkButtonProps extends BaseButtonProps {
//   /**
//    * URL or a URL fragment that the link points to. If provided, the component will be rendered as a
//    * link styled as a button.
//    */
//   href: string;

//   /**
//    * Links cannot be disabled nor loading.
//    */
//   status?: void;

//   /**
//    * Links cannot have a type.
//    */
//   type?: undefined;
// }

// export type ButtonProps = RegularButtonProps | LoadingButtonProps | LinkButtonProps;

// /**
//  * A `Button` allows a user to take an action.
//  */
// export default class Button extends React.Component<ButtonProps> {
//   public static propTypes = {};

//   public static defaultProps = {
//     color: ButtonColor.SECONDARY,
//     iconPosition: ButtonIconPosition.LEFT,
//     size: ButtonSize.REGULAR,
//     status: ButtonStatus.ENABLED,
//     type: ButtonType.BUTTON,
//   };

//   public render() {
//     const { ariaLabel, type, onClick, onFocus, onBlur, onMouseEnter, onMouseLeave } = this.props;

//     const href = (this.props as LinkButtonProps).href;
//     const status = (this.props as RegularButtonProps).status;
//     const isDisabled = status === ButtonStatus.DISABLED || status === ButtonStatus.LOADING;

//     return (
//       <RNButton>
//         {this.getContents()}
//         {this.isLoading() && this.getSpinner()}
//       </RNButton>
//     );
//   }

//   private getContents() {
//     const { icon: Icon, iconPosition, size, text } = this.props;

//     const textSize = size === ButtonSize.SMALL ? TextSize.SMALL : TextSize.MEDIUM_SUB;

//     const buttonIcon = Icon && (
//       <span className={`y-button--icon-wrapper-${iconPosition}`}>
//         <Icon />
//       </span>
//     );
//     const className = this.isLoading() ? 'y-button--content__hidden' : '';
//     return (
//       <Block textSize={textSize} className={className}>
//         {iconPosition === 'left' && buttonIcon}
//         {text}
//         {iconPosition === 'right' && buttonIcon}
//       </Block>
//     );
//   }
//   private getSpinner() {
//     const { color, size } = this.props;
//     const loadingText = (this.props as LoadingButtonProps).loadingText;
//     const spinnerColor = color === ButtonColor.PRIMARY ? SpinnerColor.DARK : SpinnerColor.LIGHT;
//     const spinnerSize = size === ButtonSize.SMALL ? SpinnerSize.XSMALL : SpinnerSize.SMALL;
//     return (
//       <span className="y-button--spinner">
//         <Spinner color={spinnerColor} size={spinnerSize} text={loadingText} hideText={true} />
//       </span>
//     );
//   }
//   private getClasses() {
//     const { className, color, status, size, fullWidth } = this.props;
//     const classes: string[] = ['y-button', `y-button__color-${color}`, `y-button__size-${size}`];
//     if (status !== ButtonStatus.ENABLED) {
//       classes.push(`y-button__state-${status}`);
//     }
//     if (fullWidth) {
//       classes.push('y-button__fullWidth');
//     }
//     if (className) {
//       classes.push(className);
//     }
//     return classes.join(' ');
//   }
//   private isLoading() {
//     return this.props.status === ButtonStatus.LOADING;
//   }
// }
