import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { MdArrowForward } from "react-icons/md";

import { PageContainer } from "@/components/PageContainer";
import { SupabaseService } from "@/service/supabase.service";
import { IResListPost } from "@/model/IResListPost";

export function LatestBlogSection() {
  const supabase = new SupabaseService();
  const [data, setData] = useState<IResListPost[]>([]);

  useEffect(() => {
    supabase.getPaginatedPosts(0, 3).then((res) => {
      setData(res as IResListPost[]);
    });
  }, []);

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
      <div className={"grid lg:grid-cols-3 gap-8"}>
        {data.map((item, i) => (
          <div key={i} className={"w-full"}>
            <Link href={`/blogs/${item.slug}`}>
              <Image
                alt={item.title}
                className="w-full bg-slate-300   hover:scale-105 duration-400 rounded-sm cursor-pointer aspect-video  object-cover"
                height={500}
                src={item.image}
                width={500}
              />
            </Link>
            <div className={"mt-4"}>
              <Link
                className={" hover:underline hover:text-primary font-semibold"}
                href={`/blogs/${item.slug}`}
              >
                {item.title}
              </Link>
            </div>
          </div>
        ))}
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
