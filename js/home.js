function unGrey(buttonId) {
  var img = buttonId + "-img";
  $("#" + img).css("filter", "brightness(100%)");
}

function grey(buttonId) {
  var img = buttonId + "-img";
  $("#" + img).css("filter", "brightness(50%)");
}
