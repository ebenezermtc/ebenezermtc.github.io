nav_or_msie_4plus = false;
nav_or_msie_4plus = navigator.userAgent.indexOf ("Mozilla") != -1 
nav_or_msie_4plus = nav_or_msie_4plus && parseInt(navigator.appVersion.substring(0,1)) >= 4;
is_msie = false;
is_msie = navigator.userAgent.indexOf ("MSIE") != -1 ;

function openWindow(myURL, Myname, weite, hoehe)
{
if(window.Myname)
if(typeOf(Myname) == "object")
{
var zeit = new Date();
var ms = zeit.getMilliseconds();
Myname = ms + Myname;
}
MyWindow = window.open( myURL,Myname,'toolbar=no,status=no,scrollbars=no,location=no,menubar=no,directories=no, width= '+weite+', height= '+hoehe+'');
MyWindow.moveTo((screen.width/2-weite/2),(screen.height/2-hoehe/2));
MyWindow.focus();
}
