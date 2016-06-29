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

  return {
    showHeader : function() {
      showHeader(bindHeader);
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
layout.showNav();
layout.showLoginContents(login.bind);