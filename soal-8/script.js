let jenisKendaraan = "Mobil";

let tarif;

if (jenisKendaraan === "Mobil") {
    tarif = "Tarif Parkir: Rp 5.000 / jam";
} else if (jenisKendaraan === "Motor") {
    tarif = "Tarif Parkir: Rp 2.000 / jam";
}

document.getElementById("tarif").textContent = tarif;