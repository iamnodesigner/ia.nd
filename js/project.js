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

//-----------------------------------------------------------------------------
function bgChanger(){
  if (this.scrollY > this.innerHeight / 1.5) {
    document.body.classList.add("bg-project");
  }else {
    document.body.classList.remove("bg-project");
  }
}

window.addEventListener('scroll', bgChanger);
