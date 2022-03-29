window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("my-name").style.fontSize = "200%";
    document.getElementById("my-name-label-border").style.height = "42px";
    document.getElementById("my-name-label-border").style.width = "301px";
    document.getElementById("my-name-label").style.height = "40px";
    document.getElementById("my-name-label").style.width = "300px";
    document.getElementById("nav-ul").style.fontSize = "100%";
    document.getElementById("header").style.height = "50px";
  } else {
    document.getElementById("my-name").style.fontSize = "400%";
    document.getElementById("my-name-label-border").style.height = "74px";
    document.getElementById("my-name-label-border").style.width = "463px"; 
    document.getElementById("my-name-label").style.height = "70px";
    document.getElementById("my-name-label").style.width = "460px";
    document.getElementById("my-name").style.width = "350px";
    document.getElementById("nav-ul").style.fontSize = "150%";
    document.getElementById("header").style.height = "100px";
    document.getElementById("header").style.padding = ".5% 1% 1% 0";
  }
}       