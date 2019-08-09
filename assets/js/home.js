function unGrey(buttonId) {
  var img = buttonId + "-img";
  $("#" + img).css("filter", "brightness(100%)");
}

function grey(buttonId) {
  var img = buttonId + "-img";
  $("#" + img).css("filter", "brightness(50%)");
}

var CMSSpace = CMSSpace || {};
$(window).on('resize', function() {
   setTimeout(function(){resizeFBPlugin()}, 500);
});

$(window).on('load', function() {
   setTimeout(function(){resizeFBPlugin()}, 1500);
});

function resizeFBPlugin(){
    //getting parent box width
    var container_width = ($('.fb-column').width() - parseInt($('.fb-column').css('padding-left'))).toFixed(0);

    if (!isNaN(container_width)) {
        $(".fb-page").attr("data-width", container_width);
    }
    if (typeof FB !== 'undefined' ) {
        FB.XFBML.parse();
    }
}
