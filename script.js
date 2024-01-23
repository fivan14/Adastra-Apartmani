// Show/hide back to top button based on scroll position
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Scroll to top when the button is clicked
function scrollToTop() {
    document.body.scrollTop = 0;  // For Safari
    document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE, and Opera
}



// Swiper 

        const swiper = new Swiper('.swiper', {
  // Optional parameters

            loop: true,
            centeredSlides: true,
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
                // disableOnInteraction: true,
            },
            effect: 'fade',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});