var path = require('path');

var include = join(__dirname, 'src')

export default {
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'tinyPipe',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include: context},
      {test: /\.json$/, 'loader': 'json', include: context},
    ]
  }
}