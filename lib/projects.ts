export type Project = {
  id: string
  title: string
  location: string
  category: 'residential' | 'commercial'
  description: string
  coverImage: string | null
  images: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'zaid-residence',
    title: 'Zaid Residence',
    location: 'New Jersey',
    category: 'residential',
    description:
      'A grand residential commission featuring custom architectural detailing, a dramatic geometric ceiling design, and thoughtfully planned interior spaces — from initial concept through construction completion.',
    coverImage: '/images/projects/Zaid-1.webp',
    images: ['/images/projects/Zaid-1.webp'],
    featured: true,
  },
  {
    id: 'perlmount-car-wash',
    title: 'Perlmount Car Wash',
    location: 'New York',
    category: 'commercial',
    description:
      'A commercial facility designed for efficiency and customer experience, balancing functional requirements with a refined architectural presence.',
    coverImage: '/images/projects/Pearlmont1.jpg',
    images: ['/images/projects/Pearlmont1.jpg'],
    featured: true,
  },
  {
    id: 'darbe-meyer-temple',
    title: 'Darbe Meyer Temple',
    location: 'New York',
    category: 'commercial',
    description:
      'A sacred community space designed to honor cultural heritage while meeting the functional needs of a modern congregation.',
    coverImage: '/images/projects/Darbe Meher.jpg',
    images: ['/images/projects/Darbe Meher.jpg'],
    featured: true,
  },
]
