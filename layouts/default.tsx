import { Head } from "./head";

import { MainNavbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen max-w-screen overflow-x-hidden">
      <Head />
      <MainNavbar />

      <div>{children}</div>
      <Footer />
    </div>
  );
}
