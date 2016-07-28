> webpack-dev-server  不修改配置文件

- iframe mode
  - 运行 webpack-dev-server( "start": "webpack-dev-server --hot")
  - 浏览器打开 http://localhost:7777/webpack-dev-server/index.html
- inline mode
  - 在index.html中添加
    <script src="http://localhost:7777/webpack-dev-server.js"></script>
  - 运行 webpack-dev-server
  - 浏览器打开 http://localhost:8080/index.html
  
>.gitignore

 - 在需要创建  .gitignore 文件的文件夹, 右键选择Git Bash 进入命令行，进入项目所在目录。
 - 输入 touch .gitignore 在文件夹就生成了一个“.gitignore”文件。然后在”.gitignore” 文件里输入你要忽略的文件夹及其文件就可以了。
