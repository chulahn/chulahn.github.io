$(document).ready(function() {
  $("#more-games-toggle").click(function() {
    if (
      $(this)
        .html()
        .indexOf("[ + ]") != -1
    ) {
      $(this).html("Less [ - ]");
      $("#more-games").show();
    } else {
      $(this).html("More [ + ]");
      $("#more-games").hide();
    }
  });

  var currentPic = $("#photos").css("background-image");

  setInterval(function() {

    if (currentPic.indexOf("mountain") != -1) {
      currentPic = currentPic.replace("mountain","boat");
    }
    else if (currentPic.indexOf("boat") != -1) {
      currentPic = currentPic.replace("boat","lake");
    }
    else if (currentPic.indexOf("lake") != -1) {
      currentPic = currentPic.replace("lake","mountain");
    }
    
    $("#photos").css("background-image", currentPic);
  }, 1000*5);
});
