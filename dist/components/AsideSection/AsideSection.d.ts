/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './AsideSection.css';
export interface AsideSectionProps extends NestableBaseComponentProps {
    /**
     * The title of the aside section
     */
    title: string;
    /**
     * An actionable react component to the right of the title
     */
    action?: React.ReactNode;
}
/**
 * A section component to be used primarily for sidebar modules
 */
export default class AsideSection extends React.Component<AsideSectionProps, {}> {
    render(): JSX.Element;
    private getActionColumn();
}
