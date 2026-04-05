export type Project = {
  id: string
  title: string
  location: string
  category: 'corporate' | 'residential' | 'hospitality' | 'retail'
  description: string
  coverImage: string | null
  images: string[]
  featured: boolean
}

export const projects: Project[] = [
  // Corporate
  {
    id: 'moss-headquarters',
    title: 'Moss Headquarters',
    location: 'Florida',
    category: 'corporate',
    description:
      'The relocation and consolidation of Moss Construction\'s headquarters reflects the company\'s commitment to efficiency, collaboration, and sustainability. By bringing all employees under one roof, Moss aimed to enhance communication and streamline operations, fostering a unified company culture. The headquarters incorporates state-of-the-art facilities aligned with their core values of quality, transparency, and safety.',
    coverImage: '/images/projects/corporate/Moss.png',
    images: ['/images/projects/corporate/Moss.png'],
    featured: true,
  },
  {
    id: 'knight-foundation',
    title: 'Knight Foundation',
    location: 'Miami, FL',
    category: 'corporate',
    description:
      'Faced with the demands of a rapidly evolving post-pandemic work landscape, Knight Foundation seized on the relocation of its Miami headquarters as an opportunity to develop a new workplace that functions as an agile vehicle for the continued advancement of the organization\'s mission — supporting free expression, journalism, the arts, and community culture.',
    coverImage: '/images/projects/corporate/Knight Foundation.jpg',
    images: ['/images/projects/corporate/Knight Foundation.jpg'],
    featured: true,
  },
  {
    id: 'etrade-headquarters',
    title: 'E*Trade Headquarters',
    location: 'New York, NY',
    category: 'corporate',
    description:
      'E*Trade\'s relocation to a new headquarters in Times Square marks a significant shift in their corporate presence. The new headquarters features open floor plans, collaborative workspaces, and state-of-the-art technology to support a dynamic work environment — positioning E*Trade in a prime location while fostering innovation and collaboration.',
    coverImage: '/images/projects/corporate/Etrade.jpg',
    images: ['/images/projects/corporate/Etrade.jpg'],
    featured: true,
  },
  {
    id: 'atomic',
    title: 'Atomic',
    location: 'Miami, FL',
    category: 'corporate',
    description:
      'Atomic\'s first Miami office in the vibrant Wynwood district focuses on fostering collaboration and innovation. Featuring open workspaces and flexible meeting areas, the interior buildout emphasizes a modern aesthetic with clean lines, natural light, and sustainable materials — creating an inspiring environment for entrepreneurs and teams.',
    coverImage: '/images/projects/corporate/Atomic.jpg',
    images: ['/images/projects/corporate/Atomic.jpg'],
    featured: false,
  },
  {
    id: 'adt-headquarters',
    title: 'ADT Headquarters',
    location: 'Boca Raton, FL',
    category: 'corporate',
    description:
      'The renovation of ADT\'s headquarters is a testament to the company\'s 150 years of innovation and leadership in the security industry. The redesigned space integrates modern architectural elements with advanced technology, emphasizing flexibility, collaboration, open-plan offices, state-of-the-art meeting rooms, and wellness amenities.',
    coverImage: '/images/projects/corporate/ADT.jpg',
    images: ['/images/projects/corporate/ADT.jpg'],
    featured: false,
  },
  {
    id: 'zebersky-payne',
    title: 'Zebersky & Payne Law',
    location: 'Fort Lauderdale, FL',
    category: 'corporate',
    description:
      'A relocation project for this prominent Fort Lauderdale law firm into a newly constructed office space. The new office was designed to foster collaboration among the firm\'s diverse team of attorneys specializing in corporate transactions, commercial litigation, and real estate law — aligning with their reputation for sophisticated, solution-oriented legal services.',
    coverImage: '/images/projects/corporate/Zebersky.jpg',
    images: ['/images/projects/corporate/Zebersky.jpg'],
    featured: false,
  },
  {
    id: 'knotel',
    title: 'Knotel',
    location: 'New York, NY',
    category: 'corporate',
    description:
      'Located in the heart of Miami, Knotel\'s office space was designed to embody the company\'s commitment to flexibility and innovation, catering to the diverse needs of modern businesses. A blend of contemporary aesthetics with local influences — incorporating open-plan layouts, modular furniture, and vibrant communal areas to foster collaboration and creativity.',
    coverImage: '/images/projects/corporate/Knotel.jpg',
    images: ['/images/projects/corporate/Knotel.jpg'],
    featured: false,
  },
  // Residential
  {
    id: 'zaid-residence',
    title: 'Zaid Residence',
    location: 'New Jersey',
    category: 'residential',
    description:
      'A grand residential commission featuring custom architectural detailing, a dramatic geometric ceiling design, and thoughtfully planned interior spaces — from initial concept through construction completion.',
    coverImage: '/images/projects/residential/Zaid-1.webp',
    images: ['/images/projects/residential/Zaid-1.webp'],
    featured: true,
  },
  // Hospitality
  {
    id: 'chuck-lager',
    title: 'Chuck Lager',
    location: 'Fort Myers, FL',
    category: 'hospitality',
    description:
      'The conversion of a former Chili\'s restaurant into a Chuck Lager location showcases a modern and inviting dining experience. The renovation focused on transforming the space to reflect Chuck Lager\'s brand identity while enhancing functionality and aesthetics.',
    coverImage: '/images/projects/hospitality/Chuck Lager.jpg',
    images: ['/images/projects/hospitality/Chuck Lager.jpg'],
    featured: true,
  },
  {
    id: 'rodbenders',
    title: 'Rodbenders',
    location: 'Florida',
    category: 'hospitality',
    description:
      'The recent interior upgrade of Rodbenders in Cutler Bay, FL, reflects a modern approach to enhancing the dining experience. The new design features an open layout with sleek, modern furnishings and high-quality materials, providing a comfortable and stylish environment for customers.',
    coverImage: '/images/projects/hospitality/Rodbenders .jpeg',
    images: ['/images/projects/hospitality/Rodbenders .jpeg'],
    featured: false,
  },
  // Retail
  {
    id: 'ject',
    title: 'JECT',
    location: 'Miami Beach, FL',
    category: 'retail',
    description:
      'JECT\'s new Miami location features signature lime wash walls, vintage gold accents, Pink Botticelli stone tops, and Mokum Alpaca Velvet banquettes. The design — with curved walls, arches, and symmetrical millwork — embodies JECT\'s commitment to beauty and precision, delivering a top-tier cosmetic experience in one of Miami Beach\'s most fashionable districts.',
    coverImage: '/images/projects/retail/JECT.jpg',
    images: ['/images/projects/retail/JECT.jpg'],
    featured: true,
  },
  {
    id: 'marco-pizza',
    title: "Marco's Pizza",
    location: 'Cumming, GA',
    category: 'retail',
    description:
      "The upgrade of Marco's Pizza showcases a modern approach to enhancing the dining experience. The renovation focused on creating a contemporary and inviting atmosphere while maintaining the brand's authentic Italian heritage.",
    coverImage: '/images/projects/retail/Marco.jpeg',
    images: ['/images/projects/retail/Marco.jpeg'],
    featured: false,
  },
  {
    id: 'hsbc',
    title: 'HSBC',
    location: 'San Francisco, CA',
    category: 'retail',
    description:
      'The renovation of HSBC\'s branch at 601 Montgomery reflects the bank\'s commitment to providing a modern and efficient banking experience. The redesign focused on creating a welcoming and functional space for both clients and staff.',
    coverImage: '/images/projects/retail/HSBC.jpg',
    images: ['/images/projects/retail/HSBC.jpg'],
    featured: false,
  },
  {
    id: 'darbe-meyer-temple',
    title: 'Darbe Meyer Temple',
    location: 'New York, NY',
    category: 'retail',
    description:
      'A sacred community space designed to honor cultural heritage while meeting the functional needs of a modern congregation.',
    coverImage: '/images/projects/retail/Darbe Meher.jpg',
    images: ['/images/projects/retail/Darbe Meher.jpg'],
    featured: false,
  },
  {
    id: 'perlmount-car-wash',
    title: 'Perlmount Car Wash',
    location: 'New York, NY',
    category: 'retail',
    description:
      'A commercial facility designed for efficiency and customer experience, balancing functional requirements with a refined architectural presence.',
    coverImage: '/images/projects/retail/Pearlmont1.jpg',
    images: ['/images/projects/retail/Pearlmont1.jpg'],
    featured: false,
  },
]
