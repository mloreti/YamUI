/// <reference types="react" />
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { AvatarProps } from '../Avatar';
import './SuggestionsListItem.css';
export declare type CustomizableAvatarProps = 'badgeContent' | 'badgeDescription' | 'borderType';
export interface SuggestionItem {
    id: string | number;
    imageUrl?: string;
    name: string;
    description?: string;
    avatarProps?: Pick<AvatarProps, CustomizableAvatarProps>;
}
export interface SuggestionsListItemProps extends SuggestionItem, NestableBaseComponentProps {
    searchText: string;
    isSelected: boolean;
    onSelect(id: string | number): void;
}
export default class SuggestionsListItem extends React.PureComponent<SuggestionsListItemProps, {}> {
    render(): JSX.Element;
    private getAvatar();
    private onMouseDown;
}
