const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const package = require('./package.json');

const resourcesPath = path.join(__dirname, 'resources');
const distPath = path.join(__dirname, 'dist');
const buildsPath = path.join(__dirname, 'builds');


fs.rmdirSync(resourcesPath, { recursive: true });
fs.rmdirSync(buildsPath, { recursive: true });

fs.mkdirSync(resourcesPath);

const resourcePackage = {
  name: package.name || '',
  version: package.version || '',
  author: package.author || '',
  homepage: package.homepage || '',
  license: package.license || '',
  main: path.basename(package.main || 'index.js'),
  dependencies: package.dependencies || {}
};

fs.writeFileSync('resources/package.json', JSON.stringify(resourcePackage, null, 2));

fs.copyFileSync(path.join(__dirname, package.main || 'index.js'), path.join(resourcesPath, resourcePackage.main));

execSync('npm i', { cwd: resourcesPath });

try {
  execSync('npm run package');

  fsExtra.copySync(distPath, path.join(resourcesPath, path.basename(distPath)));
  fs.rmdirSync(distPath, { recursive: true });

  execSync(`npx electron-packager ${resourcesPath} --out=${buildsPath}`);
}
catch (e) {
  console.log(e);

  fs.rmdirSync(resourcesPath, { recursive: true });
  fs.rmdirSync(buildsPath, { recursive: true });
}

fs.rmdirSync(resourcesPath, { recursive: true });
