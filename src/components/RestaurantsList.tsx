import React, { useState } from 'react';
import { restaurants } from '../data/sapporoData';
import { Utensils, Star, MessageSquare, MapPin, Train, Sparkles, CheckCircle2 } from 'lucide-react';

export const RestaurantsList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '전체 보기' },
    { id: 'soup_curry', label: '수프카레' },
    { id: 'jingisukan', label: '징기스칸(양고기)' },
    { id: 'ramen', label: '라멘' },
    { id: 'seafood', label: '해산물·카이센동' },
    { id: 'sushi', label: '초밥(스시)' },
    { id: 'beer_hall', label: '맥주홀' },
  ];

  const filteredRestaurants = selectedCategory === 'all'
    ? restaurants
    : restaurants.filter(r => r.category === selectedCategory);

  return (
    <div className="space-y-8 pb-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
            <Utensils className="w-3.5 h-3.5" />
            <span>구글 리뷰 2,000개 이상 검증된 현지 맛집</span>
          </div>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            삿포로 대표 미식 맛집 리스트
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            수천 명의 전 세계 여행객들이 직접 방문하고 검증한 삿포로 최고의 맛집들을 소개합니다.
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
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Restaurants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Image & Badges */}
              <div className="relative h-52 overflow-hidden bg-stone-100">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-white text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{item.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-sm">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>구글 리뷰 {item.googleReviewsCount.toLocaleString()}개+</span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-bold leading-tight">{item.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Recommended Menu */}
                <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-200/60 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-emerald-900 block">✨ 추천 대표 메뉴</span>
                    <span className="text-xs text-emerald-800 font-semibold block mt-0.5">{item.recommendedMenu}</span>
                  </div>
                </div>

                {/* Address & Price */}
                <div className="space-y-1.5 text-xs text-stone-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                    <span className="truncate">{item.address}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 font-medium">
                    <span className="text-stone-700">예산: {item.priceRange}</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      검증된 인기 맛집
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer / Transit info */}
            <div className="px-6 pb-6 pt-2 border-t border-stone-100">
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <Train className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">{item.transitInfo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
