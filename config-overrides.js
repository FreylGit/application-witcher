const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@ui': 'src/components/UI',
    '@constants': 'src/constants',
    '@containers': 'src/containers',
    '@utils': 'src/utils',
    '@styles': 'src/styles',
    '@routes': 'src/routes',
    '@static': 'src/static',
    '@hooks': 'src/hooks',
    '@services': 'src/services',
  })(config)
  return config
}
