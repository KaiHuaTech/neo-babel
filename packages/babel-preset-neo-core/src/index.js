const getCommonBabelConfig = require('./getCommonBabelConfig')

module.exports = (api, config = {}) => {
  return getCommonBabelConfig(api, config)
}