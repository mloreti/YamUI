/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { Text } from 'react-native';

/**
 * A `Text` component simply renders a `span`. It offers size and color props so UI features don't
 * need to own this CSS. This is both a convenience for engineers and a way to enforce consistency
 * of supported text colors and `font-size`/`line-height` combinations.
 */
export default class YText extends React.Component<{}, {}> {
  render() {
    return (
      <Text>test</Text>
    );
  }
}
