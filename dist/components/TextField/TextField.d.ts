/// <reference types="react" />
import '../../yamui';
import { BaseTextFieldProps } from '../BaseTextField';
import { DebouncedOnChangeProps } from '../../util/DebouncedOnChange';
import '../BaseTextField/BaseTextField.css';
import './TextField.css';
export interface TextFieldProps extends BaseTextFieldProps, DebouncedOnChangeProps {
    /**
     * String for prefix.
     */
    prefix?: string;
    /**
     * String for suffix.
     */
    suffix?: string;
    /**
     * Whether or not the textfield is underlined.
     **/
    underlined?: boolean;
}
declare const _default: (props: TextFieldProps) => JSX.Element;
export default _default;
