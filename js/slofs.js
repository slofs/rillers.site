document.addEventListener("DOMContentLoaded", (event) => {
    const overlays = document.querySelectorAll(".overlay");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
  
    if (!modal || !modalImg) {
      console.error("Modal or modalImg element not found.");
      return;
    }
  
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
  
  
  
  overlays.forEach((overlay, index) => {
    overlay.addEventListener("click", () => {
        const img = overlay.previousElementSibling;
        const { src, alt, description, brand, owner } = images[index];
        showModal(src, alt, description, brand, owner);
    });
  });
  
  
    modal.addEventListener("dblclick", (event) => {
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
  
  const images = [
    {
        id: 1,
        src: "images/Shnippy.png",
        description: "Shnippy",
        brand: "Brand Name 1",  // Replace with actual brand name
        owner: "slofs",   // Replace with actual owner name
        name: "Shnippy"
    },
    {
        id: 2,
        src: "images/Boris.png",
        description: "Boris",
        brand: "Brand Name 2",  // Replace with actual brand name
        owner: "slofs",   // Replace with actual owner name
        name: "Boris"
    },
    {
        id: 3,
        src: "images/Cyril.png",
        description: "Cyril",
        brand: "Brand Name 3",  // Replace with actual brand name
        owner: "slofs",   // Replace with actual owner name
        name: "Cyril"
    },
    {
        id: 4,
        src: "images/Doodad.png",
        description: "Doodad",
        brand: "Brand Name 4",  // Replace with actual brand name
        owner: "slofs",   // Replace with actual owner name
        name: "Doodad"
    },
    {
        id: 5,
        src: "images/Bosh.png",
        description: "Bosh",
        brand: "Brand Name 5",  // Replace with actual brand name
        owner: "slofs",   // Replace with actual owner name
        name: "Bosh"
    },
    {
        id: 6,
        src: "images/Blake.png",
        description: "Blake",
        brand: "Brand Name 6",  // Replace with actual brand name
        owner: "slofs",   // Replace with actual owner name
        name: "Blake"
    },
    {
        id: 7,
        src: "images/Big_Mickey.png",
        description: "Big Mickey",
        brand: "Brand Name 7",  // Replace with actual brand name
        owner: "slofs",   // Replace with actual owner name
        name: "Big Mickey"
    },
    {
        id: 8,
        src: "images/Sir_Adam.png",
        description: "Sir Adam",
        brand: "Brand Name 8",  // Replace with actual brand name
        owner: "slofs",   // Replace with actual owner name
        name: "Sir Adam"
    },
    {
        id: 9,
        src: "images/Little_Gregory.png",
        description: "Little Gregory",
        brand: "Planet Hollywood",  // Replace with actual brand name
        owner: "slofs",   // Replace with actual owner name
        name: "Little Gregory"
    },
    {
        id: 10,
        src: "images/Gramps.png",
        description: "Gramps",
        brand: "Brand Name 10", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Gramps"
    },
    {
        id: 11,
        src: "images/Gumbo.png",
        description: "Gumbo",
        brand: "Brand Name 11", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Gumbo"
    },
    {
        id: 12,
        src: "images/Simon.png",
        description: "Simon",
        brand: "Brand Name 12", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Simon"
    },
    {
        id: 13,
        src: "images/Jeremy.png",
        description: "Jeremy",
        brand: "Brand Name 13", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Jeremy"
    },
    {
        id: 14,
        src: "images/Todd.PNG",
        description: "Todd",
        brand: "Brand Name 14", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Todd"
    },
    {
        id: 15,
        src: "images/Sheena.png",
        description: "Sheena",
        brand: "Brand Name 15", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Sheena"
    },
    {
        id: 16,
        src: "images/Friendly_John.png",
        description: "Friendly John",
        brand: "Brand Name 16", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Friendly John"
    },
    {
        id: 17,
        src: "images/Mr_Thinks.JPEG",
        description: "Mr Thinks",
        brand: "Brand Name 17", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Mr Thinks"
    },
    {
        id: 18,
        src: "images/Mr_Stinks.JPEG",
        description: "Mr Stinks",
        brand: "Brand Name 18", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Mr Stinks"
    },
    {
        id: 19,
        src: "images/Brutus.JPEG",
        description: "Brutus",
        brand: "Brand Name 19", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Brutus"
    },
    {
        id: 20,
        src: "images/Tang.JPG",
        description: "Tang",
        brand: "Brand Name 20", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Tang"
    },
    {
        id: 21,
        src: "images/Plum.JPG",
        description: "Plum",
        brand: "Brand Name 21", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Plum"
    },
    {
        id: 22,
        src: "images/Mrs_Fluf.JPG",
        description: "Mrs Fluf",
        brand: "Brand Name 22", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Mrs Fluf"
    },
    {
        id: 23,
        src: "images/Pepe.JPG",
        description: "Pepe",
        brand: "Brand Name 23", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Pepe"
    },
    {
        id: 24,
        src: "images/Duss_Tee.JPG",
        description: "Duss Tee",
        brand: "PMS", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Duss Tee"
    },
    {
        id: 25,
        src: "images/Django.JPG",
        description: "Django",
        brand: "Brand Name 25", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Django"
    },
    {
        id: 26,
        src: "images/Dean.JPG",
        description: "Dean",
        brand: "Brand Name 26", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Dean"
    },
    {
        id: 27,
        src: "images/Beastie.JPG",
        description: "Beastie",
        brand: "Brand Name 27", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Beastie"
    },
    {
        id: 28,
        src: "images/Bob.jpg",
        description: "Bob",
        brand: "Brand Name 28", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Bob"
    },
    {
        id: 29,
        src: "images/Lando.png",
        description: "Lando",
        brand: "Brand Name 29", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Lando"
    },
    {
        id: 30,
        src: "images/Walter.jpg",
        description: "Walter",
        brand: "Grove International", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Walter"
    },
    {
        id: 31,
        src: "images/Billy.webp",
        description: "Billy Blemmer",
        brand: "Lemon Tree Lane", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Billy Blemmer"
    },
    {
        id: 32,
        src: "images/lilyapper.png",
        description: "Lil Yapper",
        brand: "Planet Hollywood", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Lil Yapper"
    },
    {
        id: 33,
        src: "../../images/placeholder.webp",
        description: "Placeholder",
        brand: "Brand Name 33", // Replace with actual brand name
        owner: "slofs",  // Replace with actual owner name
        name: "Placeholder"
    },
  ];
  
  
  
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