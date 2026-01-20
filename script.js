const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const sections = document.querySelectorAll(".section");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

function showSection(id) {
    sections.forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
    sidebar.classList.remove("open");
}

function toggleCard(card) {
    card.classList.toggle("open");
}
