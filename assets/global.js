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

$('.menu_open').click(function(){
     $('.menu').toggleClass("open");
     $('.nain').toggleClass("open");
});
$('.shop').click(function(){
     $('.categories').toggle();
});
$('.brand').click(function(){
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
  //FILTERS
          $('.filter:not(.sort)').click(function(){
            var t = $(this),
                W = t.data('wrapper'),
                T = t.data('type'),
                c = t.data('class'),
                f = t.data('filter');

            if(!t.hasClass('active')){
              //Active/deactive filter
              t.addClass('active')
               .parent().siblings().children().removeClass('active');

              //Hide products
              $('.product').addClass('active-'+T);

              //Filter
              $(W).removeClass().addClass(c);
              var fa = $(W).attr('class'),
                  ca = fa.split(/\s+/);
              $.each(ca, function(index, value){
                $('.product' + value).removeClass('active-'+T);
              });


              $('#filte').text($('.filter.active').length)

            }

            if($('.filter.'+T+'.active').length == 0){
               $('.filte').html('').hide()
             }else{
               if(t.hasClass('active')){
                 if($('.filter.'+T+'.active').length == 1){
                   $('.filte').html(
                     '<span data-'+T+'="'+c+'">' + $.trim(t.text()) + '</span>'
                   ).show()
                 }else{
                   $('.filte').html(
                     '<span data-'+T+'="'+c+'">' + $.trim(t.text()) + '</span>' + $('.filte').html()
                   );
                 }
               }else{
                 $('span[data-'+T+'="'+c+'"]').remove()}


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
