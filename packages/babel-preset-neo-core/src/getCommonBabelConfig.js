module.exports = (api, options = {}) => {
  const presets = []
  const plugins = []

  api.assertVersion(7)
  
  presets.push([require('@babel/preset-env'), {
    modules: 'commonjs',
    useBuiltIns: 'usage',
    corejs: 3,
  }])

  /* plugins.push(
    [
      '@babel/plugin-transform-runtime', 
      {
        // corejs: 3, // IE 需要自己添加  Polyfills
        corejs: 3, // IE 需要自己添加  Polyfills
        helpers: true,
        regenerator: true,
        useESModules: true
      }
    ]
  ) */

  /**
   * @babel/plugin-proposal-decorators
   * 与@babel/plugin-proposal-class-properties同时配置时的要求
   * https://babeljs.io/docs/en/babel-plugin-proposal-decorators#legacy
   */
  plugins.push(
    [
      require('@babel/plugin-proposal-decorators'), 
      {
        legacy: true
      }
    ]
  )

  plugins.push(
    [
      require('@babel/plugin-proposal-class-properties'), 
      {
        loose: true
      }
    ]
  )

  plugins.push(require('@babel/plugin-syntax-dynamic-import'))

  /* 
  * https://github.com/tc39/proposal-export-default-from#exporting-a-default-as-default
  * Exporting a default as default
  * export default from "mod";
  */
  plugins.push(require('@babel/plugin-proposal-export-default-from'))

  /*
  * export * as ns from "mod";
  */
  plugins.push(require('@babel/plugin-proposal-export-namespace-from'))

  return {
    presets,
    plugins
  }
}