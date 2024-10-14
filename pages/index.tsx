import { Divider } from "@nextui-org/divider";

import DefaultLayout from "@/layouts/default";
import { HomePage } from "@/layouts/HomePage";
import { ServiceSection } from "@/layouts/ServiceSection";
import { ClientSection } from "@/layouts/ClientSection";
import { OverviewSection } from "@/layouts/OverviewSection";
import { DescriptionSection } from "@/layouts/DescriptionSection";
import { TechSection } from "@/layouts/TechSection";
import { ContactSection } from "@/layouts/ContactSection";

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
