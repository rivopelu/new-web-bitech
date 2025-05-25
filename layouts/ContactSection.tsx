import { MdEmail, MdPhone, MdPinDrop } from "react-icons/md";
import { Card } from "@nextui-org/card";

import { PageContainer } from "@/components/PageContainer";

export function ContactSection() {
  const dataContact = [
    {
      label: "Telepon / Wa",
      value: "+628 5156 078 801",
      icon: MdPhone,
      url: "tel:+6285156078801",
    },
    {
      label: "email",
      value: "info@bitech.id",
      icon: MdEmail,
      url: "mailto:info@bitech.id",
    },
    {
      label: "Alamat Kantor",
      value: "Girian, Bitung, Sulawesi Utara",
      icon: MdPinDrop,
      url: "https://maps.app.goo.gl/TbgAukbSc8bYy4sKA",
    },
  ];

  return (
    <div
      className={" w-full flex items-center md:justify-center  "}
      id={"contact"}
    >
      <PageContainer>
        <div className={"lg:mb-24 mb-10 w-full  "}>
          <h3 className={"font-semibold text-4xl text-center uppercase"}>
            Hubungi kami
          </h3>
        </div>
        <div className={"grid  w-full h-full gap-10 "}>
          <div className={"flex  flex-col justify-"}>
            <div className={"grid gap-5 lg:grid-cols-3 h-full "}>
              {dataContact.map((item, i) => {
                const Icon = item.icon as any;

                return (
                  <Card
                    key={i}
                    isPressable
                    as={"a"}
                    className={
                      " gap-4 border p-5 hover:bg-primary/10 cursor-pointer hover:border-primary duration-400"
                    }
                    href={item.url}
                    radius={"sm"}
                    shadow={"none"}
                    target={"__blank"}
                  >
                    <div className={"flex  items-center"}>
                      <div className={"flex  gap-3"}>
                        <div>
                          <div
                            className={
                              "border w-12 h-12 flex items-center justify-center rounded-full"
                            }
                          >
                            {Icon({ className: "text-2xl text-slate-600" })}
                          </div>
                        </div>
                        <div>
                          <div
                            className={
                              "text-xl capitalize text-start font-semibold"
                            }
                          >
                            {item.label}
                          </div>
                          <p
                            className={
                              "md:text-sm mt-1 text-start text-slate-500 text-xs"
                            }
                          >
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
          <div className={"bg-slate-100 h-[600px] rounded-md overflow-hidden"}>
            <iframe
              allowFullScreen={true}
              className={"border shadow-lg rounded-md"}
              height={"100%"}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.191867247328!2d125.1324395!3d1.4458888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870130698bf26b%3A0xcaff1a2348b6c051!2sbitech.id%20-%20Solusi%20Teknologi%20Digital!5e0!3m2!1sen!2sid!4v1720105446709!5m2!1sen!2sid"
              title={"maps"}
              width={"100%"}
            />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
