import { supabase } from "@/lib/supabase";
import { IResListPost } from "@/model/IResListPost";

export class SupabaseService {
  async getDataPost() {
    const res = await supabase
      .from("post")
      .select("id,slug,title,image,created_at")
      .order("created_at", { ascending: false }); // Sort by 'created_at' in descending order

    return res.data as IResListPost[];
  }

  async getPaginatedPosts(page: number, size: number) {
    try {
      const start = page * size;
      const end = start + size - 1;

      const { data, error } = await supabase
        .from("post") // Specify your table name
        .select("*") // Select the columns you need
        .order("created_at", { ascending: false }) // Sort by 'created_at' in descending order
        .range(start, end); // Set the range for pagination

      if (error) {
        throw error; // Handle any error
      }

      return data; // Return the paginated data
    } catch (error) {
      console.error("Error fetching paginated posts:", error);

      return null; // Handle the error as needed
    }
  }

  async getPostBySlug(slug: string): Promise<any> {
    try {
      const { data, error } = await supabase
        .from("post") // The name of your table
        .select("*") // Or specify the exact columns you want to retrieve
        .eq("slug", slug); // Filter the rows where slug matches

      if (error) {
        throw error; // Handle any error
      }

      return data[0]; // Return the found data
    } catch (error) {
      return null; // Or handle the error as needed
    }
  }
}
