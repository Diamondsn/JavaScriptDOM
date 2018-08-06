function displayabbr(){
      var abbrs=document.getElementsByTagName("abbr");
      if(abbrs.length<1)
      return false;

      var arr=new Array();
      for(var i=0;i<abbrs.length;++i){
          var abbr=abbrs[i];
          if(abbr.childNodes.length<1) continue;
            var title=abbr.getAttribute("title");
            var txt=abbr.firstChild.nodeValue;
            arr[txt]=title;
      }

      console.log(arr.length);

      var datalist=document.createElement("dl");
      for(var t in arr){
            var result=arr[t];

            var dldt=document.createElement("dt");
            var dldt_txt=document.createTextNode(t); 
            dldt.appendChild(dldt_txt);

            var dldd=document.createElement("dd");
            var dldd_txt=document.createTextNode(result);
            dldd.appendChild(dldd_txt);

            datalist.appendChild(dldt);
            datalist.appendChild(dldd);
      }

      var h2=document.createElement("h2");
      var Abbrr=document.createTextNode("Abbr");
      h2.appendChild(Abbrr);
      document.body.appendChild(h2);
      document.body.appendChild(datalist);
}

function displayblock(){
      var blockquotes=document.getElementsByTagName("blockquote");
      if(blockquotes.length<1)
      return false;

      for(var i=0;i<blockquotes.length;++i)
      {
            var blockquote=blockquotes[i];
            var cite=blockquote.getAttribute("cite");

            var a=document.createElement("a");
            var txt=document.createTextNode("source");
            a.appendChild(txt);
            a.setAttribute("href",cite);


            var childs=blockquote.getElementsByTagName("*");
            var lastchild=childs[childs.length-1];
            //不可使用var lastchild=blockquote.lastchild;
            //lastchild是文本节点换行符;
            lastchild.appendChild(a);

      }
}

addLoadEvent(displayabbr);
addLoadEvent(displayblock);