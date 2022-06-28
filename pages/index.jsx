import Link from "next/link";
import Layout from "../components/layouts";
import { Menu, Transition, Dialog, Listbox } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Graph from "./chart";
import HalfDoughnut from "./halfDoughnut";

export default function Home() {
  return (
    <>
      <Layout className="flex-col gap-14 flex flex-1 overflow-hidden bg-[#f2f2f2]">
        <div className="flex-1 flex gap-5 py-16 px-14 overflow-y-hidden overflow-x-auto">
          <HalfDoughnut></HalfDoughnut>
        </div>
      </Layout>
    </>
  );
}
