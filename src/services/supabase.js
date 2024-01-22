import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://evumqwzpvvkhqrjltdov.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2dW1xd3pwdnZraHFyamx0ZG92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1MzUxMzAsImV4cCI6MjAyMDExMTEzMH0.2PPHJsDQGitE7MihxvWY67IGdpmHXJGitZUNVNQgeyA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
