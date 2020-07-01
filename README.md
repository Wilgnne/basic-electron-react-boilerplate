
# Fit and Minimal Electron + React Starter Kit
_Electron, React, Webpack -- Modern and up-to-date, with a handful of quality of life features included_

I made this starter kit as most boilerplates were either out-of-date, heavy handed, or enforced a structure on me that I just didnt like.

With a very select assortment of modules, this starter kit is designed to get you up and running very quickly, and to let you easily drop in your own structure and tools on top of it.

The basic structure of `src/` is intentionally minimal to make it easier to allow you to put your own twist on how you like things laid out. There you will find the app folder, which contains a minimal react project, along with `main.js` the gateway to electron.

The structure of project dependencies and very simple
* React Dependencies `devDependencies`
* Electron / NodeJS Dependencies `dependencies`
* Build Dependencies `devDependencies`

Production builds babel-minify is used, and ES2015/ES6 transpilation is provided -- As modern node and chromium versions support 99%+ of the ES6 feature set, I feel those steps are unnecessary.

Special thanks to [pbarbiero](https://github.com/pbarbiero) and other contributors for providing such a simple and solid base for the construction of this boilerplate.

### :dart: To get started:
* Run `yarn`

##### :computer: Development
* Run `yarn dev` to start webpack-dev-server. Electron will launch automatically after compilation.

##### :hammer: Production

###### :tada: One Shot
* Run `yarn build` to have webpack compile your application into `dist/bundle.js` and `dist/index.html`, and then an electron-packager run will be triggered for the current platform/arch, outputting to `builds/`

###### :scroll: Manual

If you want to test the production build (In case you think Babili might be breaking something) after running `npm run build` you can then call `npm run prod`. This will cause electron to load off of the `dist/` build instead of looking for the webpack-dev-server instance. Electron will launch automatically after compilation.

## **:books: REFERÊNCIAS**

- [ReactJS](https://reactjs.org/docs/getting-started.html) | [ReactJS pt-BR](https://pt-br.reactjs.org/docs/getting-started.html)
- [Node](https://nodejs.org/en/)
- [Electron](https://www.electronjs.org/)

## **:page_with_curl: LICENSE**

This repository is licensed by **MIT LICENSE**. 

<h2 align="center">Made by <a href="https://br.linkedin.com/in/wilgnne-khawan-barbosa-alencar-642747187">Wilgnne Khawan</a></h2>
