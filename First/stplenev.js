$(document).ready(function() {
    // Add active class to the first link by default
    $('.slider li:first-child a').addClass('active');
    
    // Handle click events on the links
    $('.slider li a').on('click', function(e) {
      e.preventDefault();
    
      // Remove active class from all links
      $('.slider li a').removeClass('active');
    
      // Add active class to the clicked link
      $(this).addClass('active');
    });
  });
  
  $(window).scroll(function() {
    // Calculate the offset value based on the current scroll position
    var offset = window.pageYOffset;
    // Apply the offset value to the content section using CSS transforms
    $('main').css('transform', 'translateY(' + offset + 'px)');
  });
  
  const letters = document.querySelectorAll(".letter");
  let delay = 0;
  letters.forEach(letter => {
    const img = letter.querySelector("img");
    const imgHeight = img.height;
  
    $(letter).on("mouseenter", function() {
      $(img).css({
        transform: `translateY(-${imgHeight/4}px)`,
        transition: "transform 0.5s ease"
      });
      $(this).css("box-shadow", "inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff");
      setTimeout(() => {
        $(img).css({
          transform: "translateY(0px)",
          transition: "transform 0.5s ease"
        });
      }, 500);
    });
  
    $(letter).on("mouseleave", function() {
      $(img).css({
        transform: "translateY(0px)",
        transition: "transform 0.5s ease"
      });
      $(this).css("box-shadow", "none");
    });
    
    letter.style.animationDelay = `${delay}s`;
    delay += 0.3;
  });
  