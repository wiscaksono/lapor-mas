const Pekerjaan = [
  {
    kodeLaporan: "12345",
    namaPelapor: "Wisnu Wicaksono",
    tanggal: "24.06.2022",
    status: "Diterima",
  },
  {
    kodeLaporan: "12345",
    namaPelapor: "Naufal Alfakar",
    tanggal: "24.06.2022",
    status: "Selesai",
  },

  {
    kodeLaporan: "12345",
    namaPelapor: "Ojan",
    tanggal: "24.06.2022",
    status: "Ditolak",
  },
];

for (let index = 0; index < Pekerjaan.length; index++) {
  // console.log(Pekerjaan[index].status);
  if (Pekerjaan[index].status === "Ditolak") {
    console.log("Testing", index);
  }
}
