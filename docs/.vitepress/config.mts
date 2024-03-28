import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lxdll 的 JavaScript 学习",
  description: "learn",
  base: "/Professional-JavaScript-for-Web-Developer-4th-learn/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "生活每天都一样，你要积极又向上", link: "/" },
      { text: "坚持就是胜利", link: "/" },
      { text: "每天坚持学习", link: "/" },
      { text: "加油～", link: "/" },
      { text: "加油～", link: "/" },
      { text: "加油～", link: "/" },
      { text: "加油～", link: "/" },
      { text: "加油～", link: "/" },
      { text: "加油～", link: "/" },
      { text: "加油～", link: "/" },
    ],

    sidebar: [
      {
        text: "第四章 变量、作用域与内存",
        items: [
          { text: "4.1.4 确定类型" },
          { text: "4.2 执行上下文与作用域" },
          { text: "4.3 垃圾回收" },
          { text: "4.4 小结" },
        ],
      },
      {
        text: "面试题-暂时整理",
        items: [
          { text: "面试题-暂时整理" }
        ]
      }
    ].map((item) => {
      return {
        ...item,
        items: item.items.map((i) => ({ text: i.text, link: i.text })),
      };
    }),

    socialLinks: [{ icon: "github", link: "https://github.com/Lxdll" }],
  },
});
