function unGrey(buttonId) {
  var img = buttonId + "-img";
  $("#" + img).css("filter", "grayscale(0%)");
}

function grey(buttonId) {
  var img = buttonId + "-img";
  $("#" + img).css("filter", "grayscale(100%)");
}
