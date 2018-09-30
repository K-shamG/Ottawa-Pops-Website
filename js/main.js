$(function(){
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

window.onscroll = () => {
  const nav = $('#navbar');
  if(this.scrollY <= 120) {
    nav.removeClass("transparent").addClass('grey');
    $('#mission').hide();
    $('#logo').show();
  }
  else{
    if(document.location.href.includes("about-us.html")) {
      nav.removeClass('grey').addClass("transparent");
      $('#mission').show();
    }
    $('#logo').hide();
  }
};
