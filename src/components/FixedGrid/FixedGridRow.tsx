/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import { GutterSize } from './enums';
import Styles from './FixedGridSyles';

export interface FixedGridRowProps {
  /**
   * Margin added below the row.
   */
  bottomSpacing?: GutterSize;

  /**
   * Horizontal gutter space between each column.
   * @default GutterSize.SMALL
   */
  gutterSize?: GutterSize;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | undefined;
}

/**
 * A `FixedGridRow` represents each row inside a `FixedGrid`. It should wrap `FixedGridColumn`s.
 */
export default class FixedGridRow extends React.Component<FixedGridRowProps> {
  public render() {
    const { children } = this.props;

    return <View style={this.getStyles()}>{children}</View>;
  }

  private getStyles() {
    const { bottomSpacing, gutterSize, alignItems } = this.props;
 
    const styles: ViewStyle[] = [Styles.fixedGridRow];
    if (gutterSize) {
      styles.push(Styles[`fixedGridRow__gutter_${gutterSize}`]);
    }
    if (bottomSpacing) {
      styles.push(Styles[`bottomSpacing_${bottomSpacing}`]);
    }

    if (alignItems) {
      styles.push({
        alignItems,
      });
    }

    return styles;
  }
}
