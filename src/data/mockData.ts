export interface Influencer {
  id: string;
  name: string;
  instagram_handle: string;
  niche: string;
  city: string;
  followers: number;
  engagement_rate: number;
  email: string;
  match_score: number;
  avatar: string;
  rates: { reel: number; story: number; post: number };
  bio: string;
  growthData: { month: string; followers: number }[];
}

export interface Campaign {
  id: string;
  brandName: string;
  brandIcon: React.ReactNode;
  title: string;
  description: string;
  budget: string;
  niche: string;
  city: string;
  applicants: number;
  deadline: string;
  status: "open" | "in-progress" | "completed";
}

export const influencers: Influencer[] = [
  {
    id: "1", name: "Priya Sharma", instagram_handle: "@priyacooks", avatar: "https://i.pravatar.cc/150?img=1",
    niche: "Food", city: "Mumbai", followers: 48200, engagement_rate: 7.2, match_score: 87, email: "priya@example.com",
    rates: { reel: 5000, story: 1500, post: 3000 }, bio: "Home chef sharing authentic Indian recipes & food stories.",
    growthData: [{ month: "Jan", followers: 38000 }, { month: "Feb", followers: 40100 }, { month: "Mar", followers: 42500 }, { month: "Apr", followers: 44200 }, { month: "May", followers: 46800 }, { month: "Jun", followers: 48200 }]
  },
  {
    id: "2", name: "Arjun Mehta", instagram_handle: "@arjunfits", avatar: "https://i.pravatar.cc/150?img=3",
    niche: "Fitness", city: "Delhi", followers: 92400, engagement_rate: 5.8, match_score: 72, email: "arjun@example.com",
    rates: { reel: 8000, story: 2500, post: 5000 }, bio: "Certified trainer. Helping India get fit, one reel at a time.",
    growthData: [{ month: "Jan", followers: 75000 }, { month: "Feb", followers: 79000 }, { month: "Mar", followers: 83000 }, { month: "Apr", followers: 86500 }, { month: "May", followers: 89000 }, { month: "Jun", followers: 92400 }]
  },
  {
    id: "3", name: "Sneha Reddy", instagram_handle: "@snehaglows", avatar: "https://i.pravatar.cc/150?img=5",
    niche: "Beauty", city: "Bangalore", followers: 31500, engagement_rate: 8.9, match_score: 94, email: "sneha@example.com",
    rates: { reel: 4000, story: 1200, post: 2500 }, bio: "Skincare junkie & beauty reviewer. All things glow.",
    growthData: [{ month: "Jan", followers: 22000 }, { month: "Feb", followers: 24500 }, { month: "Mar", followers: 26800 }, { month: "Apr", followers: 28500 }, { month: "May", followers: 30200 }, { month: "Jun", followers: 31500 }]
  },
  {
    id: "4", name: "Rohan Kapoor", instagram_handle: "@rohantech", avatar: "https://i.pravatar.cc/150?img=8",
    niche: "Tech", city: "Pune", followers: 67800, engagement_rate: 4.3, match_score: 65, email: "rohan@example.com",
    rates: { reel: 7000, story: 2000, post: 4500 }, bio: "Gadget reviews & tech news. Unboxing the future.",
    growthData: [{ month: "Jan", followers: 55000 }, { month: "Feb", followers: 58000 }, { month: "Mar", followers: 60500 }, { month: "Apr", followers: 63000 }, { month: "May", followers: 65500 }, { month: "Jun", followers: 67800 }]
  },
  {
    id: "5", name: "Ananya Iyer", instagram_handle: "@ananyastyle", avatar: "https://i.pravatar.cc/150?img=9",
    niche: "Lifestyle", city: "Chennai", followers: 55100, engagement_rate: 6.5, match_score: 81, email: "ananya@example.com",
    rates: { reel: 6000, story: 1800, post: 3500 }, bio: "Lifestyle & fashion content. Curating the everyday aesthetic.",
    growthData: [{ month: "Jan", followers: 42000 }, { month: "Feb", followers: 45000 }, { month: "Mar", followers: 48000 }, { month: "Apr", followers: 50500 }, { month: "May", followers: 53000 }, { month: "Jun", followers: 55100 }]
  },
  {
    id: "1", name: "Priya Sharma", instagram_handle: "@priyacooks", avatar: "https://i.pravatar.cc/150?img=1",
    niche: "Food", city: "Mumbai", followers: 48200, engagement_rate: 7.2, match_score: 87, email: "priya@example.com",
    rates: { reel: 5000, story: 1500, post: 3000 }, bio: "Home chef sharing authentic Indian recipes & food stories.",
    growthData: [{ month: "Jan", followers: 38000 }, { month: "Feb", followers: 40100 }, { month: "Mar", followers: 42500 }, { month: "Apr", followers: 44200 }, { month: "May", followers: 46800 }, { month: "Jun", followers: 48200 }]
  },
  {
    id: "2", name: "Arjun Mehta", instagram_handle: "@arjunfits", avatar: "https://i.pravatar.cc/150?img=3",
    niche: "Fitness", city: "Delhi", followers: 92400, engagement_rate: 5.8, match_score: 72, email: "arjun@example.com",
    rates: { reel: 8000, story: 2500, post: 5000 }, bio: "Certified trainer. Helping India get fit, one reel at a time.",
    growthData: [{ month: "Jan", followers: 75000 }, { month: "Feb", followers: 79000 }, { month: "Mar", followers: 83000 }, { month: "Apr", followers: 86500 }, { month: "May", followers: 89000 }, { month: "Jun", followers: 92400 }]
  },
  {
    id: "3", name: "Sneha Reddy", instagram_handle: "@snehaglows", avatar: "https://i.pravatar.cc/150?img=5",
    niche: "Beauty", city: "Bangalore", followers: 31500, engagement_rate: 8.9, match_score: 94, email: "sneha@example.com",
    rates: { reel: 4000, story: 1200, post: 2500 }, bio: "Skincare junkie & beauty reviewer. All things glow.",
    growthData: [{ month: "Jan", followers: 22000 }, { month: "Feb", followers: 24500 }, { month: "Mar", followers: 26800 }, { month: "Apr", followers: 28500 }, { month: "May", followers: 30200 }, { month: "Jun", followers: 31500 }]
  },
  {
    id: "4", name: "Rohan Kapoor", instagram_handle: "@rohantech", avatar: "https://i.pravatar.cc/150?img=8",
    niche: "Tech", city: "Pune", followers: 67800, engagement_rate: 4.3, match_score: 65, email: "rohan@example.com",
    rates: { reel: 7000, story: 2000, post: 4500 }, bio: "Gadget reviews & tech news. Unboxing the future.",
    growthData: [{ month: "Jan", followers: 55000 }, { month: "Feb", followers: 58000 }, { month: "Mar", followers: 60500 }, { month: "Apr", followers: 63000 }, { month: "May", followers: 65500 }, { month: "Jun", followers: 67800 }]
  },
  {
    id: "5", name: "Ananya Iyer", instagram_handle: "@ananyastyle", avatar: "https://i.pravatar.cc/150?img=9",
    niche: "Lifestyle", city: "Chennai", followers: 55100, engagement_rate: 6.5, match_score: 81, email: "ananya@example.com",
    rates: { reel: 6000, story: 1800, post: 3500 }, bio: "Lifestyle & fashion content. Curating the everyday aesthetic.",
    growthData: [{ month: "Jan", followers: 42000 }, { month: "Feb", followers: 45000 }, { month: "Mar", followers: 48000 }, { month: "Apr", followers: 50500 }, { month: "May", followers: 53000 }, { month: "Jun", followers: 55100 }]
  },
  {
    id: "6", name: "Vikram Singh", instagram_handle: "@vikram_vlogs", avatar: "https://i.pravatar.cc/150?img=11",
    niche: "Travel", city: "Jaipur", followers: 120000, engagement_rate: 4.1, match_score: 78, email: "vikram@example.com",
    rates: { reel: 12000, story: 4000, post: 8000 }, bio: "Exploring the hidden gems of Rajasthan and beyond.",
    growthData: [{ month: "Jan", followers: 105000 }, { month: "Feb", followers: 108000 }, { month: "Mar", followers: 112000 }, { month: "Apr", followers: 115000 }, { month: "May", followers: 118000 }, { month: "Jun", followers: 120000 }]
  },
  {
    id: "7", name: "Ishita Malhotra", instagram_handle: "@ishitadesigns", avatar: "https://i.pravatar.cc/150?img=16",
    niche: "Fashion", city: "Delhi", followers: 74300, engagement_rate: 6.2, match_score: 89, email: "ishita@example.com",
    rates: { reel: 7500, story: 2200, post: 4000 }, bio: "Modern ethnic wear and sustainable fashion styling.",
    growthData: [{ month: "Jan", followers: 60000 }, { month: "Feb", followers: 63000 }, { month: "Mar", followers: 67000 }, { month: "Apr", followers: 70000 }, { month: "May", followers: 72000 }, { month: "Jun", followers: 74300 }]
  },
  {
    id: "8", name: "Kabir Das", instagram_handle: "@kabir_codes", avatar: "https://i.pravatar.cc/150?img=12",
    niche: "Tech", city: "Hyderabad", followers: 25400, engagement_rate: 9.5, match_score: 91, email: "kabir@example.com",
    rates: { reel: 4500, story: 1000, post: 2000 }, bio: "Simplifying software engineering for students and pros.",
    growthData: [{ month: "Jan", followers: 15000 }, { month: "Feb", followers: 18000 }, { month: "Mar", followers: 20000 }, { month: "Apr", followers: 22000 }, { month: "May", followers: 24000 }, { month: "Jun", followers: 25400 }]
  },
  {
    id: "9", name: "Meera Joshi", instagram_handle: "@yogawithmeera", avatar: "https://i.pravatar.cc/150?img=20",
    niche: "Fitness", city: "Rishikesh", followers: 42100, engagement_rate: 7.8, match_score: 84, email: "meera@example.com",
    rates: { reel: 5500, story: 1600, post: 3200 }, bio: "Certified Yoga instructor. Mindful living and wellness.",
    growthData: [{ month: "Jan", followers: 32000 }, { month: "Feb", followers: 34000 }, { month: "Mar", followers: 37000 }, { month: "Apr", followers: 39000 }, { month: "May", followers: 41000 }, { month: "Jun", followers: 42100 }]
  },
  {
    id: "10", name: "Zoya Khan", instagram_handle: "@zoyapaints", avatar: "https://i.pravatar.cc/150?img=26",
    niche: "Art", city: "Kolkata", followers: 18900, engagement_rate: 11.2, match_score: 95, email: "zoya@example.com",
    rates: { reel: 3500, story: 800, post: 1500 }, bio: "Watercolor artist. Finding colors in the chaos of life.",
    growthData: [{ month: "Jan", followers: 10000 }, { month: "Feb", followers: 12500 }, { month: "Mar", followers: 14000 }, { month: "Apr", followers: 16000 }, { month: "May", followers: 17500 }, { month: "Jun", followers: 18900 }]
  },
  {
    id: "11", name: "Siddharth Rao", instagram_handle: "@sid_finplan", avatar: "https://i.pravatar.cc/150?img=13",
    niche: "Finance", city: "Mumbai", followers: 105000, engagement_rate: 3.9, match_score: 70, email: "sid@example.com",
    rates: { reel: 15000, story: 5000, post: 10000 }, bio: "Making personal finance simple for Indian millennials.",
    growthData: [{ month: "Jan", followers: 95000 }, { month: "Feb", followers: 98000 }, { month: "Mar", followers: 100000 }, { month: "Apr", followers: 102000 }, { month: "May", followers: 104000 }, { month: "Jun", followers: 105000 }]
  },
  {
    id: "12", name: "Tanvi Shah", instagram_handle: "@tanvitravels", avatar: "https://i.pravatar.cc/150?img=23",
    niche: "Travel", city: "Ahmedabad", followers: 52000, engagement_rate: 6.8, match_score: 83, email: "tanvi@example.com",
    rates: { reel: 6500, story: 2000, post: 3800 }, bio: "Budget solo traveler exploring the world on a shoestring.",
    growthData: [{ month: "Jan", followers: 40000 }, { month: "Feb", followers: 43000 }, { month: "Mar", followers: 46000 }, { month: "Apr", followers: 48500 }, { month: "May", followers: 50500 }, { month: "Jun", followers: 52000 }]
  },
  {
    id: "13", name: "Aman Verma", instagram_handle: "@aman_automotive", avatar: "https://i.pravatar.cc/150?img=14",
    niche: "Automotive", city: "Gurgaon", followers: 88600, engagement_rate: 5.1, match_score: 76, email: "aman@example.com",
    rates: { reel: 9000, story: 3000, post: 6000 }, bio: "Car enthusiast. Honest reviews and drag races.",
    growthData: [{ month: "Jan", followers: 78000 }, { month: "Feb", followers: 80000 }, { month: "Mar", followers: 83000 }, { month: "Apr", followers: 85000 }, { month: "May", followers: 87000 }, { month: "Jun", followers: 88600 }]
  },
  {
    id: "14", name: "Riya Sen", instagram_handle: "@riyagardens", avatar: "https://i.pravatar.cc/150?img=28",
    niche: "Lifestyle", city: "Chandigarh", followers: 21000, engagement_rate: 9.8, match_score: 92, email: "riya@example.com",
    rates: { reel: 3000, story: 900, post: 1800 }, bio: "Plant mom. Transforming urban balconies into green jungles.",
    growthData: [{ month: "Jan", followers: 12000 }, { month: "Feb", followers: 14500 }, { month: "Mar", followers: 16800 }, { month: "Apr", followers: 18500 }, { month: "May", followers: 20000 }, { month: "Jun", followers: 21000 }]
  },
  {
    id: "15", name: "Deepak Murthy", instagram_handle: "@deepak_clicks", avatar: "https://i.pravatar.cc/150?img=15",
    niche: "Photography", city: "Kochi", followers: 39500, engagement_rate: 8.2, match_score: 85, email: "deepak@example.com",
    rates: { reel: 5000, story: 1500, post: 3000 }, bio: "Capturing the soul of South India through my lens.",
    growthData: [{ month: "Jan", followers: 30000 }, { month: "Feb", followers: 32000 }, { month: "Mar", followers: 34500 }, { month: "Apr", followers: 36000 }, { month: "May", followers: 38000 }, { month: "Jun", followers: 39500 }]
  }
];

