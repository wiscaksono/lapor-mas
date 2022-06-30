import Link from "next/link";
import { useRouter } from "next/router";
export default function UserLayout({ children }) {
  const router = useRouter();
  const NavbarMenu = ({ href, name }) => {
    return (
      <Link href={href}>
        <a className={`${router.asPath == href ? "active" : ""}`}>{name}</a>
      </Link>
    );
  };
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat  flex-col ">
      <nav className="flex items-center justify-between px-28 pt-16 fixed w-full h-max top-0">
        <img src="/pln-logo.svg" alt="Logo PLN" />
        <div className="flex items-center justify-center gap-16  font-semibold text-xs text-[#627D98]">
          <NavbarMenu href={"../"} name="Home" />
          <NavbarMenu href={"/user/buat-laporan"} name="Buat Laporan" />
          <NavbarMenu href={"/user/status-laporan"} name="Status Laporan" />
        </div>

        <Link href="/auth/logout">
          <button className="bg-secondary rounded-lg flex items-center gap-2 py-2 px-6 font-semibold text-white">
            <img src="/icon/exit.svg" alt="" className="w-6 h-6" />
            Keluar
          </button>
        </Link>
      </nav>

      <section className="flex items-center justify-center flex-col h-screen">
        {children}
      </section>
    </div>
  );
}
