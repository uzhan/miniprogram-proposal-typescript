interface Config {
  BASE_API: string; // 后端API地址
  PAY_API: string;  // 支付中心API地址
}

const config:Config = {
  BASE_API: 'http://mallapi.hicootest.com/v1',
  PAY_API: 'https://payapi.hicootest.com',
}

module.exports = config;
