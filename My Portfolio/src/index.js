/* src/scripts.js */

document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll(".hidden");
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function animateOnScroll() {
      elementsToAnimate.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add('animate-fadeIn'); // Change to animate-slideInLeft, animate-slideInRight, etc.
          element.classList.remove('hidden');
        }
      });
    }
  
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check to animate elements already in view
  });
  