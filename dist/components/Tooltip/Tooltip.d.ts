/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { DirectionalHint } from 'office-ui-fabric-react/lib/Tooltip';
import './Tooltip.css';
export { DirectionalHint };
export interface TooltipProps extends NestableBaseComponentProps {
    /**
     * Text content to display in the tooltip.
     */
    text: string;
    /**
     * Preferred direction to show the tooltip in.
     */
    directionalHint?: DirectionalHint;
}
/**
 * Tooltip wraps other content and provides additional context on hover or keyboard selection.
 */
export default class Tooltip extends React.Component<TooltipProps, {}> {
    render(): JSX.Element;
}
