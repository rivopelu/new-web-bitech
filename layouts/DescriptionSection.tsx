import { PageContainer } from "@/components/PageContainer";

export function DescriptionSection() {
  return (
    <div className="bg-description lg:py-32 py-10 border-t border-b bg-slate-100/10 bg-no-repeat bg-cover">
      <PageContainer>
        <div className="flex h-full lg:gap-10 gap-4 ">
          <div className="w-10 rounded-full h-[100px] bg-primary " />
          <div className="flex items-center justify-center">
            <div>
              <h2 className="lg:text-5xl text-2xl font-semibold">
                {
                  "Menyiapkan Kesuksesan Bisnis Anda, Kami Menyediakan Solusi Teknologi yang Unggul"
                }
              </h2>
              <p className="pt-4">
                {
                  "Berbasis di Sulawesi Utara, bitech.id menyediakan berbagai layanan pengembangan perangkat lunak yang berfokus pada solusi digital untuk bisnis Anda di Indonesia. Dengan tim yang berpengalaman, kami siap memberikan hasil terbaik untuk kebutuhan Anda. Jika Anda membutuhkan profesional IT atau pengembang ahli yang andal, bitech.id adalah mitra yang tepat. Kami menghadirkan Software Engineer, Desainer UI/UX, Manajer Produk, Data Scientist, serta profesional berkualifikasi tinggi lainnya di berbagai platform terkenal."
                }
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
