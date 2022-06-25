import Link from "next/dist/client/link";
import { useRouter } from "next/router";

export default function Layout({ children, className }) {
  return (
    <section className="flex h-screen w-screen overflow-hidden">
      <Aside />
      <div className={className}>{children}</div>
    </section>
  );
}

const Aside = () => {
  const router = useRouter();
  const Button = ({ name, icon, href }) => {
    return (
      <Link href={href}>
        <button
          className={`flex gap-5 py-4   rounded-lg items-center justify-center mx-5 ${
            router.pathname === href ? "bg-secondary" : "null"
          }`}
        >
          <img src={`/icon/${icon}.svg`} alt="" />
          <p className="font-semibold text-sm text-white">{name}</p>
        </button>
      </Link>
    );
  };

  return (
    <aside className="w-2/12 bg-primary flex flex-col items-center justify-between py-20 flex-none">
      <div className="flex items-center justify-between flex-col w-full">
        <img src="pln-logo.svg" alt="Logo PLN" className="mb-9" />
        <img src="default-avatar.svg" alt="Avatar" className="mb-4" />
        <Link href="#" className=" flex itemscenter justify-center " passHref>
          <p className="text-base text-center text-white">
            Selamat Datang <br /> <span className="font-semibold">Fauzan</span>
          </p>
        </Link>

        <div className="flex flex-col gap-3 mt-7 w-full">
          <Button name="Home" icon="home" href={"/"} />
          <Button name="Board" icon="board" href={"board"} />
          <Button name="Chart" icon="chart" href={"chart"} />
          <Button name="Jadwal" icon="schedule" href={"jadwal"} />
          <Button name="Laporan" icon="report" href={"laporan"} />
        </div>
      </div>

      <button className="bg-secondary rounded-lg flex gap-2 py-2 px-6">
        <img src="/icon/exit.svg" alt="" />
        <p className="font-semibold text-sm text-white">Keluar</p>
      </button>
    </aside>
  );
};
{
  /* <div className="w-10/12 bg-[#F2F2F2] py-16 pl-14 pr-0 flex flex-col">
          <Navbar />
          {children}
          <div className="flex items-start gap-5 mt-9 h-full overflow-x-auto overflow-y-hidden pr-14 flex-1">
            <div className="w-3/12 flex flex-col gap-3 flex-none overflow-hidden">
              <h4 className="text-[#365C7F] font-semibold text-base mb-3 flex-none">
                Tugas 1
              </h4>
              <AddButton />
              <div className="flex gap-2 flex-col overflow-y-auto flex-1">
                <Card />
              </div>
            </div>
          </div>
        </div> */
}
