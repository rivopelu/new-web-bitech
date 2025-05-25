import { Divider } from "@nextui-org/divider";

import { ClientSection } from "@/layouts/ClientSection";
import { ContactSection } from "@/layouts/ContactSection";
import DefaultLayout from "@/layouts/default";
import { DescriptionSection } from "@/layouts/DescriptionSection";
import { HomePage } from "@/layouts/HomePage";
import { OverviewSection } from "@/layouts/OverviewSection";
import { ServiceSection } from "@/layouts/ServiceSection";
import { TechSection } from "@/layouts/TechSection";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className={"grid gap-32"}>
        <HomePage />
        <OverviewSection />
        <ServiceSection />
        <ClientSection />
        <DescriptionSection />
        <TechSection />
        <Divider />
        <ContactSection />
      </div>
    </DefaultLayout>
  );
}
