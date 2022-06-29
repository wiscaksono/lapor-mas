import Link from "next/link";
import { Menu, Transition, Dialog, Listbox } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
export default function BuatLaporan() {
  function HeadlessSelect() {
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
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg py-3 text-xs z-50">
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
  }
  return (
    <div className="max-w-xl w-full">
      <h3 className="text-center font-semibold text-xl text-[#102A43] mb-12">
        Form Laporan <br /> Scada
      </h3>

      <form action="" className="grid grid-cols-2 gap-x-3 gap-y-6 items-center">
        <div>
          <label htmlFor="prioritas">Prioritas</label>
          <HeadlessSelect />
        </div>
        <div>
          <label htmlFor="prioritas">Prioritas</label>
          <HeadlessSelect />
        </div>
        <div>
          <label htmlFor="deskripsi">Deskripsi</label>
          <textarea
            name="deskripsi"
            id=""
            cols="30"
            rows="5"
            className="bg-[#F2F2F2] py-3 px-5 w-full focus-within:outline-none rounded-md text-xs font-medium text-[#979797]"
            placeholder="Ketik diskripsi atau catatan disini"
          ></textarea>
        </div>
        <div>
          <label htmlFor="deskripsi">Deskripsi</label>
          <textarea
            name="deskripsi"
            id=""
            cols="30"
            rows="5"
            className="bg-[#F2F2F2] py-3 px-5 w-full focus-within:outline-none rounded-md text-xs font-medium text-[#979797]"
            placeholder="Ketik diskripsi atau catatan disini"
          ></textarea>
        </div>
        <div className="col-span-2">
          <label htmlFor="deskripsi">Deskripsi</label>
          <textarea
            name="deskripsi"
            id=""
            cols="30"
            rows="5"
            className="bg-[#F2F2F2] py-3 px-5 w-full focus-within:outline-none rounded-md text-xs font-medium text-[#979797]"
            placeholder="Ketik diskripsi atau catatan disini"
          ></textarea>
        </div>
        <label className="cursor-pointer col-span-2">
          Lampiran
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
          <button className="py-2 w-full h-full rounded-lg px-auto bg-[#D2D6DB] hover:bg-secondary transition-colors text-white font-semibold text-sm">
            Kirim Laporan
          </button>
        </div>
      </form>
    </div>
  );
}

{
  /* <Transition appear show={isOpen} as={Fragment}>
  <Dialog as="div" className="relative z-40" onClose={closeModal}>
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-black bg-opacity-25" />
    </Transition.Child>

    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="w-full max-w-3xl transform  rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title
              as="h3"
              className="font-semibold text-xl text-[#102A43] mb-8"
            >
              GIS Priok Barat
            </Dialog.Title>
            <div>
              <button className="flex items-center gap-2 focus-visible:outline-none mb-11">
                <img src="/icon/user-add.svg" alt="" />
                <p className="text-[#627D98] font-medium text-xs">
                  Pilih Anggota
                </p>
              </button>

              <form className="">
                <div className="grid grid-cols-3 gap-x-5 gap-y-[18px]">
                  <div>
                    <label htmlFor="" className="text-label">
                      Board
                    </label>
                    <HeadlessSelect />
                  </div>
                  <div>
                    <label htmlFor="prioritas">Prioritas</label>
                    <HeadlessSelect />
                  </div>
                  <div>
                    <label htmlFor="">Kemajuan</label>
                    <HeadlessSelect />
                  </div>
                  <div>
                    <label htmlFor="">Tanggal Mulai</label>
                    <HeadlessSelect />
                  </div>
                  <div>
                    <label htmlFor="">Tanggal Jatuh Tempo</label>
                    <HeadlessSelect />
                  </div>
                </div>

                <div className="my-6">
                  <label htmlFor="deskripsi">Deskripsi</label>
                  <textarea
                    name="deskripsi"
                    id=""
                    cols="30"
                    rows="5"
                    className="bg-[#F2F2F2] py-3 px-5 w-full focus-within:outline-none rounded-md text-xs font-medium text-[#979797]"
                    placeholder="Ketik diskripsi atau catatan disini"
                  ></textarea>
                </div>

                <label className="cursor-pointer">
                  Lampiran
                  <span className="sr-only">Tambah Lampiran</span>
                  <input
                    type="file"
                    className="block w-full mt-2 font-normal text-sm text-[#979797] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary/20 file:text-[#627D98] "
                  />
                </label>

                <div className="my-6">
                  <label htmlFor="deskripsi">Komentar</label>
                  <textarea
                    name="deskripsi"
                    id=""
                    rows="2"
                    className="bg-[#F2F2F2] py-3 px-5 w-full focus-within:outline-none rounded-md text-xs font-medium text-[#979797]"
                    placeholder="Ketik komentar kamu disini"
                  ></textarea>
                </div>
              </form>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  </Dialog>
</Transition>; */
}
