module.exports = () => ({
  /*
  * The list of plugins for PostCSS
  * https://github.com/postcss/postcss
  */
  plugins: [
    // Transfer @import rule by inlining content, e.g. @import 'normalize.css'
    // https://github.com/postcss/postcss-import
    require('postcss-import')(),

    // Convert CSS shorthand filters to SVG equivalent, e.g. .blur { filter: blur(4px); }
    // https://github.com/iamvdo/pleeease-filters
    require('pleeease-filters')(),

    // W3C CSS Level4 :matches() pseudo class, e.g. p:matches(:first-child, .special) { }
    // https://github.com/postcss/postcss-selector-matches
    require('postcss-selector-matches')(),

    // Transforms :not() W3C CSS Level 4 pseudo class to :not() CSS Level 3 selectors
    // https://github.com/postcss/postcss-selector-not
    require('postcss-selector-not')(),

    // Postcss flexbox bug fixer
    // https://github.com/luisrudge/postcss-flexbugs-fixes
    require('postcss-flexbugs-fixes')(),

    // Add vendor prefixes to CSS rules using values from caniuse.com
    // https://github.com/postcss/autoprefixer
    require('autoprefixer')(/* package.json/browserslist */),

    // PreCSS is a tool that allows you to use Sass-like markup in your CSS files
    // https://github.com/jonathantneal/precss
    require('precss')({ /* options */ })
  ]
});
