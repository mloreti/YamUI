/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { NavigationMode, NavigationModeCallback } from '../../util/accessibility/keyboardNavigation';
export { NavigationMode, NavigationModeCallback };
export interface KeyboardNavigationObserverProps extends BaseComponentProps {
    /**
     * A callback which will be triggered when the user begins navigating via keyboard.
     */
    onEnterKeyboardMode?: () => void;
    /**
     * A callback which will be triggered when the user begins navigating via mouse.
     */
    onEnterMouseMode?: () => void;
    /**
     * Render prop to return child content when user is navigating via keyboard.
     */
    renderInKeyboardMode?: () => React.ReactElement<any>;
    /**
     * Render prop to return child content when user is navigating via mouse.
     */
    renderInMouseMode?: () => React.ReactElement<any>;
}
export interface KeyboardNavigationObserverState {
    mode: NavigationMode;
}
/**
 * KeyboardNavigationObserver allows for conditional child rendering and callbacks depending on whether the user
 * is currently navigating via mouse or keyboard. This is useful for features like infinite scroll, where
 * new pages should be loaded by button-click instead of scroll-based auto-loaded, ensuring keyboard navigation
 * users are able to navigate past the end of the content section and into footer or sidebar sections.
 */
export default class KeyboardNavigationObserver extends React.Component<KeyboardNavigationObserverProps, KeyboardNavigationObserverState> {
    constructor(props: KeyboardNavigationObserverProps);
    render(): React.ReactElement<any> | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onModeChange;
}
