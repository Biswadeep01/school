let loader = document.getElementById("loader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

// Set the current year dynamically in the footer
let currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;
