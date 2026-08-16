import type { VideoAsset } from '@/lib/types';

/**
 * Video carousel assets. In production these are sourced from Cloudinary/S3
 * (min. 3 per month). Here we use royalty-free sample sources so the player is
 * functional in the standalone frontend.
 */
export const VIDEOS: VideoAsset[] = [
  {
    id: 'vid1',
    title: 'Gram Swaraj \u2014 The Vision',
    description: 'Why people\u2019s governance is the foundation of rural transformation.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    category: 'planning',
    date: '2026-07-01',
  },
  {
    id: 'vid2',
    title: 'Maitri Bhoj under the Full Moon',
    description: 'Community dinners on Pooranmasi bringing villagers together for dialogue.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    poster: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?w=800&q=80',
    category: 'spiritual',
    date: '2026-07-15',
  },
  {
    id: 'vid3',
    title: 'Organic Farming Demonstration',
    description: 'Youth Change Agents demonstrate soil testing and organic cultivation.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    category: 'environmental',
    date: '2026-08-01',
  },
  {
    id: 'vid4',
    title: 'Women SHG \u2014 Agents of Change',
    description: 'Self-Help Groups leading livelihoods and social audit.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=800&q=80',
    category: 'planning',
    date: '2026-08-02',
  },
];
