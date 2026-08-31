import {
  BananaVariety,
  TechnologyStage,
  InfrastructureItem,
  QualityStep,
  FarmerSupportTopic,
  GalleryItem
} from '../types';

export const COMPANY_INFO = {
  name: 'VGB BIO-TECH NURSERY',
  legalName: 'VGB Bio-Tech Nursery',
  tagline: 'Advanced Plant Biotechnology for Sustainable Agricultural Growth',
  address: {
    line1: 'Bendgalli Road',
    town: 'Gundlupete',
    state: 'Karnataka',
    pincode: '571111',
    country: 'India',
    plusCode: 'VM3H+WH Gundlupete, Karnataka',
    formatted: 'Bendgalli Road, Gundlupete, Karnataka 571111, India'
  },
  phone: '+91 95910 50890',
  email: 'info@vgbbiotech.com',
  instagram: 'https://www.instagram.com/vgb_biotech?igsi=ajY5NXg5bmc0c2Fr',
  instagramHandle: '@vgb_biotech',
  gstin: '29MKJPS2402K1ZK',
  hours: 'Monday – Saturday: 8:00 AM – 6:30 PM IST',
  established: 'Karnataka, India',
};

export const BANANA_VARIETIES: BananaVariety[] = [
  {
    id: 'grand-naine',
    name: 'G9 / Grand Naine',
    botanicalName: 'Musa acuminata (AAA Group)',
    category: 'Commercial Cavendish',
    tagline: 'High-yield commercial standard with uniform bunch development',
    bunchWeight: '30 – 40+ kg bunch potential',
    duration: '11 – 12 Months',
    spacingRecommended: '6 ft × 6 ft (1200 plants/acre)',
    characteristics: [
      'True-to-type micropropagated Cavendish clone',
      'Sturdy pseudostem resistant to wind lodging',
      'Uniform cylindrical bunch architecture',
      'Exceptional shelf life and domestic/export demand'
    ],
    idealFor: 'High-density commercial farming, export supply chains, and structured drip-fertigation projects.',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'yelakki',
    name: 'Yelakki (Elakki Bale)',
    botanicalName: 'Musa acuminata × balbisiana (AB Group)',
    category: 'Premium Table Dessert',
    tagline: 'Highly priced aromatic small banana with strong market preference',
    bunchWeight: '12 – 18 kg bunches',
    duration: '12 – 13 Months',
    spacingRecommended: '7 ft × 7 ft (890 plants/acre)',
    characteristics: [
      'Distinctive sweet aroma with fine creamy texture',
      'High market price realization per bunch',
      'Disease-screened meristem culture for maximum vigor',
      'Thriving in South Indian soil & climate conditions'
    ],
    idealFor: 'South Indian regional premium markets, high-return direct farm gate sales.',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'nati-nendran',
    name: 'Nati Nendran',
    botanicalName: 'Musa paradisiaca (AAB Group)',
    category: 'Culinary & Processing',
    tagline: 'Traditional high-starch cultivar prized for chips and culinary processing',
    bunchWeight: '14 – 20 kg bunch',
    duration: '10 – 11 Months',
    spacingRecommended: '6.5 ft × 6.5 ft (1030 plants/acre)',
    characteristics: [
      'High dry matter content suitable for crisp processing',
      'Uniform finger length and gold pulp coloration',
      'Fast crop cycle turnaround in warm climates',
      'Strong culinary and commercial processing demand'
    ],
    idealFor: 'Banana chips processing units, Kerala and South Karnataka traditional markets.',
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'quintal-nendran',
    name: 'Quintal Nendran',
    botanicalName: 'Musa paradisiaca (AAB Group Clone)',
    category: 'Heavy-Bunch Processing',
    tagline: 'Long-fingered heavy-yielding Nendran selection',
    bunchWeight: '22 – 30+ kg bunches',
    duration: '11 – 12 Months',
    spacingRecommended: '7 ft × 7 ft (890 plants/acre)',
    characteristics: [
      'Substantially larger bunch weight than standard Nendran',
      'Longer, thick cylindrical fingers',
      'Enhanced root anchorage from primary hardening',
      'Superior processing yield per hectare'
    ],
    idealFor: 'Commercial processors, contract farming setups, and bulk commodity traders.',
    image: 'https://images.unsplash.com/photo-1543218024-57a70143c369?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'poovan',
    name: 'Poovan (Mysore Variety)',
    botanicalName: 'Musa acuminata × balbisiana (AAB Group)',
    category: 'Hardy Commercial',
    tagline: 'Resilient traditional cultivar with sub-acid flavor and strong shelf life',
    bunchWeight: '18 – 25 kg bunch',
    duration: '12 – 14 Months',
    spacingRecommended: '7 ft × 7 ft (890 plants/acre)',
    characteristics: [
      'Remarkable adaptability to diverse soil regimes',
      'Attractive yellow skin with pleasant sweet-tangy flesh',
      'Consistent bunch filling even under varying weather',
      'Good ratoon crop sustainability'
    ],
    idealFor: 'Multi-season cropping, intercropping orchards, and local wholesale distribution.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'karpooravalli',
    name: 'Karpooravalli',
    botanicalName: 'Musa acuminata × balbisiana (ABB Group)',
    category: 'Sweet & Drought-Tolerant',
    tagline: 'Extremely sweet, ash-coated fruits known for drought resilience',
    bunchWeight: '20 – 28 kg bunch',
    duration: '13 – 14 Months',
    spacingRecommended: '8 ft × 8 ft (680 plants/acre)',
    characteristics: [
      'High brix sugar content and distinct honeyed sweetness',
      'Strong drought and marginal soil tolerance',
      'Robust canopy structure with heavy wind resistance',
      'Minimal post-harvest bruising'
    ],
    idealFor: 'Arid to semi-arid farm zones, organic farm ecosystems, premium fruit retailers.',
    image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'red-banana',
    name: 'Red Banana (Sevvazhai)',
    botanicalName: 'Musa acuminata (AAA Group)',
    category: 'High-Value Specialty',
    tagline: 'Nutrient-dense crimson peel specialty banana with premium valuation',
    bunchWeight: '22 – 32 kg bunch',
    duration: '14 – 16 Months',
    spacingRecommended: '8 ft × 8 ft (680 plants/acre)',
    characteristics: [
      'High beta-carotene and antioxidant profile',
      'Distinctive purplish-red thick skin and creamy pink flesh',
      'Exceptional premium price ceiling in urban supermarkets',
      'Tissue-culture derived clones ensure disease-free initiation'
    ],
    idealFor: 'Niche organic plantations, health-focused specialty fruit markets, and high-margin direct sales.',
    image: 'https://images.unsplash.com/photo-1566393028639-d108a42c46a7?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'rasathali',
    name: 'Rasathali (Silk Group)',
    botanicalName: 'Musa acuminata × balbisiana (AAB Group)',
    category: 'Heritage Table Fruit',
    tagline: 'Silky textured heritage dessert banana highly revered for festivals',
    bunchWeight: '12 – 16 kg bunch',
    duration: '12 – 13 Months',
    spacingRecommended: '7 ft × 7 ft (890 plants/acre)',
    characteristics: [
      'Silky, melting pulp with exquisite sub-acid flavor',
      'Micropropagation eliminates systemic rhizome pathogens',
      'Premium festive and ceremonial demand throughout the year',
      'Uniform hands with golden-yellow skin'
    ],
    idealFor: 'High-value festival trading, specialized dessert markets, and gourmet supply channels.',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'madarangi',
    name: 'Madarangi Banana',
    botanicalName: 'Musa acuminata cultivar',
    category: 'Regional Specialty',
    tagline: 'Locally adapted Karnataka cultivar with distinct aroma and good yield',
    bunchWeight: '15 – 22 kg bunch',
    duration: '11 – 12 Months',
    spacingRecommended: '7 ft × 7 ft (890 plants/acre)',
    characteristics: [
      'Excellent adaptation to Mysore and Chamarajanagar agro-climates',
      'Crisp texture and pleasant sweet finish',
      'Sturdy root development through secondary mist-hardening',
      'Consistent ratoon performance'
    ],
    idealFor: 'Karnataka regional growers, local farm-to-table supply chains.',
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=1200&q=85'
  }
];

