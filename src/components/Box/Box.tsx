/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import Block from '../Block/Block';
import { GutterSize } from '../enums';

/**
 * A Box is simply a div with a border and fixed padding. It also has `display: relative` so you can
 * absolutely-position elements like a close button. Boxes will primarily be used for card views.
 */
export default class Box extends React.Component<{}> {
  public render() {
    const { children } = this.props;

    return (
      <Block padding={GutterSize.SMALL}>
        {children}
      </Block>
    );
  }
}

/* Position relative */

