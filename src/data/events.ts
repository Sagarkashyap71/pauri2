export interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  spots: number;
  registered: number;
  highlights: string[];
}

export const events: EventData[] = [
  {
    id: 'river-cleanup-2025',
    title: 'Alaknanda River Cleanup Drive',
    date: 'February 15, 2025',
    time: '7:00 AM - 1:00 PM',
    location: 'Alaknanda River Banks, Srinagar Garhwal',
    description: 'Join us for a massive river cleanup drive along the beautiful Alaknanda river. Help remove plastic waste and debris to restore the natural beauty of our rivers.',
    image: 'https://images.pexels.com/photos/7656995/pexels-photo-7656995.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    category: 'Cleanup',
    spots: 100,
    registered: 67,
    highlights: [
      'Free cleanup kits provided',
      'Refreshments included',
      'Certificate of participation',
      'Transportation from Pauri available'
    ]
  },
  {
    id: 'tree-plantation-2025',
    title: 'Mountain Reforestation Campaign',
    date: 'March 21, 2025',
    time: '8:00 AM - 4:00 PM',
    location: 'Kandoliya Hills, Pauri Garhwal',
    description: 'Plant native trees in the Himalayan slopes of Pauri. We aim to plant 5000+ trees including Oak, Rhododendron, and Deodar to combat deforestation.',
    image: 'https://images.pexels.com/photos/28662953/pexels-photo-28662953.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    category: 'Plantation',
    spots: 200,
    registered: 143,
    highlights: [
      'Plant 5000+ native trees',
      'Expert guidance on planting',
      'Lunch and refreshments',
      'Eco-friendly merchandise'
    ]
  },
  {
    id: 'awareness-walk-2025',
    title: 'Eco Awareness Rally & Workshop',
    date: 'April 22, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Pauri Town Center to Khirsu',
    description: 'On Earth Day, join our awareness rally through Pauri town followed by workshops on waste management, composting, and sustainable living.',
    image: 'https://images.pexels.com/photos/9543738/pexels-photo-9543738.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    category: 'Awareness',
    spots: 150,
    registered: 89,
    highlights: [
      'Street awareness rally',
      'Workshops on composting',
      'Guest speakers',
      'Free eco-kits for participants'
    ]
  },
  {
    id: 'wildlife-conservation-2025',
    title: 'Wildlife Conservation Trek',
    date: 'May 10, 2025',
    time: '6:00 AM - 6:00 PM',
    location: 'Binsar Wildlife Sanctuary Area',
    description: 'A guided trek focused on understanding local wildlife, identifying endangered species, and learning about conservation efforts in the region.',
    image: 'https://images.pexels.com/photos/9544471/pexels-photo-9544471.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    category: 'Conservation',
    spots: 50,
    registered: 34,
    highlights: [
      'Expert wildlife guides',
      'Bird watching equipment',
      'Photography opportunities',
      'Conservation certificate'
    ]
  },
  {
    id: 'plastic-free-campaign-2025',
    title: 'Plastic Free Pauri Campaign',
    date: 'June 5, 2025',
    time: '10:00 AM - 3:00 PM',
    location: 'Multiple locations across Pauri',
    description: 'On World Environment Day, help us distribute cloth bags, educate shopkeepers, and collect plastic waste from markets across Pauri district.',
    image: 'https://images.pexels.com/photos/7656988/pexels-photo-7656988.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    category: 'Campaign',
    spots: 300,
    registered: 201,
    highlights: [
      'Distribute 2000+ cloth bags',
      'Plastic collection drive',
      'Shopkeeper awareness program',
      'Team t-shirts provided'
    ]
  },
  {
    id: 'school-program-2025',
    title: 'Green Schools Initiative',
    date: 'July 15, 2025',
    time: '9:00 AM - 2:00 PM',
    location: 'Government Schools, Pauri District',
    description: 'Visit schools across Pauri to educate students about environmental conservation, set up recycling stations, and plant trees in school premises.',
    image: 'https://images.pexels.com/photos/9543405/pexels-photo-9543405.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    category: 'Education',
    spots: 80,
    registered: 45,
    highlights: [
      'Interactive sessions for kids',
      'School garden setup',
      'Recycling station installation',
      'Educational materials provided'
    ]
  }
];
