import { Divider } from "@nextui-org/divider";
import Image from "next/image";

import DefaultLayout from "@/layouts/default";
import { PageContainer } from "@/components/PageContainer";
import { ASSETS } from "@/constants/assets";

export default function Service() {
  return (
    <DefaultLayout>
      <div className={"my-20"}>
        <PageContainer>
          <div
            className={
              "flex items-center justify-center py-10 flex-col lg:max-w-xl gap-4 text-center lg:mx-auto"
            }
          >
            <h1 className={"text-4xl font-semibold"}>Layanan Kami</h1>
            <p>
              Di Bitech.id, kami berkomitmen untuk membantu bisnis berkembang
              dengan solusi digital yang inovatif dan efisien. Kami menyediakan
              berbagai layanan teknologi yang dirancang untuk memenuhi kebutuhan
              bisnis modern Anda.
            </p>
          </div>
        </PageContainer>
        <Divider />
      </div>

      <div>
        <div className={"grid gap-2 grid-cols-2"}>
          <Image
            alt={"web development"}
            className={"w-[300px]"}
            height={900}
            src={ASSETS.IMG_WEB_DEV}
            width={900}
          />
          <h3 className={"font-semibold text-3xl"}>Web Development</h3>
        </div>
      </div>
    </DefaultLayout>
  );
}
