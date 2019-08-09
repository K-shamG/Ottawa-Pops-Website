$(function(){
  $("#header").load("/header.html");
  $("#footer").load("/footer.html");
  $("#upcoming").load("/upcoming.html");
});

window.onscroll = () => {
  const nav = $('#navbar');
  if(this.scrollY <= 120) {
    nav.removeClass("transparent").addClass('grey');
    $('#mission').hide();
    $('#logo').css("height", "100px");
  }
  else{
    if(document.location.href.includes("about-us.html")) {
      nav.removeClass('grey').addClass("transparent");
      $('#mission').show();
    }
    $('#logo').css("height", "50px");
  }
};

var $form = $('form#subscripe'),
    url = 'https://script.google.com/macros/s/AKfycbwQlG_RJV75lTthcQ2H_xu46Ej49GGhw9AJLSjTq6h_YNiDw3c/exec'

$('#contact-form-button').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
