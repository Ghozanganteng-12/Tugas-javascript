let jamSekarang = 12;

let statusToko = jamSekarang >= 8 && jamSekarang <= 17
    ? "Toko Buka"
    : "Toko Tutup";

document.getElementById("status").textContent = statusToko;