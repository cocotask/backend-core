var users = function () {
  var bind = function () {
    var readRows = document.getElementsByClassName("_readUserBtn");
    var updateRows = document.getElementsByClassName("_updateUserBtn");
    var deleteRows = document.getElementsByClassName("_deleteUserBtn");

    for (var i = 0; i < readRows.length; i++) {
      readRows[i].addEventListener("click", gotoReadUser);
    }

    for (var i = 0; i < updateRows.length; i++) {
      updateRows[i].addEventListener("click", gotoUpdateUser);
    }

    for (var i = 0; i < deleteRows.length; i++) {
      deleteRows[i].addEventListener("click", deleteUser);
    }
  };

  var deleteUser = function () {
    var xhr, response, userUid;

    userUid = this.dataset.userUid;

    xhr = new XMLHttpRequest();
    xhr.open("DELETE", restServer.getUserUrl() + "/" + userUid, true);
    xhr.send();

    xhr.onload = function() {
      if (xhr.status == '200') {
        readUsers();

      } else {
        response = JSON.parse(xhr.response);
        console.log(response.status + "\n" + response.message);
      }
    }
  };

  var readUsers = function() {
    var xhr, response;
    xhr = new XMLHttpRequest();

    xhr.open("GET", restServer.getUserUrl(), true);
    xhr.send();

    xhr.onload = function() {
      if (xhr.status == '200') {
        response = JSON.parse(xhr.response);

        showUsers(response);

      } else {
        response = JSON.parse(xhr.response);
        console.log(response.status + "\n" + response.message);
      }
    }
  };

  var showUsers = function(data) {
    var xhr, users, rendered;

    xhr = new XMLHttpRequest();
    xhr.open("GET", "/fragments/core/user/users.mustache", true);
    xhr.send();

    xhr.onload = function() {
      if (xhr.status == '200') {
        users = { "users" : data };
        rendered = Mustache.render(xhr.response, users);
        document.getElementById("usersArticle").innerHTML = rendered;

        bind();
      }
    }
  };

  var gotoReadUser = function () {
    var userUid = this.dataset.userUid;
    location.href = webServer.getUserUrl() + "/" + userUid;
  };

  var gotoUpdateUser = function () {
    var userUid = this.dataset.userUid;
    location.href = webServer.getUserUrl() + "/" + userUid + "/edit";
  };

  return {
    usersInit: function() {
      readUsers();
    },
    gotoReadUser: function() {
      gotoReadUser();
    },
    gotoUpdateUser: function() {
      gotoUpdateUser();
    }
  }
}();
