var userInit = function () {
  readUser();
};

var showUser = function (user) {
  var xhr, rendered;

  xhr = new XMLHttpRequest();
  xhr.open("GET", "/fragments/core/user/user.mustache", true);
  xhr.send();

  xhr.onload = function () {
    if (xhr.status == "200") {
      rendered = Mustache.render(xhr.response, user);
      document.getElementById("userArticle").innerHTML = rendered;
    }
  };
};

var readUser = function () {
  var xhr, userUid, user, response;

  userUid = document.getElementById("userArticle").dataset.userUid;

  xhr = new XMLHttpRequest();
  xhr.open("GET", serverInfo.getUserRestUrl() + "/" + userUid, true);
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

