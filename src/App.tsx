import React, { useState } from 'react';
import { Header } from './components/Header';
import { DateRecommendation } from './components/DateRecommendation';
import { AttractionsList } from './components/AttractionsList';
import { RestaurantsList } from './components/RestaurantsList';
import { ItineraryPlanner } from './components/ItineraryPlanner';
import { AiAssistant } from './components/AiAssistant';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-amber-200">
      {/* Top Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        {activeTab === 'overview' && (
          <DateRecommendation onNavigateToItinerary={() => setActiveTab('itinerary')} />
        )}
        {activeTab === 'attractions' && <AttractionsList />}
        {activeTab === 'restaurants' && <RestaurantsList />}
        {activeTab === 'itinerary' && <ItineraryPlanner />}
        {activeTab === 'ai-guide' && <AiAssistant />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
