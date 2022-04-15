/* function parallax_height() {
    var scroll_top = $(this).scrollTop();/**scrollTop https://developer.mozilla.org/es/docs/Web/API/Element/scrollTop 
    var header_height = $(".sample-header-section").outerHeight();/** OUTERHEIGHT https://developer.mozilla.org/es/docs/Web/API/Window/outerHeight 
    $(".sample-section").css({ "margin-top": header_height });
    $(".sample-header").css({ height: (header_height - scroll_top)+(header_height - scroll_top)*0.1 });
  }
  parallax_height();
  $(window).scroll(function() {
    parallax_height();
  });
  $(window).resize(function() {
    parallax_height();
  }); */

window.onscroll = function() {
  myFunction();
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("profile-img").style.height = "80px";
    document.getElementById("profile-img").style.width = "75px";
    /* var img = getElementById("profile-img");
    img.classList.remove("lg-img");
    img.classList.add("sm-img"); */
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("profile-img").style.height = "165px";
    document.getElementById("profile-img").style.width = "157px";
    /* var img2 = getElementById("profile-img");
    img2.classList.remove("sm-img");
    img2.classList.add("lg-img"); */
  }
}

function index() {
  location.replace('#')
}

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}