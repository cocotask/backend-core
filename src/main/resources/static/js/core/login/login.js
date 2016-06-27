var loginInit = function () {
  bind();
};

var bind = function () {
  document.getElementById("submitLoginBtn").addEventListener("click", submitLogin);
};

var submitLogin = function () {
  var xhr, login, response;

  login = {
    userEmail: document.getElementById("userEmail").value,
    password: document.getElementById("password").value
  };

  xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:8081/rest/login", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.withCredentials = true;

  xhr.send(JSON.stringify(login));

  xhr.onload = function () {
    if(xhr.status == "200") {
      response = JSON.parse(xhr.response);
      document.getElementById("msg").innerText = response.userName + "님 이 로그인 하였습니다.";
      console.log(response);

    } else {
      response = JSON.parse(xhr.response);
      document.getElementById("msg").innerText = response.status + " : " + response.message;
      console.log(response.status + " : " + response.message);
    }
  };

  xhr.onerror = function () {
    document.getElementById("msg").innerText = "http://localhost:8081/rest/login 서버가 연결되지 않습니다.";
  };
};
