

gsap.registerPlugin(ScrollTrigger);


const sdLeft = document.getElementById('slideLeft');
const sdRight = document.getElementById('slideRight');
const picRight = document.getElementById('picRight');
const picLeft = document.getElementById('picLeft');

sdLeft.onmouseover = function () {
  picRight.style.marginLeft = '-300px'
  picLeft.style.marginRight = '0px'

}
sdLeft.onmouseleave = function () {
  picRight.style.marginLeft = '-150px'
  picLeft.style.marginRight = '-150px'

}


sdRight.onmouseover = function () {
  picLeft.style.marginRight = '-300px'
  picRight.style.marginLeft = '0px'

}

sdRight.onmouseleave = function () {
  picLeft.style.marginRight = '-150px'
  picRight.style.marginLeft = '-150px'

}



sdLeft.onmousedown = function () {
  location.href = "#codingSkills";
}


sdRight.onmousedown = function () {
  location.href = "#designTools";

}


const hamburgerIcon = document.getElementById('hamburgerIcon');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navigationBar = document.getElementById('navigationBar');
hamburgerIcon.onclick = function (){
hamburgerMenu.classList.toggle('hamburger-menu-extended');
navigationBar.classList.toggle('navigation-bar-extended');
hamburgerIcon.classList.toggle('icon-open');
}



// Scroll Trigger GSAP


var tl = gsap.timeline({
  defaults: {
    duration: 0.01,
    opacity: 0,
    ease: 'none',
  }
})

var sch = gsap.timeline({
  defaults: {
    duration: 1,
  }
})


sch.to('#mScroll', {
  duration: 0.5,
  y: 45,
  repeat: -1,
  yoyo: true
})

sch.from('.scroll-hint', {
  opacity: 0,
  delay: 0.5,
  duration: 3,
  y: 50,
  ease: 'elastic.out(1, 0.3)'

})


sch.from('.repeat-btn', {
  opacity: 0,
  delay: 2,
  duration: 3,
  x: -50,
  ease: 'elastic.out(1, 0.3)'

})

tl.to('.hi', {
  opacity: 1,
})



tl.to('.letters', {
  opacity: 1,
  width: '80px',
  color: '#ffffff',
}, '=2')

tl.to('.hi', {
  width: '100px',
  color: '#ffffff',
  opacity: 1,

})

tl.to('.im', {
  opacity: 1,
  width: '200px',
  color: '#ffffff',
})




tl.to('.im', {
  opacity: 1,
  width: '210px',
  color: '#ffffff',
}, '=3')


tl.to('.letters', {
  width: '0px',
  color: '#ffffff',
  opacity: 0,

})

tl.to('.hi', {
  opacity: 0,
  width: '0px',
  color: '#ffffff',
})


tl.to('.designer', {
  opacity: 1,
  width: '80px',
  color: '#ffffff',
})





gsap.to('.background-picture ', {
  scale: 1.1,
  duration: 0.5,
  scrollTrigger: {
    trigger: 'body',
    start: 'top 0%',
    toggleActions: 'play play play reverse',

    scrub: 1,
    // markers:true
  }
})




gsap.to('.background-picture ', {
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: '.body-container',
    start: 'bottom 80%%',
    toggleActions: 'play play play reverse',

    // scrub: 1,
    // markers:true
  }
})


gsap.from('.navigation-bar ', {
  duration: 0.5,
  scrollTrigger: {
    trigger: 'body',
    start: '1% 0%',
    // markers:true,
    toggleClass: {
      targets: '.navigation-bar',
      className: 'navigation-bar-hover'
    }
  }
})




gsap.to('.cactus-frame', {
  backgroundPositionX: '-150px',
  scrollTrigger: {
    trigger: '.cactus-frame',
    start: 'top 100%',

    scrub: 2,
    // markers: true
  }
})


gsap.to('.cactus', {
  x: -150,
  scrollTrigger: {
    trigger: '.cactus-frame',
    start: 'top 100%',


    scrub: 2,
    // markers: true
  }
})





gsap.from('.main-container', {

  // borderRadius:'90%',
  scrollTrigger: {
    trigger: '.body-container',
    start: 'bottom 100%',
    end: 'bottom 50%',
    toggleActions: 'play play play reverse',

    scrub: 3,
    // markers:true
  }
})


gsap.to('.intro-holder', {
  // delay: 0.1,
  duration: 0.5,
  opacity: 0,
  pointerEvents: 'none',
  scrollTrigger: {
    trigger: 'body',
    start: '0.1% 0%',
    // markers:true
  }
})





gsap.to('.intro', {
  duration: 0.3,
  y: -150,
  opacity: 0,
  pointerEvents: 'none',
  scrollTrigger: {
    trigger: 'body',
    start: '2% 1%',


    // markers:true
  }
})


