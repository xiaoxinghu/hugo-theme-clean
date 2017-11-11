var loaderUtils = require('loader-utils')
var Typography = require('typography')

module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  const exports = this.exec(source, this.resource);
  const theme = (exports && exports.default) ? exports.default : exports;

  // if (typeof func !== 'function') {
  //   throw new Error(`Module ${rel(this.resource)} does not export a function as default.`);
  // }

  // const theme = func(options)
  const typography = new Typography(theme)
  return typography.toString()
}
