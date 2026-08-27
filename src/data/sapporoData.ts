import { Attraction, Restaurant, ItineraryDay, AutumnSeasonInfo } from '../types';

export const autumnSeasonInfo: AutumnSeasonInfo = {
  peakPeriod: "10월 중순 ~ 10월 하순 (시내 단풍 절정기)",
  weatherSummary: "평균 기온 7°C ~ 17°C로 쌀쌀하고 일교차가 큽니다. 10월 말로 갈수록 초겨울 날씨에 가까워집니다.",
  clothingTip: "도톰한 가을 코트, 트렌치코트, 니트, 그리고 아침저녁 쌀쌀함에 대비한 경량 패딩이나 목도리를 꼭 챙기세요. 실내는 난방이 잘 되므로 겹쳐 입기(레이어드)가 좋습니다.",
  highlights: [
    "홋카이도 대학 은행나무 가로수길의 노란 황금빛 장관",
    "나카지마 공원 및 타키노 스즈란 구릉공원에서 만나는 가을 야생화와 단풍의 조화",
    "조잔케이 온천에서 즐기는 단풍과 노천욕의 힐링",
    "렌트 없이도 지하철, 시내 전차, JR선, 조잔케이 직행 버스로 완벽한 이동 가능"
  ]
};

export const attractions: Attraction[] = [
  {
    id: "hokkaido-univ",
    name: "홋카이도 대학 은행나무 가로수길",
    nameJa: "北海道大学イチョウ並木",
    category: "nature",
    description: "캠퍼스 내 약 38그루의 거대한 은행나무가 10월 말이면 황금빛 터널을 만들어내는 삿포로 최고의 단풍 명소입니다.",
    autumnTip: "10월 하순~11월 초에 '기오 제(오이치 가로수길 축제)'가 열려 밤에는 조명이 켜집니다.",
    transitInfo: "JR 삿포로역 북쪽 출구에서 도보 약 10분 / 지하철 난보쿠선 '기타쥬니조역'에서 도보 4분",
    imageUrl: "https://images.unsplash.com/photo-1508873696983-2df5c92063c7?q=80&w=1000&auto=format&fit=crop",
    recommendedDuration: "1시간 ~ 1시간 30분",
    rating: 4.8
  },
  {
    id: "nakajima-park-wildflowers",
    name: "나카지마 공원 (가을 야생화 & 단풍 산책로)",
    nameJa: "中島公園",
    category: "nature",
    description: "도심 속 거대한 자연공원으로 가을이면 억새, 구절초 등 가을 야생화와 단풍이 어우러져 고즈넉한 산책을 즐기기 좋습니다.",
    autumnTip: "지하철역 바로 앞이라 접근성이 좋으며, 전통 정원 '호헤이칸' 주변의 야생화 군락지가 아름답습니다.",
    transitInfo: "지하철 난보쿠선 '나카지마코엔역' 바로 앞",
    imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1000&auto=format&fit=crop",
    recommendedDuration: "1시간 30분",
    rating: 4.7
  },
  {
    id: "takino-suzuran",
    name: "타키노 스즈란 구릉공원 (가을 야생화 명소)",
    nameJa: "国営滝野すずらん丘陵公園",
    category: "nature",
    description: "홋카이도 유일의 국영 공원으로, 가을이면 넓은 구릉지에 코스모스와 가을 야생화, 알록달록한 단풍이 절경을 이룹니다.",
    autumnTip: "지하철과 공원 직행 버스를 연계하여 렌트 없이도 대중교통으로 방문할 수 있습니다.",
    transitInfo: "지하철 난보쿠선 '마코마나이역' 하차 후 중앙버스(타키노선) 탑승 (약 30분)",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop",
    recommendedDuration: "3시간 이상",
    rating: 4.8
  },
  {
    id: "odori-park",
    name: "오도리 공원 & 삿포로 TV 타워",
    nameJa: "大通公園 & さっぽろテレビ塔",
    category: "landmark",
    description: "삿포로 도심을 동서로 가르는 1.5km의 힐링 녹지 공원. 가을에는 단풍과 가을 미식 축제가 열립니다.",
    autumnTip: "TV 타워 전망대에서 내려다보는 오도리 공원의 알록달록한 가을 단풍 전경이 일품입니다.",
    transitInfo: "지하철 오도리역(도호선·난보쿠선·토자이선) 바로 연결",
    imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1000&auto=format&fit=crop",
    recommendedDuration: "1시간",
    rating: 4.6
  },
  {
    id: "jozankei-onsen",
    name: "조잔케이 온천 & 단풍 협곡",
    nameJa: "定山渓温泉",
    category: "hotspring",
    description: "삿포로의 응접실이라 불리는 유명 온천 마을. 계곡 전체가 붉고 노란 단풍으로 물들어 절경을 선사합니다.",
    autumnTip: "10월 중순이 단풍 절정기입니다. 갓파버스나 조잔케이 삿타카 버스로 쉽게 갈 수 있습니다.",
    transitInfo: "삿포로역 버스터미널 또는 스스키노에서 '조잔케이 온천 직행 버스' (약 50분 소요)",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
    recommendedDuration: "반나절 ~ 하루코스",
    rating: 4.7
  },
  {
    id: "otaru-canal",
    name: "오타루 운하 & 오르골당",
    nameJa: "小樽運河",
    category: "daytrip",
    description: "가을 분위기가 고즈넉하게 흐르는 낭만의 도시 오타루. 붉은 벽돌 창고와 운하의 조화가 아름답습니다.",
    autumnTip: "삿포로역에서 JR 타고 35분이면 도착해 당일치기 기차 여행으로 완벽합니다.",
    transitInfo: "JR 삿포로역에서 하코다테본선 타고 '오타루역' 하차 (약 35분, 편도 750엔)",
    imageUrl: "https://images.unsplash.com/photo-1578637387939-43c5255f085f?q=80&w=1000&auto=format&fit=crop",
    recommendedDuration: "반나절 (5~6시간)",
    rating: 4.6
  },
  {
    id: "mt-moiwa",
    name: "모이와산 전망대 (야경)",
    nameJa: "藻岩山展望台",
    category: "landmark",
    description: "일본 신(新) 3대 야경으로 선정된 삿포로의 보석 같은 야경 명소. 360도 파노라마 뷰가 압권입니다.",
    autumnTip: "해질녘에 올라가면 단풍으로 물든 산세와 반짝이는 삿포로 시내 야경을 동시에 볼 수 있습니다.",
    transitInfo: "시내 전차(노면전차) 타고 '로프웨이이릴구치' 하차 후 무료 셔틀버스 이용",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop",
    recommendedDuration: "2시간",
    rating: 4.7
  },
  {
    id: "nijo-market",
    name: "니조 시장",
    nameJa: "二条市場",
    category: "shopping",
    description: "100년 이상의 역사를 자랑하는 삿포로의 부엌. 싱싱한 털게, 우니(성게알), 이쿠라(연어알) 덮밥을 맛볼 수 있습니다.",
    autumnTip: "가을철 제철을 맞이한 해산물들이 가장 풍부하고 맛있는 시기입니다.",
    transitInfo: "지하철 오도리역 또는 스스키노역에서 도보 5~7분",
    imageUrl: "https://images.unsplash.com/photo-1553163147-622ab57be1c2?q=80&w=1000&auto=format&fit=crop",
    recommendedDuration: "1시간 ~ 1시간 30분",
    rating: 4.3
  }
];

