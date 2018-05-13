$(document).hover(function() {
  // Code to be executed when the DOM is ready
  
 
  $(".links").hover (function() {
    // alert("test");
    console.log ($(this).toggleClass ("highlight"));
  })})