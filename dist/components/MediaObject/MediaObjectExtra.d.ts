/// <reference types="react" />
import * as React from 'react';
export interface MediaObjectExtraProps {
    /**
     * Limits text content to a single line, hiding additional text with an ellipsis.
     */
    ellipsis?: boolean;
}
export default class MediaObjectExtra extends React.Component<MediaObjectExtraProps, {}> {
    render(): JSX.Element;
}
