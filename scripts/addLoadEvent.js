function addLoadEvent(func){
    var oldonloadEvent=window.onload;
    if(!oldonloadEvent){
        window.onload=func;
    }
    else{
        window.onload=function(){
            oldonloadEvent();
            func();
        }
    }
}