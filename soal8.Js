let isPasswordCorrect = true;
let isEmailVerified = true;

let bisaMasukDashboard = isPasswordCorrect && isEmailVerified;

console.log("Bisa masuk dashboard:", bisaMasukDashboard);

// Uji jika password salah
isPasswordCorrect = false;

bisaMasukDashboard = isPasswordCorrect && isEmailVerified;

console.log("Jika password salah:", bisaMasukDashboard);