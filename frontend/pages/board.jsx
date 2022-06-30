import Link from "next/link";
import Layout from "../components/layouts";
import { Menu, Transition, Dialog, Listbox } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export default function Board() {
  return (
    <>
      <Layout className="flex-col gap-14 flex flex-1 overflow-hidden bg-[#f2f2f2]">
        <Navbar />

        <div className="flex-1 flex gap-5 pb-16 px-14 overflow-y-hidden overflow-x-auto">
          <Test />
        </div>
      </Layout>
    </>
  );
}

const Card = ({ status }) => {
  function MyModal() {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }

    function openModal() {
      setIsOpen(true);
    }

    return (
      <>
        <button
          type="button"
          onClick={openModal}
          className="absolute top-6 right-6"
        >
          <img src="/icon/dots-horizontal.svg" alt="" />
        </button>

        <Transition appear show={isOpen} as={Fragment}>
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
        </Transition>
      </>
    );

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
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
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
  }

  // function CheckStatus(status) {
  //   switch (status) {
  //     case "proses":
  //       return "secondary";
  //     case "telat":
  //       return "[#FF0000]";
  //     case "selesai":
  //       return "[#8BD970]";
  //   }
  // }

  return (
    <div className=" bg-white rounded-lg border border-[#E4E4E7] relative">
      <MyModal />
      <div className="p-5">
        <div className="mb-12">
          <h5 className="font-semibold text-base text-[#627D98] mb-1">
            GIS Priok Barat
          </h5>
          <p className="text-xs text-[#9AB2C8]">
            Surver Bersama dengan PLN E, untuk hmi
          </p>
        </div>

        <div className="flex justify-between flex-wrap">
          <div className="py-1 px-11 bg-[#FFF2F2] border border-[#FF0000] rounded-md">
            <p className="text-[#FF0000]">Mendesak</p>
          </div>
          <div className="flex gap-2 items-center">
            {/* <p className="text-secondary">Proses</p> */}
            <p
              className={`font-medium text-xs ${
                status === "telat" ? "text-red-500" : ""
              }`}
            >
              Proses
            </p>
            <div
              className={`w-4 h-4 rounded-full ${
                status === "telat" ? "bg-[#FF0000]" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <div className="px-5 py-1 border-t border-[#FFF2F2] flex justify-between items-center">
        <div className="inline-block">
          <div className="flex items-center gap-2 py-1 px-4 rounded-md bg-[#ABE5FF]">
            <img src="/icon/clock.svg" alt="" />
            <p className="font-semibold text-[#5E85A9] text-sm">23 Juni</p>
          </div>
        </div>

        <div className="relative">
          <span className="p-1 bg-[#ABE5FF] rounded-full text-[10px]  z-20 relative">
            +2
          </span>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  function MyDropdown() {
    return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="text-xs text-[#102A43] font-semibold flex items-center gap-3">
            <p>Anggota</p>
            <img src="/icon/dropdown.svg" alt="" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 mb-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-secondary text-white" : "text-[#365C7F]"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-3 justify-center border border-gray-200 transition-colors font-semibold`}
                  >
                    <img
                      src="/icon/user-add.svg"
                      alt=""
                      className={active ? "testing" : ""}
                    />
                    <p>Tambah Anggota</p>
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="flex flex-col gap-2 mb-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-secondary/40 text-[#365C7F]"
                        : "text-[#627D98]"
                    } group flex w-full items-center px-2 py-2 text-sm gap-3 `}
                  >
                    <div className="pl-5">
                      <img src="/default-avatar.svg" alt="" />
                    </div>
                    Wisnu Wicaksono
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-secondary/40 text-[#365C7F]"
                        : "text-[#627D98]"
                    } group flex w-full items-center px-2 py-2 text-sm gap-3 `}
                  >
                    <img src="/default-avatar.svg" alt="" className="pl-5" />
                    Wisnu Wicaksono
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-secondary/40 text-[#365C7F]"
                        : "text-[#627D98]"
                    } group flex w-full items-center px-2 py-2 text-sm gap-3 `}
                  >
                    <img src="/default-avatar.svg" alt="" className="pl-5" />
                    Wisnu Wicaksono
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }
  return (
    <nav className="flex items-center justify-between px-16 pt-14 flex-none">
      <div className="flex items-center justify-center gap-11">
        <button className="text-xs font-semibold text-[#102A43] flex items-center gap-3">
          Semua Task
          <img src="/icon/dropdown.svg" alt="" />
        </button>

        <div className="flex items-center gap-14 text-[#B8C5D1] text-xs font-semibold">
          <Link href="#" passHref>
            <a>Selesai</a>
          </Link>
          <Link href="#" passHref>
            <a>Proses</a>
          </Link>
          <Link href="#" passHref>
            <a>Telat</a>
          </Link>
          <Link href="#" passHref>
            <a>Belum Dimulai</a>
          </Link>
        </div>
      </div>

      <MyDropdown />
    </nav>
  );
};

const AddButton = () => {
  return (
    <button className="bg-white rounded-lg font-semibold text-sm text-[#627D98] flex items-center justify-center gap-3 py-3 border border-[#E4E4E7] hover:shadow-md shadow-none transition-all">
      <img src="icon/add.svg" alt="" />
      Tambah Task Baru
    </button>
  );
};

const Test = () => {
  return (
    <div className="flex flex-col w-3/12 gap-3 flex-none">
      <div className="flex flex-col flex-none gap-3 ">
        <h5 className="text-base text-[#365C7F] font-semibold">Tugas 1</h5>
        <AddButton />
      </div>
      <div className=" flex flex-1 flex-col gap-4 overflow-auto">
        <Card status="telat" />
        <Card status="telat" />
      </div>
    </div>
  );
};
