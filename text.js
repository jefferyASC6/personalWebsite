window.onscroll = function() {myFunction()};

let header = document.getElementById("topbar");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function warp(evt, eventName){
    let i, buttoncontent, button;

    buttoncontent = document.getElementsByClassName("buttoncontent");
    for (i=0; i < buttoncontent.length; i++){
        buttoncontent[i].style.display = "none";
    }

    button = document.getElementsByClassName("button");
    for (i=0; i < button.length; i++){
        button[i].className = button[i].className.replace(" active", "");
    }

    document.getElementById(eventName).style.display = "block";
    evt.currentTarget.className += " active";
}