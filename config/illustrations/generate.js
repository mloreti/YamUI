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
const svgoConfig = require('./config.json');

const sourcePath = path.resolve(__dirname, '../../assets/illustrations');
const destPath = path.resolve(__dirname, '../../src/components/Illustration/illustrations');
const indexTemplatePath = path.resolve(__dirname, 'indexTemplate.ejs');
const svgTemplatePath = path.resolve(__dirname, 'illustrationTemplate.ejs');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const globFiles = util.promisify(glob);

const optimizer = new SVGO(svgoConfig);
const converter = new HTMLtoJSX({ createClass: false });

function getSizeFromFilePath(filePath) {
  const sizeRegex = /.+\/(\d+)\/.+\.svg/;
  const sizeResults = filePath.match(sizeRegex);

  if (sizeResults === null) {
    console.error(`Could not determine svg size from path: ${filePath}`);
  }

  return sizeResults[1];
}

async function generateIndex(illustrations, indexTemplate) {
  const illustrationNames =
    illustrations.map((illustration) => {
      const size = getSizeFromFilePath(illustration);

      const filename = path.basename(illustration, path.extname(illustration));
      const name = `${filename}${size}`;
      console.log(name);
      return name;
    });
  const indexContents = template(indexTemplate)({ illustrations: illustrationNames });

  const destIndexPath = path.resolve(destPath, 'index.ts');
  console.log(`Writing index to ${destIndexPath}`);
  await writeFile(destIndexPath, indexContents, 'utf8');
}

async function convert(svg, svgTemplate, size) {
  try {
    const svgContents = await readFile(svg, 'utf8');
    const optimizedsvgContents = await optimizer.optimize(svgContents.toString());

    const { window } = new JSDOM(optimizedsvgContents.data);
    const { innerHTML } = window.document.querySelector('svg');

    const name = path.basename(svg, path.extname(svg));
    // HTMLtoJSX will wrap multiple nodes in a <div>, so remove it if present
    const jsx = converter.convert(innerHTML)
      .replace('<div>', '')
      .replace('</div>', '')
      .trim();
    const dirtyClassContents = template(svgTemplate)({ name, jsx, size });

    // HACK! Manually fix bad attribute names until this is fixed:
    // https://github.com/reactjs/react-magic/issues/157
    // Note that the repo has other similar issues open so our TS compiler may find them in new svgs
    const classContents = dirtyClassContents.replace(/gradientunits/g, 'gradientUnits').replace(/gradienttransform/g, 'gradientTransform');

    const destFilePath = path.resolve(destPath, `${name}${size}.tsx`);
    console.log(`Writing svg React component to ${destFilePath}`);
    await writeFile(destFilePath, classContents, 'utf8');
  } catch (e) {
    console.error(e);
  }
}

(async () => {
  const indexTemplate = await readFile(indexTemplatePath);
  const svgTemplate = await readFile(svgTemplatePath);
  const svgs = await globFiles(`${sourcePath}/**/*.svg`, {});

  await generateIndex(svgs, indexTemplate);
  svgs.forEach((svg) => {
    const size = getSizeFromFilePath(svg);
    convert(svg, svgTemplate, size);
  });
})();
