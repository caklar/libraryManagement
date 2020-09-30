const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry: path.join(__dirname, './src/js/index.js'),
	output: {
		path: path.join(__dirname, './dist/js'),
		filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            // 将此 html 作为模板放入内存 
            template: path.join('./src/views/index.html'),
            // 从内存中复制出来的文件名
            filename: 'index.html'
        }),
        // Vue Loader 插件
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            // 处理 css 文件
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // 处理 js 语法
            // {
            //     test: /\.js$/,
            //     use: 'babel-loader',
            //     exclude: /node_modules/
            // },
            // 处理 vue 模板
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    }
}