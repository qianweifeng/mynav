// 更新日期
document.getElementById('update-date').textContent = new Date().toLocaleDateString();

// 示例数据 - 实际使用时可以替换为自己的收藏
const websites = [
    {
        name: "GitHub",
        url: "https://github.com",
        description: "代码托管平台",
        favicon: "G"
    },
    {
        name: "Stack Overflow",
        url: "https://stackoverflow.com",
        description: "程序员问答社区",
        favicon: "S"
    },
    {
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        description: "Web开发文档",
        favicon: "M"
    },
    // 可以添加更多网站...
];

// 动态生成网站卡片
const gridContainer = document.querySelector('.grid-container');

websites.forEach(site => {
    const card = document.createElement('a');
    card.href = site.url;
    card.className = 'website-card';
    card.target = '_blank';
    
    card.innerHTML = `
        <div class="card-content">
            <div class="favicon">${site.favicon}</div>
            <h3>${site.name}</h3>
            <p>${site.description}</p>
        </div>
    `;
    
    gridContainer.appendChild(card);
});