export const TECHNOLOGY_STAGES: TechnologyStage[] = [
  {
    step: '01',
    title: 'Mother Plant Initiation',
    phase: 'LABORATORY',
    subtitle: 'Aseptic Meristem Dissection & Virus Screening',
    description: 'Elite mother suckers from verified high-performance mother blocks are selected. Shoot tip meristems (0.2–0.5 mm) are excised under sterile laminar airflow hoods to ensure total freedom from systemic bacterial and fungal pathogens.',
    duration: 'Weeks 1 – 4',
    scienceFocus: 'Apical meristem isolation, surface sterilization in aseptic conditions, pathogen screening.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=85'
  },
  {
    step: '02',
    title: 'Multiplication',
    phase: 'LABORATORY',
    subtitle: 'Controlled Hormone-Induced Micropropagation',
    description: 'Inoculated meristem buds are cultivated in specialized nutrient agar media enriched with balanced cytokinins and auxins under tightly controlled photoperiod and thermal cycles (25°C ± 2°C) for rapid, uniform shoot proliferation.',
    duration: 'Weeks 5 – 14',
    scienceFocus: 'MS Media nutrient optimization, subculturing cycles, uniform shoot cluster formation.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85'
  },
  {
    step: '03',
    title: 'Rooting',
    phase: 'LABORATORY',
    subtitle: 'Induction of Robust Adventitious Root Systems',
    description: 'Individualized healthy shoots are transferred into specialized liquid/semi-solid rooting media. Specific root-inducing auxins promote dense, fibrous primary root primordia essential for vigorous nutrient absorption.',
    duration: 'Weeks 15 – 18',
    scienceFocus: 'Root induction media, root-shoot ratio balancing, pre-ex vitro preparation.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=85'
  },
  {
    step: '04',
    title: 'Hardening (Primary)',
    phase: 'GREENHOUSE',
    subtitle: 'Ex-Vitro Deflasking in Humidity Chambers',
    description: 'Laboratory plantlets are washed gently to remove nutrient agar and planted in sterilized coco-peat plug trays inside automated micro-fogging chambers maintaining 85–90% relative humidity to develop protective cuticular wax.',
    duration: 'Weeks 19 – 23',
    scienceFocus: 'Stomatal regulation conditioning, cuticle development, root system anchorage.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=85'
  },
  {
    step: '05',
    title: 'Acclimatization (Secondary)',
    phase: 'GREENHOUSE',
    subtitle: 'Shade Net Solar Adaptation & Vigorous Growth',
    description: 'Gradual transition into UV-stabilized 50% shade-net greenhouses with calibrated fertigation. Plantlets build sturdy pseudostems, active mycorrhizal associations, and expand their photosynthetic leaf area.',
    duration: 'Weeks 24 – 28',
    scienceFocus: 'Light intensity step-up, foliar nutrition, root-ball cohesion in polybags.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=85'
  },
  {
    step: '06',
    title: 'Field-Ready Plantlets',
    phase: 'BANANA FIELD',
    subtitle: 'Quality Certified Saplings for Farmer Dispatch',
    description: 'Final multi-point inspection for shoot girth, 5–6 healthy true leaves, and dense fibrous white roots. Packed safely in specialized crates for direct plantation delivery with complete plantation guidance.',
    duration: 'Ready for Dispatch',
    scienceFocus: 'Final vigor grading, pathogen screening clearance, safe transport packaging.',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1000&q=85'
  }
];

