// Mobile menu toggle
document.getElementById("mobile-menu").onclick = function() {
    document.querySelector(".nav-links").classList.toggle("open");
};

// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
            document.querySelector(".nav-links").classList.remove("open");
        }
    });
});

// Skills progress animation
function animateSkills() {
    document.querySelectorAll('.progress').forEach(bar => {
        let end = +bar.getAttribute('data-progress');
        bar.style.width = end + '%';
    });
}
let skillsSection = document.getElementById('skills');
let skillsAnimated = false;
window.addEventListener('scroll', function() {
    let position = skillsSection.getBoundingClientRect().top;
    if (!skillsAnimated && position < window.innerHeight - 100) {
        animateSkills();
        skillsAnimated = true;
    }
});

// Project filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        let filter = this.getAttribute('data-filter');
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
// Certificate filter
const filtersBtns = document.querySelectorAll('.filter-btn');
const CertificateCards = document.querySelectorAll('.Certificate-card');
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        let filter = this.getAttribute('data-filter');
        CertificateCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
// Contact form validation & message
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    let formMessage = document.getElementById('formMessage');
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        formMessage.style.color = 'red';
        formMessage.textContent = "Please fill out all fields.";
        return;
    }
    // Simple email regex
    let emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value)) {
        formMessage.style.color = 'red';
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }
    formMessage.style.color = '#0077ff';
    formMessage.textContent = "Thank you for reaching out!";
    this.reset();
});