import Image from "next/image";
import { Button } from "@nextui-org/button";

import { PageContainer } from "@/components/PageContainer";
import { ASSETS } from "@/constants/assets";

export function HomePage() {
  return (
    <>
      <PageContainer>
        <div
          className={
            "grid grid-cols-2  h-full pt-16  items-center min-h-[65vh] "
          }
        >
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
      </PageContainer>
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
