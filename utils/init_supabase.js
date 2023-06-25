import { createClient } from "@supabase/supabase-js";

// NO TOCAR EsTA VAINA O si NO LEs PEGO by douglas
const supabaseUrl = "https://jmietyteyezuzurkaacb.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
