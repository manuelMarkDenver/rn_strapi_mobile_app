import icons from "./icons";
import images from "./images";

export const cards = [
  {
    id: 1,
    title: "Elegant Condo in BGC",
    location: "Bonifacio Global City, Taguig",
    price: "₱15,200,000",
    rating: 4.8,
    category: "Duplexes",
    image: images.newYork,
  },
  {
    id: 2,
    title: "Modern House in Alabang",
    location: "Alabang, Muntinlupa",
    price: "₱35,500,000",
    rating: 4.5,
    category: "Studios",
    image: images.japan,
  },
  {
    id: 3,
    title: "Cozy Studio in Makati",
    location: "Legazpi Village, Makati City",
    price: "₱8,800,000",
    rating: 4.2,
    category: "Apartments",
    image: images.newYork,
  },
  {
    id: 4,
    title: "Luxury Villa in Tagaytay",
    location: "Tagaytay Highlands, Cavite",
    price: "₱52,000,000",
    rating: 5.0,
    category: "Villas",
    image: images.japan,
  },
  {
    id: 5,
    title: "Chic Apartment in Ortigas",
    location: "Ortigas Center, Pasig",
    price: "₱12,400,000",
    rating: 4.0,
    category: "Studios",
    image: images.newYork,
  },
  {
    id: 6,
    title: "Family Home in Quezon City",
    location: "Commonwealth, Quezon City",
    price: "₱18,700,000",
    rating: 3.8,
    category: "Others",
    image: images.japan,
  },
  {
    id: 7,
    title: "Beachfront Villa in Batangas",
    location: "Nasugbu, Batangas",
    price: "₱75,300,000",
    rating: 4.9,
    category: "Villas",
    image: images.newYork,
  },
  {
    id: 8,
    title: "Minimalist Condo in Cebu City",
    location: "IT Park, Cebu City",
    price: "₱9,200,000",
    rating: 4.3,
    category: "Apartments",
    image: images.japan,
  },
];

export const featuredCards = [
  {
    title: "Featured 1",
    location: "Location 1",
    price: "$100",
    rating: 4.8,
    image: images.newYork,
    category: "Townhomes",
  },
  {
    title: "Featured 2",
    location: "Location 2",
    price: "$200",
    rating: 3,
    image: images.japan,
    category: "Condos",
  },
];

export const categories = [
  { title: "All", category: "All" },
  { title: "Houses", category: "House" },
  { title: "Condos", category: "Condos" },
  { title: "Duplexes", category: "Duplexes" },
  { title: "Studios", category: "Studios" },
  { title: "Villas", category: "Villa" },
  { title: "Apartments", category: "Apartments" },
  { title: "Townhomes", category: "Townhomes" },
  { title: "Others", category: "Others" },
];

export const settings = [
  {
    title: "My Bookings",
    icon: icons.calendar,
  },
  {
    title: "Payments",
    icon: icons.wallet,
  },
  {
    title: "Profile",
    icon: icons.person,
  },
  {
    title: "Notifications",
    icon: icons.bell,
  },
  {
    title: "Security",
    icon: icons.shield,
  },
  {
    title: "Language",
    icon: icons.language,
  },
  {
    title: "Help Center",
    icon: icons.info,
  },
  {
    title: "Invite Friends",
    icon: icons.people,
  },
];

export const facilities = [
  {
    title: "Laundry",
    icon: icons.laundry,
  },
  {
    title: "Car Parking",
    icon: icons.carPark,
  },
  {
    title: "Sports Center",
    icon: icons.run,
  },
  {
    title: "Cutlery",
    icon: icons.cutlery,
  },
  {
    title: "Gym",
    icon: icons.dumbell,
  },
  {
    title: "Swimming pool",
    icon: icons.swim,
  },
  {
    title: "Wifi",
    icon: icons.wifi,
  },
  {
    title: "Pet Center",
    icon: icons.dog,
  },
];

export const gallery = [
  {
    id: 1,
    image: images.newYork,
  },
  {
    id: 2,
    image: images.japan,
  },
  {
    id: 3,
    image: images.newYork,
  },
  {
    id: 4,
    image: images.japan,
  },
  {
    id: 5,
    image: images.newYork,
  },
  {
    id: 6,
    image: images.japan,
  },
];

export const reviews = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: images.avatar,
    },
    rating: 4.5,
    comment: "Great place to stay! Highly recommend.",
    date: "2023-10-01",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      avatar: images.avatar,
    },
    rating: 4.0,
    comment: "Very comfortable and clean. Would stay again.",
    date: "2023-10-02",
  },
];
