// 感谢通义千问qw(((())))
function AddHead(Page)
{
    const head = document.getElementById("head");

    // <link rel="shortcut icon">
    const linkIcon = document.createElement("link");
    linkIcon.rel = "shortcut icon";
    linkIcon.href = "https://avatars.githubusercontent.com/u/65482653";
    head.appendChild(linkIcon);

    // <title>
    const title = document.createElement("title");
    title.textContent = "甘箨的小窝qw - " + Page;
    head.appendChild(title);
}

function AddCopyleft()
{
    const body = document.getElementById("body");

    // 添加版权信息
    const copyleft = document.createElement("div");
    copyleft.className = "copyleft"
    copyleft.innerHTML = '<b> © 2023-2026 Bamcane <a href="https://github.com/Bamcane/bamcane.github.io" target="_blank">Open source in github</a></b>';

    // 插入到 body 最前面
    body.insertBefore(copyleft, body.firstChild);
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