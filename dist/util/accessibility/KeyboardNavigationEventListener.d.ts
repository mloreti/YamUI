export declare type NavigationMode = 'mouse' | 'keyboard';
export declare type NavigationModeCallback = (mode: NavigationMode) => void;
/**
 * A class which listens to page-level mouse/keyboard events and manages callback subscriptions.
 * This should be exposed as a singleton via './keyboardNavigation.ts', do not import this class directly.
 */
export default class KeyboardNavigationEventListener {
    element: HTMLElement;
    private eventGroup;
    private mode;
    constructor(element: HTMLElement);
    getMode(): NavigationMode;
    destroy(): void;
    subscribe(callback: NavigationModeCallback): void;
    unsubscribe(callback: NavigationModeCallback): void;
    private onMouseDown;
    private onKeyDown;
}
