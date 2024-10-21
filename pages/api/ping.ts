import type { NextApiRequest, NextApiResponse } from "next";

import { supabase } from "@/lib/supabase";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method === "GET") {
    await supabase
      .from("users")
      .insert({
        name: "rivopelu",
        username: "rivopelu",
        password: "rivopelu123",
      })
      .then((data) => {
        console.log(data);
        res.status(200).json({ message: "success" });
      });
  }
}
