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
        play();
        if (obj.value && url.value) {
		 videoObj.src = obj.value + url.value;

        }else
		{
        var u=setInterval(function(){ 
         url.style[a[b%2]]=(b++)%4<2?0:4; 
         if(b>25){clearInterval(u);b=0} 
         },30) 
		}
      }
      
      changImg();
    }
  function changImg(){
    var changeText= Math.random()*100000+'';
    if(document.getElementById('v-bg')){
      
    document.getElementById('v-bg').innerHTML=changeText.substring(0,4);

    }
  }

  function changeRegister(){
    document.getElementById('register').style.display="block";
     document.getElementById('login').style.display="none";
  }
function play () {
   var addressUrl=$("#addressUrl").val();
   if(addressUrl=="")
   {
    $("#players").removeClass('shake_effect');  
    setTimeout(function()
    {
     $("#players").addClass('shake_effect')
    },1); 
    return false;   
   }
  }
  function login(LoginForm)
{
  if (LoginForm.username.value == "")
  {
    alert("请输入用户名!");
    LoginForm.username.focus();
    return (false);
  }
  if (LoginForm.password.value == "")
  {
    alert("请输入密码!");
    LoginForm.password.focus();
    return (false);
  }
}
	// 1.2 版本js 20171109 by xies