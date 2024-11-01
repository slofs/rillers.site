document.addEventListener("DOMContentLoaded", (event) => {
  const overlays = document.querySelectorAll(".overlay");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  if (!modal || !modalImg) {
    console.error("Modal or modalImg element not found.");
    return;
  }

  // Function to show the modal
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

  // Add click event listeners to each overlay
  overlays.forEach((overlay, index) => {
    overlay.addEventListener("click", () => {
      const img = overlay.previousElementSibling;
      const { src, alt, description, brand, owner } = images[index];
      showModal(src, alt, description, brand, owner);
    });
  });

  // Close the modal on a single tap outside the image on mobile or on click outside image on desktop
  modal.addEventListener("click", (event) => {
    if (event.target !== modalImg) {
      modal.style.display = "none";
      modalImg.src = "";
      modalImg.alt = "";
    }
  });
});



// Does the full screen image on click function
const overlays = document.querySelectorAll(".overlay");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

// Function to show modal only when image is clicked
function showModal(imgSrc, imgAlt) {
  if (imgSrc) {
    modalImg.src = imgSrc;
    modalImg.alt = imgAlt;
    modal.style.display = "flex";
  }
}

// Event listener for each overlay to trigger the modal
overlays.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    const img = overlay.previousElementSibling;
    showModal(img.src, img.alt);
  });
});



// End of does the full screen image on click function


const imageGrid = document.getElementById("imageGrid");

images.forEach(image => {
  const imageItem = document.createElement("div");
  imageItem.className = "image-item";

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.textContent = image.name || image.alt; // Use name if provided, otherwise fallback to alt text

  imageItem.appendChild(img);
  imageItem.appendChild(overlay);
  imageGrid.appendChild(imageItem);
});