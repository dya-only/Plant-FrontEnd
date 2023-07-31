const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://ec2-13-125-243-232.ap-northeast-2.compute.amazonaws.com:4321',
      changeOrigin: true
    })
  )
}