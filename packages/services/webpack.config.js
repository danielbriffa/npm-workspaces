const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'services',
    libraryTarget: 'commonjs2'
  },
  externals: { mocks: 'mocks', 'faker-js': 'faker-js' },
  module: {
    // babel configuration is below:
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // <<<
          options: {
            presets: ['@babel/preset-env'] // <<<
          }
        }
      }
    ]
  }
};
