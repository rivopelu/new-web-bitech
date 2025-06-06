import { Button } from "@nextui-org/button";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export function SosmedSection({ className }: { className: string }) {
  return (
    <div className={className}>
      <Button
        isIconOnly
        as={"a"}
        className={
          "text-2xl w-10 h-10  rounded-full  flex items-center justify-center"
        }
        href="https://www.facebook.com/profile.php?id=61561685212107"
        target="__blank"
        variant="light"
      >
        <div>{FaFacebook({ className: "text-slate-600" })}</div>
      </Button>
      <Button
        isIconOnly
        as={"a"}
        className={
          "text-2xl w-10 h-10  rounded-full  flex items-center justify-center"
        }
        href="https://www.instagram.com/bitech.id_/"
        target="__blank"
        variant="light"
      >
        <div>{FaInstagram({ className: "text-slate-600" })}</div>
      </Button>
      <Button
        isIconOnly
        as={"a"}
        className={
          "text-2xl w-10 h-10  rounded-full  flex items-center justify-center"
        }
        href="https://www.tiktok.com/@bitech.id_"
        target="__blank"
        variant="light"
      >
        <div>{FaTiktok({ className: "text-slate-600" })}</div>
      </Button>
    </div>
  );
}
