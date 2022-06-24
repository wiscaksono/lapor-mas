import Link from "next/dist/client/link";

export default function Layout({ children, className }) {
  return (
    <section className="flex h-screen w-screen overflow-hidden">
      <Aside />
      <div className={className}>{children}</div>
    </section>
  );
}

const Aside = () => {
  const Button = () => {
    return (
      <button className="flex gap-5 py-4 bg-secondary rounded-lg items-center justify-center w-[238px]">
        <img src="/icon/home.svg" alt="" />
        <p className="font-semibold text-sm text-white">Home</p>
      </button>
    );
  };

  return (
    <aside className="w-2/12 bg-primary flex flex-col items-center justify-between py-20 flex-none">
      <div className="flex items-center justify-between flex-col">
        <img src="pln-logo.svg" alt="Logo PLN" className="mb-9" />
        <img src="default-avatar.svg" alt="Avatar" className="mb-4" />
        <Link href="#" className=" flex itemscenter justify-center " passHref>
          <p className="text-base text-center text-white">
            Selamat Datang <br /> <span className="font-semibold">Fauzan</span>
          </p>
        </Link>

        <div className="flex flex-col gap-3 mt-7">
          <Button />
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
