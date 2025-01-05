// -------------------------------------------------------------------------
// Scripts table aencarian anggota
function filterTable() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const table = document.getElementById("anggotaTable");
  const rows = table.getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    let rowContainsSearchTerm = false;
    for (let j = 0; j < cells.length; j++) {
      if (cells[j].innerText.toLowerCase().includes(searchInput)) {
        rowContainsSearchTerm = true;
        break;
      }
    }
    rows[i].style.display = rowContainsSearchTerm ? "" : "none";
  }
}
// ------------------------------------------------------
