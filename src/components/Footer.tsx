import React from 'react';
import { MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white font-bold text-base">가을 삿포로 여행 플래너</h3>
            <p className="text-xs text-stone-500">렌트카 없이 떠나는 완벽한 뚜벅이 가을 홋카이도 여행</p>
          </div>
        </div>

        <div className="text-xs text-stone-500 flex items-center gap-1">
          <span>Built with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>for Autumn Sapporo Travelers</span>
        </div>
      </div>
    </footer>
  );
};
