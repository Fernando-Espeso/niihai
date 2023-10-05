/*
 * Global Scripts
 */
//Lazy Loading for images
document.addEventListener("DOMContentLoaded", function(){
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  if("IntersectionObserver" in window){
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function(lazyImage){
      lazyImageObserver.observe(lazyImage);
    });
  }



$('#related .main>.product:gt(3)').remove();

$('.menu-open').click(function(){
     $('.categories').toggle();
     $('.brand-links').toggle();
});

$('#add-to-bag').click(function(){
     $('.cart-part li a').addClass("blink");
     $('.cart-part li').addClass("yellow");
});

$('.shop').click(function(){
     $('.categories').toggle();
});
// 
// const elementoSticky = document.getElementById('add-to-bag');
// const posicionSticky = 200; // La posición en la que se vuelve sticky
//
// window.addEventListener('scroll', () => {
//   if (window.scrollY >= posicionSticky) {
//     elementoSticky.style.position = 'fixed';
//     elementoSticky.style.top = '0';
//   } else {
//     elementoSticky.style.position = 'static';
//   }
// });

$('.brand.desktop').click(function(){
     $('.brand-links').toggle();
});

$('#close').click(function(){
     $('.filters_shop').removeClass("open");
     $('#close').hide();
});

$('#remove_filter').click(function(){
     $('#products').removeClass();
     $('.product').removeClass('active-size active-color');
     $('.ops li a').removeClass('active');
     $('#filte').html(0);
     $('#remove_filter').removeClass("line");
     $('.product').sort(function(a, b){

     }).prependTo('#products');
});

var show = true;
$(document).scroll(function () {
    var y = $(this).scrollTop();
    var box = document.querySelector('.product_gallery')
    var box3 = document.querySelector('.product_gallery_second')
    var boe = document.querySelector('.buy-block')
    var box2 = document.querySelector('.product_gallery_last'),
        height = box.offsetHeight + box3.offsetHeight + box2.offsetHeight - boe.offsetHeight;
    if (y > height) {
      if(show){
        $('.buy-block').addClass("active");
      }
    } else {
        $('.buy-block').removeClass("active");
    }
});
});

 $( document ).ready(function() {
   //SORT
          $('.sort').click(function(){
                   var t = $(this),
                   k = t.data('sort');
                   t.parent().siblings().children().removeClass('active');
                   if(!t.hasClass('active')){
                           t.addClass('active');
                           $('.product:not([data-'+ k +'="null"])').sort(function(a, b){
                                   if(!t.hasClass('invert')){
                                           return $(b).data(k) < $(a).data(k) ? 1 : -1;
                                   }else{
                                           return $(b).data(k) > $(a).data(k) ? 1 : -1;
                                   }
                           }).prependTo('#products');
                   }
           });
          const videoElement = document.querySelector('video');
          const playPauseButton = document.querySelector('button');

          playPauseButton.addEventListener('click', () => {
          	playPauseButton.classList.toggle('playing');
          	if (playPauseButton.classList.contains('playing')) {
          		videoElement.play();
          	}
          	else {
          		videoElement.pause();
          	}
          });

          videoElement.addEventListener('ended', () => {
          	playPauseButton.classList.remove('playing');
          });


  });
  // Set the time (in milliseconds) after which the screen saver will appear
      const inactivityTimeout = 50000; // 10 seconds

      // Initialize the last activity timestamp
      let lastActivityTimestamp = Date.now();

      // Function to show the screen saver with fade-in effect
      function showScreenSaver() {
        const screenSaverElement = document.getElementById('screenSaver');
        screenSaverElement.classList.add('show');
      }

      // Function to hide the screen saver with fade-out effect
      function hideScreenSaver() {
        const screenSaverElement = document.getElementById('screenSaver');
        screenSaverElement.classList.remove('show');
      }

      // Function to reset the inactivity timer
      function resetInactivityTimer() {
        lastActivityTimestamp = Date.now();
        hideScreenSaver();
      }

      // Event listener for mousemove and click events
      document.addEventListener('mousemove', resetInactivityTimer);
      document.addEventListener('click', resetInactivityTimer);

      // Event listener for scroll event on the document (or another scrollable element)
      document.addEventListener('scroll', resetInactivityTimer);

      // Timer to check for inactivity
      setInterval(() => {
        const currentTimestamp = Date.now();
        const timeSinceLastActivity = currentTimestamp - lastActivityTimestamp;

        // Check if the time since the last activity exceeds the inactivity timeout
        if (timeSinceLastActivity >= inactivityTimeout) {
          showScreenSaver();
        }
      }, 1000); // Check every second



      //height on Iphone
      document.addEventListener('DOMContentLoaded', function(){
      	var w = window.innerWidth,
      	h = window.innerHeight;
      	document.documentElement.style.setProperty('--h', h + 'px');

      	m = document.getElementById("menu").offsetHeight;
      	document.documentElement.style.setProperty('--m', m + 'px');
      });

      //height on Resize
      window.addEventListener("resize", onResizeFunction);
      function onResizeFunction (e){
      	var w = window.innerWidth,
      	h = window.innerHeight;
      	document.documentElement.style.setProperty('--h', h + 'px');

      	m = document.getElementById("menu").offsetHeight;
      	document.documentElement.style.setProperty('--m', m + 'px');
      }
