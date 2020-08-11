new hoverEffect({
    parent: document.querySelector(".distartion"),
    intensity: 0.2,
    image1: './images/01.png',
    image2: './images/02.png',
    displacementImage: './images/diss.png',
    imagesRatio: 380 / 300
})


TweenMax.to(".overlay1", 1.5, {
    delay: 0.5,
    top: "-100%",
    ease: Expo.easeInOut
})

TweenMax.to(".overlay2", 1.5, {
    delay: 0.6,
    top: "-100%",
    ease: Expo.easeInOut
})

TweenMax.to(".overlay3", 1.5, {
    delay: 0.7,
    top: "-100%",
    ease: Expo.easeInOut
})

TweenMax.from(".text h1", 1.5, {
    delay: 1.5,
    x: "-100%",
    ease: Expo.easeInOut
})

TweenMax.from(".text h3 .hideset", 1.5, {
    delay: 1.5,
    y: "100%",
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".text p .hideset", 1.5, {
    delay: 1.7,
    y: "100%",
    ease: Expo.easeInOut
})

TweenMax.from(".sponsor .img .hideset", 1.5, {
    delay: 1.7,
    y: "110%",
    ease: Expo.easeInOut
})

TweenMax.from(".sponsor .sp_name .hideset", 1.5, {
    delay: 1.7,
    y: "110%",
    ease: Bounce.easeOut
})

TweenMax.staggerFrom(".media ul li", 1.5, {
    delay: 1.5,
    opacity: 0,
    x: "-20",
    ease: Expo.easeInOut
}, 0.08)


TweenMax.staggerFrom(".navbar div", 1.5, {
    delay: 1.5,
    opacity: 0,
    y: "-20",
    ease: Expo.easeInOut
}, 0.08)