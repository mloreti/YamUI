/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

/* eslint-disable no-console */
const path = require('path');
const fs = require('fs');
const util = require('util');
const { template } = require('lodash');

const writeFile = util.promisify(fs.writeFile);

async function generateIndex(svgNames, indexTemplate, destPath) {
  const contents = template(indexTemplate)({ svgNames });

  const destIndexPath = path.resolve(destPath, 'index.ts');
  console.log(`Writing index to ${destIndexPath}`);
  await writeFile(destIndexPath, contents, 'utf8');
}

module.exports = {
  generateIndex,
};
