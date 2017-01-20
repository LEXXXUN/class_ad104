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
    //scrollmagic start

    var controller = new ScrollMagic.Controller();
    // new 場景

    var wp = new TimelineMax().staggerFromTo(".flow .item", 0.5, {
        y: -50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
    }, 0.1);
    console.log("time");
    var scene = new ScrollMagic.Scene({
            triggerElement: "#section_01",
            reverse: true,
        })

        .setTween(wp)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);


    //  add css

    var ourScene = new ScrollMagic.Scene({
      triggerElement:'#section_02'
    })
  .setClassToggle('.icon' , 'fade-in')  //add class to id
  .addIndicators({
    name: 'fade scene'
  })
  .addTo(controller);
  console.log("section_02  ok");

//logo 變背景顏色

  var ourScene_part2 = new ScrollMagic.Scene({
    triggerElement:'#section_03'
  })
.setClassToggle('.bgc' , 'color_fadein')  //add class to id
.addIndicators({
  name: 'fade scene color'
})
.addTo(controller);
console.log("section_03  ok");

//sticky  box

var sence_sticky = new ScrollMagic.Scene({
     triggerElement: '#section_04',
     duration:300,
     offset:100
})
.setPin("#sticky")
.addIndicators({
  name: 'sticky '
})
.addTo(controller);
console.log("sticky  ok");










});
