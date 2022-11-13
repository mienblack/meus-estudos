import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://bukxpizzeyiubtzgodgi.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1a3hwaXp6ZXlpdWJ0emdvZGdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyOTk3OTgsImV4cCI6MTk4Mzg3NTc5OH0.9SkCxtTbHY12Ro1qMrr1ntiexMtANYja39wGO5Ei95Y"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video").select("*")
        }
    }
}