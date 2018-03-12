/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const util = require('util');
const glob = require('glob');
const SVGO = require('svgo');
const { JSDOM } = require('jsdom');
const HTMLtoJSX = require('htmltojsx');
const { template } = require('lodash');
const { generateIndex } = require('./generateSvgs');
const svgoConfig = require('./config.icon.json');

const sourcePath = path.resolve(__dirname, '../../assets/icons');
const destPath = path.resolve(__dirname, '../../src/components/Icon/icons');
const indexTemplatePath = path.resolve(__dirname, 'indexTemplate.ejs');
const iconTemplatePath = path.resolve(__dirname, 'iconTemplate.ejs');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const globFiles = util.promisify(glob);

const optimizer = new SVGO(svgoConfig);
const converter = new HTMLtoJSX({ createClass: false });

async function convertIcon(icon, iconTemplate) {
  try {
    const iconContents = await readFile(icon, 'utf8');
    const optimizedIconContents = await optimizer.optimize(iconContents.toString());

    const { window } = new JSDOM(optimizedIconContents.data);
    const { innerHTML } = window.document.querySelector('svg');

    const name = path.basename(icon, path.extname(icon));
    const jsx = converter.convert(innerHTML).trim();
    const classContents = template(iconTemplate)({ name, jsx });

    const destIconPath = path.resolve(destPath, `${name}.tsx`);
    console.log(`Writing icon to ${destIconPath}`);
    await writeFile(destIconPath, classContents, 'utf8');
  } catch (e) {
    console.error(e);
  }
}

function getSvgNames(icons) {
  return icons.map(icon => path.basename(icon, path.extname(icon)));
}

(async () => {
  const indexTemplate = await readFile(indexTemplatePath);
  const iconTemplate = await readFile(iconTemplatePath);
  const icons = await globFiles(`${sourcePath}/*.svg`, {});
  const svgNames = getSvgNames(icons);

  await generateIndex(svgNames, indexTemplate, destPath);
  icons.forEach((icon) => {
    convertIcon(icon, iconTemplate);
  });
})();
