var url = "";
function setURL(ip){url = "http://"+ip+":89/cookie/flashcookie.html";}
function loadPage(){location.replace(location.href.split("#")[0]);}

////add by yxf@2014/08/27
/**
 *@��  ��������UA�жϣ��ų��ƶ��ն��ϱ�cookiesֵ��ʱ����ֵ
 *@����ֵ��
 *		true, �����ϱ��� false���������ϱ�
 */
function IsCanReport2Ac(){
	
	var strUseAgent = navigator.userAgent.toLowerCase();
	
	//��windows nt
	var isWinNt = strUseAgent.indexOf("windows nt") > -1;
	if (!isWinNt){	return false;}
	
	//�ƶ��ն�
	var isMobile = strUseAgent.indexOf("mobile") > -1;
	if (isMobile){	return false;}
	
	//ΪAndroid
	var isAndroid = strUseAgent.indexOf("android") > -1;
	if (isAndroid){	return false;}
	
	//Ϊios
	var isIOS = !!strUseAgent.match(/\(i[^;]+;( u;)? cpu.+mac os x/);
	if (isIOS){	return false;}
	
	//ΪSymbian
	var isSymbian = strUseAgent.indexOf("symbian") > -1;
	if (isSymbian){	return false;}

	//ΪiPhone
	var isIPhone = strUseAgent.indexOf("iphone") > -1;
	if (isIPhone){	return false;}
	
	//Ϊipad
	var isIPad = strUseAgent.indexOf("ipad") > -1;
	if (isIPad){ return false;}
	
	//Ϊipod
	var isIPod = strUseAgent.indexOf("ipod") > -1;
	if (isIPod){ return false;}
	
	//�ų�һЩ���е�app �����ַ���
	var isInvalidAppPos = strUseAgent.search(/ baidubrowser\/\d/);//-- �ٶ�һ�¿ͻ���
	if (-1 != isInvalidAppPos){ return false;}
	
	return true;
}
////end by yxf


// дcookies
function setCookie(name,value)
{
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

// ��ȡcookies
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg)){
	
		return (arr[2]);
	}else{
	
        return null;
	}
}

function supFlash(cookie)
{	
	if (false === IsCanReport2Ac()){
	
		loadPage();		
		return;
	}
	
	// ��ȡ����cookieֵ
	var td_cookie = getCookie("td_cookie");
	if (td_cookie == cookie){
	
		loadPage();		
		return;
	}
	setCookie("td_cookie", cookie);
	
	var flash = 0;
	var judgeIE = !-[1,];
	var ua = navigator.userAgent.toLowerCase();
	if (ua.indexOf("taobrowser") > 0 || ua.indexOf("lbbrowser") > 0) {
	
		loadPage();
		return;
	}
	var isIE = judgeIE || ua.indexOf("msie") > 0 || ua.indexOf("trident/7.0") > 0;
	if(isIE){
		try{
			var swf1 = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
			flash = 1;
		}
		catch(e){
			flash = 0;
		}
	}
	else {
		try{
			var swf2 = navigator.plugins['Shockwave Flash'];
			if(swf2 == undefined){
				flash = 0;
			}
			else {
				flash = 1;
			}
		}
		catch(e){
			flash = 0;
		}
	}

	if(flash === 0)
	{
		loadPage();
		return;
	}	
}

function jsSetCookie(font_param)
{
	if(font_param == ""){
		loadPage();
		return;
	}
	
	if(url == ""){
		loadPage();
		return;
	}
	
	var script = document.createElement("script");
	script.type = "text/javascript";
	var done = false;
	script.onload = script.onreadystatechange = function(){
		if ( !done && (!this.readyState ||
				this.readyState === "loaded" || this.readyState === "complete") ) {
			done = true;
			this.onload = this.onreadystatechange = null;
			loadPage();
			return;
		}
	};
	script.src = url +"?"+font_param+"&"+Math.random();
	document.getElementsByTagName("head")[0].appendChild(script);
}
