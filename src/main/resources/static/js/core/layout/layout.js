var layout = function() {
  var showHeader = function () {
    var headerContents = document.getElementById("layout_contents").import.getElementById("header_section").innerHTML;

    document.getElementsByTagName("header")[0].innerHTML = headerContents;
  };

  var showNav = function () {
    var navContents = document.getElementById("layout_contents").import.getElementById("nav_section").innerHTML;

    document.getElementsByTagName("nav")[0].innerHTML = navContents;
  };

  return {
    showHeaderNav: function() {
      showHeader();
      showNav();
    }
  }
}();

layout.showHeaderNav();