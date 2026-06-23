# zhangjh024.github.io

> Jinghao 的个人博客 —— 记录技术笔记、项目复盘和日常思考。

基于 [Astro](https://astro.build) 6 + [AstroPaper](https://github.com/satnaing/astro-paper) 主题构建，使用 pnpm，托管在 GitHub Pages：push 到 `main` 后由 GitHub Actions 自动构建并部署。

在线地址：<https://zhangjh024.github.io>

## 技术栈

| 用途     | 选型                                                                       |
| :------- | :------------------------------------------------------------------------- |
| 框架     | [Astro](https://astro.build) 6（静态站点生成）                             |
| 主题     | [AstroPaper](https://github.com/satnaing/astro-paper)（深度定制）          |
| 样式     | [Tailwind CSS](https://tailwindcss.com) v4 + CSS 变量主题（亮 / 暗色）     |
| 语言     | TypeScript                                                                 |
| 包管理   | pnpm（Node ≥ 22.12）                                                       |
| 站内搜索 | [Pagefind](https://pagefind.app)                                           |
| 部署     | GitHub Actions → GitHub Pages                                              |

## 本地开发

```bash
pnpm install      # 安装依赖
pnpm dev          # 本地开发服务器 http://localhost:4321
pnpm build        # 类型检查 + 构建 + Pagefind 索引
pnpm preview      # 预览构建产物
```

## 写文章

文章是 Markdown，放在 `src/content/posts/<slug>.md`，文件名即 URL slug（`/posts/<slug>/`）。frontmatter 示例：

```yaml
---
title: "文章标题"
pubDatetime: 2026-06-23T09:00:00+08:00 # 注意：不能填未来时间，否则会被当成定时发布、不上线
description: 列表 / 搜索 / 分享时的摘要
tags: [essay, growth]
---
```

### 每篇文章的定制前端页

本博客的约定：**每篇文章单独写一套有设计感的前端页面来渲染**，Markdown 只作内容来源。

- Markdown 的 frontmatter 供列表 / 归档 / RSS / SEO / OG 使用；
- 在 `src/pages/posts/[...slug]/index.astro` 的 `customRenderers` 注册表里，把 slug 映射到 `src/pages/posts/[...slug]/_custom/<slug>.astro` 定制组件；
- 命中则渲染定制设计页，未命中自动回退默认 Markdown 排版（所以不写定制页的文章也能正常显示）。

> 坑：`getPostSlug()` 返回的是带前导斜杠的路径（如 `/10x-programmer`），注册表 key 也要带斜杠。

首篇定制页范例见 `src/pages/posts/[...slug]/_custom/10x-programmer.astro`。

## 部署

push 到 `main` → GitHub Actions 自动跑 `pnpm build` 并发布到 GitHub Pages，约 1 分钟生效。

## 致谢

主题基于 [AstroPaper](https://github.com/satnaing/astro-paper)（by Sat Naing，MIT License）。
