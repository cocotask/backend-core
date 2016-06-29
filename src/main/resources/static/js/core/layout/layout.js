var layout = function() {
  var showHeader = function () {
    var headerContents = document.getElementById("layout_contents").import.getElementById("header_section").innerHTML;

    document.getElementsByTagName("header")[0].innerHTML = headerContents;
  };

  var showNav = function () {
    var navContents = document.getElementById("layout_contents").import.getElementById("nav_section").innerHTML;

    document.getElementsByTagName("nav")[0].innerHTML = navContents;
  };

  var loginoutBind = function () {
    document.getElementById("login").addEventListener("click", showModalLogin);
    document.getElementById("logout").addEventListener("click", logout);
  };

  var showLoginContents = function () {
    var xhr, loginContents;
    xhr = new XMLHttpRequest();
    xhr.open("GET", webServer.getUrl() + "/login");
    xhr.send();
    xhr.onload = function () {
      var parser, doc;
      parser = new DOMParser();
      doc = parser.parseFromString(xhr.responseText, "text/html");

      loginContents = document.getElementById("login_contents");
      loginContents.innerHTML = doc.getElementById("login_section").innerHTML;

      login.bind();
    }
  };

  var showModalLogin = function () {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  };

  var logout = function () {

  };

  return {
    showHeaderNav: function() {
      showHeader();
      showNav();
    },
    showLoginContents : function() {
      showLoginContents();
    },

    loginoutBind: function () {
      loginoutBind();
    }
  }
}();

layout.showHeaderNav();
layout.showLoginContents();
layout.loginoutBind();