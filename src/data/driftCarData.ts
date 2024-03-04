export interface DriftCar {
  id: number;
  title: string;
  description: string;
  completed: boolean; // New property
}

export const initialCars: DriftCar[] = [
  { id: 1, title: "Nissan Silvia S15", description: "Legendary drift car", completed: false },
  { id: 2, title: "Toyota Supra", description: "Iconic Japanese sports car", completed: true },
  { id: 3, title: "Mazda RX-7", description: "Classic rotary-powered drift machine", completed: true },
  { id: 4, title: "BMW E46 M3", description: "German precision with drift capabilities", completed: true },
  { id: 5, title: "Subaru BRZ", description: "Lightweight and nimble drift platform", completed: true },
  { id: 6, title: "Ford Mustang", description: "American muscle with drift potential", completed: true },
  { id: 7, title: "Chevrolet Corvette", description: "Powerful V8 for smoky drifts", completed: true },
  { id: 8, title: "Nissan 350Z", description: "Affordable rear-wheel-drive drift car", completed: true },
  { id: 9, title: "Toyota AE86", description: "Drift icon from the Initial D anime", completed: true },
  { id: 10, title: "Mitsubishi Lancer Evolution", description: "All-wheel-drive drift contender", completed: false },
  { id: 11, title: "Lexus IS300", description: "Luxury sedan turned drift machine", completed: false },
  { id: 12, title: "Honda S2000", description: "High-revving roadster for spirited driving", completed: false },
  { id: 13, title: "Mazda MX-5 Miata", description: "Lightweight convertible for agile drifting", completed: false },
  { id: 14, title: "Dodge Challenger", description: "Muscle car with drift potential", completed: false },
  { id: 15, title: "Mercedes-Benz C63 AMG", description: "German luxury with V8 power", completed: false },
  { id: 16, title: "Porsche 911", description: "Precision drift machine with rear-engine layout", completed: false },
  { id: 17, title: "Infiniti G35", description: "Luxurious drift sedan with Nissan Z heritage", completed: false },
  { id: 18, title: "Audi S4", description: "Quattro all-wheel-drive system for grip and drift", completed: false },
  { id: 19, title: "Holden Commodore", description: "Australian muscle car for smoky skids", completed: false },
  { id: 20, title: "Lamborghini Huracan", description: "Exotic supercar with drift mode", completed: false },
];

