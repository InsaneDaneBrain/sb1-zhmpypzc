/**
 * Utility to upload the Block Rewards logo to Supabase storage
 * - Updated to use the exact filename from public directory
 * - Improved error handling and logging
 */
import { imageStorage } from './supabase';

export async function uploadBlockRewardsLogo(): Promise<string | null> {
  try {
    // Fetch the logo file from the public directory using exact filename
    const response = await fetch('/Block Rewards Logo-01.png');
    if (!response.ok) {
      throw new Error(`Failed to fetch logo file: ${response.status} ${response.statusText}`);
    }
    
    const blob = await response.blob();
    const file = new File([blob], 'Block Rewards Logo-01.png', { type: 'image/png' });
    
    console.log('Uploading logo file:', file.name, 'Size:', file.size);
    
    // Upload to Supabase storage with exact filename
    const result = await imageStorage.uploadImage(file, 'Block Rewards Logo-01.png');
    
    if (result) {
      console.log('Logo uploaded successfully:', result.url);
      return result.url;
    } else {
      console.error('Failed to upload logo - no result returned');
      return null;
    }
  } catch (error) {
    console.error('Error uploading logo:', error);
    return null;
  }
}

// Function to manually trigger logo upload (for testing)
export async function triggerLogoUpload(): Promise<void> {
  console.log('Triggering logo upload...');
  const result = await uploadBlockRewardsLogo();
  if (result) {
    console.log('Upload successful, logo available at:', result);
  } else {
    console.log('Upload failed');
  }
}