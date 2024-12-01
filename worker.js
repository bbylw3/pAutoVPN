const CSS_CONTENT = `
:root {
    --primary: #ff9000;
    --bg: #0f0f0f;
    --card-bg: #1a1a1a;
    --text: #ffffff;
    --text-secondary: #999999;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--bg);
    color: var(--text);
    font-family: -apple-system, system-ui, sans-serif;
    line-height: 1.5;
}

/* Header */
.header {
    background: #000;
    padding: 1.5rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
}

.logo {
    font-size: 2rem;
    font-weight: bold;
    color: var(--text);
}

.logo span {
    color: var(--primary);
}

/* Main Content */
.main {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 8rem 2rem 4rem;
}

/* Hero Section */
.hero {
    text-align: center;
    margin-bottom: 6rem;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.hero-title span {
    color: var(--primary);
}

.hero-description {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto 2rem;
}

/* Features Grid */
.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 6rem;
}

.feature-card {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: var(--radius);
    transition: transform 0.2s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h3 {
    color: var(--primary);
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.feature-card ul {
    list-style: none;
}

.feature-card li {
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;
}

.feature-card li:before {
    content: "→";
    color: var(--primary);
    position: absolute;
    left: 0;
}

/* Button */
.cta-button {
    display: inline-block;
    background: var(--primary);
    color: var(--text);
    padding: 1rem 2.5rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
}

.cta-button:hover {
    transform: translateY(-2px);
    filter: brightness(110%);
}

/* Footer */
.footer {
    text-align: center;
    padding: 4rem 0;
    color: var(--text-secondary);
    border-top: 1px solid rgba(255,255,255,0.1);
}

/* 添加页脚链接样式 */
.footer a {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.2s ease;
}

.footer a:hover {
    color: var(--text);
    text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .main {
        padding: 6rem 1.5rem 3rem;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-description {
        font-size: 1.1rem;
    }
    
    .feature-card {
        padding: 1.5rem;
    }
}

/* 订阅卡片特殊样式 */
.subscription-card {
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.subscription-card h3 {
    margin-bottom: 0.5rem;
}

.subscription-card:hover {
    background: var(--primary);
}

.subscription-card:hover h3 {
    color: var(--text);
}

/* 添加提示文本样式 */
.subscription-tip {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-top: 0.5rem;
}

.feature-card a {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.2s ease;
}

.feature-card a:hover {
    color: var(--text);
    text-decoration: underline;
}
`;

const SCRIPT_CONTENT = `
async function copySubscription(url) {
    try {
        await navigator.clipboard.writeText(url);
        alert('订阅链接已复制到剪贴板！');
    } catch (err) {
        prompt('请复制以下订阅链接:', url);
    }
}
`;

const HTML_CONTENT = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NodeHub - 免费节点导航</title>
    <style>${CSS_CONTENT}</style>
