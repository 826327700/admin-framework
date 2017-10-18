const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main',
        vendors: './src/vendors'
    },
    output: {
        path: path.join(__dirname, './dist/static'),
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use:[{
                	loader: 'vue-loader',
	                options: {
	                    loaders: {
	                        sass: ExtractTextPlugin.extract({
	                            use: ['css-loader?minimize', 'autoprefixer-loader', 'sass-loader'],
	                            fallback: 'vue-style-loader',
	                            publicPath:'../'
	                        }),
							scss: ExtractTextPlugin.extract({
	                            use: ['css-loader?minimize', 'autoprefixer-loader', 'sass-loader'],
	                            fallback: 'vue-style-loader',
	                            publicPath:'../'
	                        }),
	                        css: ExtractTextPlugin.extract({
	                            use: ['css-loader', 'autoprefixer-loader'],
	                            fallback: 'vue-style-loader',
	                            publicPath:'../'
	                        })
	                    }
	                }
                },
	            {
	                loader: 'iview-loader',
	                options: {
	                    prefix: false
	                }
	            }],
                
            },
            {
                test: /iview\/.*?js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize', 'autoprefixer-loader','resolve-url-loader'],
                    fallback: 'style-loader',
                    publicPath:'../'
                })
            },
			{
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    use: ['autoprefixer-loader', 'sass-loader','resolve-url-loader'],
                    fallback: 'style-loader',
                    publicPath:'../'
                })
            },
            {
                test: /\.sass/,
                use: ExtractTextPlugin.extract({
                    use: ['autoprefixer-loader', 'sass-loader','resolve-url-loader'],
                    fallback: 'style-loader',
                    publicPath:'../'
                })
            },

            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024&name=font/[hash:8].[name].[ext]'
            },
            {
                test: /\.(gif|jpg|png)\??.*$/,
                loader: 'url-loader?limit=1024&name=images/[hash:8].[name].[ext]'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    }
};