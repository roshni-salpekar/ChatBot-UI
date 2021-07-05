$(document).ready(function () {
  $(".faq").hide();
  $(".faq .faq-questions .question").each(function (i) {
    $(this).hide();
  });

  $(".button").hide();
  $(".faq").delay(1000).fadeIn(500);
  $(".faq .faq-questions .question").each(function (i) {
    var time = 2000 * (i + 1);
    console.log(time);
    $(this)
      .delay(2000 * (i + 1))
      .fadeIn(500);
  });

  $(".button").delay(10000).fadeIn(500);
});
