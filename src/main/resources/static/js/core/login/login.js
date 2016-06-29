var login = function () {
  var bind = function () {
    document.getElementById("submitLoginBtn").addEventListener("click", submitLogin);
    document.getElementById("submitLogoutBtn").addEventListener("click", submitLogout);
  };

  var submitLogin = function () {
    var xhr, login, response;

    login = {
      userEmail: document.getElementById("userEmail").value,
      password: document.getElementById("password").value
    };

    xhr = new XMLHttpRequest();
    xhr.open("POST", restServer.getLoginUrl(), true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.withCredentials = true;

    xhr.send(JSON.stringify(login));

    xhr.onload = function () {
      if(xhr.status == "200") {
        response = JSON.parse(xhr.response);
        document.getElementById("msg").innerText = response.userName + "님 이 로그인 하였습니다.";

        layout.showLoginMsgFromSession();

      } else {
        response = JSON.parse(xhr.response);
        document.getElementById("msg").innerText = response.status + " : " + response.message;

        console.log(response.status + " : " + response.message);
      }
    };

    xhr.onerror = function () {
      document.getElementById("msg").innerText = restServer.getUrl() + " 서버가 연결되지 않습니다.";
    };
  };

  var submitLogout = function () {
    var xhr, response;

    xhr = new XMLHttpRequest();
    xhr.open("GET", restServer.getUrl() + "/logout", true);
    xhr.withCredentials = true;

    xhr.send();

    xhr.onload = function () {
      if(xhr.status == "200") {
        document.getElementById("msg").innerText = "로그아웃 하였습니다.";

        layout.showLogoutMsg();

      } else {
        response = JSON.parse(xhr.response);
        document.getElementById("msg").innerText = response.status + " : " + response.message;

        console.log(response.status + " : " + response.message);
      }
    };

    xhr.onerror = function () {
      document.getElementById("msg").innerText = restServer.getUrl() + " 서버가 연결되지 않습니다.";
    };
  };

  return {
    bind: function () {
      bind();
    }
  }
}();
