# 前台部署文档

## 前台对话部署

### 环境准备

[NodeJs](https://nodejs.org/) 19 及以上版本

### 项目运行

```sh
git clone https://github.com/ChinaGAI/AI-CHAT
cd ai-chat
npm install & npm install -g pm2
npm run build
pm2 start npm --name "ai-chat" -- start
```

然后打开 http://127.0.0.1:4000 即可
