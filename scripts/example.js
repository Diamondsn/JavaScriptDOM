function insertnode(text){
    var str="<p>";
    str+=text;
    str+="</p>";
    document.write(text);
}

insertnode("YoYo");

window.alert(document.getElementById("test").innerHTML);