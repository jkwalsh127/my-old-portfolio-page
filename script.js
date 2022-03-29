window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("h1").style.fontSize = "200%";
    document.getElementById("h1").style.height = "50px";
    document.getElementById("h1").style.width = "200px";
    document.getElementById("nav-ul").style.fontSize = "100%";
    document.getElementById("header").style.height = "50px";
  } else {
    document.getElementById("h1").style.fontSize = "400%";
    document.getElementById("h1").style.height = "80px";
    document.getElementById("h1").style.width = "350px";
    document.getElementById("nav-ul").style.fontSize = "150%";
    document.getElementById("header").style.height = "150px";
  }
}