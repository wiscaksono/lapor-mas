import Link from "next/link";
import Layout from "../components/layouts";
import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Laporan() {
  const [showDetail, setShowDetail] = useState(false);
  const [showDetail2, setShowDetail2] = useState(false);
  const [showDetail3, setShowDetail3] = useState(false);
  return (
    <Layout className={"bg-[#F2F2F2] w-full"}>
      <div className="flex-1 flex gap-5 py-16 px-14 h-full">
        <div className="bg-white py-7 px-10 rounded-lg w-full h-full">
          <div className="w-full flex items-center justify-between border-b border-b-[#E4E4E7] pb-7">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <button>
                  <img src="/icon/chevron-left.svg" alt="" />
                </button>
                <button>
                  <p className="font-semibold text-xl text-[#365C7F]">
                    Juni 2022
                  </p>
                </button>

                <button>
                  <img src="/icon/chevron-right.svg" alt="" />
                </button>
              </div>
              <div className="flex items-center gap-10">
                <button>
                  <img src="/icon/archive.svg" alt="" />
                </button>
                <button>
                  <img src="/icon/trash.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-11 ">
              <div className="relative">
                <img
                  src="/icon/search.svg"
                  alt=""
                  className="absolute left-6 top-1/2 -translate-y-1/2"
                />
                <input
                  type="text"
                  className="bg-[#F2F2F2] pl-14 py-4 rounded-lg pr-28 text-xs placeholder:text-[#BBC3D0] text-[#365C7F]"
                  placeholder="Cari Nama, email atau kode laporan"
                />
              </div>
              <div className="flex items-center gap-8 font-medium text-sm text-[#B8C5D1]">
                <Link href={"#"}>
                  <a>Bulan</a>
                </Link>
                <Link href={"#"}>
                  <a>Minggu</a>
                </Link>
                <Link href={"#"}>
                  <a className="text-[#365C7F]">Hari Ini</a>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-6 place-items-center py-6 border-b border-b-[#E4E4E7] text-[#627D98] font-semibold text-xs">
              <div>Nama Pelapor</div>
              <div>Email</div>
              <div>Tanggal</div>
              <div>Jam</div>
              <div>Prioritas</div>
              <div>Status</div>
            </div>

            <div>
              <button
                className="grid grid-cols-6 place-items-center py-5 text-[#627D98] font-medium text-xs w-full"
                // onClick={() => setShowDetail(true)}
                onClick={() => setShowDetail((showDetail) => !showDetail)}
              >
                <div>Wisnu Wicaksono</div>
                <div>wwicaksono96@gmail.com</div>
                <div>24.06.2022</div>
                <div>10:23 AM</div>
                <div className="w-[155px] h-[30px] border rounded-md text-secondary border-secondary bg-[#F2F9FF] flex items-center justify-center font-medium">
                  Sedang
                </div>
                <div className="w-[155px] h-[30px] border rounded-md text-secondary border-secondary bg-[#F2F9FF] flex items-center justify-center font-medium">
                  Sudah Diterima
                </div>
              </button>
              <Transition
                show={showDetail}
                enter="transition ease duration-100 transform"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease duration-100 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
              >
                <div className="w-full py-8 px-11 border border-[#E4E4E7] rounded-md text-xs relative">
                  <div className="flex items-start justify-between mb-9 ">
                    <div className="grid grid-cols-3 font-semibold  gap-24 jadwal-expand">
                      <div>
                        <p className="text-[#102A43] font-semibold mb-2">
                          Asal unit/bidang
                        </p>
                        <p className="text-[#627D98] font-medium">
                          Dispatcher WPO Metro
                        </p>
                      </div>
                      <div>
                        <p className="text-[#102A43] font-semibold mb-2">
                          Jenis Gangguan
                        </p>
                        <p className="text-[#627D98] font-medium">
                          Telestatus (invalid)
                        </p>
                      </div>
                      <div>
                        <p className="text-[#102A43] font-semibold mb-2">
                          Prioritas
                        </p>
                        <p className="text-[#627D98] font-medium ">Sedang</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <button>
                        <img src="/icon/archive.svg" alt="" />
                      </button>
                      <button>
                        <img src="/icon/trash.svg" alt="" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-[#102A43] font-semibold mb-2">
                        GITET/GI/GIS Yang Terganggu
                      </p>
                      <p className="text-[#627D98] font-medium">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                    </div>
                    <div>
                      <p className="text-[#102A43] font-semibold mb-2">
                        Penjelasan Singkat Gangguan
                      </p>
                      <p className="text-[#627D98] font-medium">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div>
                      <p className="text-[#102A43] font-semibold mb-2">
                        Bay Yang Terganggu
                      </p>
                      <p className="text-[#627D98] font-medium">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries,
                      </p>
                    </div>
                    <div>
                      <p className="text-[#102A43] font-semibold mb-2">Bukti</p>
                      <div className="flex items-center justify-start gap-5">
                        <div className="aspect-video relative">
                          <img src="bukti.png" alt="" className="w-full" />
                          <div className="flex items-center justify-center w-full h-full bg-[#143847]/50 z-20 absolute top-0">
                            <div className="flex flex-col items-center justify-center gap-7">
                              <div className="flex items-center justify-center flex-col">
                                <p className="text-sm font-semibold text-white">
                                  foto1.jpeg
                                </p>
                                <p className="text-sm font-semibold text-white">
                                  568 KB
                                </p>
                              </div>
                              <img src="/icon/download.svg" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="aspect-video">
                          <img src="bukti.png" alt="" className="w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>

            {/* second div */}
            <div>
              <button
                className="grid grid-cols-6 place-items-center py-5 text-[#627D98] font-medium text-xs w-full"
                // onClick={() => setShowDetail(true)}
                onClick={() => setShowDetail2((showDetail2) => !showDetail2)}
              >
                <div>Wisnu Wicaksono</div>
                <div>wwicaksono96@gmail.com</div>
                <div>24.06.2022</div>
                <div>10:23 AM</div>
                <div className="w-[155px] h-[30px] border rounded-md text-secondary border-secondary bg-[#F2F9FF] flex items-center justify-center font-medium">
                  Sedang
                </div>
                <div className="w-[155px] h-[30px] border rounded-md text-secondary border-secondary bg-[#F2F9FF] flex items-center justify-center font-medium">
                  Sudah Diterima
                </div>
              </button>
              <Transition
                show={showDetail2}
                enter="transition ease duration-100 transform"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease duration-100 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
              >
                <div className="w-full py-8 px-11 border border-[#E4E4E7] rounded-md text-xs relative">
                  <div className="flex items-start justify-between mb-9 ">
                    <div className="grid grid-cols-3 font-semibold  gap-24 jadwal-expand">
                      <div>
                        <p className="text-[#102A43] font-semibold mb-2">
                          Asal unit/bidang
                        </p>
                        <p className="text-[#627D98] font-medium">
                          Dispatcher WPO Metro
                        </p>
                      </div>
                      <div>
                        <p className="text-[#102A43] font-semibold mb-2">
                          Jenis Gangguan
                        </p>
                        <p className="text-[#627D98] font-medium">
                          Telestatus (invalid)
                        </p>
                      </div>
                      <div>
                        <p className="text-[#102A43] font-semibold mb-2">
                          Prioritas
                        </p>
                        <p className="text-[#627D98] font-medium ">Sedang</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <button>
                        <img src="/icon/archive.svg" alt="" />
                      </button>
                      <button>
                        <img src="/icon/trash.svg" alt="" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-[#102A43] font-semibold mb-2">
                        GITET/GI/GIS Yang Terganggu
                      </p>
                      <p className="text-[#627D98] font-medium">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                    </div>
                    <div>
                      <p className="text-[#102A43] font-semibold mb-2">
                        Penjelasan Singkat Gangguan
                      </p>
                      <p className="text-[#627D98] font-medium">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div>
                      <p className="text-[#102A43] font-semibold mb-2">
                        Bay Yang Terganggu
                      </p>
                      <p className="text-[#627D98] font-medium">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries,
                      </p>
                    </div>
                    <div>
                      <p className="text-[#102A43] font-semibold mb-2">Bukti</p>
                      <div className="flex items-center justify-start gap-5">
                        <div className="aspect-video relative">
                          <img src="bukti.png" alt="" className="w-full" />
                          <div className="flex items-center justify-center w-full h-full bg-[#143847]/50 z-20 absolute top-0">
                            <div className="flex flex-col items-center justify-center gap-7">
                              <div className="flex items-center justify-center flex-col">
                                <p className="text-sm font-semibold text-white">
                                  foto1.jpeg
                                </p>
                                <p className="text-sm font-semibold text-white">
                                  568 KB
                                </p>
                              </div>
                              <img src="/icon/download.svg" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="aspect-video">
                          <img src="bukti.png" alt="" className="w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>

            {/* third div */}
            <div>
              <button
                className="grid grid-cols-6 place-items-center py-5 text-[#627D98] font-medium text-xs w-full"
                // onClick={() => setShowDetail(true)}
                onClick={() => setShowDetail3((showDetail3) => !showDetail3)}
              >
                <div>Wisnu Wicaksono</div>
                <div>wwicaksono96@gmail.com</div>
                <div>24.06.2022</div>
                <div>10:23 AM</div>
                <div className="w-[155px] h-[30px] border rounded-md text-secondary border-secondary bg-[#F2F9FF] flex items-center justify-center font-medium">
                  Sedang
                </div>
                <div className="w-[155px] h-[30px] border rounded-md text-secondary border-secondary bg-[#F2F9FF] flex items-center justify-center font-medium">
                  Sudah Diterima
                </div>
              </button>
              <Transition
                show={showDetail3}
                enter="transition ease duration-100 transform"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease duration-100 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
              >
                <div className="w-full py-8 px-11 border border-[#E4E4E7] rounded-md text-xs relative">
                  <div className="flex items-start justify-between mb-9 ">
                    <div className="grid grid-cols-3 font-semibold  gap-24 jadwal-expand">
                      <div>
                        <p className="text-[#102A43] font-semibold mb-2">
                          Asal unit/bidang
                        </p>
                        <p className="text-[#627D98] font-medium">
                          Dispatcher WPO Metro
                        </p>
                      </div>
                      <div>
                        <p className="text-[#102A43] font-semibold mb-2">
                          Jenis Gangguan
                        </p>
                        <p className="text-[#627D98] font-medium">
                          Telestatus (invalid)
                        </p>
                      </div>
                      <div>
                        <p className="text-[#102A43] font-semibold mb-2">
                          Prioritas
                        </p>
                        <p className="text-[#627D98] font-medium ">Sedang</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <button>
                        <img src="/icon/archive.svg" alt="" />
                      </button>
                      <button>
                        <img src="/icon/trash.svg" alt="" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-[#102A43] font-semibold mb-2">
                        GITET/GI/GIS Yang Terganggu
                      </p>
                      <p className="text-[#627D98] font-medium">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                    </div>
                    <div>
                      <p className="text-[#102A43] font-semibold mb-2">
                        Penjelasan Singkat Gangguan
                      </p>
                      <p className="text-[#627D98] font-medium">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div>
                      <p className="text-[#102A43] font-semibold mb-2">
                        Bay Yang Terganggu
                      </p>
                      <p className="text-[#627D98] font-medium">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries,
                      </p>
                    </div>
                    <div>
                      <p className="text-[#102A43] font-semibold mb-2">Bukti</p>
                      <div className="flex items-center justify-start gap-5">
                        <div className="aspect-video relative">
                          <img src="bukti.png" alt="" className="w-full" />
                          <div className="flex items-center justify-center w-full h-full bg-[#143847]/50 z-20 absolute top-0">
                            <div className="flex flex-col items-center justify-center gap-7">
                              <div className="flex items-center justify-center flex-col">
                                <p className="text-sm font-semibold text-white">
                                  foto1.jpeg
                                </p>
                                <p className="text-sm font-semibold text-white">
                                  568 KB
                                </p>
                              </div>
                              <img src="/icon/download.svg" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="aspect-video">
                          <img src="bukti.png" alt="" className="w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
