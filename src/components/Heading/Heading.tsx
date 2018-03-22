/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { Text, TextStyle } from 'react-native';
import Styles from './HeadingStyles';

import { HeadingLevel, HeadingSize } from './enums';

export interface HeadingProps {
  /**
   * The heading level to render, i.e. h1-h6
   */
  level: HeadingLevel;

  /** Allows a heading tag at a given level to render visually as a different level,
   * or as plain inline text.
   */
  size?: HeadingSize;
  color?: string;
  noBold?: boolean;
}

/**
 * A `Heading` component renders an h1-h6 tag depending on the given level. You can also
 * override its visual styling to match a different level with `size`. Set `size="none"`
 * to render the heading as unstyled inline text.
 */
export default class Heading extends React.Component<HeadingProps> {
  render() {
    const { children, size } = this.props;
    if (size === 'none') {
      return <Text>{children}</Text>;
    }

    return <Text style={this.getStyles()}>{children}</Text>;
  }

  private getStyles() {
    const { size, level, color, noBold } = this.props;

    const styles: TextStyle[] = [Styles.heading];
    if (noBold) {
      styles.pop();
    }
    if (size) {
      styles.push(Styles[size]);
    } else if (level) {
      styles.push(Styles[level]);
    }
    if (color) {
      styles.push({ color });
    }
    return styles;
  }
}
