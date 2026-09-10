let isDarkMode = true;

let container = document.querySelector(".container");

if (isDarkMode) {
    container.style.backgroundColor = "#121212";
    container.style.color = "white";
} else {
    container.style.backgroundColor = "#FFFFFF";
    container.style.color = "black";
}

document.getElementById("status").textContent =
    isDarkMode ? "Mode Gelap Aktif" : "Mode Terang Aktif";