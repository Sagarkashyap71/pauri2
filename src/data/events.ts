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
    id: 'plantation-drive-2026',
    title: 'Plantation Drive',
    date: 'June 19, 2026',
    time: '9:00 AM',
    location: 'Pauri Garhwal, Uttarakhand',
    description: 'Join Pauri Eco Warriors in a plantation drive to increase green cover and promote environmental conservation.',
    image: 'https://images.pexels.com/photos/28662953/pexels-photo-28662953.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    category: 'Plantation',
    spots: 100,
    registered: 50,
    highlights: [
      'Tree Plantation',
      'Environmental Conservation',
      'Community Participation',
      'Volunteer Activity'
    ]
  },
  {
    id: 'cleaning-drive-2026',
    title: 'Cleaning Drive',
    date: 'June 20, 2026',
    time: '9:00 AM',
    location: 'Pauri Garhwal, Uttarakhand',
    description: 'Participate in a community cleaning drive and help keep Pauri clean and beautiful.',
    image: 'https://images.pexels.com/photos/7656995/pexels-photo-7656995.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    category: 'Cleanup',
    spots: 100,
    registered: 65,
    highlights: [
      'Waste Collection',
      'Clean Environment',
      'Volunteer Participation',
      'Community Service'
    ]
  },
  {
    id: 'awareness-drive-2026',
    title: 'Awareness Drive',
    date: 'June 21, 2026',
    time: '9:00 AM',
    location: 'Pauri Garhwal, Uttarakhand',
    description: 'Spread awareness about environmental protection and sustainable living practices.',
    image: 'https://images.pexels.com/photos/9543738/pexels-photo-9543738.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    category: 'Awareness',
    spots: 100,
    registered: 80,
    highlights: [
      'Public Awareness',
      'Environmental Education',
      'Community Engagement',
      'Green Future'
    ]
  }
];