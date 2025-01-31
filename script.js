function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => {
        section.style.display = "none"; // Hide all sections
    });
    document.getElementById(sectionId).style.display = "block"; // Show the selected section
}

// Show Home by default when the page loads
document.addEventListener("DOMContentLoaded", () => {
    showSection("home");
});
