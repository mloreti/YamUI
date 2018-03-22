/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { View } from 'react-native';
import { GutterSize } from '../enums';
// import { TextColor, TextSize } from '../Text/enums';

export interface BlockProps {
  /**
   * Gutter spacing to be added above this block.
   */
  topSpacing?: GutterSize;

  /**
   * Gutter spacing to be added below this block.
   */
  bottomSpacing?: GutterSize;

  /**
   * Padding to be added uniformly within this block.
   */
  padding?: GutterSize;

  /**
   * Padding to be added to the left and right. Will override a "padding" value.
   */
  horizontalPadding?: GutterSize;

  /**
   * Padding to be added to the top and bottom. Will override a "padding" value.
   */
  verticalPadding?: GutterSize;

  /**
   * Number of pixels to finely adjust the gutter spacing above this block. Positive pushes the
   * component down, negative pulls it up. Only use this to adjust for vertical rhythm in text.
   */
  push?: number;

  /**
   * Text alignment within this block.
   */
  textAlign?: 'left' | 'right' | 'center';

  /**
   * Text color within this block.
   */
  textColor?: String;

  /**
   * Text size (`font-size` and `line-height`) within this block.
   */
  textSize?: Number;

  /**
   * Limits text content to a single line, hiding additional text with an ellipsis.
   */
  ellipsis?: boolean;
}

/**
 * A `Block` is a layout component to build consistent padding and vertical spacing between
 * components. It allows you to `push` a chunk of UI up or down by individual pixels to keep text in
 * the `4px` vertical rhythm. It's also the primary place you should set `textSize` in your UIs,
 * providing enumerated options for the supported `font-size`/`line-height` combinations.
 */
export default class Block extends React.Component<BlockProps, {}> {
  render() {
    const { children } = this.props;

    return (
      <View>
        <View>{children}</View>
      </View>
    );
  }
}
