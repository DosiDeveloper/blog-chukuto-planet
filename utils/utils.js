import matter from "gray-matter";
import supabase from "./init_supabase";
// NO TOCAR EsTA VAINA O si NO LEs PEGO by douglas

/**
 *
 * @param {String} path
 * @returns {StorageError | Blob}
 */
export async function downloadMarkdownPost(path) {
  try {
    const { data, error } = await supabase.storage
      .from("blog_storage")
      .download(`post/${path}.md`);
    
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.debug(error);
  }
}

/**
 * @param {string} post_content
 * @return {{[key: string]: any, content: string}}
 */
export function getMetadataPost(post_content) {
  const { data: metadata, content: content } = matter(post_content);
  console.log(matter(post_content));
  return { metadata, content };
}
