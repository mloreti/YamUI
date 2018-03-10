/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IllustrationSize } from './enums';
import './Illustration.css';

export { IllustrationSize };

export interface IllustrationProps extends BaseComponentProps {
  /**
   * Sets icon style to `display: block`. This is helpful if the inline icon's `line-height` is
   * taller than the current line's `line-height`, and is creating extra vertical space.
   */
  block?: boolean;
}

/**
 * An `Illustration` renders an SVG illustration. Certain illustrations, like file type icons, come in multiple
 * sizes, so you may need to import the specific sized files you'll need.
 */
export default class BaseIllustration extends React.Component<IllustrationProps> {
  protected getClassName() {
    const { block, className } = this.props;

    const classes = ['y-illustration'];
    if (block) {
      classes.push('y-illustration__isBlock');
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
