export interface Corruptor {
  id: string;
  name: string;
  amountStolen: number;
  currency: string;
  aspect: string;
  summary: string;
  previousRank?: number;
  currentRank?: number;
}

export interface SuggestedCorruptor extends Corruptor {
  likes: number;
  status: 'pending' | 'approved' | 'rejected';
} 