   /* window.onload = function () {
      var obj = document.getElementById("selectId");
      var url = document.getElementById("addressUrl");
      var videoObj = document.getElementById("player");
      document.getElementById('played').onclick = function () {
        if (obj.value && url.value) {
          videoObj.src = obj.value + url.value
        }
      }
    }   1.1 版本的 js*/
	
	
window.onload = function () {
      var obj = document.getElementById("selectId");
      var url = document.getElementById("addressUrl");
      var videoObj = document.getElementById("player");
	  var a=['top','left'],b=0; 
      document.getElementById('played').onclick = function () {
        if (obj.value && url.value) {
		 videoObj.src = obj.value + url.value;

        }else
		{
        var u=setInterval(function(){ 
         url.style[a[b%2]]=(b++)%4<2?0:4; 
         if(b>25){clearInterval(u);b=0} 
         },15) 
		}
      }
    }
	// 1.2 版本js 20171109 by xies