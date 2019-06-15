const getConfig = require('./src/index');

module.exports = (api, options = {}) => {
  api.cache(false)
  const config = getConfig(api, options)
  return config
}