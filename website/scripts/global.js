function addLoadEvent(func){
    var oldonloadevent=window.onload;
    if(typeof oldonloadevent!="function")
    window.onload=func;
    else{
        window.onload=function(){
            oldonloadevent();
            func();
        }
    }
}

function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }
    else{
       parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function addClass(element,value)
{
    if(!element.className)
    {
        element.className=value;
    }
    else{
        element.className=element.className+" "+value;
    }
}

function highlightPage()
{
    var headers=document.getElementsByTagName("header");
    if(headers.length==0) return false;
    var nav=headers[0].getElementsByTagName("nav");
    if(nav.length==0) return false;
    var links=nav[0].getElementsByTagName("a");
    for(var i=0;i<links.length;++i)
    {
        var link=links[i].getAttribute("href");
        if(window.location.href.indexOf(link)!=-1)
        {
            addClass(links[i],"here");
        }
        var linktxt=links[i].lastChild.nodeValue.toLowerCase;
        document.getElementsByTagName("body")[0].setAttribute("id",linktxt);
    }
}

addLoadEvent(highlightPage);