export const campaigns: Campaign[] = [
  {
    id: "c1", brandName: "Zara Bakehouse", brandIcon: undefined, title: "Food influencers for new cafe launch",
    description: "We're launching our new café in Bandra and looking for food micro-influencers to create authentic content.",
    budget: "₹15,000 - ₹30,000", niche: "Food", city: "Mumbai", applicants: 24, deadline: "Apr 30, 2026", status: "open"
  },
  {
    id: "c2", brandName: "GreenSip", brandIcon: undefined, title: "Health drink brand ambassador needed",
    description: "Promote our new organic matcha line through lifestyle content. Looking for wellness-focused creators.",
    budget: "₹10,000 - ₹20,000", niche: "Lifestyle", city: "Delhi", applicants: 18, deadline: "May 15, 2026", status: "open"
  },
  {
    id: "c3", brandName: "PixelWear", brandIcon: undefined, title: "Streetwear launch - Gen Z creators wanted",
    description: "Our new streetwear drop needs authentic Gen Z voices. Create reels showcasing the collection.",
    budget: "₹20,000 - ₹40,000", niche: "Fashion", city: "Bangalore", applicants: 31, deadline: "Apr 20, 2026", status: "open"
  },
  {
    id: "c1", brandName: "Zara Bakehouse", brandIcon: undefined, title: "Food influencers for new cafe launch",
    description: "We're launching our new café in Bandra and looking for food micro-influencers to create authentic content.",
    budget: "₹15,000 - ₹30,000", niche: "Food", city: "Mumbai", applicants: 24, deadline: "Apr 30, 2026", status: "open"
  },
  {
    id: "c2", brandName: "GreenSip", brandIcon: undefined, title: "Health drink brand ambassador needed",
    description: "Promote our new organic matcha line through lifestyle content. Looking for wellness-focused creators.",
    budget: "₹10,000 - ₹20,000", niche: "Lifestyle", city: "Delhi", applicants: 18, deadline: "May 15, 2026", status: "open"
  },
  {
    id: "c3", brandName: "PixelWear", brandIcon: undefined, title: "Streetwear launch - Gen Z creators wanted",
    description: "Our new streetwear drop needs authentic Gen Z voices. Create reels showcasing the collection.",
    budget: "₹20,000 - ₹40,000", niche: "Fashion", city: "Bangalore", applicants: 31, deadline: "Apr 20, 2026", status: "open"
  },
  {
    id: "c4", brandName: "FitBit India", brandIcon: undefined, title: "Summer Fitness Challenge",
    description: "Partner with fitness enthusiasts for a 30-day transformation campaign showcasing our latest tracker.",
    budget: "₹50,000 - ₹80,000", niche: "Fitness", city: "Pan India", applicants: 52, deadline: "May 05, 2026", status: "open"
  },
  {
    id: "c5", brandName: "GlowUp Cosmetics", brandIcon: undefined, title: "Monsoon Skincare Routine",
    description: "Showcase our waterproof makeup and skincare line through a tutorial video.",
    budget: "₹12,000 - ₹25,000", niche: "Beauty", city: "Mumbai", applicants: 45, deadline: "May 20, 2026", status: "open"
  },
  {
    id: "c6", brandName: "TechGear", brandIcon: undefined, title: "Wireless Headphones Review",
    description: "In-depth video review of our new noise-canceling headphones. Technical accuracy required.",
    budget: "₹30,000 - ₹50,000", niche: "Tech", city: "Pune", applicants: 12, deadline: "Apr 25, 2026", status: "in-progress"
  },
  {
    id: "c7", brandName: "StayLocal", brandIcon: undefined, title: "Heritage Homestay Promotion",
    description: "Travel influencers to visit and review our boutique heritage property in Jaipur.",
    budget: "₹25,000 + Stay", niche: "Travel", city: "Jaipur", applicants: 19, deadline: "May 10, 2026", status: "open"
  },
  {
    id: "c8", brandName: "UrbanRoot", brandIcon: undefined, title: "Sustainable Home Decor",
    description: "Lifestyle creators to feature our eco-friendly bamboo furniture in their home tours.",
    budget: "₹18,000 - ₹28,000", niche: "Lifestyle", city: "Chennai", applicants: 22, deadline: "May 12, 2026", status: "open"
  },
  {
    id: "c9", brandName: "CodeMaster", brandIcon: undefined, title: "Ed-Tech Bootcamp Promotion",
    description: "Tech influencers to promote our upcoming Full Stack Development bootcamp.",
    budget: "₹40,000 - ₹60,000", niche: "Tech", city: "Hyderabad", applicants: 8, deadline: "May 01, 2026", status: "open"
  },
  {
    id: "c10", brandName: "Royal Enfield", brandIcon: undefined, title: "Weekend Getaway Story",
    description: "Automotive creators to document a weekend trip using our classic models.",
    budget: "₹70,000 - ₹1,00,000", niche: "Automotive", city: "Delhi", applicants: 36, deadline: "Jun 01, 2026", status: "open"
  }
];

export function calculateEScore(likes: number, comments: number, reach: number): number {
  return Math.round(((likes + 2 * comments) / reach) * 100);
}
