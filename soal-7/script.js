let password = "abc";

password.length < 6 && (
    document.getElementById("error").textContent =
    "Password terlalu pendek (minimal 6 karakter)"
);