> webpack-dev-server  不修改配置文件

- iframe mode
  - 运行 webpack-dev-server( "start": "webpack-dev-server --hot")
  - 浏览器打开 http://localhost:7777/webpack-dev-server/index.html
- inline mode
  - 在index.html中添加
    <script src="http://localhost:7777/webpack-dev-server.js"></script>
  - 运行 webpack-dev-server
  - 浏览器打开 http://localhost:8080/index.html
