import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import BuatLaporan from "./buat-laporan";
import StatusLaporan from "./status-laporan";
import { Transition } from "@headlessui/react";

export default function UserHome() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const Home = () => {
    return (
      <>
        <h1 className="text-center text-2xl lg:text-6xl text-[#102A43] font-semibold lg:mb-8 mb-5">
          Silahkan Laporkan <br /> Keluhan SCADA Anda
        </h1>

        <div className="flex gap-5 lg:gap-7 flex-col lg:flex-row">
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
    <div className="min-h-screen bg-transparent lg:bg-background bg-cover bg-no-repeat flex-col">
      <nav className="bg-secondary md:bg-transparent">
        <div className=" mx-auto px-4 sm:px-6 lg:px-28 pt-8">
          <div className="flex items-center justify-between h-16">
            <img
              src="/pln-logo.svg"
              alt="Logo PLN"
              onClick={() => setActive("Home")}
              className="cursor-pointer"
            />
            <div className="hidden md:block">
              <div className="flex items-center justify-center gap-16 font-semibold text-xs text-[#627D98]">
                <NavbarMenu name="Home" />
                <NavbarMenu name="Buat Laporan" />
                <NavbarMenu name="Status Laporan" />
              </div>
            </div>
            <div className="hidden md:block">
              <button className="bg-secondary rounded-lg flex items-center gap-2 py-2 px-6 font-semibold text-white">
                <img src="/icon/exit.svg" alt="" className="w-6 h-6" />
                Keluar
              </button>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <img src="/icon/burger.svg" alt="" />
                ) : (
                  <img src="/icon/close.svg" alt="" />
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="md:hidden min-h-screen flex items-center justify-center bg-secondary"
              id="mobile-menu"
            >
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center"
              >
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Buat Laporan
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Status Laporan
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      <section className="flex items-center justify-center flex-col lg:h-[85vh] h-screen">
        {render(active)}
      </section>
    </div>
  );
}
