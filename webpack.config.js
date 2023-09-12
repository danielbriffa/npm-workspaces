const CopyPlugin = require('copy-webpack-plugin');

const workspaces = ['mocks', 'services', 'stores', 'types'];

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: workspaces.map((item) => {
        return { from: `./packages/${item}/dist`, to: `./build/${item}` };
      })
    })
  ]
};
