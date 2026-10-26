// Ambil elemen
const semuaKotak = document.querySelectorAll(".kotak");
const modal = document.getElementById("modal");
const modalFoto = document.getElementById("modal-foto");
const modalNama = document.getElementById("modal-nama");
const modalHarga = document.getElementById("modal-harga");
const modalDeskripsi = document.getElementById("modal-deskripsi");
const tombolTutup = document.getElementById("tutup");
const tombolPilih = document.getElementById("btn-pilih");
const barPilihan = document.getElementById("bar-pilihan");

// Menyimpan produk yang sedang dibuka
let produkAktif = "";
let hargaAktif = "";

// Klik kotak -> isi modal dengan data produk lalu tampilkan
semuaKotak.forEach(function (kotak) {
  kotak.addEventListener("click", function () {
    const foto = kotak.querySelector("img");

    modalFoto.src = foto.src;
    modalNama.textContent = kotak.dataset.nama;
    modalHarga.textContent = kotak.dataset.harga;
    modalDeskripsi.textContent = kotak.dataset.deskripsi;

    produkAktif = kotak.dataset.nama;
    hargaAktif = kotak.dataset.harga;

    modal.classList.add("aktif");
  });
});

// Tombol "Pilih Produk Ini"
tombolPilih.addEventListener("click", function () {
  barPilihan.textContent = "Produk dipilih: " + produkAktif + " (" + hargaAktif + ")";
  modal.classList.remove("aktif");
});

// Menutup modal
function tutupModal() {
  modal.classList.remove("aktif");
}

tombolTutup.addEventListener("click", tutupModal);

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    tutupModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    tutupModal();
  }
});