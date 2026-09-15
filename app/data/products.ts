export type ProductCategory =
  | "AI Glasses"
  | "AR & Display Glasses"
  | "Hybrid Smart Glasses";

export type SmartGlassesProduct = {
  id: string;
 name: string;
brand: string;
category: ProductCategory;
slug: string;
image?: string;


  // Pricing
  price: number | null;
currency: "USD";
  priceUpdated?: string;

  // Editorial
  rating: number | null;
  bestFor: string;
  description: string;

  // Hardware
  camera: string;
  cameraResolution?: string;
  videoResolution?: string;

  audio: string;
  microphones?: string;

  ai: string;

  display: string;
  displayType?: string;
  displayResolution?: string;
  fieldOfView?: string;
  refreshRate?: string;

  battery: string;
  charging?: string;

  weight: string;

  // Compatibility
  prescription: string;
  compatibility: string;
  app?: string;
  bluetooth?: string;
  wifi?: string;

  // Durability
  waterResistance?: string;

  // Other
  controls?: string;
  storage?: string;
  releaseDate?: string;
  warranty?: string;

  // Editorial
  pros: string[];
  cons: string[];

  // Links
  affiliateUrl?: string;
  officialUrl: string;

  // Finder scoring
  scores?: {
    ai?: number;
    camera?: number;
    audio?: number;
    display?: number;
    battery?: number;
    comfort?: number;
    value?: number;
    overall?: number;
  };
};



