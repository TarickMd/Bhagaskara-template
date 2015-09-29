$(document).ready(function() {
  //navigation
  $("span.menu").click(function(){
    $(".top-nav ul").slideToggle("slow" , function(){});
  });
  var navoffeset = $("nav").offset().top;
  $(window).scroll(function(){
    var scrollpos = $(window).scrollTop(); 
    if(scrollpos >= navoffeset){
      $("nav").addClass("fixed");
    } else {
      $("nav").removeClass("fixed");
    }
  });
  $("nav ul li a").click(function(){
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
  });
  //navigation

  //parallax effect
  $(".content-about-bottom").parallaxMd({
    "imgHeight": "100px",
    "imgWidth": "100%",
    "speed" : "15"
  });
  //parallax effect
});