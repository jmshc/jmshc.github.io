    window.onload = function () {
      var obj = document.getElementById("selectId");
      var url = document.getElementById("addressUrl");
      var videoObj = document.getElementById("player");
      document.getElementById('played').onclick = function () {
        if (obj.value && url.value) {
          videoObj.src = obj.value + url.value
        }
      }
    }