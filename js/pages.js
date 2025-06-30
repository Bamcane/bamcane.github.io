// 感谢通义千问qw(((())))
function AddHead(Page)
{
    const head = document.getElementById("head");

    // <base>
    const base = document.createElement("base");
    base.href = "http://localhost:8080/";
    head.appendChild(base);

    // <link rel="stylesheet">
    const linkStyle = document.createElement("link");
    linkStyle.rel = "stylesheet";
    linkStyle.type = "text/css";
    linkStyle.href = "style.css";
    head.appendChild(linkStyle);

    // <link rel="shortcut icon">
    const linkIcon = document.createElement("link");
    linkIcon.rel = "shortcut icon";
    linkIcon.href = "images/bamcane.png";
    head.appendChild(linkIcon);

    // <meta charset>
    const metaCharset = document.createElement("meta");
    metaCharset.charset = "utf-8";
    head.appendChild(metaCharset);

    // <title>
    const title = document.createElement("title");
    title.textContent = "甘箨的小窝qw - " + Page;
    head.appendChild(title);
}

function AddPageList()
{
    const body = document.getElementById("body");

    // 创建按钮列表容器
    const buttonList = document.createElement("div");
    buttonList.className = "buttonlist";
    buttonList.id = "headbutton";

    // 主页链接
    const homeLink = document.createElement("a");
    homeLink.className = "button";
    homeLink.href = "index.html";
    homeLink.textContent = "主页";
    buttonList.appendChild(homeLink);

    // 文章页链接
    const articleLink = document.createElement("a");
    articleLink.className = "button";
    articleLink.href = "articles.html";
    articleLink.textContent = "文章";
    buttonList.appendChild(articleLink);

    // 插入到 body 最前面
    body.insertBefore(buttonList, body.firstChild);

    // 添加底部版权信息
    const footer = document.createElement("div");
    footer.className = "copyleft"
    footer.innerHTML = '<b> © 2023-2025 Bamcane <a href="https://github.com/Bamcane/bamcane.github.io" target="_blank">Open source in github</a></b>';
    body.appendChild(footer);
}

function AddArticle(Article, Time, Link)
{
    const container = document.getElementById("articles");

    // 创建 <a> 元素作为整体卡片
    const a = document.createElement("a");
    a.className = "article-card";
    a.href = "reader.html?article=" + encodeURIComponent(Link);

    // 创建左侧的文章标题
    const titleSpan = document.createElement("span");
    titleSpan.className = "article-title";
    titleSpan.textContent = Article;

    // 创建右侧的时间
    const timeSpan = document.createElement("span");
    timeSpan.className = "article-time";
    timeSpan.textContent = Time;

    // 组装结构
    a.appendChild(titleSpan);
    a.appendChild(timeSpan);

    // 添加到容器中
    container.appendChild(a);
}

// 懒得换就让AI写个这个awa
function SetBaseHref()
{
    let baseUrl;
    const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    
    if (isLocalhost)
    {
        baseUrl = "http://localhost:8080/";
    } 
    else
    {
        const repoUrl = window.location.origin + window.location.pathname.split('/').slice(0, -1).join('/') + '/';
        baseUrl = repoUrl;
    }

    let baseTag = document.querySelector('head base');
    if (!baseTag)
    {
        baseTag = document.createElement('base');
        document.head.appendChild(baseTag);
    }
    baseTag.href = baseUrl;
}
