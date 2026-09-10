let nilaiUjian = 80;

let hasil = nilaiUjian >= 75
    ? "Selamat, Anda Lulus!"
    : "Maaf, Anda Belum Lulus.";

let hasilElement = document.getElementById("hasil");
hasilElement.textContent = hasil;
hasilElement.classList.add(nilaiUjian >= 75 ? "lulus" : "tidak-lulus");