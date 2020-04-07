function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function changeSearchWidth()
{
    document.getElementById("search").style.animation="chngeserchwidth 5s alternate";
    document.getElementById("search").style.animationPlayState="running";
}

function changeColorsOnOver() {
    var y=document.getElementsByClassName("first-content-icon");
    var x = document.getElementsByClassName("first-content");
    var n;
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "red";
      x[i].style.color = "white";
    }
    for (n = 0; n < y.length; n++) {
        y[n].style.color = "white";
    }
  }

  function originalColorsOnOut() {
    var y=document.getElementsByClassName("first-content-icon");
    var x = document.getElementsByClassName("first-content");
    var n;
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "white";
      x[i].style.color = "black";
    }
    for (n = 0; n < y.length; n++) {
        y[n].style.color = "red";
    }
  }