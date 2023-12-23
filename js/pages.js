
function AddHead(Page) {
    document.getElementById("head").innerHTML += '<link rel="stylesheet" type="text/css" href="style.css"/>'
    document.getElementById("head").innerHTML += '<link rel="shortcut icon" href="bamcane.png">'
    document.getElementById("head").innerHTML += '<meta charset="utf-8">'
    document.getElementById("head").innerHTML += '<title>甘蔗边上的竹林 - ' + Page + '</title>'
    document.getElementById("head").innerHTML += '<base href="https://bamcane.github.io/" target="_blank">'
}

function AddPageList() {
    let PagesStr
    PagesStr = ''
    PagesStr += '<div class="buttonlist" id="headbutton">'
    PagesStr += '<a class="button" href="index.html">主页</a>'
    PagesStr += '<a class="button" href="articles.html">文章</a>'
    PagesStr += '</div>'

    PagesStr += document.getElementById("body").innerHTML
    
    PagesStr += '<p style="bottom: 0%; position:absolute; 100%;"><b><a href="https://github.com/Bamcane/bamcane.github.io">Open source in github</a></b></p>'

    document.getElementById("body").innerHTML = PagesStr
}

function AddArticle(Article, Link) {
    document.getElementById("articles").innerHTML = '<p><b><a class="articlelink" href="articles/' + Link + '">' + Article + '</a></b></p>'
}