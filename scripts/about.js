const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=3000",
    // snap: 1 / (sections.length - 1),
    // markers: true
  }
});

console.log(1 / (sections.length - 1))

//Progress bar animation

// gsap.to(mask, {
//   width: "100%",
//   scrollTrigger: {
//     trigger: ".wrapper",
//     start: "top left",
//     scrub: 1
//   }
// });

// whizz around the sections
sections.forEach((section) => {
  // grab the scoped text
  let text = section.querySelectorAll(".anim");
  
  // bump out if there's no items to animate
  if(text.length === 0)  return 
  
  // do a little stagger
  gsap.from(text, {
    y: 8,
    opacity: 0,
    duration: 3,
    ease: "elastic",
    stagger: .6,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      // markers: true
    }
  });
});

sections.forEach((section) => {
  // grab the scoped text
  let text = section.querySelectorAll(".anim-2");
  
  // bump out if there's no items to animate
  if(text.length === 0)  return 
  
  // do a little stagger
  gsap.from(text, {
    x: -50,
    opacity: 0,
    duration: 4,
    ease: "elastic",
    stagger: .6,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      // markers: true
    }
  });
});

sections.forEach((section) => {
  // grab the scoped text
  let text = section.querySelectorAll(".anim-3");
  
  // bump out if there's no items to animate
  if(text.length === 0)  return 
  
  // do a little stagger
  gsap.from(text, {
    y: -20,
    opacity: 0,
    duration: 4,
    ease: "elastic",
    stagger: .6,
    scrollTrigger: {
      trigger: (".sec1"),
      containerAnimation: scrollTween,
      start: "left center",
      // markers: true
    }
  });
});


// const container = document.querySelector('.container');
// let scrollLine = document.querySelector('.scroll');

// container.addEventListener('wheel', (e)=> {
//     e.preventDefault();
//     container.scrollLeft += e.deltaY;
//     scrollLine.style.width = container.scrollLeft / 2 + 'px';
// })