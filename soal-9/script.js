let stokBarang = 8;

let statusStok;

if (stokBarang > 10) {
    statusStok = "Stok Tersedia";
} else if (stokBarang >= 1 && stokBarang <= 10) {
    statusStok = "Stok Terbatas! Segera Beli";
} else {
    statusStok = "Stok Habis";
}

document.getElementById("stok").textContent = statusStok;
document.getElementById("stok").classList.add(
    stokBarang > 10 ? "tersedia" :
    stokBarang >= 1 ? "terbatas" : "habis"
);