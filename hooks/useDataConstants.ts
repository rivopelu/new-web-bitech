import { ASSETS } from "@/constants/assets";

export function useDataConstants() {
  const menuItems = [
    {
      label: "Beranda",
      path: "/#home",
    },
    {
      label: "Layanan",
      path: "/#service",
    },
    {
      label: "Blogs",
      path: "/blogs",
    },

    {
      label: "Kontak",
      path: "/#contact",
    },
  ];

  const serviceData = [
    {
      title: "Web Development",
      description:
        "Kami menciptakan situs web yang menakjubkan, cepat, dan aman, dirancang untuk mengembangkan bisnis Anda secara online.",
      image: ASSETS.IL_WEB_DEV,
    },
    {
      title: "Mobile App Development",
      description:
        "Kami mengembangkan aplikasi mobile yang inovatif dan ramah pengguna, memastikan kehadiran Anda di iOS dan Android selalu memukau.",

      image: ASSETS.IL_MOBILE_APP,
    },
    {
      title: "UI/UX Design",
      description:
        "Kami merancang pengalaman visual yang memikat dan antarmuka pengguna yang intuitif untuk membuat setiap interaksi lebih bermakna.",

      image: ASSETS.IL_UIUX,
    },
  ];

  const brandList = [
    {
      name: "Maxxi Tani Taknologi",
      image: "/assets/brand/mtt.png",
    },
    {
      name: "Maxxi Agri Indonesia",
      image: "/assets/brand/mai.png",
    },
    {
      name: "FAIR Indonesia",
      image: "/assets/brand/fair.png",
    },
    {
      name: "Ally And Co",
      image: "/assets/brand/anc.png",
    },
    {
      name: "Kawanua Live Count",
      image: "/assets/brand/klc.png",
    },

    {
      name: "News Hive Indonesia",
      image: "/assets/brand/nh.png",
    },
    {
      name: "prisa.id",
      image: "/assets/brand/prisa.png",
    },
    {
      name: "lewatihari.com",
      image: "/assets/brand/lh.png",
    },
  ];

  return {
    menuItems,
    brandList,
    serviceData,
  };
}

export const defaultKeywords = [
  "Pembuatan Software Sulawesi Utara",
  "Pembuatan Website Sulawesi Utara",
  "Jasa Pengembangan Aplikasi Sulawesi Utara",
  "Desain UI/UX Sulawesi Utara",
  "Pengembangan Aplikasi Mobile Sulawesi Utara",
  "Pengembangan Aplikasi Desktop Sulawesi Utara",
  "Penyedia Layanan Digital Sulawesi Utara",
  "Pembuatan Website Murah Sulawesi Utara",
  "Pembuatan Website Profesional Sulawesi Utara",
  "Jasa Pembuatan Software Sulawesi Utara",
  "Pengembangan Website UMKM Sulawesi Utara",
  "Pengembangan Software Kustom Sulawesi Utara",
  "Desain Web Sulawesi Utara",
  "Layanan Hosting Website Sulawesi Utara",
  "Desain Aplikasi Mobile Sulawesi Utara",
  "Konsultasi Teknologi Digital Sulawesi Utara",
  "Solusi Digital Sulawesi Utara",
  "Jasa Pembuatan Aplikasi Sulawesi Utara",
  "Optimasi Website Sulawesi Utara",
  "Pembuatan Situs Bisnis Sulawesi Utara",
  "Pembuatan Software Manado",
  "Pembuatan Website Manado",
  "Jasa Pengembangan Aplikasi Manado",
  "Desain UI/UX Manado",
  "Pengembangan Aplikasi Mobile Manado",
  "Pengembangan Aplikasi Desktop Manado",
  "Pembuatan Website Murah Manado",
  "Pembuatan Website Profesional Manado",
  "Pengembangan Website UMKM Manado",
  "Jasa Pembuatan Software Manado",
  "Pembuatan Software Bitung",
  "Pembuatan Website Bitung",
  "Jasa Pengembangan Aplikasi Bitung",
  "Desain UI/UX Bitung",
  "Pengembangan Aplikasi Mobile Bitung",
  "Pengembangan Aplikasi Desktop Bitung",
  "Pembuatan Website Murah Bitung",
  "Pembuatan Website Profesional Bitung",
  "Pengembangan Website UMKM Bitung",
  "Jasa Pembuatan Software Bitung",
  "Pembuatan Software Tomohon",
  "Pembuatan Website Tomohon",
  "Jasa Pengembangan Aplikasi Tomohon",
  "Desain UI/UX Tomohon",
  "Pengembangan Aplikasi Mobile Tomohon",
  "Pengembangan Aplikasi Desktop Tomohon",
  "Pembuatan Website Murah Tomohon",
  "Pembuatan Website Profesional Tomohon",
  "Pengembangan Website UMKM Tomohon",
  "Jasa Pembuatan Software Tomohon",
  "Pembuatan Software Kotamobagu",
  "Pembuatan Website Kotamobagu",
  "Jasa Pengembangan Aplikasi Kotamobagu",
  "Desain UI/UX Kotamobagu",
  "Pengembangan Aplikasi Mobile Kotamobagu",
  "Pengembangan Aplikasi Desktop Kotamobagu",
  "Pembuatan Website Murah Kotamobagu",
  "Pembuatan Website Profesional Kotamobagu",
  "Pengembangan Website UMKM Kotamobagu",
  "Jasa Pembuatan Software Kotamobagu",
];
