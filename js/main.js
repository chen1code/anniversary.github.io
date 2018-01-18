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

	var ds = document.getElementById('ds');
	var dm = document.getElementById('dm');
	var rr = document.getElementById('rr');
	var st = document.getElementById('st');
	var dw = document.getElementById('dw');
	var num = 0;
	var pmh = ds.offsetHeight;
	var pmw = ds.offsetWidth;

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
//		setTimeout(function(){
//			time_i = 0;
//			init_callbak(time_i)
//		},1000)//等待触发
	}
	function init_callbak(time_i)
	{
		var dm_value_arr = ["你怎么这样","2","3","4"];
		var dm_size_arr = ["12px","15px","14px","12px"];
		var dm_color_arr = ["000","000","ccc","ddd"]		
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
	var count = 0;
	$(".date-submit").click(function(){
		rr_click();
		var date_value = $(".date-text input").val();		
		var number_last = $(".remark-red").html();
		if(number_last>1){
			if(date_value == "2017年1月26号"){
				if(count == 0){
					//do something;
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
	
	//跑马灯
	
	
