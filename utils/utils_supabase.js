import supabase from "./init_supabase";
// NO TOCAR EsTA VAINA O si NO LEs PEGO by douglas

/**
 *
 * This function will get every data from a table on a JSON string
 * @param {string} target
 * @param {string} select
 * @returns query
 */
export async function getSupabase(target, select) {
  try {
    return await supabase.from(target).select(select);
  } catch (error) {
    return error;
  }
}

/**
 * this function get a single post by its title
 * @param {string} id title
 * @returns post
 */
export async function getPostByIDSupabase(
  id,
  select = `*, users!posts_owner_id_fkey( * ), category!posts_category_id_fkey(*)`
) {
  try {
    return await supabase
      .from("posts")
      .select(select)
      .eq("id", id)
      .single();
  } catch (error) {
    return error;
  }
}

/**
 *
 * This function download the post get by post url
 * @param {String} post_url
 * @returns Blob with post
 */
export async function getPostSupabase(post_url) {
  try {
    return await supabase.storage.from("blog_storage").download(post_url);
  } catch (error) {
    return error;
  }
}
