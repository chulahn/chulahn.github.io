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
});
