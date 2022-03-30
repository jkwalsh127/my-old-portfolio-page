// 
// sets fixed header resizing upon scroll
// 

var w = document.documentElement.clientWidth || window.innerWidth;
if (w <= 1020 & w >= 580 ) {

  window.onscroll = () => { scrollFunction(); };

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("my-name").style.fontSize = "200%";
      document.getElementById("my-name").style.padding = "8px 20px 0 40px";
      document.getElementById("my-name-label-border").style.height = "38px";
      document.getElementById("my-name-label-border").style.margin = "0 0 20px 0";
      document.getElementById("my-name-label-border").style.width = "233px";
      document.getElementById("my-name-label").style.height = "35px";
      document.getElementById("my-name-label").style.width = "230px";
      document.getElementById("nav-ul").style.fontSize = "100%";
      document.getElementById("header").style.height = "50px";
      document.getElementById("header").style.padding = "10px 10px 5px 0";
      document.getElementById("nav-about").style.padding = "8px";
      document.getElementById("nav-work").style.padding = "8px";
      document.getElementById("nav-contact").style.padding = "8px";
    } else {
      document.getElementById("my-name").style.fontSize = "200%";
      document.getElementById("my-name-label-border").style.height = "38px";
      document.getElementById("my-name-label-border").style.margin = "20px 0 0 0";
      document.getElementById("my-name-label-border").style.width = "233px"; 
      document.getElementById("my-name-label").style.height = "35px";
      document.getElementById("my-name-label").style.width = "230px";
      document.getElementById("my-name").style.width = "160px";
      document.getElementById("my-name").style.padding = "8px 20px 0 40px";
      document.getElementById("nav-ul").style.fontSize = "140%";
      document.getElementById("header").style.height = "74px";
      document.getElementById("header").style.padding = "0px 0 15px 0";
      document.getElementById("nav-about").style.padding = "30px 25px 15px 25px";
      document.getElementById("nav-work").style.padding = "30px 25px 15px 25px";
      document.getElementById("nav-contact").style.padding = "30px 25px 15px 25px";
    }
  }       

} else {

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
      document.getElementById("header").style.padding = "10px 0 5px 0";
      document.getElementById("nav-about").style.padding = "8px";
      document.getElementById("nav-work").style.padding = "8px";
      document.getElementById("nav-contact").style.padding = "8px";
    } else {
      document.getElementById("my-name").style.fontSize = "400%";
      document.getElementById("my-name-label-border").style.height = "74px";
      document.getElementById("my-name-label-border").style.width = "463px"; 
      document.getElementById("my-name-label").style.height = "70px";
      document.getElementById("my-name-label").style.width = "460px";
      document.getElementById("my-name").style.width = "350px";
      document.getElementById("nav-ul").style.fontSize = "150%";
      document.getElementById("header").style.height = "74px";
      document.getElementById("header").style.padding = "30px 0 15px 0";
      document.getElementById("nav-about").style.padding = "30px 25px 15px 25px";
      document.getElementById("nav-work").style.padding = "30px 25px 15px 25px";
      document.getElementById("nav-contact").style.padding = "30px 25px 15px 25px";
    }
  }       

}

// 
// 

var w = document.documentElement.clientWidth || window.innerWidth;
if (w < 580) {

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("my-name").style.fontSize = "150%";
      document.getElementById("my-name").style.padding = "8px 20px 0 40px";
      document.getElementById("my-name-label-border").style.height = "38px";
      document.getElementById("my-name-label-border").style.margin = "0 0 20px 0";
      document.getElementById("my-name-label-border").style.width = "233px";
      document.getElementById("my-name-label").style.height = "35px";
      document.getElementById("my-name-label").style.width = "230px";
      document.getElementById("nav-ul").style.fontSize = "80%";
      document.getElementById("header").style.height = "50px";
      document.getElementById("header").style.padding = "10px 10px 5px 0";
      document.getElementById("nav-about").style.padding = "8px";
      document.getElementById("nav-work").style.padding = "8px";
      document.getElementById("nav-contact").style.padding = "8px";
    } else {
      document.getElementById("my-name").style.fontSize = "150%";
      document.getElementById("my-name-label-border").style.height = "38px";
      document.getElementById("my-name-label-border").style.margin = "20px 0 0 0";
      document.getElementById("my-name-label-border").style.width = "233px"; 
      document.getElementById("my-name-label").style.height = "35px";
      document.getElementById("my-name-label").style.width = "230px";
      document.getElementById("my-name").style.width = "160px";
      document.getElementById("my-name").style.padding = "8px 20px 0 40px";
      document.getElementById("nav-ul").style.fontSize = "80%";
      document.getElementById("header").style.height = "66px";
      document.getElementById("header").style.padding = "0px 0 15px 0";
      document.getElementById("nav-about").style.padding = "30px 25px 15px 25px";
      document.getElementById("nav-work").style.padding = "30px 25px 15px 25px";
      document.getElementById("nav-contact").style.padding = "30px 25px 15px 25px";
    }
  }       

} else {

  }       