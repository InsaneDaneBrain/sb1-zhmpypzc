/**
 * Logo uploader component for admin use
 * - Allows uploading new logo to replace the current one
 * - Shows current logo and upload interface
 * - Handles logo replacement in Supabase storage
 */
import React, { useState } from 'react';
import { Upload, Check, AlertCircle } from 'lucide-react';
import ImageUpload from './ImageUpload';
import Button from './Button';

interface LogoUploaderProps {
  onLogoUpdated?: (url: string) => void;
  className?: string;
}

const LogoUploader: React.FC<LogoUploaderProps> = ({
  onLogoUpdated,
  className = ''
}) => {
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [uploadMessage, setUploadMessage] = useState<string>('');

  const handleImageUploaded = (url: string, path: string) => {
    setUploadStatus('success');
    setUploadMessage('Logo uploaded successfully!');
    onLogoUpdated?.(url);
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setUploadStatus('idle');
      setUploadMessage('');
    }, 3000);
  };

  const handleError = (error: string) => {
    setUploadStatus('error');
    setUploadMessage(error);
    
    // Clear error message after 5 seconds
    setTimeout(() => {
      setUploadStatus('idle');
      setUploadMessage('');
    }, 5000);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="text-center">
        <h3 className="text-xl font-heading mb-2">Upload New Logo</h3>
        <p className="text-text-secondary text-sm">
          Upload a new logo to replace the current one across all pages
        </p>
      </div>

      <ImageUpload
        onImageUploaded={handleImageUploaded}
        onError={handleError}
        maxSizeMB={2}
        acceptedTypes={['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml']}
      />

      {uploadMessage && (
        <div className={`
          flex items-center gap-2 p-3 rounded-lg text-sm
          ${uploadStatus === 'success' 
            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
            : 'bg-red-500/20 text-red-400 border border-red-500/30'
          }
        `}>
          {uploadStatus === 'success' ? (
            <Check size={16} />
          ) : (
            <AlertCircle size={16} />
          )}
          {uploadMessage}
        </div>
      )}
    </div>
  );
};

export default LogoUploader;