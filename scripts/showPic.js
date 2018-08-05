function showPic(whicPic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whicPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    if (document.getElementById("description")) {
        if (whicPic.getAttribute("title")) {
            var text = whicPic.getAttribute("title");
        }
        else {
            var text = "";
        }
        description.firstChild.nodeValue = text;
    }
    return true;
}

function prepare() {
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("gallerylist")) {
        return false;
    }
    var gallerylist = document.getElementById("gallerylist");
    var link = gallerylist.getElementsByTagName("a");
    for (var i = 0; i < link.length; ++i) {
        link[i].onclick = function () {
            return !showPic(this);
        }
        link[i].onkeypress = link[i].onclick;
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof oldonload != "function") {
        window.onload = func;
    }
    else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function prepareplaceholder() {
    var placehold = document.createElement("img");
    placehold.setAttribute("src", "images/defalult.jpg");
    placehold.setAttribute("alt", "placeholder");
    placehold.setAttribute("id", "placeholder");
    var descript = document.createElement("p");
    descript.setAttribute("id", "description");
    var txt = document.createTextNode("Choose One Photo");
    descript.appendChild(txt);
    // document.body.appendChild(placehold);
    // document.body.appendChild(descript);
    var list = document.getElementById("gallerylist");
    insertAfter(placehold, list);
    insertAfter(descript, list);
}

function insertAfter(newNode, targetNode) {
    var parent = targetNode.parentNode;
    if (parent.lastChild === targetNode) {
        parent.appendChild(newNode);
    }
    else {
        parent.insertBefore(newNode, targetNode.nextSibling);
    }
}

addLoadEvent(prepare);
addLoadEvent(prepareplaceholder);