const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry : './src/index.js',
    output : {
        path : path.join(__dirname, '/bundle'),
        filename : 'index_bundle.js',
        publicPath : '/'
    },
    devServer : {
        inline : true,
        port : 8088
    },
    module : {
        rules : [{
            exclude : /node_modules/,
            test : /\.js$/,
            loader : 'babel-loader',
            query : {
                presets : ['react', 'es2015'],
                plugins : ['transform-class-properties']
            }
        },
        {
            test : /\.css$/,
            use : ["style-loader", "css-loader"]
        },
        {
            test : /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
            use : [{
                loader : 'file-loader',
                options : {
                    name : '[path][name]-[hash:8].[ext]'
                }
            }]
        }
    ]
    },
    plugins : [
        new HtmlWebPackPlugin({
            template : './index.html'
        })
    ]
}