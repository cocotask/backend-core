(function(){
  showLayout();
})();

function showLayout() {
  showHeader();
  showNav();

  function showHeader () {
    var headerContents;
    headerContents = document.getElementById("layout_contents").import.getElementById("header_section").innerHTML;

    document.getElementsByTagName("header")[0].innerHTML = headerContents;
  }

  function showNav () {
    var navContents;
    navContents = document.getElementById("layout_contents").import.getElementById("nav_section").innerHTML;

    document.getElementsByTagName("nav")[0].innerHTML = navContents;
  }
};
