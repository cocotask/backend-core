var session = function () {
  var getSessionWeb = function () {
    var xhr;

    xhr = new XMLHttpRequest();
    xhr.open("GET", webServer.getSessionUrl(), true);

    xhr.send();

    xhr.onload = function () {
      if(xhr.status == "200") {
        console.log("web :" + xhr.responseText);

        return JSON.parse(xhr.response);

      } else {
        console.log(JSON.parse(xhr.response));

        return JSON.parse(xhr.response);
      }
    };
  };

  var getSessionRest = function (callback) {
    var xhr;

    xhr = new XMLHttpRequest();
    xhr.open("GET", restServer.getSessionUrl(), true);
    xhr.withCredentials = true;

    xhr.send();

    callback(xhr);
  };

  return {
    getSessionWeb: function () {
      getSessionWeb();
    },

    getSessionRest: function (callback) {
      getSessionRest(callback);
    }
  }
}();