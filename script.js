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
