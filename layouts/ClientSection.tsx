import Image from "next/image";

import { PageContainer } from "@/components/PageContainer";
import { clientImage } from "@/constants/data-constants";

export function ClientSection() {
  return (
    <PageContainer>
      <div className={"py-44"}>
        <h1 className={"font-semibold text-4xl text-center uppercase"}>
          Telah Berkontribusi dan Dipercaya oleh
        </h1>
        <div className="flex flex-wrap lg:grid grid-cols-4 items-center mt-10 lg:mt-16 justify-center gap-10">
          {clientImage.map((item, i) => (
            <Image
              key={i}
              alt={item}
              className={"w-[100px] lg:w-[200px]"}
              height={300}
              src={item}
              width={300}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