export const restaurants: Restaurant[] = [
  {
    id: "soup-curry-garaku",
    name: "수프커리 가락쿠 (Soup Curry Garaku)",
    category: "soup_curry",
    googleReviewsCount: 5240,
    rating: 4.5,
    address: "삿포로시 주오구 미나미2조 니시 2초메 6-1",
    description: "특제 육수와 진한 향신료, 숯불에 구운 닭다리가 일품인 삿포로 최고의 수프 커리 명가입니다.",
    recommendedMenu: "치킨 수프 커리 (치즈 토핑 추가 추천)",
    transitInfo: "지하철 오도리역/스스키노역에서 도보 4분",
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000&auto=format&fit=crop",
    priceRange: "1,300엔 ~ 2,000엔"
  },
  {
    id: "soup-curry-suage",
    name: "수프커리 수아게+ (Soup Curry Suage+)",
    category: "soup_curry",
    googleReviewsCount: 4920,
    rating: 4.6,
    address: "삿포로시 주오구 미나미4조 니시 5초메 도요 4빌딩 2층",
    description: "꼬치에 꽂아 튀긴 바삭한 야채와 깊고 깔끔한 육수가 특징인 현지인과 여행객 모두에게 사랑받는 수프카레 전문점입니다.",
    recommendedMenu: "가바야키 훗카이도 닭고기 수프카레",
    transitInfo: "지하철 스스키노역에서 도보 2분",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop",
    priceRange: "1,400엔 ~ 2,200엔"
  },
  {
    id: "daruma-honten",
    name: "다루마 본점 (Genghis Khan Daruma Honten)",
    category: "jingisukan",
    googleReviewsCount: 4850,
    rating: 4.6,
    address: "삿포로시 주오구 미나미5조 니시 4초메 스스키노 4호관 1층",
    description: "1954년부터 영업해 온 전통 있는 징기스칸(양고기 구이) 전문점. 신선하고 냄새 없는 양고기를 화로에 구워 먹습니다.",
    recommendedMenu: "징기스칸 양고기, 상등 양고기, 맥주",
    transitInfo: "지하철 스스키노역에서 도보 3분",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop",
    priceRange: "1,500엔 ~ 3,000엔"
  },
  {
    id: "ramen-shingen",
    name: "라멘 신겐 (Ramen Shingen Minami 6-jo)",
    category: "ramen",
    googleReviewsCount: 4620,
    rating: 4.6,
    address: "삿포로시 주오구 미나미6조 니시 8초메",
    description: "부드럽고 깊은 감칠맛의 미소(된장) 라멘으로 유명한 대기 행렬 필수 맛집. 에치고(가장 인기) 미소 라멘이 대표 메뉴입니다.",
    recommendedMenu: "에치고 미소 라멘, 차항(볶음밥)",
    transitInfo: "시내 전차(노면전차) '히가시혼간지마에'역에서 도보 5분",
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1000&auto=format&fit=crop",
    priceRange: "900엔 ~ 1,300엔"
  },
  {
    id: "ebisoba-ichigen",
    name: "새우라멘 일겐 (Ebisoba Ichigen Sohonten)",
    category: "ramen",
    googleReviewsCount: 6350,
    rating: 4.5,
    address: "삿포로시 주오구 미나미7조 니시 9초메 1024-10",
    description: "진한 새우 머리로 우려낸 육수가 일품인 독창적인 새우 국물 라멘 전문점. 전 세계 라멘 덕후들의 성지입니다.",
    recommendedMenu: "새우시오(소금) 라멘 (농후한 맛)",
    transitInfo: "시내 전차 '시덴도리역'에서 도보 6분",
    imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1000&auto=format&fit=crop",
    priceRange: "900엔 ~ 1,300엔"
  },
  {
    id: "sapporo-beer-garden",
    name: "삿포로 맥주원 (Sapporo Beer Garden)",
    category: "beer_hall",
    googleReviewsCount: 6180,
    rating: 4.5,
    address: "삿포로시 히가시구 기타7조 히가시 9초메 2-10",
    description: "붉은 벽돌 유산 건물에서 갓 따라낸 생맥주와 무한리필 징기스칸을 즐길 수 있는 역사적인 장소입니다.",
    recommendedMenu: "생맥주 샘플러, 징기스칸 무한리필",
    transitInfo: "지하철 도호선 '히가시쿠야쿠쇼마에역'에서 도보 10분 / 삿포로역에서 직행버스",
    imageUrl: "https://images.unsplash.com/photo-1608270105747-24ef255bd73d?q=80&w=1000&auto=format&fit=crop",
    priceRange: "3,000엔 ~ 6,000엔"
  },
  {
    id: "nijo-market-oiso",
    name: "오이소 (Oiso 海鮮処 魚屋の台所)",
    category: "seafood",
    googleReviewsCount: 3150,
    rating: 4.4,
    address: "삿포로시 주오구 미나미3조 히가시 2초메 니조시장 내",
    description: "니조시장 안에서도 가장 평점이 높고 신선한 해산물 덮밥(카이센동)을 제공하는 인기 맛집입니다.",
    recommendedMenu: "3색 카이센동 (우니, 이쿠라, 게살 덮밥)",
    transitInfo: "지하철 오도리역에서 도보 5분 (니조시장 내부)",
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop",
    priceRange: "2,500엔 ~ 5,000엔"
  },
  {
    id: "toriton-sushi",
    name: "회전초밥 토리톤 (Toriton Toyohira)",
    category: "sushi",
    googleReviewsCount: 3890,
    rating: 4.7,
    address: "삿포로시 토요히라구 히라기시 3조 8초메",
    description: "현지인과 관광객 모두에게 극찬받는 홋카이도 최고의 회전초밥 체인. 네타(생선살)가 두툼하고 신선합니다.",
    recommendedMenu: "연어알 군함, 생연어, 참치, 가루비(소고기 초밥)",
    transitInfo: "지하철 난보쿠선 '미나미히라기시역' 도보 10분",
    imageUrl: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1000&auto=format&fit=crop",
    priceRange: "2,000엔 ~ 4,000엔"
  },
  {
    id: "nemuro-hanamaru",
    name: "네무로 하나마루 (JR Tower Stellar Place)",
    category: "sushi",
    googleReviewsCount: 7520,
    rating: 4.6,
    address: "삿포로시 주오구 기타5조 니시 2초메 스테라플레이스 센터 6층",
    description: "삿포로역 스텔라플레이스에 위치하여 대기 줄이 엄청나지만 최고의 퀄리티를 자랑하는 홋카이도 대표 회전초밥 맛집입니다.",
    recommendedMenu: "게딱지 내장 구이, 생새우, 참치 마키",
    transitInfo: "JR 삿포로역 직결 (스텔라플레이스 6층)",
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop",
    priceRange: "2,000엔 ~ 4,500엔"
  }
];

