'use strict';

/*
💚 description: 开发模式
💚 author: dylan
💚 update: 05/07/2017 (dylan)
*/


import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'cheap-module-eval-source-map',
  // 用于解析entry选项的基础目录(绝对路径)
	context: path.resolve(__dirname, './src'),
	entry: [
    // 服务器静态资源路径配置，保证首先载入
    './webpack-public-path',
    'react-hot-loader/patch',
    // reload当解决错误后不会重新加载页面的问题
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, './src/app/index.js')
	],
  // 编译到的目标使用环境
  target: 'web',
	output: {
		path: path.resolve(__dirname, './src'),
		filename: 'scripts/[name].bundle.js',
    // 配合本地Server
    publicPath: '/'
	},
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: '',
      // 最后生成文件名
      filename: 'index.html',
      // 模板文件
      template: './index.html',
      favicon: './favicon.ico',
      // 客户端根据hash判断页面是否刷新
      hash: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false
      },
      inject: 'body'
    }),
    // 需要全局使用的组件
    new webpack.ProvidePlugin({
      moment: 'moment'
    })
  ],
  resolve: {
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['*', '.web.js', '.js', '.jsx', '.json'],
    // 路径别名
    alias: {
      // 以前引用 import { Nav } from '../../app/components'
      // 现在引用 import { Nav } from 'app/components'
      app: path.resolve(__dirname, 'src/app/'),
      // 以前引用 @import "../../../styles/mixins.scss"
      // 现在引用 @import "styles/mixins.scss"
      styles: path.resolve(__dirname, 'src/assets/styles/'),
      images: path.resolve(__dirname, 'src/assets/images/'),
      fonts: path.resolve(__dirname, 'src/assets/fonts/')
    }
  },
	module: {
		rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {loader: 'babel-loader'}
        ]
      },
      // 组件样式，私有化
      {
        test: /\.scss$/,
        //exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/app'),
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader', options: {
              modules: true,
              sourceMap: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            },
          },
          {
            loader: 'postcss-loader', options: {
              config: './tools/postcss.config.js',
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', options: {sourceMap: true}
          }
        ]
      },
      // 公共样式，不私有化（如字体图标全网应用）
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/assets/styles'),
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader', options: {
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader', options: {
              config: './tools/postcss.config.js',
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', options: {sourceMap: true}
          }
        ]
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'node_modules'),
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader', options: {
              modules: false,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader', options: {
              config: './tools/postcss.config.js',
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|webp|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader', options: {
              // <10KB 返回DataUrl
              limit: 10000,
              // 最终图片保存路径
              name: 'images/[name]_[hash:8].[ext]'
            }
          },
          {
            loader: 'img-loader', options: {
              gifsicle: {interlaced: false},
              mozjpeg: {
                progressive: true,
                arithmetic: false
              },
              optipng: false,
              pngquant: {
                floyd: 0.5,
                speed: 2
              },
              svgo: {
                plugins: [
                  {removeTitle: true},
                  {convertPathData: false}
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader', options: {
              limit: 10000,
              name: 'videos/[name]_[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2).*$/i,
        use: [
          {
            loader: 'url-loader', options: {
              limit: 10000,
              name: 'fonts/[name]_[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: [
          {loader: 'json-loader'}
        ]
      }
    ]
	}
};
