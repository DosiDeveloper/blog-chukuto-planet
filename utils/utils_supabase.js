import supabase from "./init_supabase";

export async function getSupabase(target, select) {
    const { error } = await supabase
        .from(target)
        .select(select)

    // This function will get every data from a table on a JSON string
}

export async function postSupabase(target, json) {
    const { error } = await supabase
        .from(target)
        .insert(json)

    // The json could be something like this { id: 1, name: 'Denmark' }
}

export async function updateSupabase(target, json, filter) {
    const { error } = await supabase
        .from(target)
        .update(json)
        .eq(filter)

    //filter always be in this format: field, data (ex. id, "1")
}

export async function upsertSupabase(target, json, select) {
    const { data, error } = await supabase
        .from(target)
        .upsert(json)
        .select(select)
}

export async function deleteSupabase(target, filter) {
    const { error } = await supabase
        .from(target)
        .delete()
        .eq(filter)
}

// docs: https://supabase.com/docs/reference/javascript/select