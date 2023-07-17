import matter from "gray-matter";
import supabase from "./init_supabase";
// NO TOCAR EsTA VAINA O si NO LEs PEGO by douglas

/**
 * @param {string} post_content
 * @return metadata and content
 */
export function getMetadataPost(post_content) {
  const { data: metadata, content: content } = matter(post_content);
  return { metadata, content };
}

export function getAllHomeWorkOf(name, last_name) {
  const studentName = `${name.split(" ")[0]} ${last_name.split(" ")[0]}`;
  const allWorkFromStorageWithPublicUrl = [];

  supabase.storage
    .from("blog_storage")
    .list(`task_english/${studentName}`)
    .then(({ data: allWorkFromStorage, error }) => {
      if (error) return error;

      allWorkFromStorage.map((items) => {
        const { data: publicURL } = supabase.storage
          .from("blog_storage")
          .getPublicUrl(`task_english/${studentName}/${items.name}`);

        allWorkFromStorageWithPublicUrl.push({
          ...items,
          publicURL: publicURL.publicUrl || "",
        });
      });
    })
    .catch((error) => console.error(error));
  return allWorkFromStorageWithPublicUrl;
}

