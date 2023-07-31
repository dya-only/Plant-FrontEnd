const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/upload_sensor_data',
    createProxyMiddleware({
      target: 'http://3.39.224.161:1234',
      changeOrigin: true
    })
  )
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://ec2-13-125-243-232.ap-northeast-2.compute.amazonaws.com:4321',
      changeOrigin: true
    })
  )
}