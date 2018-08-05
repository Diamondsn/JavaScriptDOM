function getxhrobject(){
if(typeof XMLHttpRequest=="undefined"){
    try{
        XMLHttpRequest=new ActiveXObject("MSxml2.XMLHTTP.6.0");
    }
    catch(e){

    }
    try{
        XMLHttpRequest=new ActiveXObject("MSxml2.XMLHTTP.3.0");
    }
    catch(e){

    }
    try{
        XMLHttpRequest=new ActiveXObject("MSxml2.XMLHTTP");
    }
    catch(e){

    }
    return false;
}
    return new XMLHttpRequest;
}