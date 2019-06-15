module.exports = (api, options = {}, _env) => {
  const {
    babelPresetNeoCoreConfig = {},
    babelPresetReactConfig = {}
  } = options

  const env = _env || process.env.NODE_ENV || process.env.BABEL_ENV || 'development'

  const isEnvProduction = env === 'production';


  return {
    presets: [
      [require('babel-preset-neo-core'), babelPresetNeoCoreConfig],
      ['@babel/preset-react', {
        development: !isEnvProduction,
        useBuiltIns: true,
        ...babelPresetReactConfig
      }]
    ],
    plugins: [
      isEnvProduction && [
        // Remove PropTypes from production build
        require('babel-plugin-transform-react-remove-prop-types').default,
        {
          removeImport: true,
        },
      ],
    ].filter(Boolean),
  }
}
