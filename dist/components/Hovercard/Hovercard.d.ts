/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { DirectionalHint } from '../Callout';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './Hovercard.css';
export declare enum TriggerType {
    CLICK = "click",
    HOVER = "hover",
}
export interface HovercardProps extends NestableBaseComponentProps {
    /**
     * The content to populate the Hovercard's popup area.
     */
    content: React.ReactNode;
    /**
     * Direction to place the Hovercard in relationship to its visible trigger content. Note that this
     * is a hint, and the popup position will adjust to available screen real estate.
     * @default DirectionalHint.bottomCenter
     */
    directionalHint?: DirectionalHint;
    /**
     * Whether to display the Hovercard's arrow/beak.
     * @default true
     */
    isBeakVisible?: boolean;
    /**
     * A hidden title to be rendered in an `h1` tag.
     */
    screenreaderTitle?: string;
    /**
     * Whether the Hovercard should start visible. Note that it will wait until `componentDidMount` to
     * ensure it can properly position itself in relation to the trigger. Only exposed for testing.
     * @default false
     */
    startVisible?: boolean;
    /**
     * Whether a mouse click or hover should trigger the Hovercard.
     * @default TriggerType.HOVER
     */
    triggerType?: TriggerType;
    /**
     * Callback to be fired when the Hovercard content is removed.
     */
    onContentDismiss?: () => void;
    /**
     * Callback to be fired when the Hovercard content is displayed.
     */
    onContentDisplay?: () => void;
    /**
     * Callback to be fired on trigger hover. Can be used to preload content early before the
     * Hovercard content is actually displayed.
     */
    onTriggerHover?: () => void;
}
export interface HovercardState {
    visible: boolean;
}
export { DirectionalHint };
/**
 * A `Hovercard` is a small popover overlay. It opens on click or
 * mouse enter, and closes on mouse out and `ESC`. It should be used with `HovercardHeader` and
 * `HovercardBody` components for consistent internal padding.
 */
export default class Hovercard extends React.Component<HovercardProps, HovercardState> {
    static defaultProps: Partial<HovercardProps>;
    private triggerElement;
    private showTimeout;
    private hideTimeout;
    constructor(props: HovercardProps);
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handleTriggerClick();
    private handleTriggerHover();
    private handleTriggerHoverLeave();
    private handleBodyHover();
    private beginShow();
    private cancelShow();
    private beginHide();
    private cancelHide();
    private show();
    private hide();
    private handleKeyDown(e);
    private startKeyListener();
    private stopKeyListener();
}
