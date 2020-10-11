const webpack = require('webpack')
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

moudle.exports = {
    entry: path.join(__dirname, './src/js/main.js'),
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
    },
    // 压缩优化 js 文件
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            // 将此 html 作为模板放入内存 
            template: path.join('./src/views/index.html'),
            // 从内存中复制出来的文件名
            filename: 'index.html'
        }),
        // Vue Loader 插件
        new VueLoaderPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // 压缩完毕的代码中移除警告信息
                warning: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new extractTextPlugin('style.css'),
        // 自动压缩 css
        new optimizeCssAssetsPlugin(),
        // 压缩 html 文件
        new htmlWebpackPlugin({
            template: path.join(''),
            filename: 'index.html',
            // 表示提供压缩选项
            minify: {
                // 移除注释
                removeComments: true,
                // 合并空白字符
                collapseWhitespace: true,
                // 移除属性节点上的引号
                removeAttributeQuotes: true
            }
        })
    ],
    module: {
        rules: [
            // 处理 css 文件
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"],
                    publicPath: '../'
                })
            },
            // 处理 js 语法
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            // 处理 vue 模板
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    }
}