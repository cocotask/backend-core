var serverInfo = function () {
  var webUrl = "http://localhost:8080/web";
  var restUrl = "http://localhost:8081/rest";

  return {
    getWebUrl: function () {
      return webUrl ;
    },

    getRestUrl: function () {
      return restUrl;
    },

    getUserWebUrl: function () {
      return webUrl + "/users"
    },

    getUserRestUrl: function () {
      return restUrl + "/users"
    }
  }
}();