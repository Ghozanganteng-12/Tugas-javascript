let totalHarga = 200000;
let member = true;

if (member === true) {
    let diskon = 0.2;
    let totalSetelahDiskon = totalHarga - (totalHarga * diskon);

    console.log("Total setelah diskon:", totalSetelahDiskon);
}

// Coba akses variabel diskon dari luar blok
console.log("Diskon:", diskon);