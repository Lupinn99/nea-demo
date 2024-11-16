$(function(){
    if ($("#load").val() != "yes" ){
        resizeReload();
    }else {
        //modify by jiayu
        $(window).load(function(){
        resizeReload();
    });
    }
}
);



function resizeReload(){

	var start=false;


	//to resize based on current font sizes
	//var fontResizeVariable = 4;
	//var fontSizeOnLoad = parseInt($("li").css("font-size"));			//ADDED THIS
	//var fontSizeOnLoad = parseInt($("p").css("font-size"));
	var fontSizeOnLoad = 14;
	var fontSizeOnLoadAnimate = 12;//jiayu**************************
	var fontSizeOnLoadAnimate2 = 18;//jiayu**************************
	var fontSizeOnLoadAnimate3 = 30;//jiayu**************************
	var fontSizeOnLoadAnimate4 = 22;//jiayu**************************
	var fontSizeOnLoadAnimate5 = 11;//jiayu**************************
	var originalFontSizeOnLoad = fontSizeOnLoad;
	var originalFontSizeOnLoadAnimate = fontSizeOnLoadAnimate;//jiayu**************************
	var originalFontSizeOnLoadAnimate2 = fontSizeOnLoadAnimate2;//jiayu**************************
	var originalFontSizeOnLoadAnimate3 = fontSizeOnLoadAnimate3;//jiayu**************************
	var originalFontSizeOnLoadAnimate4 = fontSizeOnLoadAnimate4;//jiayu**************************
	var originalFontSizeOnLoadAnimate5 = fontSizeOnLoadAnimate5;//jiayu**************************
	var currentFontSize = fontSizeOnLoad;
	var currentFontSizeAnimate = fontSizeOnLoadAnimate;//jiayu**************************
	var currentFontSizeAnimate2 = fontSizeOnLoadAnimate2;//jiayu**************************
	var currentFontSizeAnimate3 = fontSizeOnLoadAnimate3;//jiayu**************************
	var currentFontSizeAnimate4 = fontSizeOnLoadAnimate4;//jiayu**************************
	var currentFontSizeAnimate5 = fontSizeOnLoadAnimate5;//jiayu**************************
	var currentFontSizePx = currentFontSize + "px";
	var currentFontSizePxAnimate = currentFontSizeAnimate + "px";//jiayu**************************
	var currentFontSizePxAnimate2 = currentFontSizeAnimate2 + "px";//jiayu**************************
	var currentFontSizePxAnimate3 = currentFontSizeAnimate3 + "px";//jiayu**************************
	var currentFontSizePxAnimate4 = currentFontSizeAnimate4 + "px";//jiayu**************************
	var currentFontSizePxAnimate5 = currentFontSizeAnimate5 + "px";//jiayu**************************
	//var fontSizeOnLoad = ( $("#Q2_WRAPPER").exists()) ? 13 : 14 ;


	var h6FontSize = 14;
	var h5FontSize = 18;
	var h4FontSize = 17;
	var h3FontSize = 24;
	var h2FontSize = 28;
	var h1FontSize = 48;
	var h6FontSizePx = h6FontSize + "px";
	var h5FontSizePx = h5FontSize + "px";
	var h4FontSizePx = h4FontSize + "px";
	var h3FontSizePx = h3FontSize + "px";
	var h2FontSizePx = h2FontSize + "px";
	var h1FontSizePx = h1FontSize + "px"; 

	var fontsize20 = 20;
	var fontsize20px = fontsize20px + "px";
	var rememberSize=0;

	/* Reactivate if font size is needed
	var fontFontSize = $("font").css('font-size');
	var halfFontFontSize = fontFontSize / 2 ;
	var fontFontSizePx = fontFontSize + "px";
	*/

	if ( $("#Q2_WRAPPER").length) {  //check if id exists
			currentFontSize = 13;
			originalFontSizeOnLoad = currentFontSize;
			currentFontSizePx = currentFontSize + "px";
		}




	function decreaseFontSize () {

			if (currentFontSize > originalFontSizeOnLoad ) {			
				currentFontSize = currentFontSize - (originalFontSizeOnLoad / 2);
				currentFontSizePx = currentFontSize + "px";
				
				currentFontSizeAnimate = currentFontSizeAnimate - (originalFontSizeOnLoadAnimate / 2);//jiayu**************************
				currentFontSizePxAnimate = currentFontSizeAnimate + "px";//jiayu**************************
				
				currentFontSizeAnimate2 = currentFontSizeAnimate2 - (originalFontSizeOnLoadAnimate2 / 2);//jiayu**************************
				currentFontSizePxAnimate2 = currentFontSizeAnimate2 + "px";//jiayu**************************
				
				currentFontSizeAnimate3 = currentFontSizeAnimate3 - (originalFontSizeOnLoadAnimate3 / 2);//jiayu**************************
                currentFontSizePxAnimate3 = currentFontSizeAnimate3 + "px";//jiayu**************************
				
                currentFontSizeAnimate4 = currentFontSizeAnimate4 - (originalFontSizeOnLoadAnimate4 / 2);//jiayu**************************
                currentFontSizePxAnimate4 = currentFontSizeAnimate4 + "px";//jiayu**************************
                
                currentFontSizeAnimate5 = currentFontSizeAnimate5 - (originalFontSizeOnLoadAnimate5 / 2);//jiayu**************************
                currentFontSizePxAnimate5 = currentFontSizeAnimate5 + "px";//jiayu**************************
                
				h6FontSize = h6FontSize - 7;
				h5FontSize = h5FontSize - 9;
				h4FontSize = h4FontSize - 8;
				h3FontSize = h3FontSize - 12;
				h2FontSize = h2FontSize - 14;
				h1FontSize = h1FontSize - 24;
				h6FontSizePx = h6FontSize + "px";
				h5FontSizePx = h5FontSize + "px";
				h4FontSizePx = h4FontSize + "px";
				h3FontSizePx = h3FontSize + "px";
				h2FontSizePx = h2FontSize + "px";
				h1FontSizePx = h1FontSize + "px"; 
				
				//especially for online form
				fontsize20 = fontsize20 - 10;
				fontsize20px = fontsize20 + "px";
				//fontFontSize = fontFontSize - halfFontFontSize;
				//fontFontSizePx = fontFontSize + "px";
			}

		
	}


	function increaseFontSize () {
//		alert("coming increaseFontSize  currentFontSize:"+currentFontSize+";   originalFontSizeOnLoad:"+originalFontSizeOnLoad);

		if (currentFontSize < originalFontSizeOnLoad * 2 ) {
			
			currentFontSize = currentFontSize + (originalFontSizeOnLoad / 2);
			currentFontSizePx = currentFontSize + "px";
			
			currentFontSizeAnimate = currentFontSizeAnimate + (originalFontSizeOnLoadAnimate / 2);//jiayu**************************
			currentFontSizePxAnimate = currentFontSizeAnimate + "px";//jiayu**************************
			
			currentFontSizeAnimate3 = currentFontSizeAnimate3 + (originalFontSizeOnLoadAnimate3 / 2);//jiayu**************************
            currentFontSizePxAnimate3 = currentFontSizeAnimate3 + "px";//jiayu**************************
            
            currentFontSizeAnimate4 = currentFontSizeAnimate4 + (originalFontSizeOnLoadAnimate4 / 2);//jiayu**************************
            currentFontSizePxAnimate4 = currentFontSizeAnimate4 + "px";//jiayu**************************
            
            currentFontSizeAnimate5 = currentFontSizeAnimate5 + (originalFontSizeOnLoadAnimate5 / 2);//jiayu**************************
            currentFontSizePxAnimate5 = currentFontSizeAnimate5 + "px";//jiayu**************************
            
			//currentFontSizeAnimate2 = currentFontSizeAnimate2 + (originalFontSizeOnLoadAnimate2 / 2);//jiayu**************************
			//currentFontSizePxAnimate2 = currentFontSizeAnimate2 + "px";//jiayu**************************
			
			h6FontSize = h6FontSize + 7;
			h5FontSize = h5FontSize + 9;
			h4FontSize = h4FontSize + 8;
			h3FontSize = h3FontSize + 12;
			h2FontSize = h2FontSize + 14;
			h1FontSize = h1FontSize + 24;
			h6FontSizePx = h6FontSize + "px";
			h5FontSizePx = h5FontSize + "px";
			h4FontSizePx = h4FontSize + "px";
			h3FontSizePx = h3FontSize + "px";
			h2FontSizePx = h2FontSize + "px";
			h1FontSizePx = h1FontSize + "px"; 
			
			//especially for online form
			fontsize20 = fontsize20 + 10;
			fontsize20px = fontsize20 + "px";
			//fontFontSize = fontFontSize + halfFontFontSize;
			//fontFontSizePx = fontFontSize + "px";
		}
	}


	  
	  $("#decrease").click(function(event){
		  if(typeof(stationId) != "undefined" ){
			  if(stationId != null){
				  var points = document.getElementsByClassName('points');
				  for (var i = 0; i < points.length; i++) {
					  points[i].style.display = 'block';
				  } 
			  }
			 
		  }
	      
			if(start==true){
				event.preventDefault();
				if(rememberSize != 0){
					decreaseFontSize();
					changeToCurrentSize();
				}
				
				//jiayu**************************
				if(rememberSize == 2){
					$(".18pxStyle").find("*").not(".donotresize").animate({"font-size":"27px"});
					
					//both .sg-region and .sg-region-visibility
					$(".sg-region span").each(function(){
					var topNow = $(this).position().top + 10;
					var topNowPx = topNow + "px";
					$(this).css("top",topNowPx);
					
					var leftNow = $(this).position().left + 6;
					var leftNowPx = leftNow + "px";
					$(this).css("left",leftNowPx);
					
					
					$("#changeMarginTop").remove();
					$("head").append("<style id='changeMarginTop'>.sg-region span::before{margin-top:30px}</style>");
				})
					//both .sg-region and .sg-region-visibility
					$(".sg-region-visibility span").each(function(){
						var topNow = $(this).position().top + 20;
						var topNowPx = topNow + "px";
						$(this).css("top",topNowPx);
						
						var leftNow = $(this).position().left + 12;
						var leftNowPx = leftNow + "px";
						$(this).css("left",leftNowPx);
						
						
						$("#changeMarginTop").remove();
						$("head").append("<style id='changeMarginTop'>.sg-region-visibility span::before{margin-top:60px}</style>");
					})
					
				} else if(rememberSize == 1){
					$(".18pxStyle").find("*").not(".donotresize").animate({"font-size":"18px"});
					
					//both .sg-region and .sg-region-visibility
					$(".sg-region span").each(function(){
					var topNow = $(this).position().top + 10;
					var topNowPx = topNow + "px";
					$(this).css("top",topNowPx);
					
					var leftNow = $(this).position().left + 6;
					var leftNowPx = leftNow + "px";
					$(this).css("left",leftNowPx);
					
					$("#changeMarginTop").remove();
					$("head").append("<style id='changeMarginTop'>.sg-region span::before{margin-top:20px}</style>");
				})
					//both .sg-region and .sg-region-visibility
					$(".sg-region-visibility span").each(function(){
					var topNow = $(this).position().top + 20;
					var topNowPx = topNow + "px";
					$(this).css("top",topNowPx);
					
					var leftNow = $(this).position().left + 12;
					var leftNowPx = leftNow + "px";
					$(this).css("left",leftNowPx);
					
					$("#changeMarginTop").remove();
					$("head").append("<style id='changeMarginTop'>.sg-region-visibility span::before{margin-top:40px}</style>");
				})
					
				} else {
					$(".18pxStyle").find("*").not(".donotresize").animate({"font-size":"18px"});
				}//jiayu**************************
				
				if(rememberSize==1||rememberSize==2){
					rememberSize=rememberSize-1;
				}
				//setCookie~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				setCookie("rememberSize",rememberSize,1,"/",".weather.gov.sg","");
				if(rememberSize==0){
					$("#nowTextPercent").html("100%");
				}else if(rememberSize==1){
					$("#nowTextPercent").html("150%");
				}else if(rememberSize==2){
					$("#nowTextPercent").html("200%");
				}
			}
			if(typeof(stationId) != "undefined"){
				if(stationId != null){
					for (var i = 0; i < points.length; i++) {
					if(points[i].id == stationId){
						points[i].style.display = 'block';
						continue;
					}
					points[i].style.display = 'none';
				}
				}
				
			}
			
	  });
	  
	  $("#increase").click(function(event){
	    if(typeof(stationId) != "undefined" ){
			  if(stationId != null){
				  var points = document.getElementsByClassName('points');
				  for (var i = 0; i < points.length; i++) {
					  points[i].style.display = 'block';
				  } 
			  }
			 
		  }
	      
		start=true;
	    event.preventDefault();
		if(rememberSize != 2){
			increaseFontSize();
			changeToCurrentSize();
		}
		
		//jiayu**************************
		if(rememberSize == 0){
			$(".18pxStyle").find("*").not(".donotresize").animate({"font-size":"27px"});
			//both .sg-region and .sg-region-visibility
			$(".sg-region span").each(function(){
					var topNow = $(this).position().top - 10;
					var topNowPx = topNow + "px";
					$(this).css("top",topNowPx);
					
					var leftNow = $(this).position().left - 6;
					var leftNowPx = leftNow + "px";
					$(this).css("left",leftNowPx);
					
					$("#changeMarginTop").remove();
					$("head").append("<style id='changeMarginTop'>.sg-region span::before{margin-top:30px}</style>");
			})
			//both .sg-region and .sg-region-visibility
			$(".sg-region-visibility span").each(function(){
					var topNow = $(this).position().top - 20;
					var topNowPx = topNow + "px";
					$(this).css("top",topNowPx);
					
					var leftNow = $(this).position().left - 12;
					var leftNowPx = leftNow + "px";
					$(this).css("left",leftNowPx);
					
					$("#changeMarginTop").remove();
					$("head").append("<style id='changeMarginTop'>.sg-region-visibility span::before{margin-top:60px}</style>");
			})
		} else if(rememberSize == 1){
			$(".18pxStyle").find("*").not(".donotresize").animate({"font-size":"36px"});
			//both .sg-region and .sg-region-visibility
			$(".sg-region span").each(function(){
					var topNow = $(this).position().top - 10;
					var topNowPx = topNow + "px";
					$(this).css("top",topNowPx);
					
					var leftNow = $(this).position().left - 6;
					var leftNowPx = leftNow + "px";
					$(this).css("left",leftNowPx);
					
					$("#changeMarginTop").remove();
					$("head").append("<style id='changeMarginTop'>.sg-region span::before{margin-top:40px}</style>");
			})
			//both .sg-region and .sg-region-visibility
			$(".sg-region-visibility span").each(function(){
					var topNow = $(this).position().top - 20;
					var topNowPx = topNow + "px";
					$(this).css("top",topNowPx);
					
					var leftNow = $(this).position().left - 12;
					var leftNowPx = leftNow + "px";
					$(this).css("left",leftNowPx);
					
					$("#changeMarginTop").remove();
					$("head").append("<style id='changeMarginTop'>.sg-region-visibility span::before{margin-top:80px}</style>");
			})
		} else {
			$(".18pxStyle").find("*").not(".donotresize").animate({"font-size":"36px"});
			
			
		}//jiayu**************************
		
		
		
		if(rememberSize==1||rememberSize==0){
			rememberSize=rememberSize+1;
		}
		//setCookie~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		setCookie("rememberSize",rememberSize,1,"/",".weather.gov.sg","");
		if(rememberSize==0){
			$("#nowTextPercent").html("100%");
		}else if(rememberSize==1){
			$("#nowTextPercent").html("150%");
		}else if(rememberSize==2){
			$("#nowTextPercent").html("200%");
		}
			if(typeof(stationId) != "undefined"){
				if(stationId != null){
					for (var i = 0; i < points.length; i++) {
					if(points[i].id == stationId){
						points[i].style.display = 'block';
						continue;
					}
					points[i].style.display = 'none';
				}
				}
				
			}
	  });

	  
	  
	  function changeToCurrentSize () {
//		  alert("coming changeToCurrentSize");
		$(".resizable").not(".donotresize").animate({"font-size":currentFontSizePx});
		$("input").each(function(){
			 if ($(this).val() != "") {
				 $(this).not(".donotresize").animate({"font-size":currentFontSizePx});
	         }
		});
		
		
		$("p").not(".donotresize,.px11").animate({"font-size":currentFontSizePx});
       
        $("td").not(".donotresize").animate({"font-size":currentFontSizePx}); 
		
        $("span").not(".donotresize,.px11").animate({"font-size":currentFontSizePx}); 
        $("font").not(".donotresize,.fontsize20").animate({"font-size":currentFontSizePx}); 
        //$("strong").not(".donotresize,.fontsize20").animate({"font-size":currentFontSizePx}); 
        $("small").not(".donotresize").animate({"font-size":currentFontSizePx});
		
		$("li").not(".donotresize").not(".18pxStyle").animate({"font-size":currentFontSizePx});//jiayu**************************

		$("ul").not(".donotresize").not(".18pxStyle").animate({"font-size":currentFontSizePx});//jiayu**************************
		
		
        $("a").not(".donotresize,.px30,.px22").not(".12pxStyle").animate({"font-size":currentFontSizePx});//jiayu**************************
        $(".px30").animate({"font-size":currentFontSizePxAnimate3});//jiayu**************************
		$(".px22").animate({"font-size":currentFontSizePxAnimate4});//jiayu**************************
		$(".px11").animate({"font-size":currentFontSizePxAnimate5});//jiayu**************************
        $(".12pxStyle").not(".donotresize").animate({"font-size":currentFontSizePxAnimate});//jiayu**************************
        

		
		
		
		$(".fontsize20").not(".donotresize").animate({"font-size":fontsize20px});	
		//console.log("currentFontSizePxAnimate2 is " + currentFontSizePxAnimate2);//jiayu**************************
		
		$("h6").not(".donotresize").animate({"font-size":h6FontSizePx});
		$("h5").not(".donotresize").animate({"font-size":h5FontSizePx});
		$("h4").not(".donotresize").animate({"font-size":h4FontSizePx});
		$("h3").not(".donotresize").animate({"font-size":h3FontSizePx});
		$("h2").not(".donotresize").animate({"font-size":h2FontSizePx});
		$("h1").not(".donotresize").animate({"font-size":h1FontSizePx});
//		$("table").not(".donotresize").animate({"font-size":currentFontSizePx});
		//$("div").not(".donotresize").animate({"font-size":currentFontSizePx});
		//$("h3").animate({"font-size":currentFontSizePx});
	  }
	  
	  function getCookie(cName){
//		  alert("coming getCookie");
	      var cookieString = decodeURI(document.cookie);
//	      alert("cookieString-->"+cookieString);
	      var cookieArray = cookieString.split("; ");
	      for(var i = 0; i < cookieArray.length; i++){
	          var cookieNum = cookieArray[i].split("=");
	          var cookieName = cookieNum[0];
	          var cookieValue = cookieNum[1];

	          if(cookieName == cName){
	              return cookieValue;
	              }
	          }
	      return false;
	      }
	  function setCookie(name,value,expires,path,domain,secure){
//		  alert("coming setCookie");
		  var d = new Date();
		  d.setTime(d.getTime() + (expires*24*60*60*1000));
		  
	      document.cookie=name+"="+encodeURI(value)+
	      ((expires) ? "; expires=" + d.toUTCString() : "")+
	      ((path) ? "; path=" + path : "")+
	      ((domain) ? "; domain=" + domain : "")+
	      ((secure) ? "; secure=" + secure : "");
	      }

	// $( "#decrease" ).click(function() {
//		 if(start==true){
//			 $("a").removeClass("btn_selected");
//			  $(this).addClass("btn_selected"); 
//		 }
	//  
	//  
	// });
	// 
	// $( "#increase" ).click(function() {
//		 start=true;
	//   $("a").removeClass("btn_selected");
	//  $(this).addClass("btn_selected");
	//  
	// });

	// alert("getCookie--->"+getCookie('rememberSize'));
	 if(getCookie('rememberSize')!=false){
//	 	alert("isNaN--->"+isNaN(getCookie('rememberSize')));
	 	rememberSize=parseInt(getCookie('rememberSize'));
//	 	alert("rememberSize--->"+rememberSize);
	 }
	 if(rememberSize!=0){
	        if(rememberSize==1){
//	          alert("coming--->increaseFontSize");
	            start=true;
	            increaseFontSize();
				//jiayu
	            $(".px11").animate({"font-size":"16px"});
	            $(".px22").animate({"font-size":"33px"});
	            //for px30 home 24-hour forecast
	            $(".px30").animate({"font-size":"45px"});
	            
	            changeToCurrentSize();
	            $(".18pxStyle").find("*").not(".donotresize").animate({"font-size":"27px"});
	            
	            $("#changeMarginTop").remove();
	            $("head").append("<style id='changeMarginTop'>.sg-region span::before{margin-top:30px}</style>");
	            
				
				//when refresh page     jiayu**************************
				//both .sg-region and .sg-region-visibility
				$(".sg-region span").each(function(){
					var topNow = $(this).position().top - 10;
					var topNowPx = topNow + "px";
					$(this).css("top",topNowPx);
					
					var leftNow = $(this).position().left - 6;
					var leftNowPx = leftNow + "px";
					$(this).css("left",leftNowPx);
					
					$("#changeMarginTop").remove();
					$("head").append("<style id='changeMarginTop'>.sg-region span::before{margin-top:30px}</style>");
			})
				//both .sg-region and .sg-region-visibility
				$(".sg-region-visibility span").each(function(){
						var topNow = $(this).position().top - 20;
						var topNowPx = topNow + "px";
						$(this).css("top",topNowPx);
						
						var leftNow = $(this).position().left - 12;
						var leftNowPx = leftNow + "px";
						$(this).css("left",leftNowPx);
						
						$("#changeMarginTop").remove();
						$("head").append("<style id='changeMarginTop'>.sg-region-visibility span::before{margin-top:60px}</style>");
				})
				
	        }else if(rememberSize==2){
	            start=true;
	            increaseFontSize();
	            increaseFontSize();
	            changeToCurrentSize();
				//jiayu
	            $(".px11").animate({"font-size":"22px"});
	            $(".px22").animate({"font-size":"44px"});
	            //for px30 home 24-hour forecast
                $(".px30").animate({"font-size":"60px"});
	            
	            $(".18pxStyle").find("*").not(".donotresize").animate({"font-size":"36px"});
	            $("#changeMarginTop").remove();
	            $("head").append("<style id='changeMarginTop'>.sg-region span::before{margin-top:40px}</style>");
				
				//when refresh page     jiayu**************************
				//both .sg-region and .sg-region-visibility
				$(".sg-region span").each(function(){
					var topNow = $(this).position().top - 20;
					var topNowPx = topNow + "px";
					$(this).css("top",topNowPx);
					
					var leftNow = $(this).position().left - 12;
					var leftNowPx = leftNow + "px";
					$(this).css("left",leftNowPx);
					
					$("#changeMarginTop").remove();
					$("head").append("<style id='changeMarginTop'>.sg-region span::before{margin-top:40px}</style>");
			})
				//when refresh page     jiayu**************************
				//both .sg-region and .sg-region-visibility
				$(".sg-region-visibility span").each(function(){
					var topNow = $(this).position().top - 40;
					var topNowPx = topNow + "px";
					$(this).css("top",topNowPx);
					
					var leftNow = $(this).position().left - 24;
					var leftNowPx = leftNow + "px";
					$(this).css("left",leftNowPx);
					
					$("#changeMarginTop").remove();
					$("head").append("<style id='changeMarginTop'>.sg-region-visibility span::before{margin-top:80px}</style>");
			})
			
			}
	     }
	 if(rememberSize==0){
			$("#nowTextPercent").html("100%");
		}else if(rememberSize==1){
			$("#nowTextPercent").html("150%");
		}else if(rememberSize==2){
			$("#nowTextPercent").html("200%");
		}
	}

