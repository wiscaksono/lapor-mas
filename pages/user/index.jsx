import Link from "next/link";
// import NavbarUser from "../../components/user/Navbar";

export default function UserHome() {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat  flex-col ">
      <nav className="flex items-center justify-between px-28 pt-16 fixed w-full h-max top-0">
        <img src="pln-logo.svg" alt="Logo PLN" />
        <div className="flex items-center justify-center gap-16  font-semibold text-xs text-[#627D98]">
          <Link href="/user">
            <a className="active">Home</a>
          </Link>
          <Link href="/user">
            <a>Buat Laporan</a>
          </Link>
          <Link href="/user">
            <a>Status Laporan</a>
          </Link>
        </div>

        <Link href="/auth/logout">
          <button className="bg-secondary rounded-lg flex items-center gap-2 py-2 px-6 font-semibold text-white">
            <img src="/icon/exit.svg" alt="" className="w-6 h-6" />
            Keluar
          </button>
        </Link>
      </nav>

      <section className="flex items-center justify-center flex-col h-screen">
        <h1 className="text-center text-6xl text-[#102A43] font-semibold mb-8">
          Silahkan Laporkan <br /> Keluhan SCADA Anda
        </h1>

        <div className="flex gap-7">
          <Link href="/buat-laporan">
            <button className="bg-secondary rounded-lg font-semibold text-sm text-white w-[244px] h-[41px]">
              Buat Laporan
            </button>
          </Link>
          <Link href="/status-laporan">
            <button className="border border-secondary rounded-lg font-semibold text-sm  text-secondary w-[244px] h-[41px]">
              Cek Status Laporan
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
