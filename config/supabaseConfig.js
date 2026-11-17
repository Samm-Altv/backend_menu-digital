const { createClient } = require ("@supabase/supabase-js");
require("dotenv").config();

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;

if (!SUPABASE_URL || SUPABASE_ANON_KEY) {
    throw new Error("Faltan claves de archivo .env")
}

const supabase = createClient (SUPABASE_URL, SUPABASE_ANON_KEY);
module.exports = supabase;