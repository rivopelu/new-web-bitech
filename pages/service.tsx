import { Divider } from "@nextui-org/divider";
import Image from "next/image";

import DefaultLayout from "@/layouts/default";
import { PageContainer } from "@/components/PageContainer";
import { serviceList } from "@/constants/data-constants";

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
        <PageContainer>
          <div className={`flex flex-col lg:gap-32 gap-4`}>
            {serviceList.map((item, i) => (
              <div key={i}>
                <div
                  className={`lg:flex ${i % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 `}
                >
                  <Image
                    alt={"web development"}
                    className={"lg:w-1/2 w-full border bg-white rounded-md"}
                    height={900}
                    src={item.imageFull}
                    width={900}
                  />
                  <div
                    className={
                      "flex lg:w-1/2 flex-col lg:gap-4 gap-1 mt-3 lg:mt-0 justify-center"
                    }
                  >
                    <h3 className={"font-semibold lg:text-7xl"}>
                      {item.title}
                    </h3>

                    <p className={"lg:text-3xl text-slate-500"}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </div>
    </DefaultLayout>
  );
}
