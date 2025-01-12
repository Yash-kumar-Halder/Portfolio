import { skillsCardData } from "./skillsCard.api.js"


let exploreBtn = document.querySelector(".exploreWraper");
let exploreText = document.querySelector(".exploreWraper p");
let skillCardcont = document.querySelector(".skillCardcont");
let page3 = document.querySelector(".page3");




function exploreAnimaton() {
  exploreBtn.addEventListener("mouseenter", () => {
    exploreText.style.color = "#bbb";
    exploreText.style.scale = "1";
  })

  exploreBtn.addEventListener("mouseleave", () => {
    exploreText.style.color = "#0000";
    exploreText.style.scale = "1";
  })
}


function kumar() {
  skillsCardData.map((card) => {
    let cardContent = `<div class="skillCards">
                        ${card.icon}
                        <h3 class="skillCardHeading">${card.heading}</h3>
                        <p class="skillCardPara">${card.content}</p>
                    </div>`;
    skillCardcont.innerHTML += cardContent;

  })
}




exploreAnimaton();
kumar();



// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline();

tl.to(".skillCards", {
  scale: 5,
  opacity: 1,
  stagger: 0.2,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".page2",
    start: "top 60%",
    end: "top -5%",
    scrub: true,
    // markers: true,
  }
});

tl.to(".skillsCapsule", {
  scale: 10,
  opacity: 1,
  stagger: 0.4,
  duration: 1.7,
  scrollTrigger: {
    trigger: ".page3",
    start: "top 20%",
    end: "top 2%",
    scrub: true,
    // markers: true,
  }
});
tl.to(".page3Part2", {
  scale: 2.5,
  opacity: 1,
  stagger: 0.4,
  duration: 1.7,
  scrollTrigger: {
    trigger: ".page3",
    start: "top 50%",
    end: "top 2%",
    scrub: true,
    // markers: true,
  }
});
// tl.to(".contactLeft", {
//   scale: 2.3,
//   opacity: 1,
//   stagger: 0.4,
//   duration: 1.7,
//   scrollTrigger: {
//     trigger: ".contactLeft",
//     start: "top 80%",
//     end: "top 40%",
//     scrub: true,
//     // markers: true,
//   }
// });
tl.to(".contactRight", {
  scale: 2.5,
  opacity: 1,
  stagger: 0.4,
  duration: 1.7,
  scrollTrigger: {
    trigger: ".contactRight",
    start: "top 80%",
    end: "top 40%",
    scrub: true,
    // markers: true,
  }
});


gsap.to(".marqueeInnerCont", {
  x: "-50%",
  scrollTrigger: {
    trigger: ".marqueeInnerCont",
    start: "top 100%",
    end: "buttom -40%",
    scrub: true,
    // markers: true
  }
})
gsap.to(".circle-div", {
  rotate: "360deg",
  scrollTrigger: {
    trigger: ".circle-div",
    start: "top 100%",
    end: "buttom -40%",
    scrub: true,
    // markers: true
  }
})





function navOnScroll() {
  const body = document.body;
  let navigation = document.querySelector(".navigation")
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      // navigation.classList.remove("hideNav")
    }
    if (currentScroll > lastScroll && currentScroll >= 4) {
      body.classList.add("hideNav");
      // body.classList.add("scrollLogo");
    }
    if (currentScroll < lastScroll) {
      body.classList.remove("hideNav");
    }

    lastScroll = currentScroll;
  })

}


// for (let i = 0; i <= 200; i++) {
//   const element = `<div class="circle-dot"></div>`;
//   page3.innerHTML += element;

// }




navOnScroll();