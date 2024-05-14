# 后端部署文档

## ！！！.需要一台安装宝塔的服务器

需要环境 PHP8.1 + Mysql8.0 + ngnix

下载完整的代码包: [ai-chat-api-v1.0.0.zip](https://gitee.com/chinag-ai/ai-chat-doc/raw/main/ai-chat-api-v1.0.0.zip)

## 操作

1. 加代码上传至宝塔服务器
2. 宝塔 mysql 创建数据库
3. 点击数据库导入 上传对应版本 sql 上传导入
4. 设置网站伪静态选择 laravel5 保存
5. 运行目录设置为 public 保存
6. .env.example 文件修改为 .env
7. APP_KEY 使用命令生成或者自己填写（如果不在乎安全可以忽略）
8. 数据配置按着自己的配置设置好
   到现在为止 如果操作正常现在 API 应该是可以正常访问了

## 运行 websocket 服务

1. 进入网站目录运行 php artisan wk start
2. 如果这边运行正常 那就通过守护模式（php artisan wk start --d） 启动 workman 了
3. 打开网站的配置文件 复制下面代码进入保存
   ```sh
   location /wss
   {
       proxy_pass http://127.0.0.1:2346;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection "Upgrade";
       proxy_set_header X-Real-IP $remote_addr;
   }
   ```
   监听的端口是实际你运行 workman 服务器链接的端口 可在 app\console\Commands 下面进行修改
   服务器的话 切记安全组给放行对应的端口

## 尝试登陆后台 (必须完成)

1. 打开网站地址输入账号 admin 密码 admin123
2. 登陆后 打开系统管理进入系统配置
3. 设置网站域名和文件访问域名 可以是 ip 这一步必须要 workman 和文件访问需求 !!!
