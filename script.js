const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("open");
});

// Get elements
const profileImg = document.getElementById("profileImg");
const modal = document.getElementById("imageModal");
const fullImg = document.getElementById("fullImg");
const closeBtn = document.querySelector(".close");

// Show full image on click
profileImg.onclick = () => {
    modal.style.display = "block";
    fullImg.src = profileImg.src;  // Same image full size
};

// Close modal
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Close by clicking outside image
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
