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
    linkIcon.href = "bamcane.png";
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
    footer.style.position = "fixed";
    footer.style.bottom = "0";
    footer.style.width = "100%";
    footer.innerHTML = '<b> © 2023-2025 Bamcane <a href="https://github.com/Bamcane/bamcane.github.io" target="_blank">Open source in github</a></b>';
    body.appendChild(footer);
}

function AddArticle(Article, Time, Link)
{
    const container = document.getElementById("articles");

    // 创建 <p> 元素
    const p = document.createElement("p");

    // 创建 <b> 元素
    const b = document.createElement("b");

    // 创建 <a> 元素
    const a = document.createElement("a");
    a.className = "articlelink";
    a.href = "reader.html?article=" + encodeURIComponent(Link);
    a.textContent = Article + "  " + Time;

    // 组装结构
    b.appendChild(a);
    p.appendChild(b);
    container.appendChild(p);
}
