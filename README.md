# admin-framework
基于vue+iview的后台管理框架

### 说明
基于vue2+iview2搭建的通用后台管理框架。

1.修改了iview框架默认dev模式的打包路径     
2.修改了iview框架默认build模式的打包路径，使其更加规范化，并且支持file文件协议直接打开index.html，无需服务器     
3.加入iview-loader，用于编译iview特殊组件     
4.支持同步和异步组件加载，分别在router-sync.js和router.js进行配置，在main.js中自行更改引用     

### 截图
![image](https://pcs.baidu.com/rest/2.0/pcs/thumbnail?method=generate&app_id=250528&path=%2F%E9%A1%B9%E7%9B%AE%E6%88%AA%E5%9B%BE%2FQQ%E6%88%AA%E5%9B%BE20171018122936.png&quality=90&size=c1600_u900)    
      
![image](https://pcs.baidu.com/rest/2.0/pcs/thumbnail?method=generate&app_id=250528&path=%2F%E9%A1%B9%E7%9B%AE%E6%88%AA%E5%9B%BE%2FQQ%E6%88%AA%E5%9B%BE20171018123005.png&quality=90&size=c1600_u900)

### 使用
进入项目目录       

1.安装依赖
```
npm install
```
2.运行dev模式      
```
npm run dev
```
3.打包    
```
npm run build
```