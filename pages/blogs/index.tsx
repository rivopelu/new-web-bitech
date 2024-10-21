import Link from "next/link";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";

import { PageContainer } from "@/components/PageContainer";
import DefaultLayout from "@/layouts/default";
import { SupabaseService } from "@/service/supabase.service";
import { IResListPost } from "@/model/IResListPost";

export async function getServerSideProps() {
  const supabase = new SupabaseService();
  const data: IResListPost[] = await supabase.getDataPost();

  return {
    props: { data },
  };
}

export default function Index(props: IProps) {
  return (
    <DefaultLayout>
      <div className={"h-20"} />
      <PageContainer>
        <p className={"font-semibold text-center text-xl py-20"}>
          Temukan informasi terbaru seputar teknologi, pengembangan perangkat
          lunak, dan tren digital terkini hanya di Blog Bitech.id. Jelajahi
          artikel yang informatif dan inspiratif untuk membantu Anda memahami
          dunia teknologi yang terus berkembang.
        </p>
      </PageContainer>
      <Divider />

      <PageContainer>
        <div className={"grid gap-5 mt-10"}>
          <div className={"grid lg:grid-cols-3 gap-6"}>
            {props.data.map((item, i) => (
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
                    className={
                      " hover:underline hover:text-primary font-semibold"
                    }
                    href={`/blogs/${item.slug}`}
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </DefaultLayout>
  );
}

interface IProps {
  data: IResListPost[];
}
