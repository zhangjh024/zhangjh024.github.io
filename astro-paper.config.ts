import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://zhangjh024.github.io/",
    title: "Jinghao's Blog",
    description: "记录技术、项目与日常思考的个人博客。",
    author: "Jinghao Zhang",
    profile: "https://github.com/zhangjh024",
    ogImage: "default-og.jpg",
    lang: "zh",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    // 动态 OG 图用 satori 渲染标题，默认不含中文字体会乱码，先用静态封面，想要再开
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/zhangjh024/zhangjh024.github.io/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/zhangjh024" },
    // 改成你自己的邮箱；不需要的社交项删掉即可
    { name: "mail", url: "mailto:your-email@example.com" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
