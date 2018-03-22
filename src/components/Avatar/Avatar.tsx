/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

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
   * Will hide the image until it has loaded, then fade it in.
   * @default false
   */
  imageShouldFadeIn?: boolean;
}
  
/**
 * An `Avatar` shows a thumbnail representation of both an individual or group.
 */
export default class Avatar extends React.Component<AvatarProps, {}> {
  static defaultProps: Partial<AvatarProps> = {
    name: 'John Doe',
  };

  render() {
    return <View style={styles.Avatar} />;
  }
}

const styles = StyleSheet.create({
  Avatar: {
    backgroundColor: 'green',
    borderRadius: 15,
    height: 30,
    width: 30,
  },
});
