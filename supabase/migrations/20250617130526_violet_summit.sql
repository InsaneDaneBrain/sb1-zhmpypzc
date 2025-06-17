/*
  # Setup Image Storage

  1. Storage
    - Create a public bucket for website images
    - Set up RLS policies for public read access
    - Allow authenticated users to upload images

  2. Security
    - Enable RLS on storage objects
    - Create policies for public read and authenticated upload
*/

-- Create a bucket for storing website images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'website-images',
  'website-images',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
);

-- Enable RLS on storage.objects
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Policy to allow public read access to images
CREATE POLICY "Public read access for website images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'website-images');

-- Policy to allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'website-images');

-- Policy to allow authenticated users to update their own uploads
CREATE POLICY "Authenticated users can update images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'website-images');

-- Policy to allow authenticated users to delete images
CREATE POLICY "Authenticated users can delete images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'website-images');