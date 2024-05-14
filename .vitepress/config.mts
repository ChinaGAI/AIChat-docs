import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "智能聊天机器人",
  description: "ChatGPT AI Chat",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  vite: {
    server: {
      host: "0.0.0.0",
    },
    publicDir: "public",
  },
  themeConfig: {
    logo: "/logo.png",

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "指南", link: "/guide/introduction" },
      { text: "开发", link: "/development/environment/frontend" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "开始",
          items: [{ text: "简介", link: "/guide/introduction" }],
        },
        {
          text: "部署",
          items: [
            { text: "前台部署", link: "/guide/deploy/frontend" },
            { text: "后台部署", link: "/guide/deploy/backend" },
          ],
        },
        {
          text: "使用",
          items: [
            { text: "API KEY和模型设置", link: "/guide/usage/apikey-models" },
            { text: "后台权限", link: "/guide/usage/permission" },
          ],
        },
      ],
      "/development": [
        {
          text: "前端",
          items: [
            { text: "快速开始", link: "/development/frontend/quick-start" },
          ],
        },
        {
          text: "后端",
          items: [{ text: "快速开始", link: "/development/backend" }],
        },
      ],
    },

    outline: {
      label: "目录",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/ChinaGAI/AI-CHAT" },
    ],
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
});
