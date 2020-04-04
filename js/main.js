//DARK - LIGHT MODE ------------------------------------------------------------
var temp = document.getElementById("mycheck");
var body = document.getElementById("body");

var d = new Date();
var h = d.getHours();

if (h >= 18 || h <= 6){
  body.classList.add("dark")
  temp.checked = true;
}
else{
  body.classList.add("light");
  temp.checked = false;
}

function check() {
  if (temp.checked === false){
    body.classList.remove("dark");
    body.classList.add("light");
  }else{
    body.classList.remove("light");
    body.classList.add("dark");
  }
}

//CURSOR -----------------------------------------------------------------------
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll("#body li");
let callToAction = document.querySelectorAll(".text a");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
};
callToAction.forEach(call => {
  call.addEventListener("mouseleave", () =>{
    mouseCursor.classList.remove("link-grow");
    call.classList.remove("hovered-link");
  });
  call.addEventListener("mouseover", () =>{
    mouseCursor.classList.add("link-grow");
    call.classList.add("hovered-link");
  });

});

navLinks.forEach(link => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });

  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});

//SWUP JS-------------------------------------------------------------------
const swup = new Swup();
