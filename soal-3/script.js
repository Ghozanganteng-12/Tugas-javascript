let isLoggedIn = true;
let namaUser = "Navi";

let statusLogin = isLoggedIn
    ? "Halo, " + namaUser + "!"
    : "Silakan Login Terlebih Dahulu";

document.getElementById("status").textContent = statusLogin;