# 后端文档

## ！！！.需要一台安装宝塔的服务器

    需要环境 PHP8.1 + Mysql8.0 + ngnix

## 1. 数据库导入 后端代码 database 目录下的 sql 文件创建数据库且导入

    1.1 mysql 数据创建数据库
    1.2 点击数据库导入 上传对应版本sql 上传导入

## 2. composer install 以后的代码上传到网站目录

    2.1 如果服务器安装有cpmposer 也可以上传后台代码以后 切到对应目录安装扩展
    2.2 设置网站伪静态选择laravel5 保存
    2.3 运行目录设置为public 保存
    2.4 .env.example 文件修改为 .env
    2.5 APP_KEY 使用命令生成或者自己填写（如果不在乎安全可以忽略）
    2.6 数据配置按着自己的配置设置好
    到现在为止 如果操作正常现在API应该是可以正常访问了

## 3.尝试登陆后台 (必须完成)

    3.1 打开网站地址输入账号 admin 密码admin123
    3.2 登陆后 打开系统管理进入系统配置
    3.3 设置网站域名和文件访问域名 可以是ip 这一步必须要 workman和文件访问需求 !!!

## 4.打开服务器命令行

    4.1 进入网站目录运行 php artisan wk start
    4.2 如果这边运行正常 那就通过守护模式（php artisan wk start --d） 启动workman了

## 5.ngnix 配置修改

    5.1 打开网站的配置文件 复制下面代码进入保存
    ``` sh
    location /wss
    {
      proxy_pass http://127.0.0.1:2346;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "Upgrade";
      proxy_set_header X-Real-IP $remote_addr;
    }
    ```
    监听的端口是实际你运行workman 服务器链接的端口 可在app\console\Commands 下面进行修改
    服务器的话 切记安全组给放行对应的端口
