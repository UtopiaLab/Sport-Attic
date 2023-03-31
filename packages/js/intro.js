TweenMax.staggerFrom(
    ".titles > div",
    1,
    {
        x: "-60",
        ease: Power3.easeInOut,
        opacity: "0",
    },
    2
);

TweenMax.staggerTo(
    ".titles > div",
    1,
    {
        x: "60",
        ease: Power3.easeInOut,
        delay: 1.5,
        opacity: "0",
    },
    1
);

var textWrapper = document.querySelector(".header");
anime.timeline().add({
    targets: ".header",
    opacity: [0, 1],
    translateY: [80, 0],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 3000,
    delay: (el, i) => 3500 + 40 * i,
});

setTimeout(function(){
    window.location.href ="./main.html";
},7000);

