// Scripts login page
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const passwordButton = passwordInput.nextElementSibling.firstChild;

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

// JavaScript untuk login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah submit form reload halaman

  // Ambil nilai email dan password
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Login sederhana: cek apakah email dan password sesuai
  if (email === "user@example.com" && password === "user") {
    // Redirect ke halaman index.html jika login berhasil
    window.location.href = "user.html";
  } else {
    // Tampilkan pesan kesalahan jika login gagal
    alert("Email atau password salah. Silakan coba lagi.");
  }
});
// Function to close the login page and redirect to index.html
function closeLogin() {
  window.location.href = "index.html"; // Redirect to the index page
}

// Toggle password visibility
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const passwordButton = passwordInput.nextElementSibling;

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordButton.innerHTML = '<i class="fas fa-eye-slash text-xl"></i>';
  } else {
    passwordInput.type = "password";
    passwordButton.innerHTML = '<i class="fas fa-eye text-xl"></i>';
  }
}
