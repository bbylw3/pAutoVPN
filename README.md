# NodeHub - AutoVPN节点导航

NodeHub 是一个优雅的单页面应用，采用现代化设计风格，为 [AutoVPN](https://github.com/acymz/AutoVPN) 项目提供导航服务。项目使用 Cloudflare Workers 部署，无需服务器，一键部署即可使用。

## 特性

- PornHub 风格的设计
- 📱 完美适配各种设备
- 🚀 轻量级单页面应用
- ⚡️ Cloudflare Workers 部署
- 🔄 GitHub Actions 自动更新
- ✅ 节点可用性验证

## 订阅格式

- V2ray 订阅链接
  - 支持 v2rayN、v2rayNG、Qv2ray 等主流客户端
  - 兼容 Clash Meta 等订阅转换

## 功能特点

- 自动采集：定时获取最新节点
- 质量保证：节点经过验证筛选
- 简单易用：一键复制订阅链接
- 实时反馈：复制操作的视觉反馈
- 自动更新：通过 GitHub Actions 执行
- 可用性：所有节点经过严格测试

## 快速部署

1. 登录到 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 `Workers & Pages`
3. 点击 `Create Worker` 创建新的 Worker
4. 将 `worker.js` 中的代码复制到编辑器中
5. 点击 `Save and Deploy` 保存并部署
6. 访问分配的 `.workers.dev` 域名即可使用

## 项目依赖

本项目是完全独立的单文件应用，不依赖任何外部库和框架，仅需要：

- Cloudflare Workers 环境
- 支持现代 CSS 特性的浏览器

## 致谢

- 节点来源：[AutoVPN](https://github.com/acymz/AutoVPN)
- 自动更新：GitHub Actions

## 免责声明

本项目仅供学习交流使用，请勿用于非法用途。使用本项目导航到的任何资源时，请遵守当地法律法规。

## 许可证

MIT License