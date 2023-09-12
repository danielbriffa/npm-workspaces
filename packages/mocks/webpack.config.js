const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mocks',
    libraryTarget: 'commonjs2'
  },
  externals: [
    { types: 'types' },
    {
      ['@faker-js/faker']: {
        root: '@faker-js/faker'
      }
    }
  ],
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
