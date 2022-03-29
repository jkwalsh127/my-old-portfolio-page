window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("my-name").style.fontSize = "200%";
    document.getElementById("my-name-label").style.height = "40px";
    document.getElementById("my-name-label").style.width = "350px";
    document.getElementById("nav-ul").style.fontSize = "100%";
    document.getElementById("header").style.height = "50px";
  } else {
    document.getElementById("my-name").style.fontSize = "400%";
    document.getElementById("my-name-label").style.height = "70px";
    document.getElementById("my-name-label").style.width = "350px"; 
    document.getElementById("my-name").style.width = "350px";
    document.getElementById("nav-ul").style.fontSize = "150%";
    document.getElementById("header").style.height = "100px";
  }
}       