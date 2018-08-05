function getnewcontent(){
    var xhr=getxhrobject();
    if(xhr){
         xhr.open("GET","serveroutput.txt",true);
         xhr.onreadystatechange=function(){
             if(xhr.readyState==4){
                 var para=document.createElement("p");
                 var txt=document.createTextNode(xhr.responseText);
                 para.appendChild(txt);
                 var testdiv=document.getElementById("testdiv");
                 testdiv.appendChild(para);
             }
         }
         xhr.send(null);
    }
    else{
        alert("you brower don't support XMLHTTPRequest");
    }
}

addLoadEvent(getnewcontent);