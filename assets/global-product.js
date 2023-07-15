/*
 * Product Scripts
 */

//Shuffle
(function($){
  $.fn.shuffle = function(){
    var allElems = this.get(),
        getRandom = function(max){
          return Math.floor(Math.random() * max);
        },
        shuffled = $.map(allElems, function(){
          var random = getRandom(allElems.length),
              randEl = $(allElems[random]).clone(true)[0];
          allElems.splice(random, 1);
          return randEl;
        });
    this.each(function(i){
      $(this).replaceWith($(shuffled[i]));
    });
    return $(shuffled);
  };
})(jQuery);
//Related
$('#related .product:nth-child(3)').nextAll().remove();  
$('#related .product').shuffle();
