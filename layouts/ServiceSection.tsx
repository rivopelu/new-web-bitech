import Image from "next/image";

import { PageContainer } from "@/components/PageContainer";
import { serviceList } from "@/constants/data-constants";

export function ServiceSection() {
  return (
    <div className={"bg-primary-800 text-white pb-24  mt-32"}>
      <PageContainer>
        <div className={"gap-16 grid"}>
          <div>
            <h1 className={"text-center font-semibold text-4xl"}>
              LAYANAN KAMI
            </h1>
            <p className={"text-center"}>
              Solusi teknologi terintegrasi untuk mendorong pertumbuhan dan
              inovasi bisnis Anda di era digital.
            </p>
          </div>
          <div className={"grid grid-cols-3 gap-4"}>
            {serviceList.map((item, i) => (
              <div key={i}>
                <div
                  className={
                    "border rounded-lg bg-black/10 flex items-center justify-center p-10 border-slate-300/30"
                  }
                >
                  <Image
                    alt={item.title}
                    className={"h-32 w-auto"}
                    height={400}
                    src={item.image}
                    width={400}
                  />
                </div>
                <div className={"mt-4"}>
                  <h3 className={"font-semibold text-2xl"}>{item.title}</h3>
                  <p className={"text-slate-300 mt-1"}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
