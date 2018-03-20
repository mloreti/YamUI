/// <reference types="react" />
import * as React from 'react';
import { MediaObjectSize } from './enums';
export { MediaObjectSize };
export interface MediaObjectTitleProps {
    size: MediaObjectSize;
    /**
     * Limits text content to a single line, hiding additional text with an ellipsis.
     */
    ellipsis?: boolean;
}
export default class MediaObjectTitle extends React.Component<MediaObjectTitleProps, {}> {
    render(): JSX.Element;
}
