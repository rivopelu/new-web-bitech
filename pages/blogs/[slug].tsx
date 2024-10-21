import { Divider } from "@nextui-org/divider";
import Image from "next/image";

import DefaultLayout from "@/layouts/default";
import { PageContainer } from "@/components/PageContainer";
import { SupabaseService } from "@/service/supabase.service";
import { IResDetailPost } from "@/model/IResListPost";
import { TypeServerSideProps } from "@/model/TypeServersideProps";

export async function getServerSideProps(ctx: TypeServerSideProps) {
  const { slug } = ctx.query;

  const supabase = new SupabaseService();

  const data: IResDetailPost | null = await supabase.getPostBySlug(
    slug as string,
  );

  return {
    props: { data },
  };
}

export default function DetailPost(props: IProps) {
  return (
    <DefaultLayout>
      <div className={"h-20"} />
      <PageContainer>
        <div className={"py-20 grid gap-10"}>
          <h1 className={"text-3xl font-semibold text-center"}>
            {props?.data?.title || "-"}
          </h1>
          <div className={"flex items-center justify-center"}>
            <Image
              alt={props?.data?.title || "-"}
              className="w-[75%] bg-slate-300   duration-400 rounded-sm cursor-pointer aspect-video  object-cover"
              height={500}
              src={props?.data?.image}
              width={500}
            />
          </div>
        </div>
      </PageContainer>

      <Divider />
      <div className={"h-20"} />

      <PageContainer>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.body || "-" }}
          className={"article__"}
        />
      </PageContainer>
    </DefaultLayout>
  );
}

interface IProps {
  data: IResDetailPost;
}
