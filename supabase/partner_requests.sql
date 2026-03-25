-- Partner requests table for "Become a Partner" landing page form
-- Run this in Supabase Dashboard → SQL Editor

CREATE TABLE IF NOT EXISTS public.partner_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  store_name TEXT NOT NULL,
  area TEXT NOT NULL,
  phone TEXT NOT NULL,
  monthly_capacity TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.partner_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form submissions)
CREATE POLICY "Allow public insert" ON public.partner_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (service role) can read
CREATE POLICY "Allow authenticated read" ON public.partner_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Grant anon insert for public form
GRANT INSERT ON public.partner_requests TO anon;

-- Grant authenticated select (for admin/dashboard)
GRANT SELECT ON public.partner_requests TO authenticated;
