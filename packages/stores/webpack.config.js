const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    // filename: '[name].bundle.js',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'stores',
    libraryTarget: 'commonjs2'
  },
  externals: { pinia: 'pinia' },
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
