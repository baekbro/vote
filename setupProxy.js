const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }  // '/api' 접두어를 제거하고 백엔드에 전달
    })
  );
};
