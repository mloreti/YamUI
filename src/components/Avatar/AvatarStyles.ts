/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { StyleSheet, ViewStyle } from 'react-native';

export interface Style {
  [key: string]: ViewStyle;
  avatar: ViewStyle;
  avatar__size_xLarge: ViewStyle;
  avatar__size_large: ViewStyle;
  avatar__size_medium: ViewStyle;
  avatar__size_small: ViewStyle;
  avatar__size_xSmall: ViewStyle;
  text: ViewStyle;
}

const styles: Style = StyleSheet.create({
  avatar: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  avatar__size_xLarge: {
    height: '72px',
    width: '72px',
    borderRadius: 36,
  },
  avatar__size_large: {
    height: '48px',
    width: '48px',
    borderRadius: 24,
  },
  avatar__size_medium: {
    height: '40px',
    width: '40px',
    borderRadius: 20,
  },
  avatar__size_small: {
    height: '32px',
    width: '32px',
    borderRadius: 16,
  },
  avatar__size_xSmall: {
    height: '24px',
    width: '24px',
    borderRadius: 12,
  },
});

export default styles;
