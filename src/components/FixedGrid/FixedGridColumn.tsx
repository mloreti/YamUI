/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Styles from './FixedGridSyles';

export interface FixedGridColumnProps {
  /**
   * Set to true if this column should have a fixed width. If true, and `width` is not provided,
   * this column will shrink to fit its content.
   */
  fixed?: boolean;

  /**
   * The number of pixels wide this column should be. Ignored if `fixed` is not set to true.
   */
  width?: number;

  /**
   * The vertical alignment of the column's content.
   * @default 'top'
   */
  verticalAlign?: 'top' | 'middle' | 'bottom';
}

export default class FixedGridColumn extends React.Component<FixedGridColumnProps> {
  public render() {
    const { children, verticalAlign } = this.props;
    const hasVerticalAlign = verticalAlign && verticalAlign !== 'top';
    // NOTE: We achieve vertical-align with flexbox. The extra inner div prevents direct children
    //       from receiving flex-child styling and getting wonky vertical alignment.
    const content = !hasVerticalAlign ? (
      children
    ) : (
      <View style={[...this.getStyles()]}>
        <View>{children}</View>
      </View>
    );
    return <View>{content}</View>;
  }

  private getStyles() {
    const { fixed, width, verticalAlign } = this.props;
    const styles: ViewStyle[] = [Styles.fixedGridColumn];
    if (verticalAlign) {
      styles.push(Styles[verticalAlign]);
    }
    if (fixed) {
      styles.push(Styles.fixedGridColumn__isFixed);
    }
    if (width) {
      styles.push(Styles.fixedGridColumn__hasWidth);
      styles.push({ width: this.props.width });
    }
    return styles;
  }
}
