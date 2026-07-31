import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-supabase-url.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ApplicationSubmission {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string;
  program_applied: string;
  high_school_name: string;
  completion_year: string;
  address_city: string;
  created_at?: string;
}

export interface ContactSubmission {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at?: string;
}

export async function submitApplication(data: ApplicationSubmission) {
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { data: result, error } = await supabase.from('applications').insert([data]);
      if (error) throw error;
      return { success: true, data: result };
    }
    // Fallback response for client-side demonstration when API keys are not attached yet
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, data: { ...data, id: 'APP-' + Math.floor(100000 + Math.random() * 900000) } };
  } catch (err: any) {
    console.error('Supabase Application Submission Error:', err);
    return { success: false, error: err.message || 'Submission failed' };
  }
}

export async function submitContactForm(data: ContactSubmission) {
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { data: result, error } = await supabase.from('messages').insert([data]);
      if (error) throw error;
      return { success: true, data: result };
    }
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, data: { ...data, id: 'MSG-' + Math.floor(100000 + Math.random() * 900000) } };
  } catch (err: any) {
    console.error('Supabase Contact Submission Error:', err);
    return { success: false, error: err.message || 'Submission failed' };
  }
}
