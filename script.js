document.addEventListener("DOMContentLoaded", () => {
    const openFormButton = document.getElementById("open-form");
    const closeFormButton = document.getElementById("close-form");
    const popupForm = document.getElementById("popup-form");

    // Open the popup form
    openFormButton.addEventListener("click", () => {
        popupForm.style.display = "flex";
    });

    // Close the popup form
    closeFormButton.addEventListener("click", () => {
        popupForm.style.display = "none";
    });

    // Close the popup form when clicking outside the form container
    window.addEventListener("click", (e) => {
        if (e.target === popupForm) {
            popupForm.style.display = "none";
        }
    });
});
    
