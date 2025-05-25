import { Button } from "@nextui-org/button";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

import { PageContainer } from "@/components/PageContainer";

export function LatestBlogSection() {
  return (
    <PageContainer>
      <div
        className={
          "flex items-center justify-center py-10 flex-col lg:max-w-2xl gap-4 text-center lg:mx-auto"
        }
      >
        <h1 className={"text-4xl font-semibold"}>Blog Terbaru</h1>
        <p>
          Temukan informasi terbaru seputar teknologi, pengembangan perangkat
          lunak, dan tren digital terkini hanya di Blog Bitech.id. Jelajahi
          artikel yang informatif dan inspiratif untuk membantu Anda memahami
          dunia teknologi yang terus berkembang.
        </p>
      </div>

      <div className={"flex items-center justify-center mt-10"}>
        <Button
          as={Link}
          className={"px-10"}
          color={"primary"}
          endContent={<MdArrowForward />}
          href={"/blogs"}
          variant={"light"}
        >
          Lihat Lainnya
        </Button>
      </div>
    </PageContainer>
  );
}
