import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://rhwkmamadiyajeyqvutt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJod2ttYW1hZGl5YWpleXF2dXR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIxOTA3ODQsImV4cCI6MTk5Nzc2Njc4NH0.jv9khjoLRMTrWCLVYW2YgAJv0ZI5UUi7zOBb0XfMdFc')


export {
    supabase
}