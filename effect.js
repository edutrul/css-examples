$(document).ready(function(){
  $('.col').mouseenter(function() {
    $(this).find(".news-item-social").slideDown();
    $(this).find(".news-item-time").slideDown();
    $(this).find(".news-item-title").slideDown();

  });
  $('.col').mouseleave(function() {
    $(this).find(".news-item-social").slideUp();
    $(this).find(".news-item-time").slideUp();
    $(this).find(".news-item-title").slideUp();
  });
});
