$(document).keydown(function (event) {
  console.log(event);
  $("h1").text(event.key);
});
 
