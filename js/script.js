document.addEventListener("DOMContentLoaded", (event) => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  if (!modal || !modalImg) {
    console.error("Modal or modalImg element not found.");
    return;
  }

  // Function to show the modal with content
  function showModal(imgSrc, imgAlt, description, brand, owner) {
    if (imgSrc) {
      modalImg.src = imgSrc;
      modalImg.alt = imgAlt;
      document.getElementById("modal-description").textContent = description || "No description available.";
      document.getElementById("modal-brand").textContent = brand ? `Brand: ${brand}` : "Brand: Unknown";
      document.getElementById("modal-owner").textContent = owner ? `Owner: ${owner}` : "Owner: Unknown";
      modal.style.display = "flex";
    }
  }

  // Set up image grid with overlays
  const imageGrid = document.getElementById("imageGrid");

  images.forEach((image, index) => {
    const imageItem = document.createElement("div");
    imageItem.className = "image-item";

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.textContent = image.name || image.alt;

    // Attach a single event listener to the overlay for a tap or click
    overlay.addEventListener("click", () => {
      showModal(img.src, img.alt, image.description, image.brand, image.owner);
    });

    imageItem.appendChild(img);
    imageItem.appendChild(overlay);
    imageGrid.appendChild(imageItem);
  });

  // Close the modal if tapping/clicking outside the image
  modal.addEventListener("click", (event) => {
    if (event.target !== modalImg) {
      modal.style.display = "none";
      modalImg.src = "";
      modalImg.alt = "";
    }
  });
});
