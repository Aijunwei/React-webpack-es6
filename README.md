# React-webpack-es6
React+webpack+es6 使用babel-loader编译不通过问题

一个简单的使用React实现的Hello World 样例。<br/>
package.json配置：<br/>
"devDependencies": {<br/>
    "babel-core": "^6.2.1<br/>
    "babel-loader": "^6.2.0",<br/>
      "react": "^0.13.3",<br/>
    "jsx-loader": "^0.13.2"<br/>
  }<br/>
  使用的babel-loader 6.2.1 ，babel-core6.2.0会导致 react 使用es6编写的代码的编译不通过，报错在使用html标签的位置。<br/>
  
  修改配置为<br/>
    "devDependencies": {<br/>
  "babel-core": "^5.5.8",<br/>
    "babel-loader": "^5.1.4",<br/>
     "react": "^0.13.3",<br/>
    "jsx-loader": "^0.13.2"<br/>
  }<br/>
  cd到项目目录下使用webpack可通过编译。<br/>
  
  1. 运行前提：windows64 已安装了nodejs npm，webpack webpack-dev-server在全局安装（npm install -global webpack webpack-dev-server）<br/>
  cd 到项目目录下：输入webpack<br/>
  2. 可以通过配置好的命令 npm run watch 运行，浏览器上查看（localhost:8080）<br/>
  
  
  
