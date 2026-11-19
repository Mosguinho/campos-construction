export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  specs: string;
  location: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'deck' | 'finish' | 'door' | 'flooring' | 'demolition' | 'remodel';
}

export interface BlogPost {
  id: string;
  month: string;
  day: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const COMPANY_INFO = {
  brandTop: 'W CAMPOS',
  brandBottom: 'CONSTRUCTION COMPANY',
  phoneDisplay: '(857) 346-4678',
  phoneHref: 'tel:+18573464678',
  email: 'estimates@camposconstruction.us',
  serviceArea: 'Serving MA · NH · RI',
  serviceAreaFull: 'Massachusetts, New Hampshire & Rhode Island',
  instagramUrl: 'https://www.instagram.com/campos.construction.company/',
  instagramHandle: '@campos.construction.company',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'composite-deck-transformation',
    title: 'Composite Deck & Railings',
    category: 'Custom Decks',
    specs: 'Composite & PVC · 620 sq ft',
    location: 'Massachusetts',
    image: '/images/project-deck.jpg',
    description:
      'Complete custom deck build featuring warm cedar-tone composite decking, crisp white vinyl framing, and sleek matte-black aluminum balusters engineered for New England weather.',
    highlights: [
      'Low-maintenance capped composite boards',
      'White PVC fascia & trim with black balusters',
      'Code-compliant concrete pier footings',
    ],
  },
  {
    id: 'wrap-around-porch',
    title: 'Wrap-Around Elevated Porch',
    category: 'Decks & Exterior',
    specs: 'Residential · 1,100 sq ft',
    location: 'New Hampshire',
    image: '/images/project-porch.jpg',
    description:
      'Expansive wrap-around porch and elevated deck seamlessly integrated with classic colonial siding, architectural columns, and durable multi-season railings.',
    highlights: [
      'Continuous wrap-around structural framing',
      'Weatherproof flashing & moisture barrier',
      'Custom stair stringers and lighting prep',
    ],
  },
  {
    id: 'doors-windows-flooring',
    title: 'Windows, Doors & Oak Flooring',
    category: 'Interior Finish',
    specs: 'Interior Remodel · 2,400 sq ft',
    location: 'Rhode Island',
    image: '/images/project-interior.jpg',
    description:
      'Full interior finish upgrade including colonial-grid energy-efficient double-hung windows, solid-core paneled doors with matte black hardware, and natural oak flooring.',
    highlights: [
      'Precision-leveled hardwood installation',
      'Energy-Star rated insulated colonial windows',
      'Custom casing, baseboards & matte black hardware',
    ],
  },
  {
    id: 'covered-porch-framing',
    title: 'Covered Porch Framing & Prep',
    category: 'Structural Framing',
    specs: 'Framing & Wrap · 480 sq ft',
    location: 'Massachusetts',
    image: '/images/blog-framing.jpg',
    description:
      'Ground-up structural timber framing for a covered outdoor living space, complete with poured concrete footings, house-wrap weatherproofing, and subfloor deck prep.',
    highlights: [
      'Deep frost-line concrete footings',
      'Pressure-treated structural joists & beams',
      'Full exterior envelope weatherproofing',
    ],
  },
  {
    id: 'twilight-outdoor-living',
    title: 'Multi-Level Twilight Deck',
    category: 'Custom Decks',
    specs: 'Luxury Villa · 850 sq ft',
    location: 'Massachusetts',
    image: '/images/hero-deck.jpg',
    description:
      'Two-tier architectural deck transformation designed for evening entertaining, combining warm composite tones, integrated step lighting, and panoramic backyard views.',
    highlights: [
      'Multi-level entertaining zones',
      'Integrated low-voltage LED stair lighting',
      'Hidden fastener deck board installation',
    ],
  },
  {
    id: 'architectural-material-finish',
    title: 'Custom Trim & Stonework',
    category: 'Exterior Finish',
    specs: 'Exterior Upgrade · 1,800 sq ft',
    location: 'Rhode Island',
    image: '/images/blog-materials.jpg',
    description:
      'Coordinated exterior finishing pairing walnut composite accents, matte-black architectural hardware, and natural stone transitions for timeless curb appeal.',
    highlights: [
      'Custom exterior trim & PVC detailing',
      'Corrosion-resistant structural fasteners',
      'Clean demolition & site preparation',
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-decks',
    title: 'Custom Decks',
    description:
      'Composite, PVC, and pressure-treated decks built with precision framing and modern railings.',
    iconName: 'deck',
  },
  {
    id: 'finishing',
    title: 'Interior & Exterior Finish',
    description:
      'Siding, custom trim, crown molding, and detailed carpentry tailored to elevate your home.',
    iconName: 'finish',
  },
  {
    id: 'doors-windows',
    title: 'Doors & Windows',
    description:
      'Energy-efficient window and entry door installations with clean, weatherproof sealing.',
    iconName: 'door',
  },
  {
    id: 'flooring',
    title: 'Flooring Installation',
    description:
      'Hardwood, engineered wood, and luxury vinyl plank installed with flawless subfloor leveling.',
    iconName: 'flooring',
  },
  {
    id: 'demolition',
    title: 'Selective Demolition',
    description:
      'Safe, clean interior and exterior demolition and haul-away ready for your renovation.',
    iconName: 'demolition',
  },
  {
    id: 'remodeling',
    title: 'General Remodeling',
    description:
      'End-to-end residential repairs, structural framing, and upgrades delivered on schedule.',
    iconName: 'remodel',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'composite-vs-wood-decks',
    month: 'MAY',
    day: '20',
    title: 'Composite vs. Wood Decks: What Lasts Best in New England?',
    category: 'Custom Decks',
    readTime: '4 min read',
    image: '/images/project-deck.jpg',
    excerpt:
      'Comparing freeze-thaw durability, maintenance, and long-term value for Massachusetts, New Hampshire, and Rhode Island homeowners.',
    content: [
      'New England weather puts outdoor structures through extreme seasonal shifts—from humid summers to heavy snow loads and freeze-thaw cycles. Choosing the right decking material is the single biggest factor in how your deck performs over 20+ years.',
      'Capped composite and PVC decking resist moisture, splintering, and fading without annual staining or sealing. Paired with white vinyl railings and powder-coated black aluminum balusters, composite decks deliver a crisp architectural look year-round.',
      'Pressure-treated lumber remains a strong, budget-friendly structural choice when properly flashed and maintained. At W Campos Construction, we help you weigh upfront cost against lifecycle maintenance so you get the best fit for your home.',
    ],
  },
  {
    id: 'choosing-deck-materials',
    month: 'MAY',
    day: '12',
    title: 'Choosing the Right Materials for Long-Lasting Results',
    category: 'Materials & Specs',
    readTime: '3 min read',
    image: '/images/blog-materials.jpg',
    excerpt:
      'From hidden stainless fasteners to PVC fascia boards, small material choices make the difference between a 5-year and 25-year build.',
    content: [
      'Great craftsmanship starts before the first board is cut. Using corrosion-resistant structural screws, joist tape on framing lumber, and properly flashed ledger boards prevents hidden water damage behind your siding.',
      'Whether we are installing walnut composite decking, interior oak flooring, or exterior trim, we source proven materials rated for coastal and inland New England climates.',
    ],
  },
  {
    id: 'doors-windows-curb-appeal',
    month: 'MAY',
    day: '05',
    title: 'How New Windows & Doors Boost Curb Appeal and Efficiency',
    category: 'Doors & Windows',
    readTime: '4 min read',
    image: '/images/project-interior.jpg',
    excerpt:
      'Upgrading drafty windows and dated entry doors cuts winter heating bills while transforming your home’s interior light and exterior look.',
    content: [
      'Old single-pane or poorly sealed windows are one of the largest sources of heat loss in New England homes. Modern double-hung colonial-grid windows preserve classic architecture while dramatically improving insulation.',
      'Pairing new windows with a solid-core entry door, matte black hardware, and crisp interior casing creates an immediate visual upgrade inside and out.',
    ],
  },
  {
    id: 'structural-framing-footings',
    month: 'APR',
    day: '28',
    title: 'Deck Framing & Footings: Why Structural Prep Matters',
    category: 'Construction',
    readTime: '5 min read',
    image: '/images/blog-framing.jpg',
    excerpt:
      'What happens below frost line and behind the house wrap determines the safety, levelness, and lifespan of your entire project.',
    content: [
      'A stunning finished deck or porch is only as strong as the foundation beneath it. In MA, NH, and RI, footings must extend below the local frost line to prevent winter heaving.',
      'Our crew handles every stage in-house—from selective demolition and concrete pier pouring to precision timber framing and weather-resistant house wrap—ensuring your project passes inspection and stands the test of time.',
    ],
  },
];