export const INFRASTRUCTURE_LIST: InfrastructureItem[] = [
  {
    id: 'lab',
    title: 'Aseptic Tissue Culture Laboratories',
    tagline: 'Class-100 Cleanroom Environment',
    description: 'Sterile multi-room micropropagation facility with HEPA filtration, positive air pressure, and automated UV decontamination for zero-contamination seedling generation.',
    spec: 'HEPA 99.99% Filtration • Positive Pressure Cleanrooms',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'laminar',
    title: 'Laminar Airflow Workstations',
    tagline: 'Ultra-Clean Inoculation Stations',
    description: 'High-precision horizontal laminar airflow cabinets providing ISO Class 5 sterile operating zones where trained technicians perform delicate apical meristem excisions.',
    spec: 'ISO Class 5 Air Purity • Continuous Micro-Dissection',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'autoclave',
    title: 'Autoclave Sterilization Systems',
    tagline: 'High-Pressure Thermal Sterilization',
    description: 'Industrial automated autoclaves operating at 121°C and 15 PSI to completely sterilize nutrient media, glass vessels, tools, and substrates, eliminating biological contaminants.',
    spec: '121°C Microprocessor Cycle • Complete Sterilization',
    image: 'https://images.unsplash.com/photo-1583912267670-6575ad472688?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'media',
    title: 'Culture Media Preparation Units',
    tagline: 'Precision Biochemistry & Nutrients',
    description: 'Calibrated analytical balances, deionized reverse-osmosis water systems, and pH telemetry ensure precise macro/micronutrient formulation tailored for every banana variety.',
    spec: 'Analytical Micro-Nutrient Dosing • Deionized RO Water',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'growth',
    title: 'Automated Growth Chambers',
    tagline: 'Photoperiod & Climate Optimization',
    description: 'Temperature-controlled incubation rooms (25°C ± 2°C) equipped with full-spectrum photosynthetic LED arrays (16h light / 8h dark) to foster vigorous shoot proliferation.',
    spec: '25°C Photoperiod Regulated • Full-Spectrum LED Matrix',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'hardening',
    title: 'Fogging & Mist-Based Hardening Chambers',
    tagline: 'Automated Humidity Micro-Climates',
    description: 'Climate-monitored tunnels with automated high-pressure ultrasonic foggers to gently condition ex-vitro plantlets against moisture shock during early root establishment.',
    spec: '85–90% RH Micro-Fogging • Cuticle Wax Conditioning',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'greenhouse',
    title: 'UV-Sterilized Acclimatization Greenhouses',
    tagline: 'Secondary Conditioning & Sun Adaptation',
    description: 'Spacious naturally ventilated shade-net polyhouses where hardened saplings develop vigorous root architecture and full solar resilience prior to farm delivery.',
    spec: 'UV-Treated Polycarbonate • Controlled Drip & Fertigation',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1000&q=85'
  }
];

