document.addEventListener('DOMContentLoaded', function() {
    var topBar = document.querySelector('.top-bar');
    var banner = document.querySelector('.banner');

    function checkScroll() {
        var bannerBottom = banner.offsetTop + banner.offsetHeight;
        if (window.pageYOffset > bannerBottom - topBar.offsetHeight) {
            topBar.classList.add('scrolled');
        } else {
            topBar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    checkScroll(); // Check on initial load
});

const images = [
    { src: "img/OurStory1.jpg", text: "Loyola Competition (23-24)" },
    { src: "img/OurStory2.png", text: "FIRST competition in Houston (22-23)" },
    { src: "img/OurStory3.jpg", text: "The building process" },
    { src: "img/OurStory4.jpg", text: "Villaciraptor 9076 Team (2023)" },
    { src: "img/OurStory5.jpg", text: "Bettysaurus (2023)" },
    { src: "img/OurStory6.jpg", text: "Bobsaurus (2023)" }
];

let currentIndex = 0;
const cyclingImage = document.querySelector('.cycling-image');
const pictureText = document.querySelector('.picture-text');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function updateImage() {
    cyclingImage.src = images[currentIndex].src;
    pictureText.textContent = images[currentIndex].text;
    
    // Optional: Add a fade effect
    cyclingImage.style.opacity = 0;
    setTimeout(() => {
        cyclingImage.style.opacity = 1;
    }, 50);
}

function cycleLeft() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function cycleRight() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

leftArrow.addEventListener('click', cycleLeft);
rightArrow.addEventListener('click', cycleRight);

// Optional: Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') cycleLeft();
    if (e.key === 'ArrowRight') cycleRight();
});

// Initial image load
updateImage();

function updateImage() {
    cyclingImage.src = images[currentIndex].src;
    pictureText.textContent = images[currentIndex].text;

    // Update active dot
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });

    // Optional: Add a fade effect
    cyclingImage.style.opacity = 0;
    setTimeout(() => {
        cyclingImage.style.opacity = 1;
    }, 50);
}

document.addEventListener('DOMContentLoaded', function() {
    var topBar = document.querySelector('.top-bar');
    var banner = document.querySelector('.banner');

    function checkScroll() {
        var bannerBottom = banner.offsetTop + banner.offsetHeight;
        if (window.pageYOffset > bannerBottom - topBar.offsetHeight) {
            topBar.classList.add('scrolled');
        } else {
            topBar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    checkScroll(); // Check on initial load
});

(function() {
    var scrollProgress = document.getElementById('scroll-progress');
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
    function updateScrollProgress() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollPercentage = (scrollTop / height) * 100;
      scrollProgress.style.width = scrollPercentage + '%';
  
      requestAnimationFrame(updateScrollProgress);
    }
  
    // Initial call to start the animation loop
    requestAnimationFrame(updateScrollProgress);
  })();
  

