// Locomotive JS
(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

function loadingAnimation() {
  let tl = gsap.timeline();
  tl.to(".nav-p2 a", {
    opacity: 1,
    stagger: 0.25,
  });
  tl.to(".btm-div h1 span", {
    opacity: 1,
    duration: 0.3,
    stagger: 0.1,
  });
}
loadingAnimation();

document.querySelectorAll(".nav-p2 a").forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    gsap.to(".dark", {
      opacity: 1,
    });
    gsap.to("nav .nav-p2 a:nth-child(1)::after", {
      top: "50%",
    });
  });
  link.addEventListener("mouseleave", function () {
    gsap.to(".dark", {
      opacity: 0,
    });
  });
});



function HomePageAnim() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom top",
      scrub: 2,
      pin: true,
    },
  });

  gsap.set(".center", { scale: 5 });

  tl.to(
    ".video-div",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  );

  tl.to(
    ".center",
    {
      scale: 1,
      ease: Power2,
    },
    "a"
  );

  tl.to(
    ".lft",
    {
      xPercent: -7,
      ease: Power3,
    },
    "b"
  );

  tl.to(
    ".rgt",
    {
      xPercent: 7,
      ease: Power3,
    },
    "b"
  );
}
HomePageAnim();

function realPageAnim() {
  gsap.to(".slide", {
    xPercent: -200,
    ease: Power4,
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      // markers: true,
      scrub: 1,
    },
  });
}
realPageAnim();

function teamAnim() {
  let elems = document.querySelectorAll(".list-elem");
  elems.forEach(function (el) {
    let pic = el.querySelector(".pro-pic");
    el.addEventListener("mousemove", function (info) {
      // console.log(info.clientX);
      let xval = gsap.utils.mapRange(0, window.innerWidth, -100, 100, info.x);
      console.log(xval);
      gsap.to(pic, {
        opacity: 1,
        x: xval,
      });
    });
    el.addEventListener("mouseleave", function (info) {
      gsap.to(pic, {
        opacity: 0,
      });
    });
  });
}
teamAnim();

function para_text_anim() {
  let clutter = "";
  document
    .querySelector(".first-left-part>p")
    .textContent.split(" ")
    .forEach(function (dets) {
      clutter += `<span> ${dets} </span>`;
      document.querySelector(".first-left-part>p").innerHTML = clutter;
    });

  gsap.to(".first-left-part>p>span", {
    color: "#2544ee",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".first-left-part>p>span",
      scroller: "body",
      // markers: true,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
    },
  });

  let clutter2 = "";
  document
    .querySelector(".second-right-part>p")
    .textContent.split(" ")
    .forEach(function (dets) {
      clutter2 += `<span> ${dets} </span>`;
      document.querySelector(".second-right-part>p").innerHTML = clutter2;
    });

  gsap.to(".second-right-part>p>span", {
    color: "#704B98",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".second-right-part>p>span",
      scroller: "body",
      // markers: true,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
    },
  });
}
para_text_anim();

function changingBgColor() {
  let sections = document.querySelectorAll(".section");
  sections.forEach(function (section) {
    ScrollTrigger.create({
      trigger: section,
      start: "top 50%",
      end: "bottom 50%",
      // markers: true,
      onEnter: function () {
        document.body.setAttribute("theme", section.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", section.dataset.color);
      },
    });
  });
}
changingBgColor();

