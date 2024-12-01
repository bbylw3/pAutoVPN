# NodeHub - 简洁的节点导航

NodeHub 是一个优雅的单页面应用，采用现代化设计风格，为 [SS-Collector](https://github.com/lagzian/SS-Collector) 项目提供导航服务。项目使用 Cloudflare Workers 部署，无需服务器，一键部署即可使用。

## 特性

- 🎨 简约现代的设计风格
- 📱 完美适配各种设备
- 🚀 轻量级单页面应用
- ⚡️ Cloudflare Workers 部署
- 🔄 多种订阅格式支持
- 🕒 自动定时更新节点

## 支持的订阅格式

- Clash Meta 订阅
- 通用 Base64 订阅
- sing-box 订阅
- Reality 订阅
- VMESS 订阅
- Trinity SS/VMESS 订阅

## 更新频率

- Shadowsocks/VMESS：每12小时更新
- Reality/其他配置：每小时更新
- Trinity 配置：每5小时更新

## 支持的客户端

- Clash Meta/Clash Verge
- NekoRay/NekoBox
- Shadowrocket
- sing-box
- V2ray 系列客户端

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

- 节点来源：[SS-Collector](https://github.com/lagzian/SS-Collector)
- 节点分类：[new-configs-collector](https://github.com/lagzian/new-configs-collector)
- 客户端支持：[Clash.Meta](https://github.com/MetaCubeX/Clash.Meta)、[sing-box](https://github.com/SagerNet/sing-box)

## 免责声明

本项目仅供学习交流使用，请勿用于非法用途。使用本项目导航到的任何资源时，请遵守当地法律法规。

## 许可证

MIT License