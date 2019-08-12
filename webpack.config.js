var config = {
  entry: './main.js',
  output: {
    path: '/',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  }
}
module.exports = config
