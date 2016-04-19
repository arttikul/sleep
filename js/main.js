// Гамбургер
$('.hamburger').on('click', function(){
  $('.menu').toggleClass('open');
});
// закрытие гамбургера после клика по ссылке
$('.menu>li>a').on('click', function(){
  $('.menu').toggleClass('open');
});
// меню benefits
$('.benefits-more').on('click', function(){
  $('.benefits-block').toggleClass('benefits-open');
});
// плавный скролл
$(document).ready(function(){
$('a.anchor').click(function (){
var elementClick = $(this).attr("href");
var destination = $(elementClick).offset().top;
$('html,body').animate({
scrollTop: destination
}, 800);
return false;
});
});
