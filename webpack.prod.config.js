'use strict'

/*
💚 description: 产品模式
💚 author: dylan
💚 update: 05/07/2017 (dylan)
*/


const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './app/index.js',
    // 切割代码，提取第三方库
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'react-redux',
      'react-router-redux',
      'moment',
      'antd'
    ]
  },
  output: {
    // 输出目录
    path: path.resolve(__dirname, './dist'),
    // 模板、样式、脚本、图片等资源对应的server上的路径
    publicPath: '',
    // 生成的脚本文件名
    filename: 'scripts/[name].min.[chunkhash:8].js'
  },
  plugins: [
    // webapck 会给编译好的代码片段一个id用来区分
    // 而这个插件会让webpack在id分配上优化并保持一致性。
    // 具体是的优化是：webpack就能够比对id的使用频率和分布来得出最短的id分配给使用频率高的模块
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      // 紧凑输出
      beautify: false,
      // 删除注释
      comments: false,
      compress: {
        // 删除没有用到的代码不输出警告
        warnings: false,
        // 删除所有’console’语句
        // 还可以兼容IE浏览器
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true
      }
    }),
    // 很多库的内部，有process.NODE_ENV的判断语句，
    // 改为production，最直观的就是没有所有的debug相关的东西，体积会减少很多
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // 公共模块对应的名称（entry添加的chunk）
      // webpack分开配置就无需manifest了
      names: ['vendor'],
      // 随着entry chunk越来越多，这个配置保证没其它的模块会打包进 公共chunk
      minChunks: Infinity,
      // 文件名及路径
      filename: 'scripts/[name].min.[hash:8].js'
    }),
    new HtmlWebpackPlugin({
      // html模板的路径
      template: './index.html',
      title: '',
      // 文件名以及文件将要存放的位置
      filename: 'index.html',
      favicon: './favicon.ico',
      inject: 'body',
      // 要在页面引入的chunk，根据entry的key配置，不配置就会引入所有页面的资源
      chunks: [
        'index',
        'vendor'
      ],
      // 这样每次客户端页面就会根据这个hash来判断页面是否有必要刷新
      // 在项目后续过程中，经常需要做些改动更新什么的，一但有改动，客户端页面就会自动更新
      hash: true,
      // 压缩HTML文件
      minify:{
        // 移除HTML中的注释
        removeComments: true,
        // 删除空白符与换行符
        collapseWhitespace: true
      }
    })
  ],
  resolve: {
    // 自动添加后缀，默认是当成js文件来查找路径
    // 空字符串在此是为了resolve一些在import文件时不带文件扩展名的表达式
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['*', '.web.js', '.js', '.json'],
    // 路径别名
    alias: {
      app: path.resolve(__dirname, 'src/app/'),
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
              sourceMap: false,
              importLoaders: 2,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              // 压缩css
              minimize: true
            },
          },
          {
            loader: 'postcss-loader', options: {
              config: './tools/postcss.config.js',
              sourceMap: false
            }
          },
          {
            loader: 'sass-loader', options: {sourceMap: false}
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
              sourceMap: false,
              importLoaders: 2,
              minimize: true
            }
          },
          {
            loader: 'postcss-loader', options: {
              config: './tools/postcss.config.js',
              sourceMap: false
            }
          },
          {
            loader: 'sass-loader', options: {sourceMap: false}
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
              sourceMap: false,
              importLoaders: 1,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              minimize: true
            }
          },
          {
            loader: 'postcss-loader', options: {
              config: './tools/postcss.config.js',
              sourceMap: false
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
}
