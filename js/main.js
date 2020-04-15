TweenMax.staggerFrom(".nav-wrapper ul li", 1, {
      opacity: 0,
      y: -20,
      ease: Expo.easeInOut
}, 0.1);
TweenMax.staggerFrom(".bg", 2, {
      delay: 1,
      opacity: 0,
      y: "100%",
      ease: Expo.easeInOut
});

// MENU ------------------------------------------------------------------------
var nav = document.getElementById("nav");
if (nav.checked === true) {
  document.getElementById('nav-wrapper').classList.add(".hidden");
}else {
  document.getElementById('nav-wrapper').classList.remove(".hidden");
}

// CURSORE IMMAGINI-------------------------------------------------------------
var $cursor = $(".cursor"),
  $overlay = $(".project-overlay");

function moveCircle(e) {
  TweenLite.to($cursor, 0.5, {
    css: {
      left: e.pageX,
      top: e.pageY
    },
    delay: 0.03
  });
}

$(".p-1").hover(function() {
  $(".cursor").css({ "background-image": "url(img/io.jpg)" });
});

var flag = false;
$($overlay).mousemove(function() {
  flag = true;
  TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
  $($overlay).on("mousemove", moveCircle);
});

$($overlay).mouseout(function() {
  flag = false;
  TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});

//CURSOR -----------------------------------------------------------------------
let mouseCursor = document.querySelector(".mouse");
let navLinks = document.querySelectorAll("header li");
let contact = document.querySelectorAll("#contact");
let mailchimp = document.querySelectorAll("#mailchimp");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
};
navLinks.forEach(link => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });

  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});

contact.forEach(link => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });

  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});

mailchimp.forEach(link => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow1");
  });

  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow1");
  });
});

//-----------------------------------------------------------------------------
function bgChanger(){
  if (this.scrollY > this.innerHeight / 1.5) {
    document.body.classList.add("bg-active");
    document.getElementById('emoji').style.display = "inline-block";
  }else {
    document.body.classList.remove("bg-active");
    document.getElementById('emoji').style.display = "none";
  }
}

window.addEventListener('scroll', bgChanger);

/*-----------------------------------------------------------------------------
$(document).ready(function(){
  $(".nav-btn").click(function(e){
    $(".nav-wrapper").toggleClass('is-open');
    e.preventDefault();
  });
});

$(document).ready(function(){
  $(".nav-wrapper a").click(function(e){
    $(".nav-wrapper").toggleClass('is-open');
    e.preventDefault();
  });
})
*/
