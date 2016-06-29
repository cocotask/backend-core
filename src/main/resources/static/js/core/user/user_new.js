var userAddInit = function() {
  bind();
};

var bind = function() {
  document.getElementById("submitUserBtn").addEventListener("click", addUser);
};

var addUser = function() {
  var user = {
    userEmail: document.getElementById("userEmail").value,
    userName: document.getElementById("userName").value,
    password: document.getElementById("password").value
  };

  var xhr = new XMLHttpRequest();
  xhr.open("POST", restServer.getUserUrl(), true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(user));

  xhr.onload = function() {
    if (xhr.status == '200') {
      var response = JSON.parse(xhr.response);
      document.getElementById("msg").innerText = response.userName + '님 을 추가하였습니다';
      console.log(xhr.response);

    } else {
      var response = JSON.parse(xhr.response);
      document.getElementById("msg").innerText = '저장 실패';
      console.log(response.status + "\n" + response.message);
    }
  };
};
