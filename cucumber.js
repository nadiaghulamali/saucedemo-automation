module.exports = {
  default: `--require-module ts-node/register \
            --require src/support/**/*.ts \
            --require src/steps/**/*.ts \
            --format allure-cucumberjs/reporter`  
};
