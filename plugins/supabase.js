import { createClient } from '@supabase/supabase-js'
//creating plugin to use supabase globally within project 
export default ({ app }, inject) => {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

  inject('supabase', supabase)
}
