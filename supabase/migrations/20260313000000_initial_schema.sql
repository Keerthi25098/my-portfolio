-- Keerthika KT Portfolio & Admin CMS Database Schema
-- Supabase PostgreSQL Migration Script

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Site Settings Table
CREATE TABLE IF NOT EXISTS public.site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL DEFAULT 'Keerthika KT',
  role_title TEXT NOT NULL DEFAULT 'Junior Software Developer / Frontend Developer',
  location TEXT NOT NULL DEFAULT 'Coimbatore, Tamil Nadu, India',
  email TEXT NOT NULL DEFAULT 'keerthikeerthi32155@gmail.com',
  github_url TEXT DEFAULT 'https://github.com/Keerthi25098',
  linkedin_url TEXT DEFAULT 'https://linkedin.com/in/keerthika25',
  resume_url TEXT DEFAULT '/resumee-keerthika.pdf',
  availability_status TEXT DEFAULT 'Open to Opportunities',
  availability_badge_visible BOOLEAN DEFAULT TRUE,
  meta_title TEXT DEFAULT 'Keerthika KT — Frontend Developer Portfolio',
  meta_description TEXT DEFAULT 'Portfolio & Projects of Keerthika KT, Frontend Developer in Coimbatore specializing in React.js, JavaScript, and Web Development.',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Hero Content Table
CREATE TABLE IF NOT EXISTS public.hero_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  greeting TEXT DEFAULT 'Hello, I''m',
  headline TEXT DEFAULT 'Keerthika KT',
  tagline TEXT DEFAULT 'Building Thoughtful & Engaging Digital Experiences',
  roles TEXT[] DEFAULT ARRAY['Frontend Developer', 'React Developer', 'Junior Software Developer'],
  bio TEXT DEFAULT 'I am a passionate frontend developer dedicated to crafting clean, responsive, and intuitive web applications with modern technologies.',
  cta_primary_label TEXT DEFAULT 'View My Work',
  cta_primary_link TEXT DEFAULT '#projects',
  cta_secondary_label TEXT DEFAULT 'Let''s Talk',
  cta_secondary_link TEXT DEFAULT '#contact',
  profile_image_url TEXT DEFAULT '/assets/profile.png',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. About Content Table
CREATE TABLE IF NOT EXISTS public.about_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  heading TEXT DEFAULT 'I Create Products, Not Just Interfaces.',
  subheading TEXT DEFAULT 'A quick introduction about who I am, my philosophy, and my journey.',
  bio_paragraph_1 TEXT DEFAULT 'I am Keerthika KT, a React.js Frontend Developer passionate about building clean, performant, and responsive web applications. I enjoy converting creative ideas into real working products.',
  bio_paragraph_2 TEXT DEFAULT 'My focus centers on high usability, pixel-perfect layouts, fast load times, and seamless interactive experiences. I pay strict attention to design details and intuitive navigation.',
  bio_paragraph_3 TEXT DEFAULT 'From working on client landing pages at Cloudi5 Technologies to building web applications during internships, I continuously expand my skill set across React, PHP, Laravel, MySQL, and modern tooling.',
  years_experience_label TEXT DEFAULT '1+ Years Experience',
  projects_completed_label TEXT DEFAULT '10+ Featured Projects',
  internships_completed_label TEXT DEFAULT '3+ Industry Internships',
  profile_image_url TEXT DEFAULT '/assets/profile.png',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  number_label TEXT,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  technologies TEXT[] DEFAULT '{}',
  image_url TEXT NOT NULL,
  live_url TEXT,
  github_url TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  is_published BOOLEAN DEFAULT TRUE,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Experience Table
CREATE TABLE IF NOT EXISTS public.experience (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  number_label TEXT,
  year_label TEXT NOT NULL,
  company TEXT NOT NULL,
  role_title TEXT NOT NULL,
  employment_type TEXT DEFAULT 'Full-time / Internship',
  start_date TEXT,
  end_date TEXT,
  is_current BOOLEAN DEFAULT FALSE,
  description TEXT NOT NULL,
  responsibilities TEXT[] DEFAULT '{}',
  technologies TEXT[] DEFAULT '{}',
  image_url TEXT,
  certificate_url TEXT,
  is_published BOOLEAN DEFAULT TRUE,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Skills Table
CREATE TABLE IF NOT EXISTS public.skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  logo_url TEXT NOT NULL,
  description TEXT NOT NULL,
  proficiency_label TEXT DEFAULT 'Proficient',
  display_order INT DEFAULT 0,
  is_visible BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Education Table
CREATE TABLE IF NOT EXISTS public.education (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  institution TEXT NOT NULL,
  qualification TEXT NOT NULL,
  field_of_study TEXT NOT NULL,
  start_year TEXT NOT NULL,
  end_year TEXT NOT NULL,
  grade_or_cgpa TEXT,
  description TEXT,
  institution_logo_url TEXT,
  display_order INT DEFAULT 0,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Services Table
CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT DEFAULT 'Code',
  display_order INT DEFAULT 0,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. Testimonials Table
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_name TEXT NOT NULL,
  client_role TEXT NOT NULL,
  organization TEXT,
  feedback TEXT NOT NULL,
  avatar_url TEXT,
  rating INT DEFAULT 5,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. Enquiries Table
CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new', -- 'new', 'read', 'replied', 'archived'
  email_notification_status TEXT DEFAULT 'pending', -- 'pending', 'sent', 'failed'
  email_notification_error TEXT,
  read_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS) Policies
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hero_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.about_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.education ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Anonymous users (Public landing page) can SELECT published content
CREATE POLICY "Public Read Site Settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Public Read Hero" ON public.hero_content FOR SELECT USING (true);
CREATE POLICY "Public Read About" ON public.about_content FOR SELECT USING (true);
CREATE POLICY "Public Read Projects" ON public.projects FOR SELECT USING (is_published = true);
CREATE POLICY "Public Read Experience" ON public.experience FOR SELECT USING (is_published = true);
CREATE POLICY "Public Read Skills" ON public.skills FOR SELECT USING (is_visible = true);
CREATE POLICY "Public Read Education" ON public.education FOR SELECT USING (is_published = true);
CREATE POLICY "Public Read Services" ON public.services FOR SELECT USING (is_published = true);
CREATE POLICY "Public Read Testimonials" ON public.testimonials FOR SELECT USING (is_published = true);

-- Public visitors can submit enquiries
CREATE POLICY "Public Insert Enquiry" ON public.enquiries FOR INSERT WITH CHECK (true);

-- Authenticated Admin can perform FULL CRUD on ALL tables including Enquiries
CREATE POLICY "Admin Full Access Settings" ON public.site_settings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Hero" ON public.hero_content FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access About" ON public.about_content FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Projects" ON public.projects FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Experience" ON public.experience FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Skills" ON public.skills FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Education" ON public.education FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Services" ON public.services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Testimonials" ON public.testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Enquiries" ON public.enquiries FOR ALL USING (auth.role() = 'authenticated');
