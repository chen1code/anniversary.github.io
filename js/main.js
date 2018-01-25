	//弹幕部分js
	var thisColor,fontSize,time_i,dm_value_length;
	$(function(){
		$('.fontSizeDiv a').on('click',function(){
			fontSize = $(this).attr('data-size');
			$('.fontSizeDiv a').removeClass('active');
			$(this).addClass('active');
		});

		$('a.colorHint').on('click',function(){
			$('.colorDiv').toggle();
		});

		$('.colorDivs a').on('click',function(){
			thisColor = $(this).attr('data-color');
			$('p.backColor').css({
				'background-color':'#'+thisColor
			});
			$('p.colorText').text('#'+thisColor);
		});
	});

	

	function mu(dm_value,dm_size,dm_color)
	{
		var dd = document.createElement('div');
		dd.setAttribute('class','ss');
		dd.innerHTML = dm_value;
		dm.value='';
		ds.appendChild(dd);
		dd.style.fontSize = dm_size;
		dd.style.color = '#'+dm_color;
		dd.style.left = '900px';
		dd.style.top = Math.floor(Math.random()*(pmh-30))+'px';
		var l = pmw-dd.offsetWidth;
		var tim = null;
		tim = setInterval(function(){
	       l--;
	       if( l <= (0-dd.offsetWidth) ){
	       	clearInterval(tim);
	       	ds.removeChild(dd);
	       }
	       dd.style.left = l+'px';
		},20);
		setTimeout(function(){
			if(time_i>-1&&time_i<dm_value_length-1){
			debugger;
			time_i += 1;
			init_callbak(time_i);
		}else{
			time_i = 0;
			init_callbak(time_i);
		}
		},2000)
				
	}

	function rr_click()
	{
		num++;
		if(num%2==0)
		{
			rr.style.background = '#006600';
			ds.style.display='block';
			num=0;
		}
		else
		{
			rr.style.background = '#dddddd';
			ds.style.display='none';
		}
	};
	window.onload = function(){
		var height = window.innerHeight;
		$(".wrapper").css("height",height)
		setTimeout(function(){
			time_i = 0;
			init_callbak(time_i)
		},5000)//等待触发
	}
	function init_callbak(time_i)
	{
		var dm_value_arr = ["日期记不得了吗","笨蛋","好好想想啦","一周年哎","往回推365天不就知道啦","难道要我直接跟你说啊","要是不记得的话就太过分啦","还没想起来么","是17年啦","2017年1月26号","写对了么","下次不能忘咯","忘了是要打屁屁的哟","一定要记住啊","爱你哟"."muma~"];
		var dm_size_arr = ["12px","15px","14px","12px","12px","15px","14px","12px","12px","15px","14px","12px"];
		var dm_color_arr = ["000","000","ccc","ddd","cb2431","0366d6","34d058","F75000","FF8000","CE0000","9D9D9D","FFF4C1","ddd","cb2431","0366d6","34d058"]		
		var dm_value = dm_value_arr[time_i],dm_size = dm_size_arr[time_i],dm_color = dm_color_arr[time_i];
		dm_value_length = dm_value_arr.length;
		mu(dm_value,dm_size,dm_color);
	};
	function obj()
	{
		if(dm.value!=''&&dm.value.length<=25)
		{
			st.style.background='#ffa178';
		}
		else
		{
			st.style.background='#00A2D6';
		}
	}
	
	//日期输入部分js	
	$(".date-text input").click(function(){
		$(".date-text input").removeClass("wrong_active");
	})
	var count = 0;//计数输错的次数
	$(".date-submit").click(function(){
		rr_click();
		var date_value = $(".date-text input").val();		
		var number_last = $(".remark-red").html();
		if(number_last>1){
			if(date_value == "2017年1月26号"){
				if(count == 0){
					window.location.href="anniversary_timeline.html"
				}
			}else{
				count += 1;
				$(".text-hint").css("visibility","visible");
				$(".remark-red").html(number_last-1);
				$(".date-text input").addClass("wrong_active");
			}
		}else{
			$(".text-hint").css("visibility","hidden");
			$(".text-hint-relife").css("visibility","visible");
			if(date_value == "主人超帅！"){
				$(".text-hint-relife").css("visibility","hidden");
				$(".date-text input").val("");
				$(".remark-red").html("3");
			}else{
				$(".date-text input").addClass("wrong_active");
			}
		}
		
	})
	
	//game
	$(".bg-mask1").click(function(){
		$(this).animate({top:"-200"},2000);
		//$(this).slideUp()
	})
	var count_error = 0;
	$(".btn_confirm").click(function(){	
		event.stopPropagation();
		var index = $(this).parent().parent().index() + 1;
		var check_value = $(".answer-choice input:radio[name='answer"+ index + "']:checked").val();
		if(count_error<3){
			if(check_value == "true"){
			$(this).parent().parent().next("li").find(".bg-mask").animate({top:"-200"},2000);
			$(this).hide().siblings("button").hide();
			$(this).siblings(".right_result").show();
		}else{
			count_error += 1; 
			if(count_error>=4){
				count_error=3
			}
			if(count_error == 1){
				$(".life-num i").eq(2).removeClass("fa-heart").addClass("fa-heart-o")
			}else if(count_error == 2){
				$(".life-num i").eq(1).removeClass("fa-heart").addClass("fa-heart-o")
			}else if(count_error == 3){
				$(".life-num i").eq(0).removeClass("fa-heart").addClass("fa-heart-o");
				$(".mask").show();
				$(".mask-panel").show()
			}
		}
		}else{
			$(".mask").show();
			$(".mask-panel").show()
		}
		
		
	})
	$(".mask").click(function(){
		$(".mask").hide();
		$(".mask-panel").hide()
	})
	$(".relife-btn").click(function(){
		var coin_num = $(".relife_num span").html();
		if(coin_num>=5){
			$(".relife_num span").html(coin_num-5);
			$(".life-num i").removeClass("fa-heart-o").addClass("fa-heart");
			count_error = 0;
			$(".mask").hide();
			$(".mask-panel").hide();
		}else{
			alert("先充值在继续哟~~")
		}
	})
