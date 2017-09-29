document.addEventListener("DOMContentLoaded", function(event) {
  // var next = document.getElementById("next");
  // var prev = document.getElementById("prev");
  //
  // function showNext(){
  //   var carousel = document.getElementsByClassName("image-gallery-items");
  //   var items = carousel[0].children;
  //   var length = items.length;
  //   var selected = document.getElementsByClassName("image-gallery-item-selected")[0];
  //   var index = Array.prototype.indexOf.call(items, selected);
  //   var next = index >= length - 1 ? 0 : index + 1;
  //
  //   console.log(items[index], items[next]);
  //
  //
  //   items[index].className="image-gallery-item";
  //   items[next].className="image-gallery-item-selected";
  // }
  //
  // function showPrev(){
  //   var carousel = document.getElementsByClassName("image-gallery-items");
  //   var items = carousel[0].children;
  //   var length = items.length;
  //   var selected = document.getElementsByClassName("image-gallery-item-selected")[0];
  //   var index = Array.prototype.indexOf.call(items, selected);
  //   var prev = index == 0 ? length - 1 : index - 1;
  //
  //   console.log(items[index], items[prev]);
  //
  //   items[index].className="image-gallery-item";
  //   items[prev].className="image-gallery-item-selected";
  // }
  //
  // next.onclick=showNext;
  // prev.onclick=showPrev;

  $(document).ready(function(){
  $('.image-gallery').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    mobileFirst: true
  });
});

});
