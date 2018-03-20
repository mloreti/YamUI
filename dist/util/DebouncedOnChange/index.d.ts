/// <reference types="react" />
import * as React from 'react';
export interface DebouncedOnChangeProps {
    /**
     * Callback for the onChange event.
     */
    onChange?: (newValue: any) => void;
    /**
     * Debounced callback for the onChange event.
     */
    debouncedOnChange?: (newValue: any) => void;
    /**
     * Component will trigger `onChange` after users stop typing for `debouncedOnChangeTime`
     * milliseconds.
     */
    debouncedOnChangeTime?: number;
}
export interface DebouncedOnChangePrivateProps {
    /**
     * Used to pass both onChange and debouncedOnChange to the contained component.
     */
    unifiedOnChange?: (newValue: any) => void;
}
export interface NestedComponentProps {
    component: React.ComponentClass<DebouncedOnChangePrivateProps> | React.StatelessComponent<DebouncedOnChangePrivateProps>;
}
export default class DebouncedOnChangeComponent extends React.Component<DebouncedOnChangeProps & NestedComponentProps> {
    private async;
    private debouncedOnChange;
    static defaultProps: {
        debouncedOnChangeTime: number;
    };
    constructor(props: DebouncedOnChangeProps);
    handleChange(newValue: string): void;
    render(): JSX.Element;
    componentWillUnmount(): void;
}
