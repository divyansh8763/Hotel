// Toggle the menu
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    if (nav.style.display === "flex") {
        nav.style.opacity = "0";
        setTimeout(() => { nav.style.display = "none"; }, 300);
    } else {
        nav.style.display = "flex";
        setTimeout(() => { nav.style.opacity = "1"; }, 10);
    }
}

// Send feedback message
function sendFeedback() {
    const msg = document.getElementById("feedback-msg");
    msg.textContent = "Thank you for your feedback!";
    msg.style.display = "block";
    setTimeout(() => { msg.style.display = "none"; }, 3000);
}

// Back to top functionality
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
    topBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none";
    topBtn.style.opacity = (topBtn.style.display === "block") ? "1" : "0";
    if (topBtn.style.display === "none") setTimeout(() => { topBtn.style.display = "none"; }, 300);
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Room Modal Logic
const roomsData = {
    1: { title: "Single Room", price: "$80 / Night", rating: "⭐⭐⭐⭐☆ 4.0", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", amenities: ["Free Wi-Fi", "Queen-size bed", "Flat-screen TV", "Complimentary breakfast"] },
    2: { title: "Double Room", price: "$120 / Night", rating: "⭐⭐⭐⭐⭐ 5.0", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", amenities: ["Free Wi-Fi", "Two queen beds", "Mini fridge", "Complimentary breakfast"] },
    3: { title: "Deluxe Room", price: "$180 / Night", rating: "⭐⭐⭐⭐⭐ 5.0", img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101d", amenities: ["Free Wi-Fi", "King-size bed", "Mini bar", "Sea view"] },
    4: { title: "Family Suite", price: "$220 / Night", rating: "⭐⭐⭐⭐⭐ 5.0", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", amenities: ["Free Wi-Fi", "2 Bedrooms", "Living area", "Complimentary breakfast"] },
    5: { title: "Presidential Suite", price: "$350 / Night", rating: "⭐⭐⭐⭐⭐ 5.0", img: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2a89", amenities: ["Free Wi-Fi", "Private pool", "King-size bed", "Sea view & Lounge"] }
};

function openModal(roomId) {
    const modal = document.getElementById("roomModal");
    const body = document.getElementById("modal-body");
    const room = roomsData[roomId];
    body.innerHTML = `
        <img src="${room.img}" alt="${room.title}">
        <h3>${room.title}</h3>
        <p class="rating">${room.rating}</p>
        <p><strong>Price:</strong> ${room.price}</p>
        <ul>${room.amenities.map(a => `<li>${a}</li>`).join("")}</ul>
    `;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("roomModal").style.display = "none";
}

window.onclick = (event) => {
    if (event.target === document.getElementById("roomModal")) closeModal();
};

// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
        q.classList.toggle("active");
    });
});

// Newsletter subscription
function subscribeNewsletter() {
    const msg = document.getElementById("newsletter-msg");
    msg.textContent = "Thank you for subscribing! 🎉";
    msg.style.display = "block";
    setTimeout(() => { msg.style.display = "none"; }, 3000);
}

// Scroll fade-in for new sections
const fadeSections = document.querySelectorAll('.aboutus-section, .facilities-section, .hotelinfo-section, .location-section, .stories-section');
fadeSections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease-out';
});

window.addEventListener('scroll', () => {
    fadeSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

// Travel Stories Slider
const storiesGrid = document.querySelector('.stories-grid');
let offset = 0;
const storyWidth = 270; // Approx width including gap

function moveStories() {
    offset += storyWidth;
    if (offset >= storiesGrid.scrollWidth - storiesGrid.clientWidth) offset = 0;
    storiesGrid.scrollTo({ left: offset, behavior: 'smooth' });
}

// Auto slide every 3 seconds
setInterval(moveStories, 3000);

// Scroll animation for all sections
const scrollSections = document.querySelectorAll('section, footer, header');
scrollSections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(50px)';
    sec.style.transition = 'all 0.8s ease-out';
});

function handleScrollAnimation() {
    scrollSections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Floating button animation
document.querySelectorAll('.floating-buttons a, #topBtn').forEach(btn => {
    let direction = 1;
    let pos = 0;
    setInterval(() => {
        pos += direction;
        if (pos > 5 || pos < 0) direction *= -1;
        btn.style.transform = `translateY(${pos}px)`;
    }, 200);
});

// WhatsApp redirect
function redirectToWhatsapp() {
    const roomTitle = document.getElementById("modal-body").querySelector("h3").textContent;
    const message = encodeURIComponent(`Hi, I would like to book the ${roomTitle}. Can you provide more details?`);
    window.open(`https://wa.me/your-phone-number?text=${message}`, "_blank");
}
