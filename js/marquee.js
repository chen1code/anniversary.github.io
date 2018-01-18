$(function(){
	var imgL=$(".time-line .time-line-item").size();
		var deg=360/imgL;
		var roY=0,roX=-10;
		 var xN=0,yN=0;
		 var play=null;
		
		$(".time-line .time-line-item").each(function(i){
			$(this).css({
				<!--translateZ 定义2d旋转沿着z轴-->
				"transform":"rotateY("+i*deg+"deg) translateZ(300px)"	});
				<!--防止图片被拖拽-->
				$(this).attr('ondragstart','return false');
			});
		
			$(document).mousedown(function(ev){
				var x_=ev.clientX;
				var y_=ev.clientY;
				clearInterval(play);
				$(this).bind('mousemove',function(ev){
					/*获取当前鼠标的坐标*/
					var x=ev.clientX;
					var y=ev.clientY;
					/*两次坐标之间的距离*/
					  xN=x-x_;
					  yN=y-y_;		
					 roY+=xN*0.2;
					roX-=yN*0.1;
					$('.time-line').css({
						 transform:'perspective(800px) rotateX('+roX+'deg) rotateY('+roY+'deg)'
					});
					/*之前的鼠标坐标*/
				 x_=ev.clientX;
				 y_=ev.clientY;
		
				});
			}).mouseup(function(){
				  $(this).unbind('mousemove');
				  var play=setInterval(function(){				   
				   xN*=0.95;
				   yN*=0.95
				   if(Math.abs(xN)<1 && Math.abs(yN)<1){
					  clearInterval(play);
				   }
					roY+=xN*0.2;
					roX-=yN*0.1;
					$('.time-line').css({
						 transform:'perspective(800px) rotateX('+roX+'deg) rotateY('+roY+'deg)'
					});		
				  },30);
		
			});
})
		
	