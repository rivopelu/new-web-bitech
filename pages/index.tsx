import DefaultLayout from "@/layouts/default";
import { HomePage } from "@/layouts/HomePage";
import { ServiceSection } from "@/layouts/ServiceSection";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HomePage />
      <ServiceSection />
    </DefaultLayout>
  );
}
