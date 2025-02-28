'use client';

import { useState, useEffect } from 'react';
import { Corruptor } from '@/types/types';
import CorruptorTable from '@/components/CorruptorTable';
import Navbar from '@/components/Navbar';

// Sample data for corruptors
const corruptorData: Corruptor[] = [
  {
    id: '1',
    name: 'Riva Siahaan and Yoki Firnandi',
    amountStolen: 195000000000000,
    currency: 'IDR',
    aspect: 'Oil and Shipping',
    summary: "Indonesia arrested seven executives, including Pertamina's CEO Riva Siahaan and Pertamina International Shipping's CEO Yoki Firnandi, in a Rp195 trillion corruption case. The scheme involved rejecting domestic oil supplies, manipulating prices, and importing lower-quality oil. The alleged corruption occurred between 2018 and 2023.",
    previousRank: 2,
  },
  {
    id: '2',
    name: 'Surya Darmadi',
    amountStolen: 87000000000000,
    currency: 'IDR',
    aspect: 'Oil Palm Plantation',
    summary: "Surya Darmadi's company PT Duta Palma Group was involved in a corruption case related to oil palm plantations with estimated losses of Rp87 trillion.",
    previousRank: 1,
  },
  {
    id: '3',
    name: 'Honggo Wendratno',
    amountStolen: 42400000000000,
    currency: 'IDR',
    aspect: 'Petrochemical Industry',
    summary: "Honggo Wendratno, former President Director of PT Trans-Pacific Petrochemical Indotama, was found guilty in a corruption case involving Rp42.4 trillion. He escaped and remained a fugitive until recently.",
    previousRank: 3,
  },
  {
    id: '4',
    name: 'Heru Hidayat and others',
    amountStolen: 23700000000000,
    currency: 'IDR',
    aspect: 'Insurance',
    summary: "Eight suspects, including Heru Hidayat, were implicated in the PT Asabri corruption case, which involved Rp23.7 trillion in losses from 2012 to 2019.",
    previousRank: 4,
  },
  {
    id: '5',
    name: 'Benny Tjokrosaputro and others',
    amountStolen: 16800000000000,
    currency: 'IDR',
    aspect: 'Insurance and Investment',
    summary: "Six individuals, including Benny Tjokrosaputro, were sentenced for their roles in the Jiwasraya corruption case, which involved Rp16.8 trillion in losses from investment schemes.",
    previousRank: 5,
  },
  {
    id: '6',
    name: 'RJ Lino',
    amountStolen: 7000000000000,
    currency: 'IDR',
    aspect: 'Port Management',
    summary: "Former PT Pelindo II President Director RJ Lino was suspected of corruption in the procurement of cranes, resulting in Rp7 trillion in losses.",
    previousRank: 7,
  },
  {
    id: '7',
    name: 'Former Antam officials',
    amountStolen: 3310000000000,
    currency: 'IDR',
    aspect: 'Mining',
    summary: "Six former officials of state-owned mining company Antam were charged with corruption involving over 100 tonnes of gold causing Rp3.31 trillion in losses.",
    previousRank: 8,
  },
  {
    id: '8',
    name: 'Setya Novanto and others',
    amountStolen: 2300000000000,
    currency: 'IDR',
    aspect: 'Identity Card Project',
    summary: "The e-KTP corruption case involved several high-profile figures, including Setya Novanto, with estimated losses of Rp2.3 trillion.",
    previousRank: 6,
  },
  {
    id: '9',
    name: 'Angelina Sondakh and others',
    amountStolen: 706000000000,
    currency: 'IDR',
    aspect: 'Sports Infrastructure',
    summary: "The Hambalang project corruption case involved suspects like Angelina Sondakh and Anas Urbaningrum, with losses estimated at Rp706 billion due to funding issues.",
    previousRank: 9,
  },
  {
    id: '10',
    name: 'Juliari Batubara',
    amountStolen: 14590000000,
    currency: 'IDR',
    aspect: 'Social Assistance Funds',
    summary: "Former Minister of Social Affairs Juliari Batubara was found guilty of bribery in COVID-19 social assistance funds. He was sentenced to 12 years in prison for his role in the corruption scheme.",
    previousRank: 10,
  },
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Update theme in localStorage and apply changes
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <main className={`min-h-screen pt-20 p-4 sm:p-8 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}>
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8">
          Indonesian Corruptor Tier List
        </h1>

        <div className="max-w-6xl mx-auto">
          <CorruptorTable 
            data={corruptorData.sort((a, b) => b.amountStolen - a.amountStolen)} 
            isDarkMode={isDarkMode}
          />
        </div>
      </main>
    </>
  );
}
