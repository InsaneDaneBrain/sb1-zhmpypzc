/**
 * Supabase client configuration and image storage utilities
 * - Setup Supabase client with environment variables
 * - Image upload and retrieval functions
 * - URL generation for stored images
 */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Image storage utilities
export const imageStorage = {
  /**
   * Upload an image to Supabase storage
   */
  async uploadImage(file: File, path?: string): Promise<{ url: string; path: string } | null> {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = path || `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      
      const { data, error } = await supabase.storage
        .from('website-images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error('Upload error:', error);
        return null;
      }

      const url = this.getImageUrl(data.path);
      return { url, path: data.path };
    } catch (error) {
      console.error('Upload failed:', error);
      return null;
    }
  },

  /**
   * Get public URL for an image
   */
  getImageUrl(path: string): string {
    const { data } = supabase.storage
      .from('website-images')
      .getPublicUrl(path);
    
    return data.publicUrl;
  },

  /**
   * Delete an image from storage
   */
  async deleteImage(path: string): Promise<boolean> {
    try {
      const { error } = await supabase.storage
        .from('website-images')
        .remove([path]);

      if (error) {
        console.error('Delete error:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Delete failed:', error);
      return false;
    }
  },

  /**
   * List all images in storage
   */
  async listImages(): Promise<string[]> {
    try {
      const { data, error } = await supabase.storage
        .from('website-images')
        .list();

      if (error) {
        console.error('List error:', error);
        return [];
      }

      return data.map(file => file.name);
    } catch (error) {
      console.error('List failed:', error);
      return [];
    }
  }
};