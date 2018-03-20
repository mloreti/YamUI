import { NavigationMode, NavigationModeCallback } from './KeyboardNavigationEventListener';
export { NavigationMode, NavigationModeCallback };
export declare const getMode: () => NavigationMode;
export declare const subscribe: (callback: NavigationModeCallback) => void;
export declare const unsubscribe: (callback: NavigationModeCallback) => void;
