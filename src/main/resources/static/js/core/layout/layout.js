var layout = function() {
  var importLayoutHtml = document.getElementById("layout_contents").import;

  var showHeader = function (callback) {
    var headerContents = importLayoutHtml.getElementById("header_section").innerHTML;

    document.getElementsByTagName("header")[0].innerHTML = headerContents;

    if (callback !== undefined){
      callback();
    }
  };

  var showNav = function () {
    var navContents = importLayoutHtml.getElementById("nav_section").innerHTML;

    document.getElementsByTagName("nav")[0].innerHTML = navContents;
  };

  var bindHeader = function () {
    document.getElementById("userInfo").addEventListener("click", showModal);
  };

  var showLoginContents = function (callback) {
    var modalContent;

    modalContent = document.getElementById("modal_content");
    modalContent.innerHTML = importLayoutHtml.getElementById("login_section").innerHTML;

    if (callback !== undefined){
      callback();
    }
  };

  var showModal = function () {
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

  // TODO: need refactor
  var showLoginMsgFromSession = function () {
    session.getSessionRest(showLoginMsg);

    function showLoginMsg(xhr) {
      var loginMsg = document.getElementById("loginMsg");

      xhr.onload = function () {
        if(xhr.status == "200") {
          var sessionRest = JSON.parse(xhr.response);

          if (sessionRest.userUid == null) {
            showLogoutMsg();

          } else {
            loginMsg.innerText = sessionRest.loginUserName;
          }

        } else {
          var response = JSON.parse(xhr.response);
          loginMsg.innerText = response.error;
        }
      };

      xhr.onerror = function() {
        loginMsg.innerText = restServer.getSessionUrl() + " 서버가 연결되지 않습니다.";
      }
    }
  };

  var showLogoutMsg = function() {
    var loginMsg = document.getElementById("loginMsg");
    loginMsg.innerText = "login ";
  };

  return {
    showHeader : function() {
      showHeader(bindHeader);
    },

    showLoginMsgFromSession: function() {
      showLoginMsgFromSession();    //TODO: 페이지 조회시마다 통신문제
    },

    showLogoutMsg : function () {
      showLogoutMsg();
    },

    showNav : function() {
      showNav();
    },

    showLoginContents : function(callback) {
      showLoginContents(callback);
    }
  }
}();

layout.showHeader();
layout.showLoginMsgFromSession();
layout.showNav();
layout.showLoginContents(login.bind);