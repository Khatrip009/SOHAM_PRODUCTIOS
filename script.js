// ================================
// Responsive Nav Toggle
// ================================
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");
const header = document.getElementById("mainHeader");

// Toggle menu on mobile
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Header Scroll Animation (Logo center -> left)
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header?.classList.add("header--scrolled");
  } else {
    header?.classList.remove("header--scrolled");
  }
});

// ================================
// Static Products (Index page demo)
// ================================
const products = [
  { name: "Kids T-Shirt", description: "Soft, breathable fabrics for maximum comfort.", image: "images/kids01.jpeg", hsn: "6109", thumbs: ["images/kids01.jpeg","images/kids02.jpeg"] },
  { name: "Track Pants", description: "Durable and stylish bottoms for active wear.", image: "images/trackpants01.jpeg", hsn: "6112", thumbs: ["images/track01.jpeg","images/track02.jpeg"] },
  { name: "Women Suit", description: "Elegant design, premium finishing for modern women.", image: "images/women01.jpeg", hsn: "6204", thumbs: ["images/women01.jpeg"] },
  { name: "Vests", description: "Soft, lightweight vests for everyday comfort.", image: "images/vests01.jpeg", hsn: "6208", thumbs: ["images/vests01.jpeg"] },
  { name: "Polyester T-Shirt", description: "Durable and vibrant, perfect for active wear.", image: "images/poly01.jpeg", hsn: "6109", thumbs: ["images/poly01.jpeg","images/poly02.jpeg"] },
  { name: "Plazo Pants", description: "Elegant flowing comfort, crafted with Lycra.", image: "images/plazo01.jpeg", hsn: "6110", thumbs: ["images/plazo01.jpeg","images/plazo02.jpeg"] },
  { name: "Dhoti Pants", description: "A blend of tradition and style for modern fashion.", image: "images/dhoti01.jpeg", hsn: "6110", thumbs: ["images/dhoti01.jpeg","images/dhoti02.jpeg"] },
  { name: "Harem Pants", description: "Relaxed and trendy Lycra harem pants for all-day comfort.", image: "images/heram01.jpeg", hsn: "6205", thumbs: ["images/heram01.jpeg","images/heram02.jpeg"] }
];

const productsGrid = document.getElementById("productsGrid");

if (productsGrid) {
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <div class="main-image-wrap">
        <img src="${product.image}" alt="${product.name}" class="main-image">
      </div>
      <div class="details">
        <h3>${product.name}</h3>
        <p class="desc">${product.description}</p>
        <span class="hsn">HSN: ${product.hsn}</span>
      </div>
      <div class="thumbs">
        ${product.thumbs.map(t => `<img src="${t}" alt="thumb">`).join("")}
      </div>
    `;

    // thumbnail click → change main image
    card.querySelectorAll(".thumbs img").forEach(thumb => {
      thumb.addEventListener("click", () => {
        card.querySelector(".main-image").src = thumb.src;
      });
    });

    productsGrid.appendChild(card);
  });
}


// Animate counters
function animateCounters() {
  const counters = document.querySelectorAll('.stat-value');
  const speed = 200;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      let count = +counter.innerText.replace(/\D/g,'');
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        if (target >= 10000000) {
          counter.innerText = "5 Cr+";
        } else {
          counter.innerText = target + "+";
        }
      }
    };
    updateCount();
  });
}

// Intersection Observer for animations
const fadeElements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.classList.contains('quality-stats')) {
        animateCounters(); // trigger counters only once
      }
    }
  });
}, { threshold: 0.3 });

// Observe each fade element
fadeElements.forEach(el => observer.observe(el));

// ================================
// Highlight Active Navigation Link
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");
  const header = document.getElementById("mainHeader");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Header Scroll Animation
  window.addEventListener("scroll", () => {
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add("header--scrolled");
      } else {
        header.classList.remove("header--scrolled");
      }
    }
  });
});


  document.querySelectorAll(".accordion").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const panel = btn.nextElementSibling;
      if (panel && panel.classList.contains("accordion-panel")) {
        panel.style.display = panel.style.display === "block" ? "none" : "block";
      }
    });
  });

