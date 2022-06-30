import Link from "next/link";
import { Menu, Transition, Dialog, Listbox } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export default function BuatLaporan() {
  const [active, setActive] = useState("Form");

  const Form = () => {
    return (
      <div className="max-w-xl w-full px-5">
        <h3 className="text-center font-semibold text-xl text-[#102A43] mb-12">
          Form Laporan <br /> Scada
        </h3>

        <form className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-6 items-center">
          <div>
            <label htmlFor="Asal Unit">Asal Unit/Bidang</label>
            <HeadlessSelect />
          </div>
          <div>
            <label htmlFor="Jenis Gangguan">Jenis Gangguan</label>
            <HeadlessSelect />
          </div>
          <div>
            <label htmlFor="Lokasi Gangguan">GITET/GI/GIS Yang Terganggu</label>
            <textarea
              name="deskripsi"
              id=""
              cols="30"
              rows="5"
              className="bg-[#F2F2F2] py-3 px-5 w-full focus-within:outline-none rounded-md text-xs font-medium text-[#979797]"
              placeholder="Jawaban Anda"
            ></textarea>
          </div>
          <div>
            <label htmlFor="Bay">Bay Yang Terganggu</label>
            <textarea
              name="Bay"
              id=""
              cols="30"
              rows="5"
              className="bg-[#F2F2F2] py-3 px-5 w-full focus-within:outline-none rounded-md text-xs font-medium text-[#979797]"
              placeholder="Jawaban Anda"
            ></textarea>
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="Penjelasan">Penjelasan Singkat Gangguan</label>
            <textarea
              name="Penjelasan"
              id=""
              cols="30"
              rows="5"
              className="bg-[#F2F2F2] py-3 px-5 w-full focus-within:outline-none rounded-md text-xs font-medium text-[#979797]"
              placeholder="Jawaban Anda"
            ></textarea>
          </div>
          <label className="cursor-pointer lg:col-span-2">
            Lampirkan Bukti
            <span className="sr-only">Tambah Lampiran</span>
            <input
              type="file"
              className="block w-full mt-2 font-normal text-sm text-[#979797] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary/20 file:text-[#627D98] "
            />
          </label>
          <div>
            <label htmlFor="prioritas">Prioritas</label>
            <HeadlessSelect />
          </div>
          <div className="self-end">
            <button
              className="py-2 w-full h-full rounded-lg px-auto bg-[#D2D6DB] hover:bg-secondary transition-colors text-white font-semibold text-sm"
              onClick={() => setActive("Terkirim")}
            >
              Kirim Laporan
            </button>
          </div>
        </form>
      </div>
    );
  };

  const Terkirim = () => {
    return (
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4  animate-bounce">
          <img src="/icon/laporan-terkirim.svg" alt="Laporan Terkirim" />
        </div>
        <div className="mb-10">
          <h1 className="font-semibold text-4xl text-[#365C7F] mb-1">
            Laporan Berhasil Di Kirim
          </h1>
          <p className="font-medium text-xs text-[#627D98] text-center">
            Untuk melihat status laporan silahkan di klik tab <br /> status
            laporan.
          </p>
        </div>
        <button className="font-semibold text-sm text-white bg-secondary py-3 px-14 rounded-lg mb-4">
          Liat Status Laporan
        </button>
        <Link href={"/user"}>
          <a className="font-semibold text-xs text-[#68B7FF]">
            Kembali ke halaman utama
          </a>
        </Link>
      </div>
    );
  };

  function render(value) {
    switch (value) {
      case "Form":
        return <Form />;
      case "Terkirim":
        return <Terkirim />;
    }
  }

  return <div>{render(active)}</div>;
}

const HeadlessSelect = () => {
  const people = [
    { name: "Wade Cooper" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
  ];

  const [selected, setSelected] = useState(people[0]);
  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default bg-[#F2F2F2] rounded-lg  py-3 pl-6 pr-10 text-left  focus:outline-none focus-visible:outline-none text-xs text-[#979797]">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-xl py-3 text-xs z-50">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-secondary/10 text-[#979797]"
                        : "text-[#979797]"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-secondary">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
