/*
  # Fix storage migration permissions error
  
  This migration creates a storage bucket for website images with proper permissions.
  Removed operations that require elevated permissions and focused on essential setup.
  
  1. Storage Setup
    - Create website-images bucket if it doesn't exist
    - Set up basic bucket configuration
  
  Note: Storage policies are typically managed through the Supabase dashboard
  or require elevated permissions that may not be available in migrations.
*/

-- Create a bucket for storing website images (only if it doesn't exist)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM storage.buckets WHERE id = 'website-images'
  ) THEN
    INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
    VALUES (
      'website-images',
      'website-images',
      true,
      5242880, -- 5MB limit
      ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
    );
  END IF;
END $$;