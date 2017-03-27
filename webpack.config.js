const path = require('path');
const args = require('minimist')(process.argv.slice(2));

const allowedEnvironments = [
  'dev', 'prod', 'test'
];

let env = (args._.length > 0 && args._.indexOf('start') !== -1) 
  ? 'test' : (args.env ? args.env : 'dev');

// react webpack env
process.env.RW_ENV = env;

function buildConfiguration(env){
  const isValidEnv = env && env.length  > 0 && allowedEnvironments.indexOf(env) !== -1;
  const validEnv = isValidEnv ? env : 'dev';
  const validConfigPath = path.join(__dirname, 'config', validEnv, 'index');
  const config = require(validConfigPath);
  return config;
}

module.exports = buildConfiguration(env);
