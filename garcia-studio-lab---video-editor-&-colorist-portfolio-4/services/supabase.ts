
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';
import { PortfolioProject, Testimonial } from '../types';

const SUPABASE_URL = 'https://shsttzmlryexbhpnwhxr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoc3R0em1scnlleGJocG53aHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNzU2ODUsImV4cCI6MjA4Mjk1MTY4NX0.ULoFywlrEM2NPDMJ_yJixHpmY49osO22A5hUfAEENrM';

export const isConfigured = 
  (SUPABASE_URL as string) !== 'https://sua-url-aqui.supabase.co' && 
  (SUPABASE_ANON_KEY as string) !== 'sua-chave-anon-aqui' &&
  SUPABASE_URL.startsWith('http');

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
