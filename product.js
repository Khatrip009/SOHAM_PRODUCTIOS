// ================================
// Load Products.json
// ================================
async function loadProducts() {
  try {
    const response = await fetch("products.json");
    if (!response.ok) throw new Error("Failed to load products.json");
    const data = await response.json();
    renderProducts(data);
  } catch (err) {
    console.error("Error loading products.json:", err);
  }
}

// ================================
// Render Product Cards
// ================================
function renderProducts(data) {
  const container = document.getElementById("productContainer");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const selectedCategory = urlParams.get("category");

  container.innerHTML = "";

  data.categories.forEach(category => {
    if (selectedCategory && category.id !== selectedCategory) return;

    // Category Section
    const categorySection = document.createElement("section");
    categorySection.classList.add("product-category");
    categorySection.setAttribute("id", category.id); // important for scroll-spy
    categorySection.innerHTML = `
      <h2>${category.name}</h2>
      <div class="category-grid"></div>
    `;

    const grid = categorySection.querySelector(".category-grid");

    category.products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <div class="main-image-wrap">
          <img src="${product.images[0]}" alt="${product.name}" class="main-image">
        </div>
        <div class="details">
          <h3>${product.name}</h3>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>MOQ:</strong> ${product.moq || "-"}</p>
        </div>
      `;

      card.addEventListener("click", () => openProductModal(product));
      grid.appendChild(card);
    });

    container.appendChild(categorySection);
  });
}

// ================================
// Modal Logic
// ================================
function openProductModal(product) {
  const modal = document.getElementById("productModal");
  const modalContent = modal.querySelector(".modal-body");

  modalContent.innerHTML = `
    <div class="modal-images">
      <img src="${product.images[0]}" alt="${product.name}" class="modal-main-image">
      <div class="modal-thumbs"></div>
    </div>
    <div class="modal-details">
      <h2>${product.name}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>MOQ:</strong> ${product.moq || "-"}</p>
      <p><strong>Fabric:</strong> ${product.fabric || "-"}</p>
      <p><strong>Pattern:</strong> ${product.pattern || "-"}</p>
      <p><strong>Size/Waist:</strong> ${product.size || product.waist || "-"}</p>
      <p><strong>Occasion:</strong> ${product.occasion || "Daily Wear"}</p>
    </div>
  `;

  const thumbsContainer = modalContent.querySelector(".modal-thumbs");
  const mainImage = modalContent.querySelector(".modal-main-image");

  product.images.forEach((img, index) => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.alt = `${product.name} ${index + 1}`;
    if (index === 0) thumb.classList.add("active");
    thumb.addEventListener("click", () => {
      mainImage.src = img;
      thumbsContainer.querySelectorAll("img").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
    thumbsContainer.appendChild(thumb);
  });

  modal.classList.add("active");
}

// Close Modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("productModal");
  const closeBtn = modal.querySelector(".modal-close");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.classList.remove("active");
  });
});

// ================================
// Scroll Spy + Smooth Scroll
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-bar .btn");
  const sections = document.querySelectorAll(".product-category");

  // Scroll to category on click
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");
      if (category === "all") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const section = document.getElementById(category);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Highlight active button on scroll
  window.addEventListener("scroll", () => {
    let current = "all";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 160;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
      if (btn.getAttribute("data-category") === current) {
        btn.classList.add("active");
      }
      if (current === "all" && btn.getAttribute("data-category") === "all") {
        btn.classList.add("active");
      }
    });
  });
});

// ================================
// Init
// ================================
document.addEventListener("DOMContentLoaded", loadProducts);
  
