import Link from "next/link";

export default function NavbarUser() {
  <nav className="flex items-center justify-between px-28 pt-16 fixed w-full h-max top-0">
    <img src="pln-logo.svg" alt="Logo PLN" />
    <div className="flex items-center justify-center gap-16 text-center">
      <Link href="/user">
        <a>Home</a>
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
  </nav>;
}
