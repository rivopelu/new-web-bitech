import DefaultLayout from "@/layouts/default";
import { HomePage } from "@/layouts/HomePage";
import { ServiceSection } from "@/layouts/ServiceSection";
import { ClientSection } from "@/layouts/ClientSection";
import { OverviewSection } from "@/layouts/OverviewSection";
import { DescriptionSection } from "@/layouts/DescriptionSection";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className={"grid gap-32"}>
        <HomePage />
        <OverviewSection />
        <ServiceSection />
        <ClientSection />
        <DescriptionSection />
      </div>
    </DefaultLayout>
  );
}
