// var scrollThread = null;
// var isUserScrolling = false;
// var navScrollbar = $('#navScrollbar');

// function ToggleScrollbarVisiblity()
// {
//   if(isUserScrolling == false) {
//     navScrollbar.stop().fadeOut();
//     clearInterval(scrollThread);
//   }

//   isUserScrolling = false;
// }

// $('.scrollbar').scroll(function() {
//   if(isUserScrolling == false) {
//     navScrollbar.stop().fadeIn();
//     scrollThread = setInterval(ToggleScrollbarVisiblity, 1500);
//   }

//   isUserScrolling = true;
// });

// alert('Hi');

// $("#sidebar").hover(function(){
//     alert('Hovering');
//     $(this).css("overflow", "auto");
// }).hover(function(){
//     $(this).css("overflow", "hidden");
// });

// $(window).scroll(function () {
//   if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
//       alert("End Of The Page");
//   }
// });