</head>
<body>
    <header class="header">
        <div class="logo">Node<span>Hub</span></div>
    </header>

    <main class="main">
        <section class="hero">
            <h1 class="hero-title">免费节点 <span>订阅合集</span></h1>
            <p class="hero-description">
                多协议支持，自动更新维护，完全免费的节点订阅服务
            </p>
            <a href="https://github.com/lagzian/SS-Collector" 
               target="_blank" class="cta-button">
                访问项目主页
            </a>
        </section>

        <section class="features">
            <div class="feature-card">
                <h3>项目说明</h3>
                <ul>
                    <li>基于 SS-Collector 项目维护</li>
                    <li>Shadowsocks/VMESS 每12小时更新</li>
                    <li>Reality/其他配置每小时更新</li>
                    <li>Trinity 配置每5小时更新</li>
                </ul>
            </div>
            
            <div class="feature-card">
                <h3>使用方法</h3>
                <ul>
                    <li>复制对应客户端的订阅链接</li>
                    <li>在客户端中添加订阅地址</li>
                    <li>定期更新订阅以获取最新节点</li>
                    <li>推荐每天更新一次订阅</li>
                </ul>
            </div>
            
            <div class="feature-card">
                <h3>相关项目</h3>
                <ul>
                    <li><a href="https://github.com/lagzian/SS-Collector" target="_blank">SS-Collector</a> - 主要节点来源</li>
                    <li><a href="https://github.com/MetaCubeX/Clash.Meta" target="_blank">Clash.Meta</a></li>
                    <li><a href="https://github.com/SagerNet/sing-box" target="_blank">sing-box</a></li>
                    <li><a href="https://github.com/lagzian/new-configs-collector" target="_blank">国家/地区分类订阅</a></li>
                </ul>
            </div>
        </section>

        <section class="features">
            <!-- 基础订阅 -->
            <div class="feature-card subscription-card" 
                onclick="copySubscription('https://raw.githubusercontent.com/lagzian/SS-Collector/main/mix_clash.yaml')">
                <h3>Clash Meta 订阅</h3>
                <p class="subscription-tip">点击复制订阅链接</p>
            </div>
            
            <div class="feature-card subscription-card" 
                onclick="copySubscription('https://raw.githubusercontent.com/lagzian/SS-Collector/main/mix_B64.txt')">
                <h3>Base64 订阅</h3>
                <p class="subscription-tip">点击复制订阅链接</p>
            </div>
            
            <div class="feature-card subscription-card" 
                onclick="copySubscription('https://raw.githubusercontent.com/lagzian/SS-Collector/main/mix_singbox.json')">
                <h3>sing-box 订阅</h3>
                <p class="subscription-tip">点击复制订阅链接</p>
            </div>

            <!-- Reality 订阅 -->
            <div class="feature-card subscription-card" 
                onclick="copySubscription('https://raw.githubusercontent.com/lagzian/SS-Collector/main/reality_B64.txt')">
                <h3>Reality 订阅</h3>
                <p class="subscription-tip">点击复制订阅链接</p>
            </div>

            <!-- VMESS 订阅 -->
            <div class="feature-card subscription-card" 
                onclick="copySubscription('https://raw.githubusercontent.com/lagzian/SS-Collector/main/vmess_B64.txt')">
                <h3>VMESS 订阅</h3>
                <p class="subscription-tip">点击复制订阅链接</p>
            </div>

            <!-- Trinity 订阅 -->
            <div class="feature-card subscription-card" 
                onclick="copySubscription('https://raw.githubusercontent.com/lagzian/SS-Collector/main/SS/Trinity')">
                <h3>Trinity SS 订阅</h3>
                <p class="subscription-tip">150+ 速度测试节点</p>
            </div>

            <div class="feature-card subscription-card" 
                onclick="copySubscription('https://raw.githubusercontent.com/lagzian/SS-Collector/main/SS/VM_Trinity')">
                <h3>Trinity VMESS 订阅</h3>
                <p class="subscription-tip">200+ 速度测试节点</p>
            </div>
        </section>

        <footer class="footer">
            <p>本站基于 <a href="https://github.com/lagzian/SS-Collector" target="_blank">SS-Collector</a> 项目提供导航服务</p>
            <p>感谢 <a href="https://github.com/lagzian" target="_blank">lagzian</a> 维护的免费节点项目</p>
            <p>仅供学习交流使用，请遵守当地法律法规</p>
            <p>上次更新时间：${getUpdateTime()}</p>
        </footer>
    </main>
    <script>${SCRIPT_CONTENT}</script>
</body>
</html>`;

// 获取更新时间
function getUpdateTime() {
    const now = new Date();
    return now.toLocaleString('zh-CN', {
        timeZone: 'Asia/Shanghai'
    });
}

// 安全头
const securityHeaders = {
    'Content-Type': 'text/html;charset=UTF-8',
    'Cache-Control': 'public, max-age=3600',
    'Content-Security-Policy': "default-src 'self' raw.githubusercontent.com; style-src 'unsafe-inline'; script-src 'unsafe-inline'",
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY'
};

// 请求处理
async function handleRequest(request) {
    return new Response(HTML_CONTENT, {
        headers: securityHeaders
    });
}

// 事件监听器
addEventListener('fetch', event => {
    event.respondWith(
        handleRequest(event.request).catch(err => {
            return new Response('服务暂时不可用', { status: 500 })
        })
    );
});