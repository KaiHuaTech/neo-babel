const getCommonBabelConfig = require('./src/getCommonBabelConfig')

module.exports = (api, config = {}) => {
  api.cache(false)
  return getCommonBabelConfig(api, config)
}