const cardsSplash = gsap.utils.toArray('.splash');
cardsSplash.forEach(card => {
  gsap.to(card, {
    // delay: 0.1,
    duration: 3,
    opacity: 1,
    // y:-500,
    maskSize: '800%',
    scrollTrigger: {
      trigger: card,
      start: 'center 100%',
      end: 'center 0%',
      toggleActions: 'play play play reverse',
      // scrub:3,
      // markers:true
    }
  })
});

const cardFadeUp = gsap.utils.toArray('.fade-up');
cardFadeUp.forEach(card => {

  gsap.from(card, {
    duration: 1,
    opacity: 0,
    y:100,
    stagger: 0.2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 70%',
      end: 'bottom 0%',

      // markers:true
    }
  })
});


const cardFadeLeft = gsap.utils.toArray('.fade-left');
cardFadeLeft.forEach(card => {

  gsap.from(card, {
    duration: 1,
    opacity: 0,
    x:100,
    stagger: 0.2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 70%',
      end: 'bottom 0%',

      // markers:true
    }
  })
});

const cardFadeRight = gsap.utils.toArray('.fade-right');
cardFadeRight.forEach(card => {

  gsap.from(card, {
    duration: 1,
    opacity: 0,
    x:-100,
    stagger: 0.2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 70%',
      end: 'bottom 0%',

      // markers:true
    }
  })
});



// gsap.to('.splash-top', {
//   // delay: 0.1,
//   duration: 1,
//   opacity: 1,
//   maskSize: '80%',
//   scrollTrigger: {
//     trigger: '.main-container',
//     start: 'top 70%',
//     end: 'bottom 70%',
//     // scrub:2,
//     // markers:true
//   }
// })

gsap.to('.splash-bottom', {
  // delay: 0.1,
  duration: 2,
  opacity: 1,
  y: -500,
  // ease: 'Power4.easeOut',
  maskSize: '300%',
  scrollTrigger: {
    trigger: '.body-container',
    start: 'bottom 100%',
    end: 'bottom 0%',
    // toggleActions: 'play play play restart',
    scrub: 3,
    // markers:true


  }
})



gsap.from('.card-pic', {
  delay: 0.1,
  duration: 1,
  y: -500,
  scrollTrigger: {
    trigger: '.skill-slide',
    start: 'top 100%',

    // scrub: 3,
    // markers: true
  }
})


gsap.from('.progress-bar', {
  delay: 0.1,
  duration: 2,
  stagger: 0.2,
  width: '1%',
  scrollTrigger: {
    trigger: '.progress-bar',
    start: 'top 100%',


    // scrub: 3,
    // markers: true
  }
})

gsap.from('.eli', {
  opacity: 0,
  duration: 1,
  x:'50%',
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.portfolio-frame',
    start: '0% 50%',
    end: '90% 0%',

    // scrub: true,
    // markers: true
  }
})



// gsap.from('.portfolio-holder', {
//   top: '50%',
//   borderRadius: '150px',
//   height: '150px',
//   width: '150px',
//   stagger: true,
//   scrollTrigger: {
//     trigger: '.portfolio-frame',
//     start: '0% 20%',
//     end: '20% 0%',

//     scrub: 1,
//     markers: true
//   }
// })


gsap.fromTo('.thumbnail-container', {
  y:'300px',
},
{
  y:'-300px',
  scrollTrigger: {
    trigger: '.thumbnail-container',
    start: '0% 100%',
    end: '50% 0%',

    scrub: true,
    // markers: true
  }
}

)


// gsap.from('.left-col', {

//   duration: 10,
//   y: 600,
//   scrollTrigger: {
//     trigger: '.thumbnails',
//     start: 'top 80%',
//     end: 'bottom 20%',


//     scrub: 2,
//     // markers: true
//   }
// })

// gsap.from('.mid-col', {

//   duration: 10,
//   y: 200,
//   scrollTrigger: {
//     trigger: '.thumbnails',
//     start: 'top 80%',
//     end: 'bottom 20%',


//     scrub: 2,
//     // markers: true
//   }
// })

// gsap.from('.right-col', {

//   duration: 10,
//   y: 400,
//   scrollTrigger: {
//     trigger: '.thumbnails',
//     start: 'top 80%',
//     end: 'bottom 20%',


//     scrub: 2,
//     // markers: true
//   }
// })


gsap.to('.contact', {
  duration: 0.2,
  opacity: 1,
  pointerEvents: 'all',

  scrollTrigger: {
    trigger: 'footer',
    start: 'bottom 101%',
    toggleActions: 'play play play reverse',
    // markers: true
  }
})

function repeat() {

  tl.play(0.1);
}

// gsap.to('.body-container ', {
//   border: 'solid black 0px',
//   boxShadow: '-5px 5px 15px rgba(0, 0, 0, 0), 0 0 5px rgba(0, 0, 0, 0)',
//   duration: 0.5,
//   scrollTrigger: {
//     trigger: 'body',
//     start: 'top 0%',
//     toggleActions: 'play play play reverse',

//     scrub: true,
//     // markers:true
//   }
// })

