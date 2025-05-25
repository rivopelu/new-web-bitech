import { ReactNode } from "react";
import { Button } from "@nextui-org/button";
import { MdWhatsapp } from "react-icons/md";

import { Head } from "./head";

import { MainNavbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";

export default function DefaultLayout(props: IProps) {
  return (
    <div className="relative flex flex-col h-screen max-w-screen overflow-x-hidden">
      <Head
        description={props.description}
        ogImage={props.ogImage}
        title={props.title}
      />
      <MainNavbar />

      <div>{props.children}</div>
      <Footer />
      <div className="fixed z-[999] lg:bottom-10 lg:right-10 bottom-3 right-3">
        <Button
          isIconOnly
          as={"a"}
          color="success"
          href="https://wa.me/6285156078801"
          radius="full"
          size="lg"
          target="__blank"
        >
          {MdWhatsapp({ className: "text-white text-3xl" })}
        </Button>
      </div>
    </div>
  );
}

interface IProps {
  children: ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
}
