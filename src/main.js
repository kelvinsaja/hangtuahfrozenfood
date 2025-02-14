import { createClient } from "@supabase/supabase-js";


const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


async function getProducts() {
  let { data, error } = await supabase.from("Produk").select("*");
  if (error) console.error(error);
  else console.log(data);
}

getProducts();
