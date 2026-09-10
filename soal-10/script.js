let usiaPenonton = 16;

let kategori;

if (usiaPenonton < 13) {
    kategori = "Kategori: Semua Umur (SU)";
} else if (usiaPenonton <= 17) {
    kategori = "Kategori: Remaja (R)";
} else {
    kategori = "Kategori: Dewasa (D)";
}

document.getElementById("kategori").textContent = kategori;