export const QUALITY_STEPS: QualityStep[] = [
  {
    step: '01',
    title: 'Visual Clonal Uniformity',
    metric: 'Morphological Purity',
    description: 'Rigorous inspection of leaf phyllotaxy, petiole coloration, and pseudostem symmetry to eliminate off-types, somaclonal variants, or weak shoots before advancement.',
    protocol: 'Standardized botanical indexing across each culture flask batch.'
  },
  {
    step: '02',
    title: 'Pathogen Screening',
    metric: 'Virus & Bacteria Clearance',
    description: 'Multi-stage diagnostic screening ensuring mother stock and early stage cultures are completely devoid of Banana Bunchy Top Virus (BBTV), Mosaic Virus, and fungal endophytes.',
    protocol: 'Meristem micro-isolation verified by laboratory diagnostic assays.'
  },
  {
    step: '03',
    title: 'Contamination Testing',
    metric: 'Aseptic Vessel Integrity',
    description: 'Continuous monitoring of culture flasks in incubation chambers. Any vessel displaying fungal mycelia or bacterial turbidity is immediately quarantined and removed.',
    protocol: '100% batch incubation audits under sterile illumination.'
  },
  {
    step: '04',
    title: 'Root & Shoot Vigor',
    metric: 'Biomass & Root Architecture',
    description: 'Evaluation of secondary root branches, root hair density, and pseudostem diameter (girth) to ensure maximum nutrient assimilation capacity upon soil transplant.',
    protocol: 'Microscopic inspection of root-shoot equilibrium prior to dispatch.'
  },
  {
    step: '05',
    title: 'Hardening Stress Tolerance',
    metric: 'Cuticular & Stomatal Fitness',
    description: 'Testing sapling adaptation during controlled humidity reductions to verify stomatal closure mechanics and wax cuticle maturity against natural field evaporative demand.',
    protocol: 'Progressive RH step-down validation from 90% down to ambient levels.'
  },
  {
    step: '06',
    title: 'Field Adaptability',
    metric: 'Post-Plantation Survival',
    description: 'Pre-dispatch hardening in open-sided shade polyhouses ensures zero transplant shock, rapid root strike into field soil, and immediate vegetative growth upon planting.',
    protocol: 'Batch inspection checklist signed by nursery agronomists before dispatch.'
  }
];

