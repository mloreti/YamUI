/// <reference types="react" />
import '../../yamui';
import { BaseTextFieldProps } from '../BaseTextField';
import { DebouncedOnChangeProps } from '../../util/DebouncedOnChange';
import '../BaseTextField/BaseTextField.css';
import './TextArea.css';
export interface TextAreaProps extends BaseTextFieldProps, DebouncedOnChangeProps {
    /**
     * Height of the field, in number of rows.
     **/
    rows?: number;
    /**
     * Whether or not to auto adjust textField height.
     **/
    autoAdjustHeight?: boolean;
}
declare const _default: (props: TextAreaProps) => JSX.Element;
export default _default;
