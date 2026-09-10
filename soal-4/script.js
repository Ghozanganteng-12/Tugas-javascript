let totalBelanja = 600000;

let hasil = totalBelanja > 500000
    ? "Anda Mendapat Diskon 20%!"
    : totalBelanja >= 200000
        ? "Anda Mendapat Diskon 10%!"
        : "Belanja lebih banyak untuk dapat diskon!";

let warna = totalBelanja > 500000
    ? "diskon-20"
    : totalBelanja >= 200000
        ? "diskon-10"
        : "tidak-diskon";

let hasilElement = document.getElementById("hasil");
hasilElement.textContent = hasil;
hasilElement.classList.add(warna);