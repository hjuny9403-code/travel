import React from 'react';
import { autumnSeasonInfo } from '../data/sapporoData';
import { Calendar, Thermometer, Shirt, Sparkles, Train, CheckCircle2 } from 'lucide-react';

interface DateRecommendationProps {
  onNavigateToItinerary: () => void;
}

export const DateRecommendation: React.FC<DateRecommendationProps> = ({ onNavigateToItinerary }) => {
  return (
    <div className="space-y-10 pb-16">
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-white p-8 md:p-12 shadow-xl">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <img
            src="https://images.unsplash.com/photo-1508873696983-2df5c92063c7?q=80&w=1600&auto=format&fit=crop"
            alt="Sapporo Autumn"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>가을 삿포로 여행 베스트 가이드</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            황금빛 단풍과 미식이 숨쉬는 <br />
            <span className="text-amber-400">가을 삿포로</span> 완벽 여행
          </h1>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            차가 없어도 지하철, 노면전차, JR선과 직행 버스로 언제든지 편안하게 이동할 수 있는 
            렌트 프리(Car-free) 4박 5일 일정과 구글 리뷰 2,000개 이상의 검증된 맛집을 확인하세요.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onNavigateToItinerary}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
            >
              <Train className="w-5 h-5" />
              <span>4박 5일 일정표 보기</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recommended Dates Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Date Card */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">추천 방문 시기</span>
            <h3 className="text-xl font-bold text-stone-900 mt-1 mb-3">10월 중순 ~ 10월 하순</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {autumnSeasonInfo.peakPeriod}로 홋카이도 대학의 은행나무와 오도리 공원의 단풍이 가장 절정에 달하는 황금기입니다.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-stone-100 text-xs font-medium text-stone-500">
            🍁 단풍 낙엽 카펫과 시원한 가을 날씨
          </div>
        </div>

        {/* Weather Card */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Thermometer className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">가을 날씨 요약</span>
            <h3 className="text-xl font-bold text-stone-900 mt-1 mb-3">평균 7°C ~ 17°C</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {autumnSeasonInfo.weatherSummary}
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-stone-100 text-xs font-medium text-stone-500">
            🧥 일교차가 크므로 방한 용품 필수
          </div>
        </div>

        {/* Clothing Card */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <Shirt className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">옷차림 가이드</span>
            <h3 className="text-xl font-bold text-stone-900 mt-1 mb-3">레이어드 & 아우터</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {autumnSeasonInfo.clothingTip}
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-stone-100 text-xs font-medium text-stone-500">
            👟 많이 걸으므로 편한 워킹화 필수
          </div>
        </div>
      </div>

      {/* Highlights & Why Sapporo in Autumn */}
      <div className="bg-amber-50/50 rounded-3xl p-8 border border-amber-200/60">
        <div className="max-w-3xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">WHY SAPPORO IN AUTUMN</span>
            <h2 className="text-2xl font-bold text-stone-900">차가 없어도 완벽한 가을 여행 포인트</h2>
            <p className="text-stone-600 text-sm">
              삿포로는 지하철, 시내 전차, JR선이 거미줄처럼 연결되어 있어 렌트카 없이도 모든 명소를 쉽고 안전하게 방문할 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {autumnSeasonInfo.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
                <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-stone-800 text-sm font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
