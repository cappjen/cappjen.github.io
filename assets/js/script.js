$(document).ready(function() {

  $('#sidebar-button').click(function() {
    if ($('.sidebar-container').hasClass('sidebar-active')) {
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');
    } else {
      $('#sidebar-button').addClass('button-active');
      $('.sidebar-container').addClass('sidebar-active');
      $('.page-wrapper').addClass('wrapper-active');
      setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);
    }
  });

  $('.page-wrapper').click(function() {
     if ($('.sidebar-container').hasClass('sidebar-active')) {
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');
     }
  });

$('.tab-links a').on('click', function(e) {
	var currentAttrValue = $(this).attr('href');
	$('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
	$(this).parent('li').addClass('active').siblings().removeClass('active');

	e.preventDefault();
});


$('#login-link').click(function() {
	$('#login-container').show();
});

$('#login-container #submit').click(function () {
	$('#login-container').hide();
	$('#login-link').text("Welcome, Jennifer!");
});

$('#login-container #cancel').click(function() {
	$('#login-container').hide();
});

$('#login-overlay').click(function() {
	$('#login-container').hide();
});

$('#add-course').click(function() {
	$('#add-course-container').show();
});

$('#add-course-overlay').click(function() {
	$('#add-course-container').hide();
});

$('#add-course-container #submit').click(function() {
	$('#add-course-container').hide();
});

$('#add-course-container #cancel').click(function() {
	$('#add-course-container').hide();
});

$('.add-list-item').click(function() {
	$('#add-list-item-container').show();
});

$('#add-list-item-overlay').click(function() {
	$('#add-list-item-container').hide();
});

$('#add-list-item-container #submit').click(function()	{
	$('#add-list-item-container').hide();
});

$('#add-list-item-container #cancel').click(function() {
	$('#add-list-item-container').hide();
});

$('.add-list-item').click(function () {
	$('#add-reading-container').show ();
});

$('#add-reading-overlay').click(function() {
	$('#add-reading-container').hide();
});

$('#add-reading-container #submit').click(function () {
	$('#add-reading-container').hide();
});

$('#add-reading-container #cancel').click(function() {
	$('#add-reading-container').hide();
});

$('.sidebar-item').hover(function() {
	$(this).css('background-color', 'white');
	$(this).children().css('color', 'black');
}, function() {
	$(this).css('background-color', 'black');
	$(this).children().css('color', 'white');
});

});