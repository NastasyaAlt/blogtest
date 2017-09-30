import $ from 'jquery';
import 'slick-carousel';
import 'gsap';

$('.js-slider').slick();

$('.js-logo').on('mouseover',function() {
  var tl = new TimelineMax();
  tl.timeScale(5);
  tl.to('.js-logo',2,{rotation: 20, });
  tl.to('.js-logo',2,{rotation: -20,});
  tl.to('.js-logo',2,{rotation: -0,});
});


TweenMax.staggerFrom('.js-post', 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);

$('.js-post').scroll(function() {
  TweenMax.staggerTo('.js-post', 0.5, {scale: 1, opacity:1, ease:Back.easeIn}, 0.1);
});


$('.js-photo').on('click', function() {
  var tl1 = new TimelineMax();
  tl1.to(this,0.1,{className:'js-photo-change'},);
});


$('.js-photo').on('click', function() {
  var tl1 = new TimelineMax();
  tl1.to('.js-photo-change',0.1,{className:'js-photo'});
});
