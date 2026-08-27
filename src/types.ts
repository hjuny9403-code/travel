export interface Attraction {
  id: string;
  name: string;
  nameJa: string;
  category: 'nature' | 'landmark' | 'shopping' | 'hotspring' | 'daytrip';
  description: string;
  autumnTip: string;
  transitInfo: string;
  imageUrl: string;
  recommendedDuration: string;
  rating: number;
}

export interface Restaurant {
  id: string;
  name: string;
  category: 'soup_curry' | 'jingisukan' | 'ramen' | 'seafood' | 'sushi' | 'beer_hall';
  googleReviewsCount: number;
  rating: number;
  address: string;
  description: string;
  recommendedMenu: string;
  transitInfo: string;
  imageUrl: string;
  priceRange: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  theme: string;
  schedule: {
    time: string;
    title: string;
    description: string;
    transit: string;
    location?: string;
  }[];
}

export interface AutumnSeasonInfo {
  peakPeriod: string;
  weatherSummary: string;
  clothingTip: string;
  highlights: string[];
}
