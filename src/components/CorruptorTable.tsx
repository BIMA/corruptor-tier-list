'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Corruptor } from '@/types/types';
import { formatCurrency } from '@/utils/format';
import React from 'react';

interface Props {
  data: Corruptor[];
  isDarkMode: boolean;
}

export default function CorruptorTable({ data, isDarkMode }: Props) {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const getRankChangeIcon = (current?: number, previous?: number) => {
    if (!current || !previous) return '—';
    
    if (current < previous) {
      return <span className="text-green-500">▲</span>;
    } else if (current > previous) {
      return <span className="text-red-500">▼</span>;
    }
    return <span className="text-gray-500">—</span>;
  };

  const formatAmount = (amount: number, currency: string) => {
    if (currency === 'IDR') {
      return `Rp${(amount / 1000000000000).toFixed(2)} T`;
    }
    return formatCurrency(amount);
  };

  return (
    <div className="overflow-x-auto">
      <table className={`w-full border-collapse ${
        isDarkMode ? 'text-gray-200' : 'text-gray-800'
      }`}>
        <thead>
          <tr className={`border-b ${
            isDarkMode ? 'border-gray-700' : 'border-gray-300'
          }`}>
            <th className="py-3 px-4 text-left w-16">Rank</th>
            <th className="py-3 px-4 text-center w-16">Change</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Area</th>
            <th className="py-3 px-4 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((corruptor, index) => (
            <React.Fragment key={corruptor.id}>
              <tr 
                onClick={() => setExpandedRow(expandedRow === corruptor.id ? null : corruptor.id)}
                className={`border-b cursor-pointer transition-colors ${
                  isDarkMode 
                    ? 'border-gray-700 hover:bg-gray-800' 
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4 text-center">
                  {getRankChangeIcon(index + 1, corruptor.previousRank)}
                </td>
                <td className="py-3 px-4 font-medium">{corruptor.name}</td>
                <td className="py-3 px-4">{corruptor.aspect}</td>
                <td className="py-3 px-4 text-right font-medium text-red-500">
                  {formatAmount(corruptor.amountStolen, corruptor.currency)}
                </td>
              </tr>
              {expandedRow === corruptor.id && (
                <tr className={
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                }>
                  <td colSpan={5} className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">{corruptor.name}</h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Area of Corruption</p>
                          <p className="font-medium">{corruptor.aspect}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Amount Lost</p>
                          <p className="font-medium text-red-600">
                            {formatAmount(corruptor.amountStolen, corruptor.currency)}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-2">Case Summary</p>
                        <p className={`leading-relaxed ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {corruptor.summary}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
} 