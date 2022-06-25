import Link from "next/link";
import Layout from "../components/layouts";
import { Menu, Transition, Dialog, Listbox } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <>
      <Layout className="flex-col gap-14 flex flex-1 overflow-hidden bg-[#f2f2f2]">
        <div className="flex-1 flex gap-5 pb-16 px-14 overflow-y-hidden overflow-x-auto">
          <div className="flex items-center justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            placeat maxime itaque adipisci et eius atque fugit similique. Neque
            temporibus delectus consequuntur quo nulla dolore modi natus ad
            doloribus consequatur ipsum, architecto cupiditate, ab quae
            sapiente! Iure, beatae quis? Nesciunt, temporibus facere! Nostrum
            autem amet, unde vitae recusandae perspiciatis sed, obcaecati
            accusamus ducimus et ratione quasi reprehenderit dolore magni labore
            enim eligendi provident veritatis dolor nesciunt consectetur eos
            laboriosam asperiores. Nulla recusandae eius aliquam repellendus,
            molestiae quas, sed minus omnis sequi possimus optio eveniet veniam
            sint, vero cumque explicabo velit dolor ipsum adipisci blanditiis
            repellat sunt. Minima labore eum consequatur debitis alias numquam
            dignissimos perferendis distinctio perspiciatis nemo quasi eius
            aliquam enim pariatur illum similique, deleniti quos quisquam?
            Veritatis, quasi impedit dolorum eligendi provident sint dicta
            blanditiis eius eaque ad exercitationem aperiam perferendis!
            Temporibus illum molestias illo obcaecati aliquam dignissimos magnam
            modi mollitia enim impedit porro iure, provident quo omnis, eos
            tempore non vero quaerat? Veniam, quis accusantium modi beatae unde
            facere ea? Ex natus, ullam dolorem in officiis reprehenderit quis
            expedita veniam, est mollitia accusamus consequuntur saepe magnam
            ipsam aliquid placeat, sunt et sequi quos quae? Nisi rerum, quod,
            minima a id totam pariatur tempora eum placeat dolorum voluptates
            aspernatur ex rem labore blanditiis adipisci. Sint aspernatur veniam
            minus, magnam consectetur, suscipit quibusdam id molestiae deserunt
            nostrum sed ipsa nesciunt enim. Ipsum repellendus ea laboriosam
            laborum sapiente, rem accusamus numquam tempora ullam! Et, omnis
            odio. Id fugit laborum itaque accusamus officia soluta, vel, aperiam
            illo cupiditate harum perferendis tempora? Aliquam sunt non nesciunt
            cum tenetur consequuntur, magnam laboriosam repellendus eligendi
            quasi maxime, qui facere debitis! Nesciunt rem, autem minus qui iste
            incidunt quo ipsa ad veritatis accusantium voluptatibus similique.
            Ratione officia, est cumque magnam fuga facilis atque, unde nesciunt
            odit, quaerat aliquam incidunt ullam facere! Unde voluptates cumque
            sint.
          </div>
        </div>
      </Layout>
    </>
  );
}
