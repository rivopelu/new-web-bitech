import { supabase } from "@/lib/supabase";
import { IResListPost } from "@/model/IResListPost";

export class SupabaseService {
  async getDataPost() {
    const res = await supabase
      .from("post")
      .select("id,slug,title,image,created_at");

    return res.data as IResListPost[];
  }
}