export const FARMER_SUPPORT_TOPICS: FarmerSupportTopic[] = [
  {
    id: 'spacing',
    title: 'Scientific Spacing & Plantation Planning',
    description: 'Optimal grid calculations (6x6 ft, 7x7 ft, or 8x8 ft) tailored to chosen banana variety, soil topography, and mechanized intercultural operations.',
    guideline: 'Calculates optimal plant density per acre without canopy overcrowding or light competition.',
    iconName: 'Grid'
  },
  {
    id: 'soil',
    title: 'Soil Health Improvement Practices',
    description: 'Diagnostic recommendations for organic carbon enrichment, soil pH buffering (6.5 – 7.5), and beneficial bio-fertilizer integration prior to pit preparation.',
    guideline: 'Pre-plantation pit treatment with well-decomposed FYM, neem cake, and bio-inoculants.',
    iconName: 'Sprout'
  },
  {
    id: 'irrigation',
    title: 'Irrigation Guidance',
    description: 'Precision water scheduling based on vegetative, flowering, and bunch development stages to avoid waterlogging while ensuring uninterrupted transpiration.',
    guideline: 'Micro-irrigation layout recommendations and stage-wise water requirement tables (liters/plant/day).',
    iconName: 'Droplets'
  },
  {
    id: 'fertigation',
    title: 'Fertigation Guidance',
    description: 'Split nutrient scheduling of Nitrogen, Phosphorus, Potassium, and essential secondary micronutrients (Boron, Zinc, Magnesium) delivered through drip emitters.',
    guideline: 'Tailored weekly fertigation calendar preventing nutrient leaching and maximizing bunch fill.',
    iconName: 'Activity'
  },
  {
    id: 'ipm',
    title: 'Integrated Pest Management (IPM)',
    description: 'Proactive scouting protocols for pseudostem weevil, aphids, and Sigatoka leaf spot utilizing biological controls, neem formulations, and targeted remedies.',
    guideline: 'Preventative biological sprays and field sanitation practices for disease-free longevity.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'optimization',
    title: 'Crop Cycle Yield Optimization',
    description: 'Comprehensive canopy de-suckering, flower denavelling, bunch sleeving, and propping support to achieve superior uniform fruit grade.',
    guideline: 'Proven crop management steps to enhance grade-A bunch formation and uniform harvest timing.',
    iconName: 'TrendingUp'
  }
];

export const PROJECT_CASE_STUDY = {
  projectTitle: 'VGB High-Performance Banana Plantation',
  location: 'Mysuru, Karnataka',
  year: '2025',
  overview: 'VGB Bio-Tech Nursery developed a high-yield banana cultivation project using scientifically produced, disease-free tissue-cultured plants. Through controlled hardening, strong root architecture, and genetically stable planting material, the farm achieved uniform growth and improved bunch formation.',
  impactPoints: [
    'Stable and predictable yields through true-to-type, disease-free plantlets.',
    'Improved farm profitability through plant vigor and faster crop establishment.',
    'Long-term sustainability through biotechnology-driven cultivation.',
    'Expert guidance on spacing, fertigation and crop management.'
  ],
  image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1600&q=85'
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Aseptic Meristem Dissection Hood',
    category: 'LABORATORY',
    caption: 'Sterile laminar airflow workstation with micro-dissection tools under positive pressure air filtration.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape'
  },
  {
    id: 'g2',
    title: 'High-Density Shoot Multiplication Jars',
    category: 'PLANTLETS',
    caption: 'Sterile culture vessels displaying multiple uniform banana plantlet shoots in nutrient agar.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=85',
    aspect: 'portrait'
  },
  {
    id: 'g3',
    title: 'Ultrasonic Micro-Fogging Tunnel',
    category: 'HARDENING',
    caption: 'Primary hardening zone with calibrated 90% humidity mist to gently establish ex-vitro young roots.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape'
  },
  {
    id: 'g4',
    title: 'Secondary Shade Polyhouse Canopy',
    category: 'GREENHOUSE',
    caption: 'UV-shielded acclimatization polyhouse conditioning young saplings for open sun tolerance.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=85',
    aspect: 'portrait'
  },
  {
    id: 'g5',
    title: 'Flourishing Field Plantation Canopy',
    category: 'PLANTATION',
    caption: 'Uniform Cavendish canopy established using VGB true-to-type micropropagated plantlets.',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape'
  },
  {
    id: 'g6',
    title: 'Vigorous Vegetative Expansion',
    category: 'FIELD GROWTH',
    caption: 'Healthy pseudostem girth and expansive lamina development in young field-transplanted bananas.',
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=800&q=85',
    aspect: 'square'
  },
  {
    id: 'g7',
    title: 'Photoperiod Growth Incubation Matrix',
    category: 'INFRASTRUCTURE',
    caption: 'Automated thermal chambers regulating light spectrum and temperature for consistent batch growth.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape'
  },
  {
    id: 'g8',
    title: 'Healthy Root Ball Structure',
    category: 'PLANTLETS',
    caption: 'Dense white fibrous root network ready for instant soil anchorage and zero transplant shock.',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=85',
    aspect: 'portrait'
  }
];
