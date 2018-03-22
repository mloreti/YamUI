/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { StyleSheet, ViewStyle } from 'react-native';
import  { Gutters, baseSize } from '../../utils/variables';
export interface Style {
  [key: string]: ViewStyle;
  1: ViewStyle;
  2: ViewStyle;
  3: ViewStyle;
  4: ViewStyle;
  5: ViewStyle;
  heading: ViewStyle;
}

const styles: Style = StyleSheet.create({
  1: {
    fontSize: Gutters.xxLarge * baseSize,
  },
  2: {
    fontSize: Gutters.xLarge * baseSize,
  },
  3: {
    fontSize: Gutters.medium * baseSize,
  },
  4: {
    fontSize: Gutters.small * baseSize,
  },
  5: {
    fontSize: Gutters.xSmall * baseSize,
  },
  heading: {
    fontWeight: 'bold',
  },
});

export default styles;
