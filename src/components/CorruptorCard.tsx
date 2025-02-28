import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import { Corruptor, SuggestedCorruptor } from '@/types/types';

interface Props {
  data: Corruptor | SuggestedCorruptor;
  isSuggested?: boolean;
  isDarkMode?: boolean;
  onLike?: () => void;
}

export default function CorruptorCard({ data, isSuggested, isDarkMode, onLike }: Props) {
  const isSuggestedEntry = 'likes' in data;

  return (
    <div className={`rounded-lg shadow-lg p-6 ${
      isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="relative w-full h-48 mb-4">
        <Image
          src={data.photoUrl}
          alt={data.name}
          fill
          className="rounded object-cover"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-2">{data.name}</h3>
      
      <div className="space-y-2">
        <p className="text-red-600 font-bold">
          Amount: {formatCurrency(data.amountStolen)}
        </p>
        <p>Sentence: {data.sentenceYears} years</p>
        
        {isSuggestedEntry && (
          <div className="flex items-center gap-2">
            <button
              onClick={onLike}
              className={`px-3 py-1 rounded ${
                isDarkMode 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              👍 {(data as SuggestedCorruptor).likes}
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 