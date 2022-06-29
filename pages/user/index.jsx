import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import BuatLaporan from "./buat-laporan";
// import Home from "./home.";
import StatusLaporan from "./status-laporan";

export default function UserHome() {
  const [active, setActive] = useState("Home");

  const Home = () => {
    return (
      <>
        <h1 className="text-center text-6xl text-[#102A43] font-semibold mb-8">
          Silahkan Laporkan <br /> Keluhan SCADA Anda
        </h1>

        <div className="flex gap-7">
          <button
            className="bg-secondary rounded-lg font-semibold text-sm text-white w-[244px] h-[41px]"
            onClick={() => setActive("Buat Laporan")}
          >
            Buat Laporan
          </button>
          <button
            className="border border-secondary rounded-lg font-semibold text-sm  text-secondary w-[244px] h-[41px]"
            onClick={() => setActive("Status Laporan")}
          >
            Cek Status Laporan
          </button>
        </div>
      </>
    );
  };

  function render(value) {
    switch (value) {
      case "Home":
        return <Home />;
      case "Buat Laporan":
        return <BuatLaporan />;
      case "Status Laporan":
        return <StatusLaporan />;
      default:
        return "Halaman Tidak Ditemukan";
    }
  }

  const router = useRouter();
  const NavbarMenu = ({ name }) => (
    <button
      className={name === active ? "active" : ""}
      onClick={() => setActive(name)}
    >
      {name}
    </button>
  );

  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat  flex-col ">
      <nav className="flex items-center justify-between px-28 pt-16 fixed w-full h-max top-0">
        <img
          src="/pln-logo.svg"
          alt="Logo PLN"
          onClick={() => setActive("Home")}
          className="cursor-pointer"
        />
        <div className="flex items-center justify-center gap-16 font-semibold text-xs text-[#627D98]">
          <NavbarMenu name="Home" />
          <NavbarMenu name="Buat Laporan" />
          <NavbarMenu name="Status Laporan" />
        </div>

        <Link href="/auth/logout">
          <button className="bg-secondary rounded-lg flex items-center gap-2 py-2 px-6 font-semibold text-white">
            <img src="/icon/exit.svg" alt="" className="w-6 h-6" />
            Keluar
          </button>
        </Link>
      </nav>

      <section className="flex items-center justify-center flex-col h-screen">
        {render(active)}
      </section>
    </div>
  );
}
