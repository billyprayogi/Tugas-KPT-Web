function changePhoto(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profile-photo").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// Function to save changes
function saveChanges() {
  const nama = document.getElementById("nama").textContent;
  const tempat = document.getElementById("tempat").textContent;
  const tglLahir = document.getElementById("tgl-lahir").textContent;
  const agama = document.getElementById("agama").textContent;
  const alamat = document.getElementById("alamat").textContent;
  const email = document.getElementById("email").textContent;
  const noHp = document.getElementById("no-hp").textContent;

  // Log the changes (you can send this data to the server in a real application)
  console.log("Perubahan telah disimpan:");
  console.log(`Nama: ${nama}`);
  console.log(`Tempat: ${tempat}`);
  console.log(`Tgl. Lahir: ${tglLahir}`);
  console.log(`Agama: ${agama}`);
  console.log(`Alamat: ${alamat}`);
  console.log(`Email: ${email}`);
  console.log(`No. HP: ${noHp}`);

  alert("Perubahan telah disimpan!");
}

function editField(id) {
  // Mendapatkan elemen input dan span
  const inputField = document.getElementById(id);

  // Jika elemen adalah input atau textarea
  if (
    inputField.tagName.toLowerCase() === "input" ||
    inputField.tagName.toLowerCase() === "textarea"
  ) {
    // Hapus atribut readonly untuk memungkinkan pengeditan
    inputField.removeAttribute("readonly");
    inputField.focus();
  } else {
    // Jika elemen adalah span, ubah menjadi input teks untuk pengeditan
    const spanText = inputField.innerText;
    inputField.innerHTML = `<input type="text" class="form-control" value="${spanText}" onblur="saveField('${id}')">`;
    inputField.firstElementChild.focus();
  }
}

function saveField(id) {
  const inputField = document.getElementById(id);
  const value = inputField.querySelector("input").value;

  // Mengganti input dengan nilai yang baru
  inputField.innerHTML = value;
}
