var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
     $("nav div").click(function() {
            $("ul").slideToggle();
            $("ul ul").css("display", "none");
      });

      $("ul li").click(function() {
            $("ul ul").slideUp();
            $(this).find('ul').slideToggle();
      });

      $(window).resize(function() {
            if($(window).width() > 768) {
                  $("ul").removeAttr('style');
            }
      });
