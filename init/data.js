const sampleListings = [
  // Trending
  {
    title: "Sea View Villa in North Goa",
    description: "A bright coastal villa with a private garden, sea views, and easy access to Anjuna Beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80"
    },
    price: 7200,
    location: "Anjuna, Goa",
    country: "India",
    category: "Trending",
    geometry: { type: "Point", coordinates: [73.7400, 15.5750] }
  },
  {
    title: "Tropical Villa Near Ubud",
    description: "A peaceful villa surrounded by rice fields, featuring a private pool and open living space.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=800&q=80"
    },
    price: 9800,
    location: "Ubud, Bali",
    country: "Indonesia",
    category: "Trending",
    geometry: { type: "Point", coordinates: [115.2625, -8.5069] }
  },
  {
    title: "Chic Parisian Loft",
    description: "A stylish loft near Montmartre with a sunny balcony and classic Paris rooftop views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
    },
    price: 14500,
    location: "Paris",
    country: "France",
    category: "Trending",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
  },
  {
    title: "Downtown Dubai Skyline Apartment",
    description: "A modern high-rise apartment with Burj Khalifa views and access to a fitness centre.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
    },
    price: 18500,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Trending",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
  },
  {
    title: "Oceanfront Apartment at Camps Bay",
    description: "A contemporary apartment steps from the beach with panoramic Atlantic Ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=80"
    },
    price: 12400,
    location: "Cape Town",
    country: "South Africa",
    category: "Trending",
    geometry: { type: "Point", coordinates: [18.4241, -33.9249] }
  },

  // Rooms
  {
    title: "Private Room Near Connaught Place",
    description: "A clean and comfortable private room in central Delhi with a dedicated work desk.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
    },
    price: 2800,
    location: "New Delhi",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [77.1025, 28.7041] }
  },
  {
    title: "Minimalist Room in Indiranagar",
    description: "A quiet, air-conditioned room in a well-connected Bengaluru neighbourhood.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    },
    price: 2400,
    location: "Bengaluru",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "Heritage Room in Fort Kochi",
    description: "A charming room in a restored heritage home close to Fort Kochi's cafes and galleries.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    price: 3100,
    location: "Kochi",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [76.2673, 9.9312] }
  },
  {
    title: "Lake View Room in Udaipur",
    description: "A peaceful room with balcony views of Lake Pichola and traditional Rajasthani details.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
    },
    price: 4200,
    location: "Udaipur",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] }
  },
  {
    title: "Colonial Room in South Kolkata",
    description: "A spacious private room in a traditional Kolkata home near local markets and metro links.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
    },
    price: 2200,
    location: "Kolkata",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [88.3639, 22.5726] }
  },

  // Iconic Cities
  {
    title: "Manhattan City View Studio",
    description: "A compact studio in Midtown with convenient access to Times Square and Broadway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80"
    },
    price: 22000,
    location: "New York City",
    country: "United States",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [-74.0060, 40.7128] }
  },
  {
    title: "Eiffel Tower View Apartment",
    description: "An elegant apartment near the Champ de Mars with a balcony facing the Eiffel Tower.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
    },
    price: 19500,
    location: "Paris",
    country: "France",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
  },
  {
    title: "Shibuya Design Apartment",
    description: "A modern apartment in Tokyo's lively Shibuya district, close to restaurants and transit.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80"
    },
    price: 14800,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [139.6503, 35.6762] }
  },
  {
    title: "Central London Townhouse",
    description: "A refined townhouse stay near Hyde Park with warm interiors and excellent transport links.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
    },
    price: 24000,
    location: "London",
    country: "United Kingdom",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [-0.1276, 51.5072] }
  },
  {
    title: "Historic Roman Terrace Home",
    description: "A character-filled stay near the Colosseum with a rooftop terrace for evening meals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80"
    },
    price: 13200,
    location: "Rome",
    country: "Italy",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [12.4964, 41.9028] }
  },

  // Mountains
  {
    title: "Cedar Cabin in Manali",
    description: "A cosy wooden cabin among cedar trees with beautiful views of the Himalayan valley.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
    },
    price: 4800,
    location: "Manali",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [77.1892, 32.2432] }
  },
  {
    title: "Ladakh Valley Stone Cottage",
    description: "A traditional stone cottage with sweeping mountain views and a peaceful garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=80"
    },
    price: 5200,
    location: "Leh",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [77.5771, 34.1526] }
  },
  {
    title: "Tea Estate Cottage",
    description: "A quiet hillside cottage surrounded by tea plantations and misty Munnar landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=800&q=80"
    },
    price: 5600,
    location: "Munnar",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [77.0595, 10.0889] }
  },
  {
    title: "Alpine Retreat by Lake Wakatipu",
    description: "A modern mountain home overlooking Lake Wakatipu and the Remarkables mountain range.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    },
    price: 15600,
    location: "Queenstown",
    country: "New Zealand",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [168.6626, -45.0312] }
  },
  {
    title: "Rocky Mountain Chalet",
    description: "A timber chalet near Banff with a fireplace, mountain deck, and forest surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=80"
    },
    price: 17800,
    location: "Banff",
    country: "Canada",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
  },

  // Amazing Pools
  {
    title: "Infinity Pool Villa Overlooking Lake Pichola",
    description: "A premium villa with an infinity pool, lake views, and traditional Udaipur architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
    },
    price: 16500,
    location: "Udaipur",
    country: "India",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] }
  },
  {
    title: "Cliffside Pool Suite",
    description: "A whitewashed suite with a private plunge pool and views across the Santorini caldera.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80"
    },
    price: 28000,
    location: "Santorini",
    country: "Greece",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
  },
  {
    title: "Private Pool Residence in Phuket",
    description: "A spacious tropical residence with a private pool, garden lounge, and beach access nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
    },
    price: 14200,
    location: "Phuket",
    country: "Thailand",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [98.3923, 7.8804] }
  },
  {
    title: "Jungle Pool Villa in Ubud",
    description: "A secluded Bali villa with a stone pool, tropical plants, and open-air living areas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=800&q=80"
    },
    price: 11800,
    location: "Ubud, Bali",
    country: "Indonesia",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [115.2625, -8.5069] }
  },
  {
    title: "Overwater Pool Villa",
    description: "A luxurious overwater villa with direct lagoon access and a private infinity pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80"
    },
    price: 42000,
    location: "Malé",
    country: "Maldives",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [73.5093, 4.1755] }
  },

  // Camping
  {
    title: "Ganga Riverside Safari Tent",
    description: "A comfortable riverside tent stay with bonfires, rafting access, and mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80"
    },
    price: 2200,
    location: "Rishikesh",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] }
  },
  {
    title: "Thar Desert Luxury Camp",
    description: "A furnished desert camp with folk music evenings, camel rides, and starlit dinners.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
    },
    price: 4800,
    location: "Jaisalmer",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [70.9160, 26.9157] }
  },
  {
    title: "Forest Camping Pod",
    description: "A cosy camping pod surrounded by Wayanad's greenery, ideal for nature walks and birdwatching.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80"
    },
    price: 3400,
    location: "Wayanad",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [76.1320, 11.6854] }
  },
  {
    title: "Yosemite Valley Canvas Tent",
    description: "A classic canvas tent near Yosemite trails with shared fire pits and forest views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=800&q=80"
    },
    price: 9600,
    location: "Yosemite National Park",
    country: "United States",
    category: "Camping",
    geometry: { type: "Point", coordinates: [-119.5383, 37.8651] }
  },
  {
    title: "Serengeti Safari Camp",
    description: "A guided safari tent experience with wildlife views and sunset dinners on the savannah.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80"
    },
    price: 22500,
    location: "Serengeti",
    country: "Tanzania",
    category: "Camping",
    geometry: { type: "Point", coordinates: [34.8333, -2.3333] }
  },

  // Farms
  {
    title: "Coffee Estate Farmhouse",
    description: "A peaceful farmhouse surrounded by coffee plantations, pepper vines, and walking trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
    },
    price: 4600,
    location: "Coorg",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [75.7382, 12.3375] }
  },
  {
    title: "Vineyard Cottage in Nashik",
    description: "A serene vineyard cottage offering countryside views and locally grown produce.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"
    },
    price: 5200,
    location: "Nashik",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [73.7898, 19.9975] }
  },
  {
    title: "Organic Farm Stay in Coonoor",
    description: "A calm farm stay amid vegetable gardens and Nilgiri hills, with home-cooked meals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
    },
    price: 4100,
    location: "Coonoor",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [76.7959, 11.3491] }
  },
  {
    title: "Tuscan Olive Farmhouse",
    description: "A restored stone farmhouse among olive groves and vineyards in the Tuscan countryside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80"
    },
    price: 13800,
    location: "Tuscany",
    country: "Italy",
    category: "Farms",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
  },
  {
    title: "Cotswolds Countryside Barn",
    description: "A converted barn on a working farm with rolling-field views and a wood-burning stove.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=800&q=80"
    },
    price: 15200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Farms",
    geometry: { type: "Point", coordinates: [-1.7193, 51.8330] }
  },

  // Arctic
  {
    title: "Northern Lights Cabin",
    description: "A warm cabin outside Tromsø with clear-sky views for watching the northern lights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=800&q=80"
    },
    price: 19800,
    location: "Tromsø",
    country: "Norway",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [18.9553, 69.6492] }
  },
  {
    title: "Svalbard Arctic Lodge",
    description: "A comfortable lodge stay in Longyearbyen with dramatic snowy landscapes all around.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=800&q=80"
    },
    price: 24600,
    location: "Longyearbyen",
    country: "Norway",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [15.6469, 78.2232] }
  },
  {
    title: "Reykjavik Winter Apartment",
    description: "A stylish apartment near Reykjavik harbour, ideal for winter city breaks and day tours.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80"
    },
    price: 16400,
    location: "Reykjavík",
    country: "Iceland",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [-21.9426, 64.1466] }
  },
 {
    title: "Arctic Glass Igloo Stay",
    description: "A glass-roof igloo in Finnish Lapland with views of the northern sky and snowy forest.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1486152792611-7a9f8ba516c8?auto=format&fit=crop&w=800&q=80"
    },
    price: 21800,
    location: "Rovaniemi",
    country: "Finland",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [25.7294, 66.5039] }
},
  {
    title: "Icefjord View Cottage",
    description: "A remote cottage with remarkable views of Disko Bay and Ilulissat's floating icebergs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
    },
    price: 27400,
    location: "Ilulissat",
    country: "Greenland",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [-51.0986, 69.2198] }
  },

  // Domes
  {
    title: "Munnar Hilltop Dome",
    description: "A geodesic dome with panoramic tea-garden views, a private deck, and a cosy interior.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
    },
    price: 6200,
    location: "Munnar",
    country: "India",
    category: "Domes",
    geometry: { type: "Point", coordinates: [77.0595, 10.0889] }
  },
  {
    title: "Himalayan Forest Dome",
    description: "A secluded dome stay in Jibhi with forest views, a fireplace, and outdoor seating.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
    },
    price: 5800,
    location: "Jibhi",
    country: "India",
    category: "Domes",
    geometry: { type: "Point", coordinates: [77.3405, 31.5592] }
  },
  {
    title: "Wayanad Rainforest Dome",
    description: "A luxury dome surrounded by tropical forest, complete with a private deck and hammock.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=80"
    },
    price: 5400,
    location: "Wayanad",
    country: "India",
    category: "Domes",
    geometry: { type: "Point", coordinates: [76.1320, 11.6854] }
  },
  {
    title: "Joshua Tree Stargazing Dome",
    description: "A desert dome with a skylight, hot tub, and uninterrupted views of the night sky.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80"
    },
    price: 17400,
    location: "Joshua Tree",
    country: "United States",
    category: "Domes",
    geometry: { type: "Point", coordinates: [-115.9009, 34.1347] }
  },
  {
    title: "Icelandic Lava Field Dome",
    description: "A modern glass dome near Þingvellir, offering wide views of Iceland's volcanic landscape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80"
    },
    price: 21600,
    location: "Þingvellir",
    country: "Iceland",
    category: "Domes",
    geometry: { type: "Point", coordinates: [-21.1290, 64.2559] }
  },

  // Boats
  {
    title: "Premium Kerala Houseboat",
    description: "A private houseboat cruise through quiet backwaters with a furnished bedroom and deck.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80"
    },
    price: 7800,
    location: "Alappuzha",
    country: "India",
    category: "Boats",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] }
  },
  {
    title: "Dal Lake Heritage Houseboat",
    description: "A traditional Kashmiri houseboat with carved wood interiors and views across Dal Lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
    },
    price: 6500,
    location: "Srinagar",
    country: "India",
    category: "Boats",
    geometry: { type: "Point", coordinates: [74.7973, 34.0837] }
  },
  {
    title: "Kumarakom Backwater Cruiser",
    description: "A relaxing backwater stay with a sun deck, private dining area, and local Kerala cuisine.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
    },
    price: 8200,
    location: "Kumarakom",
    country: "India",
    category: "Boats",
    geometry: { type: "Point", coordinates: [76.4306, 9.6175] }
  },
  {
    title: "Mandovi River Yacht Stay",
    description: "A private yacht stay on Goa's Mandovi River with sunset cruising and onboard dining.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80"
    },
    price: 14500,
    location: "Panaji, Goa",
    country: "India",
    category: "Boats",
    geometry: { type: "Point", coordinates: [73.8278, 15.4909] }
  },
  {
    title: "Ha Long Bay Junk Boat Cabin",
    description: "An overnight wooden boat cruise through limestone islands with a private sea-view cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80"
    },
    price: 16800,
    location: "Ha Long Bay",
    country: "Vietnam",
    category: "Boats",
    geometry: { type: "Point", coordinates: [107.0448, 20.9101] }
  }
];

module.exports = { data: sampleListings };