var userEditInit = function () {
  bind();
  readUser();
};

var bind = function () {
  document.getElementById("updateUserBtn").addEventListener("click", updateUser);
};

var updateUser = function () {
  var user, xhr, response, userUid;
  user = {
    userName: document.getElementById("userName").value,
    userEmail: document.getElementById("userEmail").value
  };

  userUid = document.getElementById("userArticle").dataset.userUid;

  xhr = new XMLHttpRequest();
  xhr.open("PATCH", restServer.getUserUrl() + "/" + userUid, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(user));

  xhr.onload = function() {
    if (xhr.status == "200") {
      response = JSON.parse(xhr.response);
      document.getElementById("msg").innerText = response.userName + '님 을 수정하였습니다';
      console.log(xhr.response);

    } else {
      response = JSON.parse(xhr.response);
      console.log(response.status + "\n" + response.message);
    }
  }
};

var showUser = function (user) {
  document.getElementById("userName").value = user.userName;
  document.getElementById("userEmail").value = user.userEmail;
};

var readUser = function () {
  var xhr, userUid, user;

  userUid = document.getElementById("userArticle").dataset.userUid;

  xhr = new XMLHttpRequest();
  xhr.open("GET", restServer.getUserUrl() + "/" + userUid, true);
  xhr.send();

  xhr.onload = function() {
    if (xhr.status == "200") {
      user = JSON.parse(xhr.response);
      showUser(user);

    } else {
      response = JSON.parse(xhr.response);
      console.log(response.status + "\n" + response.message);
    }
  }
};