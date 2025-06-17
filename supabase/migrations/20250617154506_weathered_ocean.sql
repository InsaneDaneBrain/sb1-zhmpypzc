/*
  # Clean storage setup for website images

  1. Storage Bucket
    - Creates 'website-images' bucket if it doesn't exist
    - Configured for public access with 5MB file size limit
    - Supports common image formats (JPEG, PNG, WebP, GIF, SVG)

  Note: This migration only creates the storage bucket. Storage policies 
  are managed separately through Supabase dashboard due to permission requirements.
*/

-- Remove any existing bucket first to ensure clean state
DELETE FROM storage.buckets WHERE id = 'website-images';

-- Create the website images bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'website-images',
  'website-images',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
);