# Todo_Doing \_Done

## 食用方法

1. 安装依赖

```
npm install
```

2. 启动 json-server 服务器

```
npm run server
```

3. 启动 react 项目

```
npm run start
```

### 数据储存位置

db.json

### 配置文件

package.json

### 注意事项

1. 数据请求存在于 json-server,所以请启动 json-server
2. 可在局域网内访问
3. 设置局域网内需要调整 Store.ts 中的 url 和 package.json 中的"server": "json-server --port 5050 --watch -H 10.227.3.20 db.json"
