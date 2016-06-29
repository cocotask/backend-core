var webServer = function () {
  var webUrl = "http://localhost:8080/web";

  return {
    getUrl: function () { return webUrl ; },
    getUserUrl: function () { return webUrl + "/users" },
    getLoginUrl: function () { return webUrl + "/login" }
  }
}();

var restServer = function () {
  var restUrl = "http://localhost:8081/rest";

  return {
    getUrl: function () { return restUrl; },
    getUserUrl: function () { return restUrl + "/users" },
    getLoginUrl: function () { return restUrl + "/login" }
  }
}();
