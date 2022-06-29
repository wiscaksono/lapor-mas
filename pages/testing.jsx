import { useState } from "react";

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
  {
    kodeLaporan: "12345",
    namaPelapor: "Ojan",
    tanggal: "24.06.2022",
    status: "Ditolak",
  },
  {
    kodeLaporan: "12345",
    namaPelapor: "Ojan",
    tanggal: "24.06.2022",
    status: "Ditolak",
  },
];

export default function Testing() {
  const [status, setStatus] = useState("Semua");
  const [dataPekerjaan, setDataPekerjaan] = useState(Pekerjaan);

  const handleFilterStatus = (status) => {
    const result = Pekerjaan.filter((kerja) => kerja.status.includes(status));
    setDataPekerjaan(result);
    setStatus(status);
  };

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-4 w-full">
        <div
          className={`${status === "Semua" && "font-bold"}`}
          onClick={() => {
            setDataPekerjaan(Pekerjaan);
            setStatus("Semua");
          }}
        >
          Semua Laporan
        </div>
        <div
          className={`${status === "Diterima" && "font-bold"}`}
          onClick={() => handleFilterStatus("Diterima")}
        >
          Diterima
        </div>
        <div
          className={`${status === "Selesai" && "font-bold"}`}
          onClick={() => handleFilterStatus("Selesai")}
        >
          Selesai
        </div>
        <div
          className={`${status === "Ditolak" && "font-bold"}`}
          onClick={() => handleFilterStatus("Ditolak")}
        >
          Ditolak
        </div>
      </div>

      <div>
        {dataPekerjaan.map((kerjaan) => {
          let statusColor =
            (kerjaan.status === "Diterima" && "text-blue-500") ||
            (kerjaan.status === "Selesai" && "text-green-500") ||
            (kerjaan.status === "Ditolak" && "text-red-500");

          return (
            <div className="grid grid-cols-4 w-full">
              <div>{kerjaan.kodeLaporan}</div>
              <div>{kerjaan.namaPelapor}</div>
              <div>{kerjaan.tanggal}</div>
              <div className={`${statusColor} bg-red-500`}>
                {kerjaan.status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
