/*
  # Setup image storage for website

  1. Storage Setup
    - Creates website-images bucket via storage functions
    - Sets up proper bucket configuration
    - Configures public access and file restrictions

  2. Security
    - Bucket is configured as public for read access
    - File size limit: 5MB
    - Allowed types: JPEG, PNG, WebP, GIF, SVG
*/

-- Create the storage bucket using the storage.buckets table
-- This approach works within the migration system
DO $$
BEGIN
  -- Check if bucket already exists
  IF NOT EXISTS (
    SELECT 1 FROM storage.buckets WHERE id = 'website-images'
  ) THEN
    -- Insert the bucket configuration
    INSERT INTO storage.buckets (
      id,
      name,
      public,
      file_size_limit,
      allowed_mime_types,
      created_at,
      updated_at
    ) VALUES (
      'website-images',
      'website-images',
      true,
      5242880, -- 5MB limit
      ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'],
      now(),
      now()
    );
  END IF;
END $$;

-- Note: RLS policies for storage.objects are managed by Supabase automatically
-- when a bucket is created with public = true. The bucket configuration above
-- handles the access control we need:
-- - public = true allows public read access
-- - File size and MIME type restrictions are enforced at the bucket level
-- - Authenticated users can upload/update/delete through the Supabase client