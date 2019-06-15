module.exports = (api, options = {}) => {

  const {
    babelPresetEnvConfig = {},
  } = options

  api.assertVersion(7)

  return {
    presets: [
      [
        require('@babel/preset-env'), 
        {
          // "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false, defaults to "auto".
          modules: false,
          useBuiltIns: 'usage',
          corejs: 3,
          // Exclude transforms that make all code slower
          exclude: ['transform-typeof-symbol'],
          ...babelPresetEnvConfig
        }
      ]
    ].filter(Boolean),
    plugins: [
      // Experimental macros support. Will be documented after it's had some time
      // in the wild.
      require('babel-plugin-macros'),
      /**
       * @babel/plugin-proposal-decorators
       * 与@babel/plugin-proposal-class-properties同时配置时的要求
       * https://babeljs.io/docs/en/babel-plugin-proposal-decorators#legacy
       */
      [
        require('@babel/plugin-proposal-decorators'), 
        {
          legacy: true
        }
      ],
      [
        require('@babel/plugin-proposal-class-properties'), 
        {
          loose: true
        }
      ],
      require('@babel/plugin-syntax-dynamic-import'),
      /* [
        '@babel/plugin-transform-runtime', 
        {
          // corejs: 3, // IE 需要自己添加  Polyfills
          corejs: 3, // IE 需要自己添加  Polyfills
          helpers: true,
          regenerator: true,
          useESModules: true
        }
      ], */
      /* 
      * https://github.com/tc39/proposal-export-default-from#exporting-a-default-as-default
      * Exporting a default as default
      * export default from "mod";
      */
      require('@babel/plugin-proposal-export-default-from'),
      /*
      * export * as ns from "mod";
      */
      require('@babel/plugin-proposal-export-namespace-from'),
    ].filter(Boolean),
  }
}