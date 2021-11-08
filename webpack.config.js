const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // the NODE_ENV variable holds the value equal to 'development' or 'production' depending on which script is run in package.json
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'), // where we're looking
            publicPath: '/build',
        },
        // re-routing api fetch calls to localhost 3000 (which has access to express)
        proxy: {
            '/api': 'http://localhost:3000' // or use '/*' instead of '/api' to take care of all other fetch calls
        },
        historyApiFallback: true // added API fallback as needed for react-router
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'development',
            template: 'index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ],
    },
};