export const itineraryDays: ItineraryDay[] = [
  {
    day: 1,
    title: "삿포로 도심 입성 및 클래식 감성",
    theme: "오도리 공원 & 스스키노 야경",
    schedule: [
      {
        time: "13:00",
        title: "신치토세 공항 도착 후 삿포로역 이동",
        description: "공항 지하 JR역에서 '쾌속 에어포트' 탑승 (약 37분 소요, 지정석 or 자유석)",
        transit: "JR 쾌속 에어포트 (편도 1,150엔)",
        location: "삿포로역"
      },
      {
        time: "15:00",
        title: "호텔 체크인 및 짐 정리",
        description: "오도리 공원 또는 스스키노 근처 숙소 체크인",
        transit: "도보 또는 지하철",
        location: "시내 숙소"
      },
      {
        time: "16:00",
        title: "오도리 공원 & 삿포로 TV 타워 산책",
        description: "가을 낙엽이 물든 오도리 공원을 산책하고 TV타워에서 삿포로 전경 조망",
        transit: "도보",
        location: "오도리 공원"
      },
      {
        time: "18:30",
        title: "저녁 식사: 수프커리 가락쿠",
        description: "구글 리뷰 5000개가 넘는 삿포로 최고의 수프 커리 영접",
        transit: "도보 5분",
        location: "수프커리 가락쿠"
      },
      {
        time: "20:30",
        title: "스스키노 야경 및 니카상 인증샷",
        description: "화려한 네온사인과 활기찬 스스키노 거리 밤 산책",
        transit: "도보",
        location: "스스키노"
      }
    ]
  },
  {
    day: 2,
    title: "황금빛 단풍과 가을 야생화 탐방",
    theme: "홋카이도 대학 & 나카지마 공원 야생화",
    schedule: [
      {
        time: "09:00",
        title: "니조 시장에서 아침 식사 (카이센동)",
        description: "싱싱한 우니와 이쿠라가 올라간 해산물 덮밥으로 든든한 아침 시작",
        transit: "지하철 또는 도보",
        location: "니조 시장 (오이소)"
      },
      {
        time: "10:30",
        title: "홋카이도 대학 은행나무 가로수길",
        description: "10월 말 절정을 이루는 황금빛 은행나무 터널에서 인생샷 남기기",
        transit: "지하철 난보쿠선 (기타쥬니조역 하차 도보 4분)",
        location: "홋카이도 대학"
      },
      {
        time: "13:00",
        title: "점심 식사: 새우라멘 일겐 (Ebisoba Ichigen)",
        description: "구글 리뷰 6,000개가 넘는 진한 새우 육수 라멘",
        transit: "시내 전차 (시덴도리역 하차)",
        location: "새우라멘 일겐"
      },
      {
        time: "15:00",
        title: "나카지마 공원 가을 야생화 산책",
        description: "가을 억새, 구절초 등 가을 들꽃과 호헤이칸 전통 건축물 주변 단풍 산책",
        transit: "지하철 난보쿠선 (나카지마코엔역)",
        location: "나카지마 공원"
      },
      {
        time: "18:30",
        title: "저녁 식사: 네무로 하나마루 회전초밥",
        description: "스텔라플레이스에서 즐기는 싱싱하고 두툼한 홋카이도 스시",
        transit: "지하철 또는 도보",
        location: "JR 삿포로역"
      }
    ]
  },
  {
    day: 3,
    title: "대자연 속 가을 야생화와 환상적인 야경",
    theme: "타키노 스즈란 구릉공원 & 모이와산",
    schedule: [
      {
        time: "09:00",
        title: "타키노 스즈란 구릉공원으로 이동",
        description: "마코마나이역에서 공원 직행버스를 타고 가을 야생화와 코스모스 군락지로 이동",
        transit: "지하철 + 버스 (약 50분)",
        location: "타키노 스즈란 구릉공원"
      },
      {
        time: "10:00",
        title: "국영 타키노 스즈란 공원 가을 야생화 트레킹",
        description: "광활한 구릉지에 피어난 가을 야생화와 가을 숲의 정취를 만끽하는 힐링 시간",
        transit: "도보",
        location: "타키노 스즈란 구릉공원"
      },
      {
        time: "13:30",
        title: "시내 복귀 후 점심 식사: 수프커리 수아게+",
        description: "바삭한 튀김 야채와 깔끔한 수프 커리",
        transit: "버스 + 지하철",
        location: "수프커리 수아게+"
      },
      {
        time: "16:30",
        title: "모이와산 케이블카 & 전망대 야경",
        description: "일본 신 3대 야경으로 꼽히는 삿포로 최고의 파노라마 야경 감상",
        transit: "노면전차 + 무료 셔틀버스",
        location: "모이와산 전망대"
      },
      {
        time: "19:30",
        title: "저녁 식사: 다루마 본점 (징기스칸)",
        description: "화로에 구워 먹는 부드러운 홋카이도 명물 양고기 구이",
        transit: "노면전차 + 도보",
        location: "스스키노 다루마"
      }
    ]
  },
  {
    day: 4,
    title: "낭만의 항구도시 오타루 당일치기",
    theme: "오타루 운하, 오르골당 & 삿포로 맥주원",
    schedule: [
      {
        time: "09:30",
        title: "JR 타고 오타루로 이동",
        description: "창밖으로 펼쳐지는 바다 풍경(오션뷰)을 감상하며 35분 이동",
        transit: "JR 하코다테본선 쾌속 (편도 750엔)",
        location: "오타루역"
      },
      {
        time: "10:30",
        title: "오타루 운하 및 산책로 탐방",
        description: "붉은 벽돌 창고와 이국적인 가을 정취가 가득한 운하 산책",
        transit: "도보 10분",
        location: "오타루 운하"
      },
      {
        time: "12:30",
        title: "사카이마치 거리 (오르골당 & 디저트 투어)",
        description: "르타오(LeTAO) 본점에서 치즈케이크 맛보기, 오르골당 구경",
        transit: "도보",
        location: "오타루 사카이마치"
      },
      {
        time: "16:00",
        title: "삿포로 복귀 후 삿포로 맥주원 이동",
        description: "역사적인 붉은 벽돌 맥주 공장에서 즐기는 시원한 생맥주와 징기스칸",
        transit: "JR 오타루역 -> 삿포로역 + 직행 버스",
        location: "삿포로 맥주원"
      },
      {
        time: "20:00",
        title: "돈키호테 쇼핑 및 야식",
        description: "일본 여행 필수 기념품 및 드럭스토어 쇼핑",
        transit: "도보",
        location: "스스키노"
      }
    ]
  },
  {
    day: 5,
    title: "단풍의 정점 조잔케이 온천 & 귀국",
    theme: "조잔케이 온천 힐링 및 공항 이동",
    schedule: [
      {
        time: "08:30",
        title: "조잔케이 직행 버스 탑승",
        description: "삿포로역 또는 스스키노에서 조잔케이 온천마을로 출발 (약 50분)",
        transit: "조잔케이 온천 직행버스 (카파 라이너)",
        location: "조잔케이"
      },
      {
        time: "10:00",
        title: "조잔케이 계곡 단풍 산책 & 족탕(아시유) 체험",
        description: "알록달록 단풍으로 물든 계곡과 붉은 다리(후타미 쓰리다리) 산책",
        transit: "도보",
        location: "조잔케이 온천"
      },
      {
        time: "12:00",
        title: "당일치기 온천욕 (노천온천)",
        description: "가을 찬 바람을 맞으며 즐기는 뜨끈한 온천 노천욕으로 피로 해소",
        transit: "도보",
        location: "조잔케이 온천 호텔 (유노하나 등)"
      },
      {
        time: "14:30",
        title: "삿포로 시내 복귀 및 라멘 신겐 점심/간식",
        description: "유명한 에치고 미소라멘으로 든든하게 마무리",
        transit: "조잔케이 직행 버스",
        location: "라멘 신겐"
      },
      {
        time: "17:00",
        title: "신치토세 공항으로 이동 및 출국",
        description: "JR 쾌속 에어포트로 공항 이동, 면세점에서 '시로이 코이비토' 및 르타오 쿠키 구입",
        transit: "JR 쾌속 에어포트",
        location: "신치토세 공항"
      }
    ]
  }
];
