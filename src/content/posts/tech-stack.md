---
title: 这个博客的技术选型
pubDatetime: 2026-06-10T10:00:00Z
description: Astro 6 + AstroPaper 主题 + GitHub Actions 自动部署，聊聊这个博客背后的技术栈。
tags: [blog, frontend]
---

简单聊聊这个博客背后的技术选型。

## 技术栈

- **框架**：Astro 6（静态站点生成）
- **主题**：AstroPaper（极简、响应式、SEO 友好）
- **部署**：GitHub Pages + GitHub Actions

## 工作流

写 Markdown → `git push` → CI 自动构建并发布，全程不用手动操作。

## 为什么是 Astro

Astro 默认零 JS，构建出来的是纯静态页面，加载快、SEO 好，又能在需要时按需引入交互组件，自由度很高。
