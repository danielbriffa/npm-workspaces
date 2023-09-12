var fs = require('fs');
var fse = require('fs-extra');
var path = require('path');

const workspaces = ['mocks', 'services', 'stores', 'types'];

//just basic cleanup
if (fs.existsSync('./build')) {
  fs.rm('./build', { recursive: true });
}

//lets start - create the new shiny folder
if (!fs.existsSync('./build')) {
  fs.mkdirSync('./build');
}

workspaces.forEach((item) => {
  try {
    fse.copySync(`./packages/${item}/dist`, `./build/${item}`, {
      overwrite: true
    });
  } catch (err) {
    console.error(err);
  }
});
