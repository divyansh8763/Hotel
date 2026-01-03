function toggleMenu(){
    const nav = document.getElementById("navMenu");
    if(nav.style.display === "flex"){
        nav.style.opacity = "0";
        setTimeout(()=>{nav.style.display="none";},300);
    } else {
        nav.style.display = "flex";
        setTimeout(()=>{nav.style.opacity="1";},10);
    }
}

function sendFeedback(){
    const msg = document.getElementById("feedback-msg");
    msg.style.display = "block";
    msg.textContent = "Thank you for your feedback!";
    setTimeout(()=>{ msg.style.display="none"; }, 3000);
}

// Back to top
const topBtn = document.getElementById("topBtn");
window.onscroll = function(){
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
        topBtn.style.opacity = "1";
    } else {
        topBtn.style.opacity = "0";
        setTimeout(()=>{topBtn.style.display="none";},300);
    }
};
function topFunction(){
    window.scrollTo({top:0, behavior:'smooth'});
}

/* ========== ROOM MODAL LOGIC ========== */
const roomsData = {
    1: { title:"Single Room", price:"$80 / Night", rating:"⭐⭐⭐⭐☆ 4.0", img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", amenities:["Free Wi-Fi","Queen-size bed","Flat-screen TV","Complimentary breakfast"]},
    2: { title:"Double Room", price:"$120 / Night", rating:"⭐⭐⭐⭐⭐ 5.0", img:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", amenities:["Free Wi-Fi","Two queen beds","Mini fridge","Complimentary breakfast"]},
    3: { title:"Deluxe Room", price:"$180 / Night", rating:"⭐⭐⭐⭐⭐ 5.0", img:"https://images.unsplash.com/photo-1501117716987-c8e1ecb2101d", amenities:["Free Wi-Fi","King-size bed","Mini bar","Sea view"]},
    4: { title:"Family Suite", price:"$220 / Night", rating:"⭐⭐⭐⭐⭐ 5.0", img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", amenities:["Free Wi-Fi","2 Bedrooms","Living area","Complimentary breakfast"]},
    5: { title:"Presidential Suite", price:"$350 / Night", rating:"⭐⭐⭐⭐⭐ 5.0", img:"https://images.unsplash.com/photo-1505691723518-36a5ac3b2a89", amenities:["Free Wi-Fi","Private pool","King-size bed","Sea view & Lounge"]}
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

window.onclick = function(event) {
    const modal = document.getElementById("roomModal");
    if(event.target == modal) modal.style.display = "none";
}

/* =================== NEW SECTIONS JS =================== */

/* FAQ toggle */
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
    q.addEventListener("click", () => {
        q.classList.toggle("active");
        const answer = q.nextElementSibling;
        if(answer.style.display === "block"){
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

/* Newsletter subscription */
function subscribeNewsletter(){
    const msg = document.getElementById("newsletter-msg");
    msg.style.display = "block";
    msg.textContent = "Thank you for subscribing! 🎉";
    setTimeout(()=>{ msg.style.display="none"; }, 3000);
}
/* =================== PREMIUM ANIMATIONS =================== */

// Scroll fade-in for all new sections
const fadeSections = document.querySelectorAll('.aboutus-section, .facilities-section, .hotelinfo-section, .location-section, .stories-section');
window.addEventListener('scroll', () => {
    fadeSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize fade-in style
fadeSections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease-out';
});

/* Travel Stories Slider */
const storiesGrid = document.querySelector('.stories-grid');
let offset = 0;
const storyWidth = 270; // Approx width including gap

function moveStories(){
    offset += storyWidth;
    if(offset >= storiesGrid.scrollWidth - storiesGrid.clientWidth){
        offset = 0;
    }
    storiesGrid.scrollTo({
        left: offset,
        behavior: 'smooth'
    });
}

// Auto slide every 3 seconds
setInterval(moveStories, 3000);
/* =================== GLOBAL SCROLL ANIMATIONS =================== */

// All sections that should animate on scroll
const scrollSections = document.querySelectorAll('section, footer, header');

function handleScrollAnimation() {
    scrollSections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            sec.style.opacity = 1;
            sec.style.transform = 'translateY(0)';
        }
    });
}

// Initialize sections with hidden state
scrollSections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(50px)';
    sec.style.transition = 'all 0.8s ease-out';
});

// Listen for scroll
window.addEventListener('scroll', handleScrollAnimation);

// Trigger once on page load in case some sections already visible
window.addEventListener('load', handleScrollAnimation);
/* =================== FLOATING BUTTON ANIMATION =================== */
const floatingBtns = document.querySelectorAll('.floating-buttons a, #topBtn');

floatingBtns.forEach(btn => {
    let direction = 1;
    let pos = 0;
    setInterval(() => {
        pos += direction;
        if(pos > 5 || pos < 0) direction *= -1;
        btn.style.transform = `translateY(${pos}px)`;
    }, 200);
});
// Room Data
const rooms = {
    1: { title: "Single Room", price: "$80 / Night", rating: "⭐⭐⭐⭐☆ 4.0", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", amenities: ["Free Wi-Fi", "Queen-size bed", "Flat-screen TV", "Complimentary breakfast"] },
    2: { title: "Double Room", price: "$120 / Night", rating: "⭐⭐⭐⭐⭐ 5.0", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", amenities: ["Free Wi-Fi", "Two queen beds", "Mini fridge", "Complimentary breakfast"] },
    3: { title: "Deluxe Room", price: "$180 / Night", rating: "⭐⭐⭐⭐⭐ 5.0", img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101d", amenities: ["Free Wi-Fi", "King-size bed", "Mini bar", "Sea view"] },
    4: { title: "Family Suite", price: "$220 / Night", rating: "⭐⭐⭐⭐⭐ 5.0", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", amenities: ["Free Wi-Fi", "2 Bedrooms", "Living area", "Complimentary breakfast"] },
    5: { title: "Presidential Suite", price: "$350 / Night", rating: "⭐⭐⭐⭐⭐ 5.0", img: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2a89", amenities: ["Free Wi-Fi", "Private pool", "King-size bed", "Sea view & Lounge"] }
};

// Open Modal
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

// Close Modal
function closeModal() {
    document.getElementById("roomModal").style.display = "none";
}

// WhatsApp Redirect
function redirectToWhatsapp() {
    const roomTitle = document.getElementById("modal-body").querySelector("h3").textContent;
    const message = encodeURIComponent(`Hi, I would like to book the ${roomTitle}. Can you provide more details?`);
    window.open(`https://wa.me/your-phone-number?text=${message}`, "_blank");
}
