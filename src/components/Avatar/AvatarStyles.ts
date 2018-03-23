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

const Styles: Style = StyleSheet.create({
  avatar: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 12,
  },
  avatar__size_xLarge: {
    height: 72,
    width: 72,
    borderRadius: 36,
  },
  avatar__size_large: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  avatar__size_medium: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  avatar__size_small: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  avatar__size_xSmall: {
    height: 24,
    width: 24,
    borderRadius: 12,
  },
});

export default Styles;
