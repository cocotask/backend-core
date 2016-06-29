var session = function () {
  var getSessionWeb = function () {
    var xhr, response;

    xhr = new XMLHttpRequest();
    xhr.open("GET", webServer.getSessionUrl(), true);

    xhr.send();

    xhr.onload = function () {
      if(xhr.status == "200") {
        console.log("web :" + xhr.responseText);
        response = JSON.parse(xhr.response);

      } else {
        response = JSON.parse(xhr.response);
        console.log(response.status + " : " + response.message);
      }
    };
  };

  var getSessionRest = function () {
    var xhr, response;

    xhr = new XMLHttpRequest();
    xhr.open("GET", restServer.getSessionUrl(), true);
    xhr.withCredentials = true;

    xhr.send();

    xhr.onload = function () {
      if(xhr.status == "200") {
        console.log("rest :" + xhr.responseText);
        response = JSON.parse(xhr.response);

      } else {
        response = JSON.parse(xhr.response);
        console.log(response.status + " : " + response.message);
      }
    };
  };

  return {
    getSessionWeb: function () {
      getSessionWeb();
    },
    getSessionRest: function () {
      getSessionRest();
    }
  }
}();