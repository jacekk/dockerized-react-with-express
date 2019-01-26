var path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js',
        libraryTarget: 'umd',
    },
    devServer: {
        compress: true,
        contentBase: path.resolve(__dirname),
        host: '0.0.0.0',
        hot: false,
        open: false,
        port: 7777,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|build)/,
                use: 'babel-loader',
            },
        ],
    },
}
