import { Link } from "@nextui-org/link";

import { PageContainer } from "@/components/PageContainer";
import { ASSETS } from "@/constants/assets";
import { useDataConstants } from "@/hooks/useDataConstants";
import { SosmedSection } from "@/components/SosmedSection";

export function Footer() {
  const data = useDataConstants();

  return (
    <footer className={"border-t py-20 mt-20 "}>
      <PageContainer>
        <div
          className={
            "flex  md:flex-row flex-col md:items-start items-center  justify-between"
          }
        >
          <div className={"mb-4"}>
            <img
              alt="raron sinar cemerlang"
              className="h-[42px]"
              src={ASSETS.LOGO}
            />
          </div>
          <div className={"grid gap-4"}>
            <div>
              <ul
                className={
                  "flex items-center flex-wrap px-10 lg:px-0 justify-center lg:justify-end md:justify-end gap-3"
                }
              >
                {data.menuItems.map((item, i) => (
                  <li key={i} className={"capitalize"}>
                    <Link color={"foreground"} href={item.path}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <SosmedSection className="flex gap-2 items-center justify-center md:justify-end" />
            <p
              className={
                "md:ext-end text-center w-full  lg:text-end text-xs text-slate-500"
              }
            >
              © {new Date().getFullYear()} - PT BITUNG TEKNOLOGI DIGITAL
            </p>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
