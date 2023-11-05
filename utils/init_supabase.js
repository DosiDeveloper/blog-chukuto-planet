import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

// NO TOCAR EsTA VAINA O si NO LEs PEGO by douglas
const supabaseUrl = "https://jmietyteyezuzurkaacb.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = {
    instance: createBrowserSupabaseClient(supabaseUrl, supabaseKey, {
        auth: {
            persistSession: true,
        }
    }),
};
Object.freeze(supabase);

export default supabase;

