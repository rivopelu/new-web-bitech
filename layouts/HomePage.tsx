import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { MdCheckCircle } from "react-icons/md";

import { PageContainer } from "@/components/PageContainer";
import { ASSETS } from "@/constants/assets";
import { dataListOverview } from "@/constants/data-constants";

export function HomePage() {
  return (
    <>
      <PageContainer>
        <div className={"grid grid-cols-2  h-full  items-center min-h-[65vh] "}>
          <div className={"grid  gap-8 mt-24"}>
            <div>
              <h1 className={" text-2xl"}>Selamat Datang di Bitech.id</h1>
              <h3 className={"text-6xl font-bold text-primary"}>
                Inovasi Teknologi untuk Bisnis Anda
              </h3>
            </div>
            <p>
              Kami menyediakan solusi teknologi terdepan untuk mendukung
              pertumbuhan bisnis di era digital. Dari pengembangan perangkat
              lunak hingga layanan cloud, Bitech.id menghadirkan teknologi yang
              aman, efisien, dan sesuai kebutuhan Anda.
            </p>
            <div>
              <Button color={"primary"} radius={"sm"}>
                Hubungi Kami
              </Button>
            </div>
          </div>
          <div className={"pl-32 flex items-center justify-center  h-full"}>
            <Image
              alt={"software development"}
              className={"w-full"}
              height={500}
              src={ASSETS.IL_SOFTWARE}
              width={500}
            />
          </div>
        </div>
        <div className={"grid grid-cols-2 mt-32"}>
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
      <div className={"mt-20"} />
      <Image
        alt=""
        className="absolute top-0 left-0  opacity-10 h-[75%] pointer-events-none w-auto"
        draggable={false}
        height={1000}
        src={ASSETS.HOME_ORNAMENT}
        width={1000}
      />
    </>
  );
}
