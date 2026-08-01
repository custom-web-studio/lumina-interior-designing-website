// 1. Select all the stat number elements
const statNumbers = document.querySelectorAll('.stat-number');

// 2. Function that runs the counting animation
const startCounting = (counter) => {
    const target = +counter.getAttribute('data-target'); // Get target number
    const suffix = counter.getAttribute('data-suffix') || ''; // Get 'Y' or '+'
    const duration = 2000; // Animation time in milliseconds (2 seconds)
    const stepTime = 20; // How often the number updates (ms)
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    let current = 0;

    const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
            // Stop at the target number and add the suffix
            counter.innerText = target + suffix;
            clearInterval(timer);
        } else {
            // Update the display with rounded number
            counter.innerText = Math.ceil(current) + suffix;
        }
    }, stepTime);
};

// 3. Create an Observer to trigger counting ONLY when visible on screen
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Target element is visible! Start animation.
            startCounting(entry.target);
            // Stop observing so it only animates once per page load
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Triggers when 50% of the stat item is visible

// 4. Attach observer to each stat number
statNumbers.forEach(stat => observer.observe(stat));




// ======================================================
// MOBILE HAMBURGER MENU TOGGLE
// ======================================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.list-items');

if (hamburger && navMenu) {
    // 1. Toggle menu when hamburger icon is clicked
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 2. Close menu automatically when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}



  const container = document.getElementById('reviewsContainer');
  
  document.getElementById('nextBtn').onclick = () => {
    container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
  };

  document.getElementById('prevBtn').onclick = () => {
    container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
  };