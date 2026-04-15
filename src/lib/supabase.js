import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'sua-url-aqui'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sua-chave-aqui'

export const supabase = createClient(supabaseUrl, supabaseKey)
