'use client';

import { useState } from 'react';
import { SuggestedCorruptor } from '@/types/types';

interface Props {
  isDarkMode?: boolean;
}

export default function SubmissionForm({ isDarkMode }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    amountStolen: '',
    photoUrl: '',
    sentenceYears: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newEntry: Partial<SuggestedCorruptor> = {
      name: formData.name,
      amountStolen: parseFloat(formData.amountStolen),
      photoUrl: formData.photoUrl,
      sentenceYears: parseInt(formData.sentenceYears),
      likes: 0,
      status: 'pending',
      dateAdded: new Date().toISOString(),
    };

    // Here you would typically send this to your API
    console.log('Submitting:', newEntry);
    
    // Reset form
    setFormData({
      name: '',
      amountStolen: '',
      photoUrl: '',
      sentenceYears: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full p-2 border rounded ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            required
          />
        </div>

        <div>
          <label className="block mb-1">Amount Stolen</label>
          <input
            type="number"
            value={formData.amountStolen}
            onChange={(e) => setFormData({ ...formData, amountStolen: e.target.value })}
            className={`w-full p-2 border rounded ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            required
          />
        </div>

        <div>
          <label className="block mb-1">Photo URL</label>
          <input
            type="url"
            value={formData.photoUrl}
            onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
            className={`w-full p-2 border rounded ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            required
          />
        </div>

        <div>
          <label className="block mb-1">Sentence (years)</label>
          <input
            type="number"
            value={formData.sentenceYears}
            onChange={(e) => setFormData({ ...formData, sentenceYears: e.target.value })}
            className={`w-full p-2 border rounded ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 rounded ${
            isDarkMode 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Submit Case
        </button>
      </div>
    </form>
  );
} 