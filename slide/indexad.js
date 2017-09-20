// JavaScript Document
//首页广告开始
var current = 0;
var imgNum = 1;
var interval = 0;
function showContent(index){
	var oldTag = document.getElementById("list" + current.toString());
	var oldCon = document.getElementById("showCon" + current.toString());
	var newTag = document.getElementById("list" + index.toString());
	var newCon = document.getElementById("showCon" + index.toString());
	if(current != index){
		oldTag.className="ons";
		oldCon.style.display = "none";
		current = index;
		newTag.className="on";
		newCon.style.display = "block";
	}
}
function setMode(n){
	if(n != null){
		imgNum = n+1;
	}
	if(interval == 0){
		interval = setInterval("showTime()", 5000);  //时间调整
	}
}
function showTime(){
	if(imgNum > liname-1){
		imgNum = 0;
	}
	showContent(imgNum);
	imgNum ++;
}
setMode(); 
//首页广告结束


$(document).ready(function() {	

tabmoveplayer("#tab2");
tabmoveplayer("#tab3");
});

function tabmoveplayer(send)
{
		$(send).children().eq(0).children().mouseover(function() {
	$(this).parent().find("div").stop().animate({
				left: $(this).position()['left']
			}, {
				duration: 300
			});
if($(this).parent().next().html()!=null)
{
    var ind=$(this).index()-1;	
    var margin = $(this).parent().next().width();
		margin = margin * -ind;
 $(this).parent().next().children().stop().animate({
			marginLeft: margin + "px"
		}, {
			duration: 300
		});
}
		});
	}






var ttIDg=0;
function shows(IDg){
	document.getElementById('zhuand_'+ttIDg).style.display='none';
	document.getElementById('zhuand_'+IDg).style.display=''; 
	document.getElementById('xind'+ttIDg).style.backgroundColor="#FFF";
	document.getElementById('xind'+IDg).style.backgroundColor="#FEF1F4";
	document.getElementById('xind'+ttIDg).style.color="#333";
	document.getElementById('xind'+IDg).style.color="#EF416A";
	document.getElementById('xind'+ttIDg).style.fontWeight="normal";
	document.getElementById('xind'+IDg).style.fontWeight="bold";
		ttIDg=IDg;
}
var ttIDgt=0;
function shu(IDgt){
	document.getElementById('modeng_'+ttIDgt).style.display='none';
	document.getElementById('modeng_'+IDgt).style.display=''; 
	document.getElementById('zhid_'+ttIDgt).style.backgroundColor="#FFF";
	document.getElementById('zhid_'+IDgt).style.backgroundColor="#FEF1F4";
	document.getElementById('zhid_'+ttIDgt).style.color="#333";
	document.getElementById('zhid_'+IDgt).style.color="#EF416A";
	document.getElementById('zhid_'+ttIDgt).style.fontWeight="normal";
	document.getElementById('zhid_'+IDgt).style.fontWeight="bold";
		ttIDgt=IDgt;
}
var ttID=0;
function ShowTab(ID){
	document.getElementById('doct'+ttID).style.display='none';
	document.getElementById('doct'+ID).style.display=''; 
		ttID=ID;
}

var ttIDs=0;
function jihu(IDs){
	document.getElementById('huawei'+ttIDs).style.display='none';
	document.getElementById('huawei'+IDs).style.display=''; 
	document.getElementById('yur'+ttIDs).style.backgroundImage="none";
	document.getElementById('yur'+IDs).style.backgroundImage="url(http://skin.sztjyy.cn/fuke/images/xuanze.jpg)";
	document.getElementById('yur'+ttIDs).style.color="#FFF";
	document.getElementById('yur'+IDs).style.color="#EF416A";
	document.getElementById('yur'+ttIDs).style.fontWeight="normal";
	document.getElementById('yur'+IDs).style.fontWeight="bold";
		ttIDs=IDs;
}

function shont(){
	document.getElementById('shipin').style.display='none';
	document.getElementById('quan_0').style.display=''; 
}