export const products: SmartGlassesProduct[] = [
{
  id: "ray-ban-meta-gen-2",
  name: "Ray-Ban Meta Gen 2",
  brand: "Meta",
  category: "AI Glasses",
  slug: "ray-ban-meta-gen-2",
  image: "/products/ray-ban-meta-gen-2.png",

  price: 459,
  currency: "USD",
  priceUpdated: "2026-09-15",

   rating: 9,

  bestFor: "AI, photography, calls, music and everyday use",

  description:
    "Ray-Ban Meta Gen 2 combines a traditional Ray-Ban design with a 12 MP camera, open-ear audio, Meta AI and hands-free controls. Gen 2 adds improved video capture and up to 8 hours of moderate-use battery life.",

  camera: "12 MP ultra-wide camera",
  cameraResolution: "3024 × 4032",
  videoResolution: "Up to 3K at 30 fps",

  audio: "2 custom-built open-ear speakers",
  microphones: "Custom 5-microphone array",

  ai: "Meta AI",

  display: "None",
  displayType: "No built-in display",

  battery: "Up to 8 hours of moderate use",
  charging: "Charging case provides additional battery capacity",

 weight: "Not specified by manufacturer",

  prescription: "Prescription lenses available in selected configurations",
  compatibility: "iOS and Android",
  app: "Meta AI app",
  bluetooth: "Bluetooth 5.3",
 wifi: "Wi-Fi 6E",

  waterResistance: "IPX4",

  controls: "Touch controls and voice commands",
  storage: "32 GB flash storage",
  releaseDate: "Not specified by manufacturer",

  pros: [
    "Discreet everyday glasses design",
    "12 MP camera",
    "Up to 3K video recording",
    "Meta AI features",
    "Open-ear audio",
    "Up to 8 hours of moderate use",
    "32 GB storage",
    "Prescription options available",
  ],

  cons: [
    "No built-in display",
    "Requires a compatible smartphone",
    "Many AI features depend on internet connectivity",
    "IPX4 water resistance is not suitable for submersion",
  ],

  officialUrl:
  "https://www.ray-ban.com/canada/en/electronics/0RW4013-RAY-BAN%20META%20HEADLINER%20-%20GEN%202-Asteroid%20Grey/8056262721360",

  scores: {
    ai: 10,
    camera: 9,
    audio: 9,
    display: 0,
    battery: 9,
    comfort: 9,
    value: 9,
    overall: 9,
  },
},

 {
  id: "oakley-meta-vanguard",
  name: "Oakley Meta Vanguard",
  brand: "Oakley",
  category: "AI Glasses",
  slug: "oakley-meta-vanguard",
  image: "/products/oakley-meta-vanguard.png",

 price: 499,
currency: "USD",
  priceUpdated: "2026-09-15",

 rating: 9,

  bestFor: "Sports, fitness, outdoor activities and hands-free capture",

  description:
  "Oakley Meta Vanguard is a sport-focused AI smart glasses platform designed for training, outdoor activities and hands-free capture. It combines a 12 MP camera, open-ear audio, Meta AI, fitness integrations and a rugged IP67-rated design.",

  camera: "12 MP ultra-wide camera",
  cameraResolution: "3024 × 4032",
  videoResolution: "Up to 2203 × 2938 at 30 fps; 720p at 120 fps",

  audio: "2 custom-built open-ear speakers",
  microphones: "Custom 5-microphone array",

  ai: "Meta AI with Garmin and fitness integrations",

  display: "None",
  displayType: "No built-in display",

  battery: "Up to 9 hours of daily use; up to 6 hours continuous audio",
 charging: "Charging case provides up to 36 additional hours; glasses fully charge in about 75 minutes",
  weight: "66 g",

  prescription: "Prescription lenses available in selected configurations",
  compatibility: "iOS 14.4+ and Android 10+",
  app: "Meta AI app",
  bluetooth: "Bluetooth 5.3",
  wifi: "Wi-Fi 6E",

  waterResistance: "IP67",

  controls: "Touch controls and voice commands",
  storage: "32 GB flash storage",
  releaseDate: "2026",

  pros: [
    "Excellent choice for sports and fitness",
    "12 MP ultra-wide camera",
    "Up to 3K video capture",
    "Meta AI",
    "Garmin integration",
    "Strava integration",
    "IP67 water and dust resistance",
    "Open-ear audio",
    "32 GB storage",
    "Secure sport-focused design",
  ],

  cons: [
    "No built-in display",
    "More expensive than Ray-Ban Meta Gen 2",
    "Sport-focused design is less discreet",
    "Requires a compatible smartphone and Meta AI app",
    "Some AI features depend on country and language availability",
  ],
  // Vanguard
officialUrl: "https://www.oakley.com/en-us/product/W0OW8001",

  scores: {
    ai: 10,
    camera: 9,
    audio: 9,
    display: 0,
    battery: 9,
    comfort: 9,
    value: 8,
    overall: 9,
  },
},

   {
  id: "oakley-meta-hstn",
  name: "Oakley Meta HSTN",
  brand: "Oakley",
  category: "AI Glasses",
  slug: "oakley-meta-hstn",
  image: "/products/oakley-meta-hstn.png",

  price: 399,
currency: "USD",
  priceUpdated: "2026-09-15",

  rating: 9,

  bestFor: "Everyday AI, photography, calls and music",

description:
  "Oakley Meta HSTN combines Oakley's classic HSTN frame design with Meta AI, a 12 MP camera, open-ear audio and hands-free controls. It is designed as an everyday AI glasses option rather than a dedicated sports model.",

  camera: "12 MP camera",
  cameraResolution: "3024 × 4032",
  videoResolution: "Up to 2203 × 2938 at 30 fps",
  audio: "Open-ear speakers",
  microphones: "Custom 5-microphone array",

  ai: "Meta AI",

  display: "None",
  displayType: "No built-in display",
  charging: "Charging case provides up to 48 hours of charging on the go",
  battery: "Up to 8 hours",
  weight: "To be verified",

  prescription: "Prescription lenses available",
  compatibility: "iOS and Android",
  app: "Meta AI app",
  bluetooth: "Bluetooth 5.3",
  wifi: "Wi-Fi 6E",

  waterResistance: "Not specified by manufacturer",

  controls: "Touch controls and voice commands",
  storage: "32 GB flash storage",

  releaseDate: "Not specified by manufacturer",

  pros: [
    "Classic Oakley HSTN design",
    "12 MP camera",
    "Meta AI",
    "Open-ear audio",
    "Up to 8-hour battery",
    "32 GB storage",
    "Prescription lens options",
    "Multiple lens options",
  ],

  cons: [
    "No built-in display",
    "Less sports-focused than Oakley Meta Vanguard",
    "Requires a compatible smartphone",
    "AI features depend on supported services",
    "Higher-priced lens options increase the cost",
  ],

    officialUrl: "https://www.oakley.com/en-us/product/888392682901",

  scores: {
    ai: 10,
    camera: 9,
    audio: 9,
    display: 0,
    battery: 9,
    comfort: 9,
    value: 9,
    overall: 9,
  },
},

{
  id: "xreal-one-pro",
  name: "XREAL One Pro",
  brand: "XREAL",
  category: "AR & Display Glasses",
  slug: "xreal-one-pro",
  image: "/products/xreal-one-pro.png",

  price: 599,
  currency: "USD",
  priceUpdated: "2026-09-15",
  rating: 9,

  bestFor: "Gaming, movies, productivity and large virtual displays",

  description:
    "XREAL One Pro is a high-end AR display headset designed to turn compatible devices into large virtual screens. It features XREAL's X1 spatial computing chip, native 3DoF tracking, a 57° field of view, a 1080p Micro-OLED display and Bose-tuned audio.",

  camera: "None built in",

  audio: "Bose-tuned open-ear audio",

  ai: "None",

  display: "1080p Micro-OLED display",
  displayType: "0.55-inch Sony Micro-OLED",
  displayResolution: "1920 × 1080",
  fieldOfView: "57°",
  refreshRate: "Up to 120 Hz",

  battery: "No built-in battery; powered through USB-C",

  charging: "USB-C",

  weight: "87 g",

  prescription: "Prescription lens frame available",
  compatibility: "USB-C DisplayPort-compatible devices",
  app: "XREAL Beam Pro / compatible XREAL software",
  bluetooth: "Not built in",
  wifi: "Not built in",

  waterResistance: "To be verified",

  controls: "Built-in controls and XREAL software",

  releaseDate: "July 2025",

  pros: [
    "Large 57° field of view",
    "1080p Micro-OLED display",
    "Up to 120 Hz refresh rate",
    "Native 3DoF spatial display",
    "XREAL X1 spatial computing chip",
    "Bose-tuned audio",
    "87 g weight",
    "Excellent for gaming and movies",
    "Excellent for productivity and virtual monitors",
    "Multiple IPD sizes",
  ],

  cons: [
    "No built-in camera",
    "No standalone battery",
    "Requires a compatible device",
    "More expensive than XREAL One",
    "Not primarily designed for AI assistant features",
    "Prescription lenses cost extra",
  ],

  officialUrl: "https://us.shop.xreal.com/products/xreal-one-pro",

  scores: {
    ai: 2,
    camera: 0,
    audio: 9,
    display: 10,
    battery: 7,
    comfort: 8,
    value: 9,
    overall: 9,
  },
},

 {
  id: "even-realities-g2",
  name: "Even Realities G2",
  brand: "Even Realities",
  category: "Hybrid Smart Glasses",
  slug: "even-realities-g2",
  image: "/products/even-realities-g2.png",

  price: 599,
 currency: "USD",
  priceUpdated: "2026-09-15",

 rating: 9,

  bestFor: "Display, translation, captions, teleprompter and productivity",

  description:
    "Even Realities G2 is a lightweight display smart glasses platform with binocular micro-LED displays, AI features, real-time translation, live captions, navigation, notifications and a built-in teleprompter. Unlike camera-based AI glasses, the G2 has no camera or speakers.",

  camera: "None",

  audio: "No built-in speakers",
  microphones: "Four microphones",

  ai: "Even AI with AI cues, summaries, translation and Ask Even AI",

  display: "Binocular micro-LED display",
  displayType: "Green monochrome micro-LED",
  displayResolution: "640 × 350",
  fieldOfView: "27.5°",
  refreshRate: "60 Hz",

  battery: "Up to 2 days of typical use",
  charging: "Contact charging through charging case; case provides up to 7 full charges",

  weight: "36 g",

  prescription: "Prescription lenses available from -12.00 to +12.00",
  compatibility: "iOS and Android",
  app: "Even Realities App",
  bluetooth: "Bluetooth Low Energy 5.4",

  waterResistance: "IP65",

  controls: "Temple touchpads; optional Even R1 smart ring",

  releaseDate: "2025",
  warranty: "1 year outside Europe",

  pros: [
    "Built-in binocular display",
    "Very lightweight 36 g design",
    "Camera-free for greater privacy",
    "Real-time translation",
    "Live captions",
    "AI summaries and AI cues",
    "Built-in teleprompter",
    "Navigation and notifications",
    "Excellent prescription range",
    "Up to 2 days of typical use",
    "IP65 water and dust resistance",
  ],

  cons: [
    "No camera",
    "No built-in speakers",
    "Monochrome green display",
    "27.5° field of view",
    "Many features depend on a smartphone",
    "Prescription lenses cost extra",
    "More expensive than basic camera-based AI glasses",
  ],

  officialUrl: "https://www.evenrealities.com/products/g2-a",

  scores: {
    ai: 9,
    camera: 0,
    audio: 5,
    display: 10,
    battery: 9,
    comfort: 10,
    value: 8,
    overall: 9,
  },
},

  {
  id: "xreal-one",
  name: "XREAL One",
  brand: "XREAL",
  category: "AR & Display Glasses",
  slug: "xreal-one",
  image: "/products/xreal-one.png",

  price: 399,
  currency: "USD",
  priceUpdated: "2026-09-15",

 rating: 9,

  bestFor: "Gaming, movies, productivity and virtual displays",

  description:
    "XREAL One is an AR display glasses platform designed to provide a large virtual screen from compatible devices. Its X1 chip provides native 3DoF spatial tracking without requiring an external processing unit.",

  camera: "None built in",

  audio: "Bose-tuned open-ear audio",

  ai: "None",

  display: "1080p Micro-OLED display",
  displayType: "0.68-inch Sony Micro-OLED",
  displayResolution: "1920 × 1080",
  fieldOfView: "50°",
  refreshRate: "Up to 120 Hz",

  battery: "Requires connection to a compatible device or power source",

  charging: "USB-C",

  weight: "84 g",

  prescription: "Prescription lens solution available",
  compatibility: "USB-C DisplayPort-compatible devices",
  app: "XREAL software",
  bluetooth: "Not specified by manufacturer",
  wifi: "Not specified by manufacturer",
  waterResistance: "To be verified",

  controls: "Built-in controls",

  releaseDate: "Not specified by manufacturer",

  pros: [
    "50° field of view",
    "1080p Micro-OLED display",
    "Up to 120 Hz refresh rate",
    "Native 3DoF spatial tracking",
    "XREAL X1 chip",
    "Bose-tuned audio",
    "Lightweight 84 g design",
    "Excellent for gaming and movies",
    "Useful for virtual displays and productivity",
  ],

  cons: [
    "No built-in camera",
    "No standalone battery",
    "Requires a compatible device",
    "No built-in AI assistant",
    "Prescription lenses cost extra",
  ],

  officialUrl: "https://www.xreal.com/one",

  scores: {
    ai: 2,
    camera: 0,
    audio: 9,
    display: 9,
    battery: 7,
    comfort: 9,
    value: 9,
    overall: 9,
  },
},
  {
  id: "viture-pro-2",
  name: "VITURE Pro 2",
  brand: "VITURE",
  category: "AR & Display Glasses",
  slug: "viture-pro-2",
  image: "/products/viture-pro-2.png",

  price: 299,
  currency: "USD",
  priceUpdated: "2026-09-15",

 rating: 9,

  bestFor: "Gaming, movies, travel and long-session XR",

  description:
    "VITURE Pro 2 is an XR display glasses platform focused on sharp image quality, comfort and gaming. It features Sony Micro-OLED displays, 50° field of view, up to 120 Hz refresh rate, 1,600 nits perceived brightness and built-in adjustable diopters.",

  camera: "None built in",

  audio: "Built-in spatial sound speakers",

  ai: "None",

  display: "1080p Micro-OLED per eye",
  displayType: "Sony Micro-OLED",
  displayResolution: "1920 × 1080 per eye",
  fieldOfView: "50°",
  refreshRate: "Up to 120 Hz",

  battery: "No built-in battery; powered through USB-C",

  charging: "USB-C",

  weight: "63 g",

  prescription: "Built-in adjustable diopters from 0 to -5.0D",
  compatibility: "USB-C compatible smartphones, tablets, laptops and gaming devices",
  app: "VITURE SpaceWalker",
  bluetooth: "To be verified",
  wifi: "To be verified",

  waterResistance: "To be verified",

  controls: "Built-in controls",

  releaseDate: "2024",
  warranty: "1 year",

  pros: [
    "Excellent $299 starting price",
    "1080p Micro-OLED per eye",
    "50° field of view",
    "Up to 120 Hz refresh rate",
    "1,600 nits perceived brightness",
    "Very lightweight 63 g design",
    "Built-in 0 to -5.0D diopter adjustment",
    "Built-in spatial sound",
    "SGS eye-care certification",
    "Excellent for gaming and movies",
  ],

  cons: [
    "No built-in camera",
    "No standalone battery",
    "Requires a compatible device",
    "Built-in diopters primarily address nearsightedness",
    "Some advanced features require additional VITURE hardware or software",
  ],

  officialUrl: "https://www.viture.com/pro2",

  scores: {
    ai: 1,
    camera: 0,
    audio: 9,
    display: 9,
    battery: 7,
    comfort: 10,
    value: 10,
    overall: 9,
  },
},

 {
  id: "rokid-max-2",
  name: "Rokid Max 2",
  brand: "Rokid",
  category: "AR & Display Glasses",
  slug: "rokid-max-2",
  image: "/products/rokid-max-2.png",
  price: 279,
  currency: "USD",
  priceUpdated: "2026-09-15",

  rating: 9,

  bestFor: "Gaming, movies, productivity and portable large-screen viewing",

  description:
    "Rokid Max 2 is a lightweight AR display glasses platform designed to turn compatible phones, computers and consoles into a private large screen. It features 1200p OLED displays, a 50° field of view, up to 120 Hz refresh rate and built-in myopia adjustment.",

  camera: "None built in",

  audio: "Built-in HiFi-level directional speakers",

  ai: "None",

  display: "1200p OLED display",
  displayType: "OLED",
  displayResolution: "1920 × 1200 per eye",
  fieldOfView: "50°",
  refreshRate: "Up to 120 Hz",

  battery: "Powered by connected source device",

  charging: "USB-C",

  weight: "To be verified",

  prescription: "Built-in myopia adjustment from 0.00D to -6.00D; prescription lens support available",
  compatibility: "USB-C DisplayPort-compatible devices",
  app: "Rokid software",
  bluetooth: "Bluetooth 5.2",
  wifi: "Wi-Fi 6",

  waterResistance: "To be verified",

  controls: "Built-in controls",

  releaseDate: "2024",

  pros: [
    "50° field of view",
    "1920 × 1200 resolution per eye",
    "Up to 120 Hz refresh rate",
    "Built-in myopia adjustment",
    "Supports additional prescription lenses",
    "Lightweight ergonomic design",
    "Built-in audio",
    "Works with phones, computers and consoles",
    "Excellent for movies and gaming",
  ],

  cons: [
    "No built-in camera",
    "No standalone battery",
    "Requires a compatible source device",
    "Advanced spatial computing requires Rokid Station 2",
    "No built-in AI assistant",
    "Pricing and availability can vary by region",
  ],

  officialUrl:
    "https://global.rokid.com/products/rokid-max-2-ar-glasses",

  scores: {
    ai: 1,
    camera: 0,
    audio: 8,
    display: 9,
    battery: 7,
    comfort: 9,
    value: 10,
    overall: 9,
  },
},
 {
  id: "solos-airgo-v2",
  name: "Solos AirGo V2",
  brand: "Solos",
  category: "AI Glasses",
  slug: "solos-airgo-v2",
  image: "/products/solos-airgo-v2.png",

  price: 299,
  currency: "USD",
  priceUpdated: "2026-09-15",

 rating: 8,

  bestFor: "AI, photography, calls, translation and everyday smart glasses",

  description:
    "Solos AirGo V2 is a camera-equipped AI smart glasses platform with 16 MP photography, 2K video recording, AI applications, Bluetooth audio and hands-free controls. It supports iOS and Android and is available in multiple frame styles.",

  camera: "16 MP camera",
  cameraResolution: "16 MP",
  videoResolution: "2K FHD video",

  audio: "Built-in speakers",

  microphones: "To be verified",

  ai: "Solos AI applications",

  display: "None",
  displayType: "No built-in display",

  battery: "Approximately 16 hours of photo shooting and AI inquiries",
  charging: "USB-C; approximately 1.5 hours to full charge",

  weight: "To be verified",

  prescription: "Custom lenses available",
  compatibility: "iOS and Android",
  app: "Solos app",
  bluetooth: "Bluetooth 5.2 + BLE",
  wifi: "Wi-Fi connectivity",

  waterResistance: "IP54",

  controls: "Touch sensor and virtual button",

  releaseDate: "January 2026",

  pros: [
    "16 MP camera",
    "2K video recording",
    "AI applications",
    "iOS and Android support",
    "Bluetooth 5.2",
    "Multiple frame styles",
    "Custom lenses available",
    "USB-C charging",
    "IP54 splash resistance",
   "Approximately 16 hours for photo shooting and AI inquiries",
  ],

  cons: [
    "No built-in display",
    "AI features require smartphone connectivity",
    "Lower water resistance than some competitors",
    "Battery life varies substantially depending on use",
    "Newer product with less market history than Ray-Ban Meta",
  ],

  officialUrl: "https://solosglasses.com/products/prime-1-smartglasses",

   scores: {
    ai: 8,
    camera: 9,
    audio: 8,
    display: 0,
    battery: 9,
    comfort: 9,
    value: 9,
    overall: 8,
  },
},
];