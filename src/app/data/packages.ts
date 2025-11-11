export type PackageAccommodation = {
  name: string;
  nights: string;
  location: string;
  roomType: string;
  mealsIncluded: string;
};

export type PackageDayPlan = {
  title: string;
  description: string;
};

export type PackageDetail = {
  badge?: string;
  about?: string;
  meals?: string;
  maxGroupSize?: string;
  highlights?: string[];
  accommodations?: PackageAccommodation[];
  inclusions?: string[];
  dayWisePlan?: PackageDayPlan[];
  excursions?: string[];
  exclusions?: string[];
  cancellationPolicy?: string[];
  documentsRequired?: string[];
  notes?: string[];
};

type Package = {
  slug: string;
  title: string;
  img: string;
  desc: string;
  detail: PackageDetail;
};

export const packages: Package[] = [
  {
    slug: "tibet-tour",
    title: "Tibet Tour Packages",
    img: "/assets/home/tibbt.jpg",
    desc: "Explore the spiritual heart of Tibet with monasteries and mountains.",
    detail: {
      badge: "Signature Pilgrimage",
      about:
        "Journey through the Roof of the World with guided visits to serene monasteries, bustling Barkhor Street bazaars, and breathtaking Himalayan passes.",
      meals: "Breakfast Included",
      maxGroupSize: "12",
      highlights: [
        "Guided tour of Potala Palace and Jokhang Temple",
        "Scenic drive across the Yamdrok Lake",
        "Hands-on prayer flag ceremony experience"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Lhasa Arrival",
          description: "Meet your local guide, acclimatize to the altitude, and explore Barkhor Street markets."
        },
        {
          title: "Day 2: Monasteries & Palaces",
          description: "Visit Potala Palace, Jokhang Temple, and Norbulingka summer residence."
        },
        {
          title: "Day 3: Yamdrok Lake Excursion",
          description: "Drive over Kamba La pass to the turquoise Yamdrok Lake with picnic lunch."
        }
      ],
      inclusions: [
        "Airport transfers in Lhasa",
        "Guided sightseeing with entrance fees",
        "Travel permits for Tibet"
      ],
      exclusions: [
        "International flights",
        "Personal expenses and tipping",
        "Travel insurance"
      ],
      documentsRequired: ["Passport (valid 6 months)", "Chinese Travel Permit"],
      notes: ["Slow-paced itinerary suitable for acclimatization", "Seasonal departures from April to October"]
    }
  },
  {
    slug: "thailand-tour",
    title: "Thailand Tour Packages",
    img: "/assets/home/thai.jpg",
    desc: "Experience bustling Bangkok, serene temples, and beach escapes.",
    detail: {
      badge: "Island Explorer",
      about:
        "Dive into Thailand's vibrant culture with floating markets, golden temples, and island sunsets perfectly balanced for first-time visitors.",
      meals: "Daily Breakfast",
      maxGroupSize: "18",
      highlights: [
        "Bangkok city and temple tour",
        "Private long-tail boat at Damnoen Saduak floating market",
        "Sunset cruise in Phuket"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Bangkok Highlights",
          description: "Grand Palace, Wat Pho, and evening tuk-tuk street food safari."
        },
        {
          title: "Day 2: Floating Market & Ayutthaya",
          description: "Canal boat ride and UNESCO heritage park exploration."
        },
        {
          title: "Day 3: Phuket Island Hopping",
          description: "Speedboat tour to Phi Phi and Khai Islands with snorkeling."
        }
      ],
      inclusions: [
        "4-star accommodation in Bangkok and Phuket",
        "All internal transfers",
        "English-speaking local guides"
      ],
      exclusions: ["International flights", "Visa on arrival fees", "Personal shopping and meals not listed"],
      notes: ["Custom extensions to Krabi or Chiang Mai available"]
    }
  },
  {
    slug: "sri-lanka-tour",
    title: "Sri Lanka Tour Packages",
    img: "/assets/home/sril.jpg",
    desc: "From misty tea estates to golden beaches and sacred temples.",
    detail: {
      badge: "Cultural Triangle Escape",
      about:
        "Trace the footsteps of ancient kings, hike rainforest-clad peaks, and unwind along the south coast on this curated Sri Lankan getaway.",
      meals: "Breakfast & Select Dinners",
      maxGroupSize: "14",
      highlights: [
        "Sigiriya Rock Fortress sunrise hike",
        "Tea tasting in Nuwara Eliya estates",
        "Galle Fort walking tour"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Cultural Triangle",
          description: "Arrive in Colombo, travel to Sigiriya, sunset village safari."
        },
        {
          title: "Day 2: Kandy & Tea Country",
          description: "Temple of the Tooth, scenic train to Nuwara Eliya, tea factory tour."
        },
        {
          title: "Day 3: Southern Serenade",
          description: "Drive to Galle, explore the fort ramparts, and relax on Bentota Beach."
        }
      ],
      inclusions: ["Private AC vehicle", "Licensed chauffeur-guide", "Entrance to listed monuments"],
      exclusions: ["Lunches unless specified", "Camera/video permits", "Personal expenses"],
      notes: ["Whale watching add-on available November to April"]
    }
  },
  {
    slug: "nepal-tourism",
    title: "Nepal Tourism",
    img: "/assets/home/nep.jpg",
    desc: "Snow-capped peaks, spiritual stupas, and vibrant bazaars await.",
    detail: {
      badge: "Mountain & Heritage Blend",
      about:
        "Experience the magic of Kathmandu's UNESCO squares, the serenity of Pokhara's lakeside, and Himalayan panoramas from Sarangkot.",
      meals: "Breakfast",
      maxGroupSize: "16",
      highlights: [
        "Everest scenic flight (optional)",
        "Pashupatinath & Boudhanath spiritual walk",
        "Sunrise over Annapurnas from Sarangkot"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Kathmandu Heritage",
          description: "Explore Durbar Square, Swayambhunath, and local craft workshops."
        },
        {
          title: "Day 2: Pokhara Retreat",
          description: "Drive to Pokhara, boating on Phewa Lake, evening leisure."
        },
        {
          title: "Day 3: Annapurna Vista",
          description: "Sunrise at Sarangkot, visit Peace Pagoda and lakeside cafes."
        }
      ],
      inclusions: ["Domestic transfer Kathmandu–Pokhara", "Licensed city guides", "All applicable taxes"],
      exclusions: ["Adventure sports fees", "Tips and personal expenses"],
      notes: ["Upgrade to luxury lodges available on request"]
    }
  },
  {
    slug: "maldives-trip",
    title: "Magical Maldives Trip",
    img: "/assets/home/magl.jpg",
    desc: "Unwind in luxury water villas surrounded by turquoise lagoons.",
    detail: {
      badge: "Luxury Escape",
      about:
        "Slip into island life with overwater villas, sunset cruises, and curated experiences perfect for couples and families alike.",
      meals: "Half Board (Breakfast & Dinner)",
      maxGroupSize: "Private",
      highlights: [
        "Private speedboat transfer",
        "Sunset dolphin cruise",
        "Guided house reef snorkeling"
      ],
      accommodations: [
        {
          name: "Velana Lagoon Resort or Similar",
          nights: "3 nights",
          location: "North Malé Atoll",
          roomType: "Overwater Villa",
          mealsIncluded: "Breakfast & Dinner"
        }
      ],
      dayWisePlan: [
        {
          title: "Day 1: Arrival & Sunset",
          description: "Fly into Malé, speedboat to resort, unwind with spa or beach time, sunset cruise."
        },
        {
          title: "Day 2: Ocean Adventures",
          description: "House reef snorkeling, optional diving, romantic sandbank picnic."
        },
        {
          title: "Day 3: Wellness & Farewell",
          description: "Yoga session, indulgent breakfast, leisure until departure transfer."
        }
      ],
      inclusions: ["Return airport transfers", "Selected non-motorized water sports", "Daily minibar refills"],
      exclusions: ["International flights", "Alcoholic beverages unless specified", "Spa treatments"],
      notes: ["Upgrade to all-inclusive plan available"]
    }
  },
  {
    slug: "bhutan-trip",
    title: "Bhutan Trip",
    img: "/assets/home/bhut.jpg",
    desc: "Discover the Land of the Thunder Dragon and its happy valleys.",
    detail: {
      badge: "Guaranteed Fixed Departure",
      about:
        "Marvel at the beauty of Bhutan with this travel package that takes you through its most enchanting destinations. Begin with a scenic descent into Bagdogra Airport or NJP Railway Station, followed by a transfer to Phuentsholing. Explore the local markets before heading to Thimphu, the capital city, where you'll visit cultural landmarks like the National Memorial Chorten, Buddha Point, and the Takin Preserve. The journey continues to Punakha, home to the stunning Punakha Dzong and the historic Punakha Suspension Bridge. In Paro, the highlight is an excursion to the iconic Taktshang Monastery, perched dramatically on a cliffside. The tour also includes visits to Ta Dzong and Rinpung Dzong, showcasing Bhutan's rich art and architecture. Conclude your adventure with a return to Phuentsholing before departing from Bagdogra or NJP Railway Station. This package offers a perfect blend of natural beauty, cultural immersion, and spiritual experiences.",
      meals: "Breakfast & Dinner",
      maxGroupSize: "10",
      highlights: [
        "Accommodation in all destinations",
        "Daily breakfast & dinner",
        "All tours and transfers on point-to-point basis",
        "Thimphu local sightseeing",
        "Punakha excursion",
        "Excursion to Taktshang Monastery",
        "All permit fees and hotel taxes as per itinerary"
      ],
      accommodations: [
        {
          name: "Hotel Bhutan Ga Me Ga or Similar",
          nights: "1 night",
          location: "Phuntsholing",
          roomType: "Standard Double",
          mealsIncluded: "Breakfast & Dinner"
        },
        {
          name: "Hotel Dralha or Similar",
          nights: "2 nights",
          location: "Thimphu",
          roomType: "Double Room",
          mealsIncluded: "Breakfast & Dinner"
        },
        {
          name: "Punakha Residency or Similar",
          nights: "1 night",
          location: "Punakha",
          roomType: "Standard Double/Twin",
          mealsIncluded: "Breakfast & Dinner"
        },
        {
          name: "Udumwara Resort or Similar",
          nights: "2 nights",
          location: "Paro",
          roomType: "Double Room",
          mealsIncluded: "Breakfast & Dinner"
        },
        {
          name: "Hotel Bhutan Ga Me Ga or Similar",
          nights: "1 night",
          location: "Phuntsholing",
          roomType: "Standard Double",
          mealsIncluded: "Breakfast & Dinner"
        }
      ],
      inclusions: [
        "IXB/NJP to Phuentsholing drop",
        "Phuentsholing to IXB/NJP drop",
        "Thimphu local sightseeing",
        "Thimphu to Punakha transfer with sightseeing",
        "Punakha to Paro transfer with local sightseeing",
        "Tiger's Nest hike",
        "Paro to Phuentsholing drop"
      ],
      excursions: [
        "Day excursion to Taktshang Monastery",
        "Chelala Pass scenic drive"
      ],
      dayWisePlan: [
        {
          title: "Day 1: NJP/IXB – Phuentsholing",
          description:
            "Meet & greet at NJP Railway Station or IXB Airport, transfer to Phuentsholing, explore local markets, overnight stay."
        },
        {
          title: "Day 2: Phuentsholing to Thimphu",
          description:
            "Border immigration by 8:30 AM, scenic drive with photo stop at Chojum, evening arrival and leisure time in Thimphu."
        },
        {
          title: "Day 3: Thimphu Sightseeing",
          description:
            "Visit Kuenselphodrang, National Memorial Chorten, Folk Heritage Museum, Sangaygang viewpoint, Takin Reserve, Tashichho Dzong, and Simply Bhutan."
        },
        {
          title: "Day 4: Thimphu to Punakha via Dochula Pass",
          description:
            "Drive through Dochula Pass, visit Punakha Dzong, Chimi Lhakhang, Punakha Suspension Bridge, and Punakha Village."
        },
        {
          title: "Day 5: Punakha to Paro",
          description:
            "Scenic drive via Dochu La Pass, visit Simtokha Dzong, Ta Dzong, Rinpung Dzong, and Tamchog Lhakhang before Paro check-in."
        },
        {
          title: "Day 6: Taktsang Monastery Excursion",
          description:
            "Early breakfast followed by hike to Tiger's Nest, optional visit to Kyichu Lhakhang, overnight in Paro."
        },
        {
          title: "Day 7: Chele La Pass & Transfer to Phuentsholing",
          description:
            "Excursion to Chele La Pass with views of Mt. Jomolhari, evening leisure and overnight stay back in Phuentsholing."
        },
        {
          title: "Day 8: Departure",
          description:
            "Checkout, exit immigration, and drive to NJP Railway Station or IXB Airport for onward journey."
        }
      ],
      exclusions: [
        "Airfare / train fare",
        "Personal expenses (laundry, calls, tips, drinks)",
        "Additional sightseeing or vehicle use beyond itinerary",
        "Entrance fees",
        "Tax/fuel price increases affecting transport cost",
        "Room heater charges",
        "Travel insurance",
        "Medical or rescue evacuation"
      ],
      cancellationPolicy: [
        "30 days before arrival – 25% of tour cost",
        "29-15 days before arrival – 50% of tour cost",
        "14-0 days before arrival – 100% of tour cost"
      ],
      documentsRequired: ["Valid Voter ID", "Passport", "Driving License"],
      notes: [
        "PAN Card & Aadhaar Card are not accepted as valid ID",
        "All trips are subject to weather conditions",
        "Rates are valid for Indian nationals only"
      ]
    }
  },
  {
    slug: "baku-trip",
    title: "Discover Baku Trip",
    img: "/assets/home/disbaku.jpg",
    desc: "Azerbaijan's capital blends medieval walls with futuristic flame towers.",
    detail: {
      badge: "Caspian Discovery",
      about:
        "Discover Baku's past and future with guided strolls through Icherisheher's narrow alleys, contemporary art spaces, and Caspian Sea promenades.",
      meals: "Breakfast & Dinner",
      maxGroupSize: "20",
      highlights: [
        "Icherisheher old city walk",
        "Gabala mountains day trip",
        "Caspian sea boulevard sunset"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Old Meets New",
          description: "Arrive, explore Maiden Tower, Shirvanshahs' Palace, and night view of Flame Towers."
        },
        {
          title: "Day 2: Gobustan & Mud Volcanoes",
          description: "Petroglyph museum visit and jeep safari to bubbling mud volcanoes."
        },
        {
          title: "Day 3: Gabala Adventure",
          description: "Cable car ride in Tufandag mountains, winery visit, and return to Baku."
        }
      ],
      inclusions: ["Airport-hotel transfers", "Daily breakfast & 2 dinners", "Entrance fees for listed attractions"],
      exclusions: ["Visa fees", "Lunches", "Personal expenses"],
      notes: ["Extend to Sheki or Ganja on request"]
    }
  },
  {
    slug: "dubai-trip",
    title: "Feel the Future - Dubai",
    img: "/assets/home/ftf.jpg",
    desc: "Skyscrapers, desert adventures, and shopping splendor in Dubai.",
    detail: {
      badge: "City of Superlatives",
      about:
        "Experience Dubai's awe-inspiring skyline, adrenaline-filled desert activities, and world-class entertainment in a compact luxury getaway.",
      meals: "Breakfast",
      maxGroupSize: "22",
      highlights: [
        "Burj Khalifa at the Top access",
        "Premium desert safari with BBQ dinner",
        "Dhow cruise on Dubai Marina"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Icons of Dubai",
          description: "Arrive, visit Dubai Frame, Dubai Mall, and evening at Burj Khalifa observation deck."
        },
        {
          title: "Day 2: Desert Thrills",
          description: "Morning leisure or optional Abu Dhabi excursion, afternoon desert safari with dune bashing and cultural performances."
        },
        {
          title: "Day 3: Waterfront Wonders",
          description: "Explore Palm Jumeirah, Atlantis, and enjoy evening dhow cruise with dinner on Dubai Marina."
        }
      ],
      inclusions: ["Private airport transfers", "3-night stay in 4-star hotel", "All tours with guide"],
      exclusions: ["UAE visa fees", "Flights", "Meals not specified"],
      notes: ["Upgrade to luxury hotel packages available"]
    }
  },
  {
    slug: "west-india-tours",
    title: "West India Tours",
    img: "/assets/home/west.jpg",
    desc: "Sun-soaked coasts, desert dunes, and vibrant cities across Western India.",
    detail: {
      badge: "Signature West Circuit",
      about:
        "Blend the cultural charisma of Mumbai, the artisanal alleys of Kutch, and the relaxed vibes of Goa on this curated western odyssey.",
      meals: "Breakfast & Dinner",
      maxGroupSize: "18",
      highlights: [
        "Gateway of India sunrise walk",
        "Rann of Kutch white desert safari",
        "Heritage trail of Old Goa churches"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Mumbai Icons",
          description: "Marine Drive promenade, Crawford Market tastings, and Bollywood studio walkthrough."
        },
        {
          title: "Day 2: Kutch Craftscape",
          description: "Fly to Bhuj, meet local artisans, sunset at the Great Rann salt flats."
        },
        {
          title: "Day 3: Goa Leisure",
          description: "Drive to Goa, explore Portuguese quarters, beach sundowner and seafood dinner."
        }
      ],
      inclusions: ["Domestic flights within the region", "Guided city tours", "Daily breakfast"],
      exclusions: ["Personal expenses", "Alcoholic beverages", "Optional adventure activities"],
      notes: ["Extend to Aurangabad for Ajanta & Ellora caves on request"]
    }
  },
  {
    slug: "north-east-sikkim",
    title: "North East - Sikkim",
    img: "/assets/home/nest.jpg",
    desc: "Mist-laden monasteries and emerald valleys in Sikkim's highlands.",
    detail: {
      badge: "Himalayan Serenity",
      about:
        "Experience prayer flag valleys, alpine lakes, and tea gardens while meeting mountain communities that define the Northeast's charm.",
      meals: "Breakfast & Dinner",
      maxGroupSize: "14",
      highlights: [
        "Ropeway ride over Gangtok",
        "Excursion to Tsomgo Lake & Baba Mandir",
        "Village walk in Temi tea estate"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Gangtok Welcome",
          description: "Arrive via Bagdogra/NJP, transfer to Gangtok, evening MG Marg stroll."
        },
        {
          title: "Day 2: High Altitude Wonders",
          description: "Drive to Tsomgo Lake and Baba Mandir, optional Yak ride, return via snow-clad vistas."
        },
        {
          title: "Day 3: Monastery Circuit",
          description: "Visit Rumtek & Enchey monasteries, continue to Temi tea garden for tasting session."
        }
      ],
      inclusions: ["All surface transfers", "Inner line permits", "Local guide support"],
      exclusions: ["Camera fees", "Adventure sports", "Lunches"],
      notes: ["Weather-dependent access to high-altitude lakes"]
    }
  },
  {
    slug: "andaman-awaits",
    title: "Andaman Awaits",
    img: "/assets/home/andman.jpg",
    desc: "Turquoise waters, coral reefs, and island life in the Andamans.",
    detail: {
      badge: "Island Escape",
      about:
        "Hop between Port Blair, Havelock, and Neil Island to snorkel clear reefs, laze on powdery beaches, and witness history at Cellular Jail.",
      meals: "Breakfast",
      maxGroupSize: "Private",
      highlights: [
        "Sound & light show at Cellular Jail",
        "Radhanagar Beach sunset",
        "Glass-bottom boat at North Bay"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Port Blair Stories",
          description: "Arrive, visit Cellular Jail museum, evening show on freedom struggle tales."
        },
        {
          title: "Day 2: Havelock Retreat",
          description: "Cruise to Havelock, explore Radhanagar Beach, optional scuba session."
        },
        {
          title: "Day 3: Neil Island Charm",
          description: "Beach hopping across Bharatpur and Laxmanpur, return cruise to Port Blair."
        }
      ],
      inclusions: ["Inter-island ferry tickets", "Airport transfers", "Snorkelling gear (shared)"],
      exclusions: ["Scuba diving fees", "Meals not specified", "Travel insurance"],
      notes: ["Ideal travel window October to April"]
    }
  },
  {
    slug: "north-india-classics",
    title: "North India Classics",
    img: "/assets/home/north.jpg",
    desc: "From royal Rajasthan to spiritual Varanasi on one epic trail.",
    detail: {
      badge: "Golden Heritage Trail",
      about:
        "Witness Taj Mahal sunrises, Jaipur's palaces, and the ghats of Varanasi while sampling the region's signature cuisine and crafts.",
      meals: "Breakfast",
      maxGroupSize: "20",
      highlights: [
        "Sunrise visit to Taj Mahal",
        "Amber Fort jeep ride",
        "Ganga aarti boat experience"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Delhi & Agra",
          description: "City tour of Old Delhi, drive to Agra, Mehtab Bagh sunset."
        },
        {
          title: "Day 2: Jaipur Royalty",
          description: "Stop at Fatehpur Sikri, reach Jaipur for Amber Fort, Hawa Mahal, and local bazaar."
        },
        {
          title: "Day 3: Varanasi Spiritual Sojourn",
          description: "Fly to Varanasi, evening boat ride for Ganga Aarti, explore narrow alleys."
        }
      ],
      inclusions: ["AC transportation", "Monument entry fees", "Professional tour manager"],
      exclusions: ["Domestic flights", "Meals beyond breakfast", "Tips"],
      notes: ["Add Ranthambore safari as optional extension"]
    }
  },
  {
    slug: "lakshadweep-escape",
    title: "Lakshadweep Escape",
    img: "/assets/home/laksh.jpg",
    desc: "Pristine lagoons and coral gardens in India's emerald archipelago.",
    detail: {
      badge: "Island Hideaway",
      about:
        "Sail to Kavaratti and Bangaram islands for translucent waters, reef walks, and laid-back island hospitality.",
      meals: "All Meals",
      maxGroupSize: "12",
      highlights: [
        "Snorkelling over coral gardens",
        "Lagoon kayaking",
        "Local island village interactions"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Kochi to Kavaratti",
          description: "Board cruise from Kochi, arrive Kavaratti, sunset beach barbecue."
        },
        {
          title: "Day 2: Lagoon Adventures",
          description: "Glass-bottom boat ride, snorkeling, evening cultural showcase."
        },
        {
          title: "Day 3: Bangaram Bliss",
          description: "Excursion to Bangaram island, leisure by the lagoon, depart cruise to Kochi."
        }
      ],
      inclusions: ["Ship cabin accommodation", "All meals on board", "Permits for Lakshadweep"],
      exclusions: ["Water sports beyond itinerary", "Alcoholic beverages", "Travel insurance"],
      notes: ["Limited departures; book 30 days in advance"]
    }
  },
  {
    slug: "south-india-escape",
    title: "South India Escape",
    img: "/assets/home/south.jpg",
    desc: "Temple towns, spice-scented hills, and coastal serenity.",
    detail: {
      badge: "Southern Mosaic",
      about:
        "Traverse Chennai's heritage, Madurai's temples, and Kerala's backwaters with curated culinary and cultural experiences.",
      meals: "Breakfast & Dinner",
      maxGroupSize: "18",
      highlights: [
        "Sound & light show at Shore Temple",
        "Madurai evening puja",
        "Private houseboat cruise in Alleppey"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Chennai & Mahabalipuram",
          description: "Walk the colonial quarters, visit UNESCO-listed Shore Temple, savor filter coffee workshop."
        },
        {
          title: "Day 2: Temple Trail",
          description: "Drive to Madurai, explore Meenakshi Amman Temple, night ceremony."
        },
        {
          title: "Day 3: Kerala Backwaters",
          description: "Transfer to Alleppey, board houseboat with chef-curated meals, sunset on the lagoons."
        }
      ],
      inclusions: ["Intercity transfers", "2 nights hotel + 1 night houseboat", "Guided temple visits"],
      exclusions: ["Camera fees", "Lunches", "Gratuities"],
      notes: ["Extend to Coorg or Ooty for hill stays"]
    }
  },
  {
    slug: "honeymoon-getaways",
    title: "Honeymoon Getaways",
    img: "/assets/home/honeymoon.jpg",
    desc: "Romantic retreats with curated surprises for newlyweds.",
    detail: {
      badge: "Couples' Choice",
      about:
        "Tailor-made honeymoon escapes with candlelight dinners, private excursions, and spa indulgences across India's most romantic destinations.",
      meals: "Breakfast & One Special Dinner",
      maxGroupSize: "Private",
      highlights: [
        "Couples spa ritual",
        "Sunset cruise or private picnic",
        "Honeymoon decor on arrival"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Arrival & Pampering",
          description: "Airport pickup, welcome drinks, evening candlelight dinner."
        },
        {
          title: "Day 2: Discover Together",
          description: "Guided city tour tailored for couples with photo stops and curated tastings."
        },
        {
          title: "Day 3: Leisure & Memories",
          description: "Spa therapy followed by sunset cruise or mountain picnic, late checkout."
        }
      ],
      inclusions: ["Airport transfers", "Romantic room setup", "24/7 concierge"],
      exclusions: ["Flights", "Alcohol unless specified", "Optional excursions"],
      notes: ["Customise between beach, hill, or heritage destinations"]
    }
  },
  {
    slug: "adventure-wildlife",
    title: "Adventure & Wildlife",
    img: "/assets/home/adventure.jpg",
    desc: "Thrilling safaris and adrenaline-packed adventures across India.",
    detail: {
      badge: "Wild & Free",
      about:
        "Track majestic tigers, raft Himalayan rivers, and trek through biodiverse forests with experts leading every expedition.",
      meals: "Breakfast & Safari Refreshments",
      maxGroupSize: "12",
      highlights: [
        "Jeep safaris in Ranthambore or Kanha",
        "White-water rafting session",
        "Night jungle walk with naturalist"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Into the Wild",
          description: "Arrive at the lodge, evening naturalist briefing, night safari drive."
        },
        {
          title: "Day 2: Safari & Rapids",
          description: "Morning jeep safari, afternoon transfer for river rafting adventure."
        },
        {
          title: "Day 3: Trek & Depart",
          description: "Guided jungle trek spotting flora and birdlife, depart post lunch."
        }
      ],
      inclusions: ["National park permits", "Expert guides", "All activity gear"],
      exclusions: ["Gratuities", "Personal insurance", "Meals not listed"],
      notes: ["Seasonal park closures apply"]
    }
  },
  {
    slug: "sea-sun-sand",
    title: "Sea, Sun & Sand",
    img: "/assets/home/seasunsand.jpg",
    desc: "Beachfront bliss with curated coastal experiences.",
    detail: {
      badge: "Coastal Collection",
      about:
        "Wake up to ocean breezes, enjoy private beach picnics, and dive into water sports tailored to your pace across India's best shores.",
      meals: "Breakfast",
      maxGroupSize: "Private",
      highlights: [
        "Private cabana setup",
        "Jet ski or parasailing session",
        "Sunset seafood dinner"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Coastal Arrival",
          description: "Check into beach resort, unwind with spa or pool time, evening bonfire."
        },
        {
          title: "Day 2: Water Adventures",
          description: "Choice of water sports, coastal cycling trail, beachside lunch."
        },
        {
          title: "Day 3: Local Flavours",
          description: "Market walk with chef, cooking demo, late checkout with transfer."
        }
      ],
      inclusions: ["Airport transfers", "Beach activity kit", "Daily breakfast"],
      exclusions: ["Alcoholic beverages", "Premium water sports", "Travel insurance"],
      notes: ["Available in Goa, Kovalam, and Andaman"]
    }
  },
  {
    slug: "heritage-culture-tour",
    title: "Heritage & Culture Tour",
    img: "/assets/home/heritageculture.jpg",
    desc: "Immersive journeys through India's timeless arts and architecture.",
    detail: {
      badge: "Culture Connoisseur",
      about:
        "Discover UNESCO sites, classical performances, and artisan workshops spanning royal forts, stepwells, and storied streets.",
      meals: "Breakfast & Select Dinners",
      maxGroupSize: "16",
      highlights: [
        "Guided walk through UNESCO World Heritage sites",
        "Interactive craft workshop with artisans",
        "Evening classical dance performance"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Forts & Palaces",
          description: "Explore city palace complexes and royal museums with expert historian."
        },
        {
          title: "Day 2: Living Heritage",
          description: "Visit artisan quarters, try block-printing or pottery, taste traditional cuisine."
        },
        {
          title: "Day 3: Sacred Sites",
          description: "Experience morning rituals at ancient temples or ghats before departure."
        }
      ],
      inclusions: ["Licensed heritage storyteller", "Entry passes", "Cultural evening tickets"],
      exclusions: ["Personal shopping", "Meals not mentioned", "Tips"],
      notes: ["Customise to Rajasthan, Gujarat, or Tamil Nadu circuits"]
    }
  },
  {
    slug: "forts-palaces-tour",
    title: "Forts & Palaces",
    img: "/assets/home/fortsplaces.jpg",
    desc: "Live the regal legacy in India's grandest forts and palace stays.",
    detail: {
      badge: "Royal Retreat",
      about:
        "Stay in heritage hotels, dine in royal courtyards, and retrace the lives of maharajas across Rajasthan's marquee destinations.",
      meals: "Breakfast & Dinner",
      maxGroupSize: "18",
      highlights: [
        "Vintage car ride in Udaipur",
        "Camel safari near Jaisalmer fort",
        "Private dinner on palace terrace"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Udaipur Grandeur",
          description: "Check into lakefront palace hotel, evening boat ride on Lake Pichola."
        },
        {
          title: "Day 2: Golden Sands",
          description: "Drive to Jaisalmer, explore Sonar Qila, sunset camel ride at Sam dunes."
        },
        {
          title: "Day 3: Jaipur Royalty",
          description: "Explore City Palace, Jantar Mantar, and dine at a restored haveli."
        }
      ],
      inclusions: ["Heritage hotel stays", "Guided tours", "Daily breakfast & dinner"],
      exclusions: ["Domestic flights", "Alcohol", "Personal expenses"],
      notes: ["Add Jodhpur or Bikaner for longer itineraries"]
    }
  },
  {
    slug: "festivals-tour",
    title: "Festivals Tour",
    img: "/assets/home/festivalstours.jpg",
    desc: "Celebrate India's vibrant festivals with insider access.",
    detail: {
      badge: "Seasonal Spectacle",
      about:
        "Dance with locals during Navratri, play colours during Holi, or float lanterns at Diwali with curated, culturally sensitive experiences.",
      meals: "Breakfast",
      maxGroupSize: "20",
      highlights: [
        "Festival orientation with cultural expert",
        "Traditional attire styling session",
        "Hands-on local sweet making"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Welcome & Walkthrough",
          description: "Arrive and learn festival etiquette, enjoy themed city walk."
        },
        {
          title: "Day 2: Festival Immersion",
          description: "Join main celebration safely with guide, savour festive cuisine."
        },
        {
          title: "Day 3: Community Give-back",
          description: "Participate in local craft or community activity, depart with memories."
        }
      ],
      inclusions: ["Festival kits", "Local escort", "Curated experiences"],
      exclusions: ["Donation contributions", "Alcohol", "Travel insurance"],
      notes: ["Subject to festival calendar and availability"]
    }
  },
  {
    slug: "ayurveda-spa-tour",
    title: "Ayurveda & Spa Tour",
    img: "/assets/home/ayurvedaspa.jpg",
    desc: "Holistic wellness retreats rooted in Ayurveda and spa therapies.",
    detail: {
      badge: "Wellness Journey",
      about:
        "Detox, rejuvenate, and rebalance with personalised Ayurvedic consultations, daily therapies, and mindful rituals in serene retreats.",
      meals: "Ayurvedic Meal Plan",
      maxGroupSize: "Private",
      highlights: [
        "Doctor-led Ayurveda consultation",
        "Daily oil therapies & yoga sessions",
        "Nutrition workshops"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Diagnosis & Detox",
          description: "Arrival assessment, tailored treatment plan, gentle detox meals."
        },
        {
          title: "Day 2: Therapy & Mindfulness",
          description: "Abhyanga massage, shirodhara session, evening meditation by the lake."
        },
        {
          title: "Day 3: Lifestyle Blueprint",
          description: "Yoga at dawn, nutrition class, personalised take-home regimen."
        }
      ],
      inclusions: ["Accommodation in wellness retreat", "All prescribed therapies", "Herbal beverages"],
      exclusions: ["Airfare", "Non-Ayurvedic meals", "Optional excursions"],
      notes: ["Packages range from 3 to 14 nights"]
    }
  },
  {
    slug: "luxury-trains-india",
    title: "Luxury Trains in India",
    img: "/assets/home/luxurytrains.jpg",
    desc: "Royal rail journeys aboard India's finest luxury trains.",
    detail: {
      badge: "Palace on Wheels",
      about:
        "Step aboard heritage-inspired coaches, dine in ornate restaurants, and explore a new city each day with curated off-train excursions.",
      meals: "All Gourmet Meals",
      maxGroupSize: "Limited Cabins",
      highlights: [
        "Stay in ensuite royal cabins",
        "Guided off-train excursions",
        "Evening cultural performances"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Embark & Gala",
          description: "Board the train, welcome ceremony, fine-dining dinner as train departs."
        },
        {
          title: "Day 2: Heritage Expedition",
          description: "Morning excursion to palaces/forts, onboard lunch, evening cultural show."
        },
        {
          title: "Day 3: Wildlife & Wellness",
          description: "Guided safari or spa stopover, sundowner back onboard, themed dinner."
        }
      ],
      inclusions: ["Cabin accommodation", "All meals and beverages", "Excursions with guides"],
      exclusions: ["Gratuities", "Spa or bar extras", "Laundry"],
      notes: ["Choose from Palace on Wheels, Maharajas' Express, Deccan Odyssey"]
    }
  },
  {
    slug: "pilgrimage-tour",
    title: "Pilgrimage Tour",
    img: "/assets/home/pilgrimagetour.jpg",
    desc: "Sacred circuits across India's revered temples and shrines.",
    detail: {
      badge: "Spiritual Sojourn",
      about:
        "Embark on soulful journeys to Jyotirlingas, Char Dham temples, or Buddhist circuits with spiritual guides and comfortable stays.",
      meals: "Vegetarian Meals",
      maxGroupSize: "22",
      highlights: [
        "Ritual participation with priest",
        "Private aarti arrangements",
        "Mythology storytelling sessions"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Arrival & Orientation",
          description: "Arrive, receive pilgrimage kit, evening satsang or meditation."
        },
        {
          title: "Day 2: Temple Circuits",
          description: "Visit main shrines with VIP darshan assistance, learn local legends."
        },
        {
          title: "Day 3: Ritual & Return",
          description: "Perform concluding rituals, community lunch, departure."
        }
      ],
      inclusions: ["Priority darshan arrangements", "Local priest or guide", "All transfers"],
      exclusions: ["Donation offerings", "Camera charges", "Personal expenses"],
      notes: ["Destinations include Varanasi, Rameswaram, Shirdi, Bodh Gaya"]
    }
  },
  {
    slug: "first-timers-tour",
    title: "First Timers Tours",
    img: "/assets/home/firsttimertours.jpg",
    desc: "Perfect introduction itineraries for first-time travellers to India.",
    detail: {
      badge: "Essential India",
      about:
        "Curated highlights combining iconic monuments, local markets, and immersive experiences designed for travellers seeing India for the first time.",
      meals: "Breakfast",
      maxGroupSize: "20",
      highlights: [
        "Orientation walk on arrival",
        "Cooking class with local family",
        "Iconic monument photo sessions"
      ],
      dayWisePlan: [
        {
          title: "Day 1: City Icons",
          description: "Arrive, guided orientation walk, evening welcome dinner."
        },
        {
          title: "Day 2: Markets & Monuments",
          description: "Visit top sights with expert guide, sample street food, shopping tips included."
        },
        {
          title: "Day 3: Culture Connect",
          description: "Participate in hands-on workshop, farewell brunch, airport transfer."
        }
      ],
      inclusions: ["Airport pick-up & drop", "Guided sightseeing", "Daily breakfast"],
      exclusions: ["Entry visas", "Tips", "Optional excursions"],
      notes: ["Customize length from 5 to 12 days"]
    }
  },
  {
    slug: "famous-hill-stations",
    title: "Famous Hill Stations",
    img: "/assets/home/famoushill.jpg",
    desc: "Cool-climate retreats in India's picturesque hill towns.",
    detail: {
      badge: "Highland Hideouts",
      about:
        "Sip tea in Darjeeling, ride toy trains in Shimla, and enjoy colonial cottages amidst pine forests and mountain vistas.",
      meals: "Breakfast",
      maxGroupSize: "16",
      highlights: [
        "Toy train ride",
        "Tea plantation visit",
        "Sunrise point excursion"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Darjeeling Delights",
          description: "Arrive, visit Mall Road and local bakeries, evening cultural show."
        },
        {
          title: "Day 2: Himalayan Sunrise",
          description: "Tiger Hill sunrise, Ghoom Monastery, tea garden walk with tasting."
        },
        {
          title: "Day 3: Shimla Strolls",
          description: "Fly/train to Shimla, heritage walk on the Ridge, depart post lunch."
        }
      ],
      inclusions: ["Mountain view rooms", "Toy train tickets", "Local transfers"],
      exclusions: ["Heater charges", "Adventure add-ons", "Meals not mentioned"],
      notes: ["Best travel window March to June & October to December"]
    }
  },
  {
    slug: "same-day-india-tour",
    title: "Same Day India Tour",
    img: "/assets/home/samedayindiatour.jpg",
    desc: "Quick getaways designed for whirlwind day trips from major cities.",
    detail: {
      badge: "Day Tripper",
      about:
        "Make the most of a single day with express itineraries covering must-see attractions, curated meals, and swift transfers.",
      meals: "Breakfast & Lunch",
      maxGroupSize: "Private or Small Groups",
      highlights: [
        "Express entry to marquee attraction",
        "Curated tasting menu",
        "Dedicated chauffeur-guide"
      ],
      dayWisePlan: [
        {
          title: "Morning: Departure & Landmark",
          description: "Hotel pickup, scenic drive/train, guided tour of headline attraction."
        },
        {
          title: "Afternoon: Local Flavours",
          description: "Chef-led lunch, stroll through artisan market or museum."
        },
        {
          title: "Evening: Return",
          description: "Sunset photo stop, drop back to hotel/airport."
        }
      ],
      inclusions: ["Private vehicle", "Entrance fees", "Expert guide"],
      exclusions: ["Tips", "Personal purchases", "Additional meals"],
      notes: ["Popular routes include Delhi-Agra, Jaipur-Pushkar, Mumbai-Alibaug"]
    }
  },
  {
    slug: "fixed-departure-tours",
    title: "Fixed Departure Tours",
    img: "/assets/home/fixeddeparture.jpg",
    desc: "Pre-scheduled group departures with guaranteed dates.",
    detail: {
      badge: "Join a Group",
      about:
        "Secure your spot on expertly planned departures that balance iconic sights, cultural insights, and free time at value-driven prices.",
      meals: "Breakfast & Select Dinners",
      maxGroupSize: "25",
      highlights: [
        "Guaranteed departure dates",
        "Handpicked hotels",
        "Dedicated tour manager"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Arrival & Meet",
          description: "Check-in, meet fellow travellers, welcome briefing with snacks."
        },
        {
          title: "Day 2: City Highlights",
          description: "Guided sightseeing covering key attractions, group dinner."
        },
        {
          title: "Day 3: Optional Adventures",
          description: "Choose curated add-ons or enjoy leisure time before departure."
        }
      ],
      inclusions: ["Group airport transfers", "Sightseeing coach", "Professional tour manager"],
      exclusions: ["Single room supplement", "Flights", "Personal expenses"],
      notes: ["Early-bird discounts available"]
    }
  },
  {
    slug: "buddhist-heritage-tour",
    title: "Buddhist Heritage Tour",
    img: "/assets/home/buddhistheritage.jpg",
    desc: "Walk in the footsteps of the Buddha across India and Nepal.",
    detail: {
      badge: "Sacred Path",
      about:
        "Visit Lumbini, Bodh Gaya, Sarnath, and Kushinagar with monks and scholars illuminating the life and teachings of the Buddha.",
      meals: "Vegetarian Meals",
      maxGroupSize: "20",
      highlights: [
        "Meditation at Bodhi Tree",
        "Evening chanting with monks",
        "Insightful Dharma talks"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Bodh Gaya Insights",
          description: "Arrive, meditate under Bodhi Tree, visit Mahabodhi Temple complex."
        },
        {
          title: "Day 2: Sarnath & Varanasi",
          description: "Travel to Sarnath for Dhamek Stupa, evening Ganga Aarti in Varanasi."
        },
        {
          title: "Day 3: Lumbini Pilgrimage",
          description: "Cross to Nepal, explore Maya Devi Temple, monastic zone tour."
        }
      ],
      inclusions: ["Air-conditioned coach", "Monastic guide", "Meditation sessions"],
      exclusions: ["Visa fees", "International flights", "Personal donations"],
      notes: ["Open to practitioners and curious travellers alike"]
    }
  },
  {
    slug: "asia-food-trail",
    title: "Asia Food Trail",
    img: "/assets/home/asiafoodtrail.jpg",
    desc: "Taste your way through Asia's most exciting culinary hubs.",
    detail: {
      badge: "Gourmet Journey",
      about:
        "Discover spice markets, street eats, and chef's tables across Bangkok, Singapore, Kuala Lumpur, and beyond with local food experts.",
      meals: "Breakfast & Curated Tastings",
      maxGroupSize: "14",
      highlights: [
        "Night market food crawl",
        "Hands-on cooking masterclass",
        "Chef-led fine dining experience"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Street Food Safari",
          description: "Evening tuk-tuk ride through street food hotspots with tastings."
        },
        {
          title: "Day 2: Market to Table",
          description: "Morning wet market tour, cooking class with renowned chef, afternoon café hopping."
        },
        {
          title: "Day 3: Signature Dining",
          description: "Food heritage walk, Michelin-plate dinner, rooftop dessert tasting."
        }
      ],
      inclusions: ["All tasting menus", "Local food specialist", "Intercity transfers"],
      exclusions: ["Alcohol pairings", "Flights", "Personal expenses"],
      notes: ["Customise for vegetarian or special diets"]
    }
  },
  {
    slug: "wildlife-india-tour",
    title: "Wildlife India Tour",
    img: "/assets/home/wildlife.jpg",
    desc: "Untamed jungles and incredible wildlife encounters across India.",
    detail: {
      badge: "Safari Specialist",
      about:
        "Pair the dense jungles of Central India with the birding hotspots of Bharatpur and the wetlands of Kaziranga for a complete wildlife fix.",
      meals: "Full Board",
      maxGroupSize: "12",
      highlights: [
        "Twice-daily jungle safaris",
        "Birding walks with naturalist",
        "Village interaction with forest communities"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Lodge Arrival",
          description: "Check in, sunset safari drive, fireside storytelling with naturalist."
        },
        {
          title: "Day 2: Into the Wild",
          description: "Morning and afternoon safaris focused on tigers, rhinos, or elephants."
        },
        {
          title: "Day 3: Conservation Connect",
          description: "Visit rescue center, meet forest guards, depart post brunch."
        }
      ],
      inclusions: ["Jungle lodge stay", "All meals", "Safari permits"],
      exclusions: ["Camera fee", "Travel insurance", "Tips"],
      notes: ["Best time October to April"]
    }
  },
  {
    slug: "goa-tours",
    title: "Goa Tours",
    img: "/assets/home/goa.jpg",
    desc: "Sun, sand, sea, and susegad living in Goa.",
    detail: {
      badge: "Beach Break",
      about:
        "Discover both bustling North Goa and serene South Goa with heritage walks, spice plantations, beach clubs, and sunset cruises.",
      meals: "Breakfast",
      maxGroupSize: "Private or Small Groups",
      highlights: [
        "Fontainhas heritage walk",
        "Mandovi River sunset cruise",
        "Goan cooking workshop"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Old Goa & Panjim",
          description: "Visit Basilica of Bom Jesus, walk Latin Quarter, enjoy Goan dinner."
        },
        {
          title: "Day 2: Beach & Spice",
          description: "Morning beach time, afternoon spice plantation tour with lunch."
        },
        {
          title: "Day 3: Leisure & Cruise",
          description: "Visit flea market or café hop, evening sunset cruise before departure."
        }
      ],
      inclusions: ["Airport transfers", "3-star or 4-star stay", "Daily breakfast"],
      exclusions: ["Watersports fees", "Club entries", "Personal expenses"],
      notes: ["Add Dudhsagar waterfalls or island hopping as optional"]
    }
  },
  {
    slug: "kerala-tour-packages",
    title: "Kerala Tour Packages",
    img: "/assets/home/kerala.jpg",
    desc: "Backwaters, spice hills, and cultural encounters across Kerala.",
    detail: {
      badge: "God's Own Country",
      about:
        "Cruise Alleppey's backwaters, hike Munnar's tea slopes, and watch Kathakali performances for a deeply immersive Kerala vacation.",
      meals: "Breakfast & One Houseboat Lunch",
      maxGroupSize: "16",
      highlights: [
        "Private houseboat stay",
        "Tea plantation visit",
        "Traditional art performance"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Kochi Culture",
          description: "Arrive, explore Fort Kochi, watch Kathakali show."
        },
        {
          title: "Day 2: Munnar Greens",
          description: "Drive to Munnar, visit tea museum, walk through spice gardens."
        },
        {
          title: "Day 3: Alleppey Backwaters",
          description: "Board private houseboat for cruise with onboard meals, depart in evening."
        }
      ],
      inclusions: ["Car with driver", "Entrance fees", "Breakfast daily"],
      exclusions: ["Ayurveda treatments", "Personal expenses", "Flights"],
      notes: ["Extend to Kovalam or Thekkady on request"]
    }
  },
  {
    slug: "varanasi-tour-packages",
    title: "Varanasi Tour Packages",
    img: "/assets/home/varanasi.jpg",
    desc: "Explore India's spiritual capital along the sacred Ganges.",
    detail: {
      badge: "Sacred Varanasi",
      about:
        "Witness sunrise rituals, glide along the Ganges, and learn ancient traditions from local priests and scholars in Varanasi.",
      meals: "Breakfast",
      maxGroupSize: "18",
      highlights: [
        "Sunrise boat ride",
        "Ganga Aarti from VIP zone",
        "Sarnath excursion"
      ],
      dayWisePlan: [
        {
          title: "Day 1: Ghats & Alleys",
          description: "Arrive, evening walk through ghats, attend Ganga Aarti from reserved seats."
        },
        {
          title: "Day 2: Spiritual Dawn",
          description: "Sunrise boat ride, visit weaving communities, explore Kashi Vishwanath Corridor."
        },
        {
          title: "Day 3: Sarnath Serenity",
          description: "Half-day trip to Sarnath, museum visit, return for departure."
        }
      ],
      inclusions: ["Airport/rail transfers", "Boat ride", "Licensed guide"],
      exclusions: ["Camera fees", "Lunch & dinner", "Tips"],
      notes: ["Add Prayagraj or Ayodhya extension"]
    }
  }
];
