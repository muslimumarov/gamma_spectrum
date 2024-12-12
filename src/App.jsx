import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const App = () => {
  const [gammaData, setGammaData] = useState([]);
  const [fftData, setFftData] = useState([]);

  // Gamma-karotaj ma'lumotlari (chuqurlik va gamma nurlanish)
  const mockGammaData = [
    { depth: 0, gamma: 12 },
    { depth: 1, gamma: 14 },
    { depth: 2, gamma: 18 },
    { depth: 3, gamma: 16 },
    { depth: 4, gamma: 20 },
    // Yana ko‘proq ma'lumot qo‘shishingiz mumkin
  ];

  const performFFT = () => {
    const gammaValues = mockGammaData.map((d) => d.gamma);
    const fftResult = gammaValues.map((val, index) => Math.sin(index * val)); // Oddiy sinus tahlili (haqiqiy FFT uchun kutubxona ishlatishingiz kerak)
    setGammaData(gammaValues);
    setFftData(fftResult);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">Gamma-karotaj Spektral Tahlil</h1>
      <button
        onClick={performFFT}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Tahlilni boshlash
      </button>
      <div className="w-full max-w-4xl mt-8">
        <Line
          data={{
            labels: mockGammaData.map((d) => d.depth),
            datasets: [
              {
                label: 'Gamma nurlanish',
                data: gammaData,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
              },
              {
                label: 'Spektral komponentlar (FFT)',
                data: fftData,
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
              },
            ],
          }}
        />
      </div>
    </div>
  ); 
};

export default App;
