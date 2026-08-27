import React, { useState } from 'react';
import { attractions } from '../data/sapporoData';
import { Compass, Train, Clock, Star, MapPin, Sparkles } from 'lucide-react';

export const AttractionsList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '전체 보기' },
    { id: 'nature', label: '단풍·자연' },
    { id: 'landmark', label: '랜드마크' },
    { id: 'hotspring', label: '온천' },
    { id: 'daytrip', label: '근교 여행' },
  ];

  const filteredAttractions = selectedCategory === 'all' 
    ? attractions 
    : attractions.filter(a => a.category === selectedCategory);

  return (
    <div className="space-y-8 pb-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>렌트 없이 대중교통으로 완벽 정복</span>
          </div>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            가을 삿포로 뚜벅이 추천 여행지
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            지하철, 노면전차, JR선, 직행 버스로 편리하게 방문할 수 있는 엄선된 가을 명소들입니다.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Attractions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAttractions.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Image & Badge */}
              <div className="relative h-56 overflow-hidden bg-stone-100">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/70 backdrop-blur-md text-white text-xs font-medium">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>{item.rating}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-xs font-medium text-amber-300 block">{item.nameJa}</span>
                  <h3 className="text-lg font-bold leading-tight">{item.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Autumn Tip */}
                <div className="bg-amber-50 rounded-xl p-3 border border-amber-200/60 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-amber-900 block">🍁 가을 관람 포인트</span>
                    <span className="text-xs text-amber-800 leading-snug block mt-0.5">{item.autumnTip}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer / Transit info */}
            <div className="px-6 pb-6 pt-2 border-t border-stone-100 space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <Train className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="truncate">{item.transitInfo}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  소요 시간: {item.recommendedDuration}
                </span>
                <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-medium">
                  차량 불필요 (뚜벅이 가능)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
