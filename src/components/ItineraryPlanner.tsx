import React, { useState } from 'react';
import { itineraryDays } from '../data/sapporoData';
import { Train, Clock, MapPin, CheckCircle, Circle, Sparkles, Calendar } from 'lucide-react';

export const ItineraryPlanner: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (dayIndex: number, scheduleIndex: number) => {
    const key = `${dayIndex}-${scheduleIndex}`;
    setCompletedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const currentDayData = itineraryDays.find(d => d.day === activeDay) || itineraryDays[0];

  return (
    <div className="space-y-8 pb-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-2">
            <Train className="w-3.5 h-3.5" />
            <span>렌트카 없이 대중교통으로 즐기는 코스</span>
          </div>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            가을 삿포로 4박 5일 완벽 일정표
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            지하철, 노면전차, JR선 동선을 고려하여 짜여진 최적의 뚜벅이 일정입니다. 일정을 체크하며 여행을 계획해보세요!
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex gap-2 bg-stone-100 p-1.5 rounded-2xl">
          {itineraryDays.map((day) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(day.day)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeDay === day.day
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Day {day.day}
            </button>
          ))}
        </div>
      </div>

      {/* Current Day Overview Card */}
      <div className="bg-gradient-to-r from-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            <span>Day {currentDayData.day} 추천 코스</span>
          </div>
          <h3 className="text-2xl font-bold">{currentDayData.title}</h3>
          <p className="text-stone-300 text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>핵심 테마: {currentDayData.theme}</span>
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-xs text-stone-200 space-y-1">
          <span className="font-semibold text-amber-300 block">💡 뚜벅이 꿀팁</span>
          <p>IC카드(Kitaca 또는 Suica)를 충전해 두시면 지하철과 전차를 패스권 없이 편리하게 탑승하실 수 있습니다.</p>
        </div>
      </div>

      {/* Schedule Timeline */}
      <div className="space-y-4">
        {currentDayData.schedule.map((item, index) => {
          const isCompleted = !!completedItems[`${activeDay}-${index}`];
          return (
            <div
              key={index}
              onClick={() => toggleItem(activeDay, index)}
              className={`bg-white rounded-2xl p-6 border transition-all duration-200 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                isCompleted 
                  ? 'border-emerald-200 bg-emerald-50/30 opacity-75' 
                  : 'border-stone-200 shadow-xs hover:border-amber-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Check button */}
                <button
                  type="button"
                  className="mt-1 text-stone-400 hover:text-amber-600 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(activeDay, index);
                  }}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                  ) : (
                    <Circle className="w-6 h-6 text-stone-300" />
                  )}
                </button>

                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-stone-100 text-stone-700 text-xs font-bold">
                      <Clock className="w-3 h-3 text-amber-600" />
                      {item.time}
                    </span>
                    <h4 className={`text-base font-bold text-stone-900 ${isCompleted ? 'line-through text-stone-500' : ''}`}>
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  {item.location && (
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span>위치: {item.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Transit info */}
              <div className="sm:text-right shrink-0 bg-stone-50 sm:bg-transparent p-3 sm:p-0 rounded-xl w-full sm:w-auto">
                <span className="text-xs font-semibold text-stone-400 block sm:hidden">이동 수단</span>
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-800 bg-amber-50 sm:bg-amber-50/80 px-3 py-1.5 rounded-lg border border-amber-200/60">
                  <Train className="w-3.5 h-3.5" />
                  <span>{item.transit}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
