function ShowPic(whicPic)
{
    var source=whicPic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text=whicPic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text;
}