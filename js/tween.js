$(function() {


    TweenMax.fromTo(".section_01 .title", 2, {
        y: -150,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        ease: Bounce.easeOut

    });

    TweenMax.fromTo(".section_01 .content", 2, {
        x: -150,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        delay: 2,
        ease: Power1.easeOut
    });

    console.log("ok");

  var controller = new ScrollMagic.Controller();

  var wp = new TimelineMax().staggerFromTo(".flow .item", 0.5, {
        y: -50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
    }, 0.1);

    var scene = new ScrollMagic.Scene({
            triggerElement: "#section_01",
            reverse: true,
        })

      .setTween(wp)
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);






  // TweenMax.staggerTo(".flow .item", 0.5, {
  //       y: -100,
  //       opacity: 0
  //   }, {
  //       y: 0,
  //       opacity: 1,
  //       // repeat: 1,
  //       // repeatDelay: 0.5,
  //       // yoyo: true
  //       // rotation: 360
  //   }, 0.3);





});
