import { ReactNode } from "react";

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
    </div>
  );
}

interface IProps {
  children: ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
}
