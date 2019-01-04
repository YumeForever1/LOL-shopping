window.onload=function(){
	$(".dw-box").click(function(){
		$(window).scrollTop(0);
		})
/*轮播图*/
	var n=0;
/*显示图片函数*/
	function viewLun(n){
		$(".ban").css({"display":"none"});
		$(".ban:eq("+n+")").css({"display":"block"})
		$(".an").css({"background":"#ddd"});
		$(".an:eq("+n+")").css({"background":"#B92226"})
		}
var len=$("ban").length;
/*显示第0张图片*/
	viewLun(n);
/*定义轮播图控制每秒显示图片序数*/
var a=setInterval(function(){
	n++;
	if(n>=len){
		n=0;}
	viewLun(n);
	},1000);
/*当鼠标浮于图片上放停止轮播*/
$(".ban-box").mouseover(function(){
	clearInterval(a);
	})

/*时间间隔函数控制图片显示*/	
	setInterval(function(){
		n++;
		if(n>=8){                                                                                                             
			n=0;}
		viewLun(n);
		},1000)	
	
/*单击底部按钮显示对应图片*/
 $(".an").click(function(){
	 n=$(this).index(".an");
	 viewLun(n);
	 })
}