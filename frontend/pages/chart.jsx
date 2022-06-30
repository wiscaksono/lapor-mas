import Layout from "../components/layouts";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export default function Graph() {
  const canvasEl = useRef(null);
  const colors = {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)",
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)",
    },
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.65, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

    const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];
    const labels = [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: "My First Dataset",
          data: weight,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
          pointRadius: 3,
        },
      ],
    };

    const config = {
      type: "bar",
      data: data,
      options: {
        responsive: true,
        // maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
      },
    };

    const myLineChart = new Chart(ctx, config);
    return function cleanup() {
      myLineChart.destroy();
    };
  });
  return (
    <Layout className="flex-col gap-14 flex flex-1 overflow-hidden bg-[#f2f2f2]">
      <div className="flex-1 flex gap-5 py-16 px-14 overflow-y-hidden overflow-x-auto">
        <div className="grid grid-rows-3 gap-5 overflow-auto">
          <div className="grid grid-cols-12 gap-5 row-span-2">
            <div className=" bg-white p-10 rounded-lg border border-[#E4E4E7] col-span-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h6 className="font-semibold text-xl text-[#365C7F]">Status</h6>
                <input type="date" />
              </div>
            </div>
            <div className=" bg-white p-10 rounded-lg border border-[#E4E4E7] col-span-8 flex flex-col justify-between">
              <h6 className="font-semibold text-xl text-[#365C7F]">Bucket</h6>
              <canvas id="myChart" ref={canvasEl} height="100%" />
            </div>
          </div>

          <div className="bg-white p-10 rounded-lg border border-[#E4E4E7] flex flex-col justify-between">
            <h6 className="font-semibold text-xl text-[#365C7F]">Chart</h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nisi
            maiores nam quod ipsam hic voluptatem itaque laborum nulla quasi
            nostrum esse nobis fugiat ea consectetur blanditiis qui, repudiandae
            officia ab! Placeat odio quisquam laborum enim inventore
            perspiciatis numquam fuga quam, magnam, error neque possimus
            laudantium velit eaque repellat vero unde maiores alias cumque, cum
            excepturi temporibus rem minima voluptatem. Aliquam soluta, maiores
            delectus consequuntur quis enim praesentium, dolore quisquam sunt,
            est ducimus velit dolorum eius ipsa ipsum fuga temporibus error
            numquam doloremque commodi blanditiis suscipit ullam! Molestias,
            nisi, quis, cumque autem sed minima commodi quibusdam aliquid
            exercitationem deserunt alias?
          </div>
        </div>
      </div>
    </Layout>
  );
}
