const slides = document.querySelectorAll('.slide');
  let current = 0;
  
  document.querySelector('.next').addEventListener('click', () => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  });
  
  document.querySelector('.prev').addEventListener('click', () => {
    slides[current].classList.remove('active');
    current = (current - 1 + slides.length) % slides.length;
    slides[current].classList.add('active');
  });

  function openLightbox(imageId) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    
    // Get the clicked image source
    var imgSrc = document.getElementById(imageId).src;
    
    // Set the lightbox image source to the clicked image's source
    lightboxImg.src = imgSrc;
    
    // Display the lightbox
    lightbox.style.display = "flex";
  }
  
  function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    
    // Hide the lightbox
    lightbox.style.display = "none";
  }
  