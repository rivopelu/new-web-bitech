import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { MdCheckCircle } from "react-icons/md";

import { ASSETS } from "@/constants/assets";
import { dataListOverview } from "@/constants/data-constants";
import { PageContainer } from "@/components/PageContainer";

export function OverviewSection() {
  return (
    <PageContainer>
      <div className={"grid grid-cols-2 "}>
        <div className={"mr-24"}>
          <Image
            alt={"software development"}
            className={"w-full"}
            height={500}
            src={ASSETS.OVERVIEW_IMAGE}
            width={500}
          />
        </div>
        <div className={"grid gap-4"}>
          <div>
            <h2 className={" font-semibold text-2xl  mx-auto "}>
              Tingkatkan Potensi Bisnis Anda di Era Digital
            </h2>
            <p className={"mt-2 text-slate-700"}>
              Bitech.id membantu bisnis Anda beradaptasi dan tumbuh dengan
              solusi teknologi yang inovatif dan disesuaikan. Kami menawarkan
              layanan yang dirancang untuk meningkatkan efisiensi, mempercepat
              pertumbuhan, dan memperkuat daya saing di pasar digital.
            </p>
          </div>
          <Divider />
          <div>
            <h3 className={"text-2xl font-semibold"}>
              Mengapa Memilih Bitech.id?
            </h3>
            <ul className={"gap-4 grid mt-5"}>
              {dataListOverview.map((item, i) => (
                <li key={i} className={"flex gap-2"}>
                  <div className={""}>
                    <MdCheckCircle className={"text-green-500 text-2xl"} />
                  </div>
                  <p>
                    <strong>{item[0]}</strong>
                    {item[1]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
