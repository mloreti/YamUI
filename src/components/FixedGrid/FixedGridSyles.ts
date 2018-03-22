/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { StyleSheet, ViewStyle } from 'react-native';
import { Gutters } from '../../utils/variables';

export interface Style {
  [key: string]: ViewStyle;
  fixedGridRow: ViewStyle;
  bottomSpacing_xxLarge: ViewStyle;
  bottomSpacing_xLarge: ViewStyle;
  bottomSpacing_large: ViewStyle;
  bottomSpacing_medium: ViewStyle;
  bottomSpacing_small: ViewStyle;
  bottomSpacing_xSmall: ViewStyle;
  fixedGridColumn: ViewStyle;
  fixedGridColumn__isFixed: ViewStyle;
  fixedGridColumn__hasWidth: ViewStyle;
  fixedGridRow__gutter_xxLarge: ViewStyle;
  fixedGridRow__gutter_xLarge: ViewStyle;
  fixedGridRow__gutter_large: ViewStyle;
  fixedGridRow__gutter_medium: ViewStyle;
  fixedGridRow__gutter_small: ViewStyle;
  fixedGridRow__gutter_xSmall: ViewStyle;
  fixedGridColumn_inner: ViewStyle;
  fixedGridColumn_inner__middle: ViewStyle;
  fixedGridColumn_inner__bottom: ViewStyle;
}

const styles: Style = StyleSheet.create({
  fixedGridRow: {
    display: 'flex',
  },
  bottomSpacing_xxLarge: {
    marginBottom: Gutters.xxLarge,
  },
  bottomSpacing_xLarge: {
    marginBottom: Gutters.xLarge,
  },
  bottomSpacing_large: {
    marginBottom: Gutters.large,
  },
  bottomSpacing_medium: {
    marginBottom: Gutters.medium,
  },
  bottomSpacing_small: {
    marginBottom: Gutters.small,
  },
  bottomSpacing_xSmall: {
    marginBottom: Gutters.xSmall,
  },
  fixedGridColumn: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 100,
    minWidth: 0,
  },
  fixedGridColumn__isFixed: {
    flexGrow: 0,
    flexBasis: 'auto',
    minWidth: 'auto',
  },
  fixedGridColumn__hasWidth: {
    flexShrink: 0,
  },
  fixedGridRow__gutter_xxLarge: {
    marginLeft: Gutters.xxLarge,
  },
  fixedGridRow__gutter_xLarge: {
    marginLeft: Gutters.xLarge,
  },
  fixedGridRow__gutter_large: {
    marginLeft: Gutters.large,
  },
  fixedGridRow__gutter_medium: {
    marginLeft: Gutters.medium,
  },
  fixedGridRow__gutter_small: {
    marginLeft: Gutters.small,
  },
  fixedGridRow__gutter_xSmall: {
    marginLeft: Gutters.xSmall,
  },
  fixedGridColumn_inner: {
    height: 100,
    display: 'flex',
  },
  fixedGridColumn_inner__middle: {
    alignItems: 'flex-start',
  },
  fixedGridColumn_inner__bottom: {
    alignItems: 'flex-end',
  },
});

export default styles;
