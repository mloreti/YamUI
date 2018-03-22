/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { View, Text, ViewStyle } from 'react-native';

import Styles from './AvatarStyles';
export interface AvatarProps {
  /**
   * Name of the person or object being represented. Will be used as accessible alt text.
   */
  name?: string;

  /**
   * Element to be used as badge. You can set its height and width to fill the available area.
   */
  badgeContent?: React.ReactNode;

  /**
   * Image source URL.
   */
  imageUrl?: string;

  /**
   * XLARGE: 72px, LARGE: 48px, MEDIUM: 40px, SMALL: 32px, XSMALL: 24px.
   * @default AvatarSize.MEDIUM
   */
  size: AvatarSize;

  color?: string;

  /**
   * Will hide the image until it has loaded, then fade it in.
   * @default false
   */
  imageShouldFadeIn?: boolean;
}

export enum AvatarSize {
  XLARGE = 'xLarge',
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  XSMALL = 'xSmall',
}

/**
 * An `Avatar` shows a thumbnail representation of both an individual or group.
 */
export default class Avatar extends React.Component<AvatarProps, {}> {
  static defaultProps: Partial<AvatarProps> = {
    name: 'John Doe',
    size: AvatarSize.MEDIUM,
    color: 'white',
  };

  render() {
    return (
      <View style={this.getClasses()}>
        <Text style={Styles.text}>
          {this.getInitials()}
        </Text>
      </View>
    );
  }

  private getInitials() {
    const { name = 'John Doe' } = this.props;
    const names = name.split(' ');

    return names[0][0].toUpperCase() + names[1][0].toUpperCase();
  }
  
  private getClasses() {
    const { size } = this.props;

    const styles: ViewStyle[] = [
      Styles.fixedGridRow, 
      Styles[`avatar__size_${size}`], 
      { backgroundColor: this.props.color },
    ];
    return styles;
  }
}
