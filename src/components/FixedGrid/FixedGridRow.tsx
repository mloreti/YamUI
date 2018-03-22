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
}

/**
 * A `FixedGridRow` represents each row inside a `FixedGrid`. It should wrap `FixedGridColumn`s.
 */
export default class FixedGridRow extends React.Component<FixedGridRowProps> {
  public static defaultProps = {
    gutterSize: GutterSize.SMALL,
  };

  public render() {
    const { children } = this.props;

    return <View style={this.getClasses()}>{children}</View>;
  }

  private getClasses() {
    const { bottomSpacing, gutterSize } = this.props;

    const styles: ViewStyle[] = [Styles.fixedGridRow, Styles[`fixedGridRow__gutter_${gutterSize}`]];
    if (bottomSpacing) {
      styles.push(Styles[`bottomSpacing_${bottomSpacing}`]);
    }

    return styles;
  }
}
