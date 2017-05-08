## 项目说明 :scroll:

### 目录结构

```
project/
  src/
    app/
      components/
        ...
      index.js
      routes.js
    assets/
      fonts/
      styles/
        plugins/
      app.scss
      iconfont.scss
      mixins.scss
      images/
    index.html
    favicon.ico
  tools/
    postcss.config.js
    server.js
  package.json
  webpack.dev.config.js
  weebpack.prod.config.js
```

### 样式

样式分公共样式与私有样式，前者位于styles文件内，后者位于每个组件文件夹内。

  * 公共样式：

    1. [normalize.css](https://github.com/necolas/normalize.css) 使跨浏览器保持一致，以包的形式引入。

    2. `app.scss` 根据项目定制的样式，如：浮动、水平垂直居中、重置radio默认样式等等。

    3. `mixins.scss` 反复用到的样式，但属性值又有点不同的情况下，可以写一个mixin，比如：button、input、checkbox等等，这些控件经常用到，写成mixin每次可以根据需求来定制。

    4. `animations.scss` 把动画单独保存一个文件。

    5. `iconfont.scss` 字体图标，本项目采用[iconfont](http://www.iconfont.cn)。

    6. 如果有其它插件自带的样式文件可以在styles目录下新建 `plugins` 文件夹，放置其中。

  * 私有样式：

    组件中的样式是私有样式，对应组件文件。本项目引用CSSModules，保证类名的唯一。

【建议】CSS Modules是对现有的CSS做减法。为了追求简单可控，建议遵循如下原则：

* 不使用选择器（id,伪类，标签等)，只使用class名来定义样式

* 不层叠多个class，只使用一个class把所有样式定义好

* 所有样式通过 composes 组合来实现复用

* 不嵌套

公有样式不可以使用composes



### 组件
