/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { StyleSheet, ViewStyle } from 'react-native';

export interface Style {
  [key: string]: ViewStyle;
  block: ViewStyle;
  block__topSpacing_xxLarge: ViewStyle;
  block__topSpacing_xLarge: ViewStyle;
  block__topSpacing_large: ViewStyle;
  block__topSpacing_medium: ViewStyle;
  block__topSpacing_small: ViewStyle;
  block__topSpacing_xSmall: ViewStyle;
  block__bottomSpacing_xxLarge: ViewStyle;
  block__bottomSpacing_xLarge: ViewStyle;
  block__bottomSpacing_large: ViewStyle;
  block__bottomSpacing_medium: ViewStyle;
  block__bottomSpacing_small: ViewStyle;
  block__bottomSpacing_xSmall: ViewStyle;
  block__inner__padding_xxLarge: ViewStyle;
  block__inner__padding_xLarge: ViewStyle;
  block__inner__padding_large: ViewStyle;
  block__inner__padding_medium: ViewStyle;
  block__inner__padding_small: ViewStyle;
  block__inner__padding_xSmall: ViewStyle;
  block__inner__horizontalPadding_xxLarge: ViewStyle;
  block__inner__horizontalPadding_xLarge: ViewStyle;
  block__inner__horizontalPadding_large: ViewStyle;
  block__inner__horizontalPadding_medium: ViewStyle;
  block__inner__horizontalPadding_small: ViewStyle;
  block__inner__horizontalPadding_xSmall: ViewStyle;
  block__inner__verticalPadding_xxLarge: ViewStyle;
  block__inner__verticalPadding_xLarge: ViewStyle;
  block__inner__verticalPadding_large: ViewStyle;
  block__inner__verticalPadding_medium: ViewStyle;
  block__inner__verticalPadding_small: ViewStyle;
  block__inner__verticalPadding_xSmall: ViewStyle;
  block__textAlign_right: ViewStyle;
  block__textAlign_center: ViewStyle;
}

const Styles: Style = StyleSheet.create({
  block: {
    width: 100,
  },
  block__topSpacing_xxLarge: {
    marginTop: 48,
  },
  block__topSpacing_xLarge: {
    marginTop: 40,
  },
  block__topSpacing_large: {
    marginTop: 32,
  },
  block__topSpacing_medium: {
    marginTop: 24,
  },
  block__topSpacing_small: {
    marginTop: 16,
  },
  block__topSpacing_xSmall: {
    marginTop: 8,
  },
  block__bottomSpacing_xxLarge: {
    marginBottom: 48,
  },
  block__bottomSpacing_xLarge: {
    marginBottom: 40,
  },
  block__bottomSpacing_large: {
    marginBottom: 32,
  },
  block__bottomSpacing_medium: {
    marginBottom: 24,
  },
  block__bottomSpacing_small: {
    marginBottom: 16,
  },
  block__bottomSpacing_xSmall: {
    marginBottom: 8,
  },
  block__inner__padding_xxLarge: {
    padding: 48,
  },
  block__inner__padding_xLarge: {
    padding: 40,
  },
  block__inner__padding_large: {
    padding: 32,
  },
  block__inner__padding_medium: {
    padding: 24,
  },
  block__inner__padding_small: {
    padding: 16,
  },
  block__inner__padding_xSmall: {
    padding: 8,
  },
  block__inner__horizontalPadding_xxLarge: {
    paddingLeft: 48,
    paddingRight: 48,
  },
  block__inner__horizontalPadding_xLarge: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  block__inner__horizontalPadding_large: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  block__inner__horizontalPadding_medium: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  block__inner__horizontalPadding_small: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  block__inner__horizontalPadding_xSmall: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  block__inner__verticalPadding_xxLarge: {
    paddingLeft: 48,
    paddingRight: 48,
  },
  block__inner__verticalPadding_xLarge: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  block__inner__verticalPadding_large: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  block__inner__verticalPadding_medium: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  block__inner__verticalPadding_small: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  block__inner__verticalPadding_xSmall: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  block__textAlign_right: {
    textAlign: 'right',
  },
  block__textAlign_center: {
    textAlign: 'center',
  },
});

export default Styles;
