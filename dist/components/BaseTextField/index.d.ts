/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { ITextFieldProps as FabricTextFieldProps } from 'office-ui-fabric-react/lib/TextField';
export interface BaseTextFieldProps extends BaseComponentProps {
    /**
     * Current value of the textfield.
     */
    value?: string;
    /**
     * Placeholder text. Displayed until a value is entered.
     **/
    placeHolder?: string;
    /**
     * Error message string.
     */
    errorMessage?: string;
    /**
     * Disabled state of the textfield.
     */
    disabled?: boolean;
    /**
     * Label for the textfield.
     */
    label?: string;
    /**
     * The textfield input description
     */
    description?: string;
    /**
     * Use to indicate that a value must be provided to allow the containing form to be submitted.
     */
    required?: boolean;
    /**
     * Callback for the onChanged event.
     */
    onChange?: (newValue: any) => void;
    /**
     * Focus callback handler.
     */
    onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * Blur callback handler.
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * Mouse enter callback handler.
     */
    onMouseEnter?: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * Mouse leave callback handler.
     */
    onMouseLeave?: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
export declare function getBaseTextFieldProps<T extends BaseTextFieldProps>(props: T): FabricTextFieldProps;
