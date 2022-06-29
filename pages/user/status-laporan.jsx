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

export default function StatusLaporan() {
  const [status, setStatus] = useState("Semua");
  const [dataPekerjaan, setDataPekerjaan] = useState(Pekerjaan);
  const handleFilterStatus = (status) => {
    const result = Pekerjaan.filter((kerja) => kerja.status.includes(status));
    setDataPekerjaan(result);
    setStatus(status);
  };

  const Menu = ({ name }) => (
    <button
      className={`${name === status ? "table-active" : "text-[#B8C5D1]"}`}
      onClick={() => setActive(name)}
    >
      {name}
    </button>
  );

  return (
    <div className="h-[28rem] max-w-2xl w-full">
      <div className="flex items-center gap-12 font-semibold text-xs pl-5 mb-4">
        <button
          className={`${status === "Semua" && "active-tab"}`}
          onClick={() => {
            setDataPekerjaan(Pekerjaan);
            setStatus("Semua");
          }}
        >
          Semua Laporan
        </button>
        <button
          className={`${status === "Diterima" && "active-tab"}`}
          onClick={() => handleFilterStatus("Diterima")}
        >
          Diterima
        </button>
        <button
          className={`${status === "Selesai" && "active-tab"}`}
          onClick={() => handleFilterStatus("Selesai")}
        >
          Selesai
        </button>
        <button
          className={`${status === "Ditolak" && "active-tab"}`}
          onClick={() => handleFilterStatus("Ditolak")}
        >
          Ditolak
        </button>
      </div>

      <div>
        <div className="grid grid-cols-4 w-full py-5 border-y-2 border-[#E4E4E7] justify-items-center text-[#627D98] text-xs font-semibold mb-5">
          <p>Kode Laporan</p>
          <p>Nama Pelapor</p>
          <p>Tanggal</p>
          <p>Status</p>
        </div>
        {dataPekerjaan.map((kerjaan) => {
          let statusColor =
            (kerjaan.status === "Diterima" &&
              "text-[#00B1FF] border border-[#00B1FF] rounded bg-[#F2F9FF] w-[155px] h-[30px] flex items-center justify-center") ||
            (kerjaan.status === "Selesai" &&
              "text-[#65CA42] border border-[#65CA42] rounded bg-[#F2FFF5] w-[155px] h-[30px] flex items-center justify-center") ||
            (kerjaan.status === "Ditolak" &&
              "text-red-500 border border-red-500 rounded bg-red-500/20 w-[155px] h-[30px] flex items-center justify-center");

          return (
            <div className="grid grid-cols-4 w-full  justify-items-center text-[#627D98] text-xs mb-5">
              <div>{kerjaan.kodeLaporan}</div>
              <div>{kerjaan.namaPelapor}</div>
              <div>{kerjaan.tanggal}</div>
              <div className={`${statusColor}`}>{kerjaan.status}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
