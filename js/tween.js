$(function() {



  TweenMax.fromTo(".section_01 .title", 3, {
          x: -100,
          opacity: 0,
      }, {
          x: 0,
          opacity: 1,
          delay: 0.5,
          ease: Bounce.easeOut,
          // repeat: 1,
          // repeatDelay: 1
      });

  console.log("tween ok");


  TweenMax.fromTo(".section_01 .content", 3, {
          x: -100,
          opacity: 0,
      }, {
          x: 0,
          opacity: 1,
          delay: 2,
          ease: Bounce.easeOut,
          // repeat: 1,
          // repeatDelay: 1
      });

  console.log("tween ok");






});
