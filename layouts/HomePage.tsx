import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import { PageContainer } from "@/components/PageContainer";
import { ASSETS } from "@/constants/assets";

export function HomePage() {
  return (
    <>
      <PageContainer>
        <div
          className={
            "grid lg:grid-cols-2 gap-4 lg:gap-0 mt-24 lg:mt-0  h-full lg:pt-16 pt-10 text-center lg:text-start  items-center min-h-[65vh] "
          }
        >
          <div className={"grid  lg:gap-8 gap-3 mt-12 lg:mt-24"}>
            <div>
              <h1 className={" text-2xl"}>Selamat Datang di Bitech.id</h1>
              <h3 className={"lg:text-6xl text-4xl font-bold text-primary"}>
                Inovasi Teknologi untuk Bisnis Anda
              </h3>
            </div>
            <p className={"text-sm lg:text-base"}>
              Kami menyediakan solusi teknologi terdepan untuk mendukung
              pertumbuhan bisnis di era digital. Dari pengembangan perangkat
              lunak hingga layanan cloud, Bitech.id menghadirkan teknologi yang
              aman, efisien, dan sesuai kebutuhan Anda.
            </p>
            <div>
              <Button
                as={Link}
                className={"lg:w-fit w-full"}
                color={"primary"}
                href="https://wa.me/6285156078801"
                radius={"sm"}
                target={"_blank"}
              >
                Konsultasi Gratis
              </Button>
            </div>
          </div>
          <div
            className={
              "lg:pl-32 mt-16 flex  items-center justify-center  h-full"
            }
          >
            <Image
              alt={"software development"}
              className={"w-full hidden lg:block"}
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
