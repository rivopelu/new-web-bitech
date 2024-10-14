import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />

      <div>{children}</div>
      <Footer />
    </div>
  );
}
