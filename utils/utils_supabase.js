import supabase from "./init_supabase";

/**
 *
 * This function will get every data from a table on a JSON string
 * @param {string} target
 * @param {string} select
 * @returns query
 */
export async function getSupabase(target, select) {
  return await supabase.from(target).select(select);
}

/**
 *
 * This function download the post get by its URL
 * @param {string} target
 * @param {String} post_url
 * @returns Blob with post
 */
export async function getPostSupabase(target, post_url) {
  return await supabase.storage.from("blog_storage").download(post_url);

  //
}
