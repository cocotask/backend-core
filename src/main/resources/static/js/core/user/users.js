var usersInit = function() {
  readUsers();
};

var readUsers = function() {
  var xhr, response;
  xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8081/rest/users", true);
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
    }
  }
};
