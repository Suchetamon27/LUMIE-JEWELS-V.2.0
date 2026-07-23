// LUMIE JEWELS - SPA Core Logic and Product Catalog

// 1. Product Catalog Database with sub-brands and specifications
const jewelryCatalog = [
  {
    id: "lj-001",
    name: "Kundan Haar Rani Necklace",
    price: 450000,
    mainCategory: "Gold Jewelry",
    subCategory: "Necklaces (Haar, Mala, Choker, Long Necklace)",
    material: "22KT Gold",
    collection: "Traditional",
    subBrand: "Rivaah",
    image: "assets/images/gold_category.jpg",
    description: "An antique-finish majestic 22KT yellow gold Rani Haar adorned with exquisite Kundan stones, delicate pearls, and ruby drops. Crafted for royal bridal elegance.",
    specs: {
      "Metal Purity": "22KT Yellow Gold",
      "Gross Weight": "78.45 g",
      "Net Gold Weight": "65.20 g",
      "Stone Type": "Uncut Diamonds (Polki) & Kundan",
      "Certification": "BIS Hallmark Certified & IGI",
      "Collection": "Rivaah Bridal Heritage"
    }
  },
  {
    id: "lj-002",
    name: "Royal Polki Chandbali Earrings",
    price: 280000,
    mainCategory: "Wedding Collection",
    subCategory: "Earrings (Jhumka, Bali, Studs, Chandbali)",
    material: "22KT Gold",
    collection: "Traditional",
    subBrand: "Rivaah",
    image: "assets/images/gold_category.jpg",
    description: "Ornate traditional Chandbalis combining uncut Polki diamonds and fresh-water pearls on a detailed yellow gold floral base. Perfect for wedding celebrations.",
    specs: {
      "Metal Purity": "22KT Yellow Gold",
      "Gross Weight": "34.20 g",
      "Net Gold Weight": "26.80 g",
      "Stone Type": "Polki Diamonds & Pearl Beads",
      "Certification": "SGL Certified"
    }
  },
  {
    id: "lj-003",
    name: "Solitaire Diamond Anguthi",
    price: 150000,
    mainCategory: "Diamond Jewelry",
    subCategory: "Rings/Anguthi",
    material: "Diamond",
    collection: "Contemporary",
    subBrand: "Astra",
    image: "assets/images/diamond_category.jpg",
    description: "A striking 18KT white gold engagement ring featuring a high-brilliance certified 0.75-carat round solitaire diamond in an elegant four-prong setting.",
    specs: {
      "Metal Purity": "18KT White Gold",
      "Gross Weight": "4.20 g",
      "Diamond Weight": "0.75 Carat",
      "Diamond Quality": "VVS1 Clarity, E Color",
      "Certification": "GIA Certified"
    }
  },
  {
    id: "lj-004",
    name: "Nava-Graha Gemstone Haar",
    price: 320000,
    mainCategory: "Gemstones / Navratna",
    subCategory: "Necklaces (Haar, Mala, Choker, Long Necklace)",
    material: "Gemstone/Navratna",
    collection: "Traditional",
    subBrand: "Virasat",
    image: "assets/images/gemstone_category.jpg",
    description: "A traditional protective Navratna necklace featuring the nine astrological gemstones (Ruby, Pearl, Coral, Emerald, Yellow Sapphire, Diamond, Blue Sapphire, Hessonite, Cat's Eye) set in 18KT yellow gold.",
    specs: {
      "Metal Purity": "18KT Yellow Gold",
      "Gross Weight": "45.10 g",
      "Net Gold Weight": "39.50 g",
      "Gemstones": "Natural Navratna Stones (9 Gemstones)",
      "Certification": "IGI Certified"
    }
  },
  {
    id: "lj-005",
    name: "Filigree Gold Kada Bangle",
    price: 190000,
    mainCategory: "Gold Jewelry",
    subCategory: "Bangles (Kada, Bracelet)",
    material: "22KT Gold",
    collection: "Traditional",
    subBrand: "Virasat",
    image: "assets/images/gold_category.jpg",
    description: "A beautifully detailed, handcrafted 22KT yellow gold Kada bangle. Features traditional Indian wire-mesh filigree work with a secure screw closure.",
    specs: {
      "Metal Purity": "22KT Yellow Gold",
      "Gross Weight": "28.50 g",
      "Size": "2.4 (Openable)",
      "Design": "Traditional Indian Filigree",
      "Certification": "BIS Hallmark"
    }
  },
  {
    id: "lj-006",
    name: "Sleek Mangalsutra Pendant",
    price: 75000,
    mainCategory: "Everyday / Lightweight",
    subCategory: "Pendants (Mangalsutra, Tanmaniya, Lockets)",
    material: "18KT Gold",
    collection: "Everyday",
    subBrand: "Mia",
    image: "assets/images/gold_category.jpg",
    description: "A contemporary lightweight 18KT yellow gold Mangalsutra featuring a minimal diamond-encrusted floral pendant strung with traditional black beads.",
    specs: {
      "Metal Purity": "18KT Yellow Gold",
      "Gross Weight": "6.80 g",
      "Net Gold Weight": "5.90 g",
      "Diamond Weight": "0.18 Carat",
      "Certification": "BIS Hallmark & SGL"
    }
  },
  {
    id: "lj-007",
    name: "Delicate Diamond Bali Earrings",
    price: 95000,
    mainCategory: "Everyday / Lightweight",
    subCategory: "Earrings (Jhumka, Bali, Studs, Chandbali)",
    material: "Diamond",
    collection: "Everyday",
    subBrand: "Mia",
    image: "assets/images/diamond_category.jpg",
    description: "Graceful, everyday-wear 18KT rose gold huggie Bali earrings encrusted with round brilliant-cut micro-diamonds. Timeless and versatile.",
    specs: {
      "Metal Purity": "18KT Rose Gold",
      "Gross Weight": "4.10 g",
      "Diamond Weight": "0.35 Carat",
      "Diamond Quality": "VVS-VS Clarity, G-H Color",
      "Certification": "SGL Certified"
    }
  },
  {
    id: "lj-008",
    name: "Lakshmi 10g Gold Coin",
    price: 78000,
    mainCategory: "Coins",
    subCategory: "Pendants (Mangalsutra, Tanmaniya, Lockets)", 
    material: "22KT Gold",
    collection: "Festive",
    subBrand: "Virasat",
    image: "assets/images/gold_category.jpg",
    description: "An auspicious 10-gram 24KT pure gold coin embossed with Goddess Lakshmi sitting on a lotus, representing wealth and prosperity. Perfect for gifting and investment.",
    specs: {
      "Metal Purity": "24KT Pure Gold (999 Fineness)",
      "Weight": "10.00 g",
      "Shape": "Round",
      "Embossing": "Goddess Lakshmi",
      "Packaging": "Tamper-Proof Assay Card"
    }
  },
  {
    id: "lj-009",
    name: "Classic Diamond Tennis Bracelet",
    price: 420000,
    mainCategory: "Diamond Jewelry",
    subCategory: "Bangles (Kada, Bracelet)",
    material: "Diamond",
    collection: "Contemporary",
    subBrand: "Astra",
    image: "assets/images/diamond_category.jpg",
    description: "A luxurious 18KT white gold line bracelet beautifully set with a continuous row of uniform brilliant-cut diamonds totaling 4.0 carats.",
    specs: {
      "Metal Purity": "18KT White Gold",
      "Gross Weight": "14.20 g",
      "Diamond Weight": "4.00 Carat Total",
      "Diamond Quality": "VVS Clarity, F-G Color",
      "Certification": "IGI Certified"
    }
  },
  {
    id: "lj-010",
    name: "Emerald Drop Tanmaniya Pendant",
    price: 125000,
    mainCategory: "Gemstones / Navratna",
    subCategory: "Pendants (Mangalsutra, Tanmaniya, Lockets)",
    material: "Gemstone/Navratna",
    collection: "Festive",
    subBrand: "Virasat",
    image: "assets/images/gemstone_category.jpg",
    description: "A gorgeous festive Tanmaniya pendant featuring an oval Zambian emerald center drop accented by round-cut diamond wings, crafted in 18KT yellow gold.",
    specs: {
      "Metal Purity": "18KT Yellow Gold",
      "Gross Weight": "8.30 g",
      "Gemstone Weight": "1.25 Carat Emerald",
      "Diamond Weight": "0.42 Carat",
      "Certification": "SGL Certified"
    }
  },
  {
    id: "lj-011",
    name: "Bridal Kundan Matha Patti",
    price: 185000,
    mainCategory: "Wedding Collection",
    subCategory: "Maang Tikka/Matha Patti",
    material: "22KT Gold",
    collection: "Wedding",
    subBrand: "Rivaah",
    image: "assets/images/gold_category.jpg",
    description: "An exquisite bridal forehead ornament (Matha Patti) in 22KT gold plating, hand-set with Kundan stones and fringed with natural seed pearls.",
    specs: {
      "Metal Purity": "22KT Gold Overlay",
      "Gross Weight": "48.60 g",
      "Stone Type": "Kundan & Fresh Water Pearls",
      "Style": "Two-tier Matha Patti",
      "Certification": "BIS Hallmarked Plating"
    }
  },
  {
    id: "lj-012",
    name: "Men's Sleek Gold Kada",
    price: 210000,
    mainCategory: "Men's Jewelry",
    subCategory: "Bangles (Kada, Bracelet)",
    material: "22KT Gold",
    collection: "Everyday",
    subBrand: "Virasat",
    image: "assets/images/gold_category.jpg",
    description: "A refined and solid 22KT yellow gold Kada for men, featuring a polished finish with subtle geometric hand-engravings for an understated statement of luxury.",
    specs: {
      "Metal Purity": "22KT Yellow Gold",
      "Gross Weight": "32.10 g",
      "Inner Diameter": "62 mm",
      "Finish": "High-Polish & Satin-Matte",
      "Certification": "BIS Hallmark"
    }
  },
  {
    id: "lj-013",
    name: "Kids Floral Gold Bali",
    price: 28000,
    mainCategory: "Kids' Jewelry",
    subCategory: "Earrings (Jhumka, Bali, Studs, Chandbali)",
    material: "18KT Gold",
    collection: "Everyday",
    subBrand: "Mia",
    image: "assets/images/gold_category.jpg",
    description: "Delicate, lightweight, and safety-focused floral-shaped earrings for kids, crafted in 18KT yellow gold with smooth screw-back clasps.",
    specs: {
      "Metal Purity": "18KT Yellow Gold",
      "Gross Weight": "3.15 g",
      "Clasp Type": "Safety Screw-back",
      "Diameter": "8 mm",
      "Certification": "BIS Hallmark"
    }
  },
  {
    id: "lj-014",
    name: "Sparkling Diamond Nath Pin",
    price: 35000,
    mainCategory: "Everyday / Lightweight",
    subCategory: "Nose Pin/Nath",
    material: "Diamond",
    collection: "Traditional",
    subBrand: "Mia",
    image: "assets/images/diamond_category.jpg",
    description: "A beautiful 18KT yellow gold nose pin featuring a cluster of seven brilliant diamonds in a flower design, suitable for piercings and everyday elegance.",
    specs: {
      "Metal Purity": "18KT Yellow Gold",
      "Gross Weight": "1.20 g",
      "Diamond Weight": "0.12 Carat",
      "Diamond Quality": "VVS-VS, F-G Color",
      "Certification": "IGI Certified"
    }
  },
  {
    id: "lj-015",
    name: "Antique Jhumka Earrings",
    price: 175000,
    mainCategory: "Gold Jewelry",
    subCategory: "Earrings (Jhumka, Bali, Studs, Chandbali)",
    material: "22KT Gold",
    collection: "Traditional",
    subBrand: "Virasat",
    image: "assets/images/gold_category.jpg",
    description: "Timeless dome-shaped Jhumkas in 22KT gold with delicate gold bead clusters hanging from a floral ear stud, featuring exquisite hand-hammered details.",
    specs: {
      "Metal Purity": "22KT Yellow Gold",
      "Gross Weight": "24.50 g",
      "Length": "2.1 inches",
      "Style": "Traditional Hanging Jhumka",
      "Certification": "BIS Hallmark"
    }
  },
  {
    id: "lj-016",
    name: "Luxurious Gold Gifts Set",
    price: 135000,
    mainCategory: "Gifts",
    subCategory: "Necklaces (Haar, Mala, Choker, Long Necklace)",
    material: "22KT Gold",
    collection: "Festive",
    subBrand: "Mia",
    image: "assets/images/gold_category.jpg",
    description: "An elegant gifting set featuring a lightweight 22KT gold flower pendant and matching stud earrings, packed in a premium luxury Lumie presentation box.",
    specs: {
      "Metal Purity": "22KT Yellow Gold",
      "Gross Weight": "18.30 g",
      "Set Includes": "1 Pendant, 1 Pair of Studs",
      "Packaging": "Lumie Signature Silk Box",
      "Certification": "BIS Hallmark"
    }
  },
  {
    id: "lj-017",
    name: "Silver Bichhiya Toe Rings",
    price: 8000,
    mainCategory: "Everyday / Lightweight",
    subCategory: "Toe Rings/Bichhiya",
    material: "Yellow Gold",
    collection: "Traditional",
    subBrand: "Mia",
    image: "assets/images/gold_category.jpg",
    description: "Exquisite adjustable toe rings (Bichhiya) crafted in sterling silver with fine gold-gilded accents, featuring traditional Indian engravings.",
    specs: {
      "Metal Purity": "92.5 Sterling Silver with Gold Gilding",
      "Gross Weight": "8.50 g",
      "Size": "Adjustable",
      "Quantity": "1 Pair (2 Pieces)",
      "Occasion": "Everyday Wear"
    }
  },
  {
    id: "lj-018",
    name: "Men's Luxury Gold Cufflinks",
    price: 110000,
    mainCategory: "Men's Jewelry",
    subCategory: "Cufflinks/Men's Accessories",
    material: "18KT Gold",
    collection: "Contemporary",
    subBrand: "Astra",
    image: "assets/images/gold_category.jpg",
    description: "Ultra-premium, heavy 18KT yellow gold cufflinks with a brushed gold face and polished border. Engraved with understated elegance for formal luxury attire.",
    specs: {
      "Metal Purity": "18KT Yellow Gold",
      "Gross Weight": "16.40 g",
      "Finish": "Brushed & Polished dual texture",
      "Clasp": "Bullet Backing",
      "Certification": "BIS Hallmark"
    }
  },
  {
    id: "lj-019",
    name: "Oxidised Silver Jhumka Earrings",
    price: 18500,
    mainCategory: "Everyday / Lightweight",
    subCategory: "Earrings (Jhumka, Bali, Studs, Chandbali)",
    material: "Silver",
    collection: "Traditional",
    subBrand: "Virasat Oxidised",
    image: "assets/images/gold_category.jpg",
    description: "Handcrafted 925 sterling silver Oxidised Jhumkas with intricate dancing peacock motifs, ghungroo drops, and an authentic antique black patina finish.",
    specs: {
      "Metal Purity": "92.5 Sterling Silver",
      "Gross Weight": "22.40 g",
      "Finish": "Antique Oxidised Black",
      "Design": "Peacock & Ghungroo Motif",
      "Certification": "925 Hallmark Certified"
    }
  },
  {
    id: "lj-020",
    name: "Temple Oxidised Hasli Choker",
    price: 42000,
    mainCategory: "Wedding Collection",
    subCategory: "Necklaces (Haar, Mala, Choker, Long Necklace)",
    material: "Silver",
    collection: "Traditional",
    subBrand: "Virasat Oxidised",
    image: "assets/images/gemstone_category.jpg",
    description: "A statement temple-style Oxidised Silver Hasli necklace featuring Goddess Lakshmi center engraving and delicate silver bead drops.",
    specs: {
      "Metal Purity": "92.5 Sterling Silver",
      "Gross Weight": "54.10 g",
      "Style": "Temple Choker Hasli",
      "Occasion": "Festive / Traditional",
      "Certification": "925 Hallmark Certified"
    }
  },
  {
    id: "lj-021",
    name: "Peacock Oxidised Kada Bangle",
    price: 24000,
    mainCategory: "Gold Jewelry",
    subCategory: "Bangles (Kada, Bracelet)",
    material: "Silver",
    collection: "Traditional",
    subBrand: "Virasat Oxidised",
    image: "assets/images/gold_category.jpg",
    description: "An openable 925 sterling silver Oxidised Kada with dual peacock head terminals and intricate wire filigree detailing.",
    specs: {
      "Metal Purity": "92.5 Sterling Silver",
      "Gross Weight": "36.80 g",
      "Inner Diameter": "2.4 (Adjustable)",
      "Finish": "Vintage Oxidised",
      "Certification": "925 Hallmark"
    }
  },
  {
    id: "lj-022",
    name: "Oxidised Diamond Tribal Ring",
    price: 15500,
    mainCategory: "Diamond Jewelry",
    subCategory: "Rings/Anguthi",
    material: "Silver",
    collection: "Contemporary",
    subBrand: "Virasat Oxidised",
    image: "assets/images/diamond_category.jpg",
    description: "A bold statement Oxidised silver finger ring set with a single sparkling diamond accent surrounded by tribal rope border work.",
    specs: {
      "Metal Purity": "92.5 Sterling Silver & 18KT Accent",
      "Gross Weight": "8.50 g",
      "Diamond Weight": "0.08 Carat",
      "Certification": "SGL Certified"
    }
  }
];

// 2. Application State
const state = {
  searchQuery: "",
  selectedCategory: "All",
  selectedSubBrand: "All", // Filter by Rivaah, Mia, Astra, Virasat
  filters: {
    subCategory: "All",
    material: "All",
    collection: "All"
  },
  selectedItem: null
};

// Formatting Helper for Indian Rupees (INR)
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

// 3. Dynamic DOM Rendering Functions

// Render Categories List (Horizontal list with images matching Tanishq style)
function renderCategories() {
  const container = document.getElementById("categories-container");
  if (!container) return;

  const categoriesList = [
    { name: "All", label: "All Jewellery", image: "assets/images/hero_fallback.jpg" },
    { name: "Gold Jewelry", label: "Gold Jewellery", image: "assets/images/gold_category.jpg" },
    { name: "Diamond Jewelry", label: "Diamond Jewellery", image: "assets/images/diamond_category.jpg" },
    { name: "Gemstones / Navratna", label: "Gemstones & Polki", image: "assets/images/gemstone_category.jpg" },
    { name: "Coins", label: "Gold & Silver Coins", image: "assets/images/gold_category.jpg" },
    { name: "Wedding Collection", label: "Wedding Rivaah", image: "assets/images/gold_category.jpg" },
    { name: "Everyday / Lightweight", label: "Mia Daily Wear", image: "assets/images/diamond_category.jpg" },
    { name: "Gifts", label: "Gift Hampers", image: "assets/images/gold_category.jpg" },
    { name: "Men's Jewelry", label: "Men's Accessories", image: "assets/images/gold_category.jpg" },
    { name: "Kids' Jewelry", label: "Kids & Teens", image: "assets/images/gold_category.jpg" }
  ];

  container.innerHTML = categoriesList.map((cat, index) => {
    const isActive = state.selectedCategory === cat.name;
    const activeClass = isActive ? "active-category" : "";
    const activeTextClass = isActive ? "text-gold" : "";
    
    return `
      <div class="category-card intersect ${activeClass}" onclick="selectCategory('${cat.name}')" style="--delay: ${index * 30}ms">
        <div class="category-img-wrapper">
          <img src="${cat.image}" alt="${cat.label}" onerror="this.src='assets/images/hero_fallback.jpg'">
          <div class="category-overlay"></div>
        </div>
        <h4 class="category-title ${activeTextClass}">${cat.label}</h4>
      </div>
    `;
  }).join("");
}

// Render Featured Items
function renderFeaturedItems() {
  const container = document.getElementById("featured-grid");
  if (!container) return;

  const featured = [
    jewelryCatalog[0], // Kundan Haar
    jewelryCatalog[2], // Solitaire
    jewelryCatalog[3]  // Navratna
  ];

  container.innerHTML = featured.map((item, index) => {
    return `
      <div class="featured-card intersect" onclick="openDetailModal('${item.id}')" style="--delay: ${index * 100}ms">
        <div class="featured-img-wrapper">
          <img src="${item.image}" alt="${item.name}" onerror="this.src='assets/images/hero_fallback.jpg'">
          <span class="featured-badge">${item.subBrand}</span>
        </div>
        <div class="featured-content">
          <span class="featured-item-cat">${item.mainCategory} &bull; ${item.material}</span>
          <h3 class="featured-item-name">${item.name}</h3>
          <p class="featured-item-price">${formatCurrency(item.price)}</p>
          <button class="btn-text">Explore Details <i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
    `;
  }).join("");
}

// Render Filter Dropdowns
function setupFilterDropdowns() {
  const subCategorySelect = document.getElementById("filter-sub-category");
  const materialSelect = document.getElementById("filter-material");
  const collectionSelect = document.getElementById("filter-collection");
  const subBrandSelect = document.getElementById("filter-sub-brand");

  if (!subCategorySelect || !materialSelect || !collectionSelect) return;

  // Sub-categories
  const subCategories = ["All", ...new Set(jewelryCatalog.map(item => item.subCategory))];
  subCategorySelect.innerHTML = subCategories.map(sub => 
    `<option value="${sub}" ${state.filters.subCategory === sub ? "selected" : ""}>${sub}</option>`
  ).join("");

  // Materials
  const materials = ["All", ...new Set(jewelryCatalog.map(item => item.material))];
  materialSelect.innerHTML = materials.map(mat => 
    `<option value="${mat}" ${state.filters.material === mat ? "selected" : ""}>${mat}</option>`
  ).join("");

  // Collections
  const collections = ["All", ...new Set(jewelryCatalog.map(item => item.collection))];
  collectionSelect.innerHTML = collections.map(col => 
    `<option value="${col}" ${state.filters.collection === col ? "selected" : ""}>${col} Style</option>`
  ).join("");

  // Tanishq Sub-brands
  if (subBrandSelect) {
    const subBrands = ["All", ...new Set(jewelryCatalog.map(item => item.subBrand))];
    subBrandSelect.innerHTML = subBrands.map(brand => 
      `<option value="${brand}" ${state.selectedSubBrand === brand ? "selected" : ""}>${brand === "All" ? "All Sub-Brands" : brand}</option>`
    ).join("");
  }
}

// Render Active Chips
function renderActiveFilterBadges() {
  const container = document.getElementById("active-filter-chips");
  if (!container) return;

  const chips = [];

  if (state.selectedCategory !== "All") {
    chips.push({ type: "category", label: `Category: ${state.selectedCategory}`, value: state.selectedCategory });
  }
  if (state.selectedSubBrand !== "All") {
    chips.push({ type: "subBrand", label: `Occasion: ${state.selectedSubBrand}`, value: state.selectedSubBrand });
  }
  if (state.filters.subCategory !== "All") {
    chips.push({ type: "subCategory", label: `Type: ${state.filters.subCategory}`, value: state.filters.subCategory });
  }
  if (state.filters.material !== "All") {
    chips.push({ type: "material", label: `Metal: ${state.filters.material}`, value: state.filters.material });
  }
  if (state.filters.collection !== "All") {
    chips.push({ type: "collection", label: `Tag: ${state.filters.collection}`, value: state.filters.collection });
  }
  if (state.searchQuery.trim() !== "") {
    chips.push({ type: "search", label: `Query: "${state.searchQuery}"`, value: state.searchQuery });
  }

  if (chips.length === 0) {
    container.innerHTML = `<span class="no-filters-active">Showing all exquisite retail pieces</span>`;
    return;
  }

  const chipsHtml = chips.map(chip => `
    <div class="filter-chip">
      <span>${chip.label}</span>
      <button onclick="removeFilterChip('${chip.type}')"><i class="fas fa-times"></i></button>
    </div>
  `).join("");

  const clearAllButton = `
    <button class="btn-clear-all" onclick="resetAllFilters()">Clear All <i class="fas fa-undo"></i></button>
  `;

  container.innerHTML = chipsHtml + clearAllButton;
}

// Main Product Grid Filter and Rendering
function renderProductGrid() {
  const gridContainer = document.getElementById("products-grid");
  const resultCount = document.getElementById("results-count");
  if (!gridContainer) return;

  const filteredItems = jewelryCatalog.filter(item => {
    // 1. Category Filter
    if (state.selectedCategory !== "All" && item.mainCategory !== state.selectedCategory) {
      return false;
    }

    // 2. Sub-Brand Filter
    if (state.selectedSubBrand !== "All" && item.subBrand !== state.selectedSubBrand) {
      return false;
    }
    
    // 3. Sub-Category Filter
    if (state.filters.subCategory !== "All" && item.subCategory !== state.filters.subCategory) {
      return false;
    }

    // 4. Material/Purity Filter
    if (state.filters.material !== "All" && item.material !== state.filters.material) {
      return false;
    }

    // 5. Collection Tag Filter
    if (state.filters.collection !== "All" && item.collection !== state.filters.collection) {
      return false;
    }

    // 6. Search query (case-insensitive)
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchMainCat = item.mainCategory.toLowerCase().includes(q);
      const matchSubCat = item.subCategory.toLowerCase().includes(q);
      const matchMat = item.material.toLowerCase().includes(q);
      const matchCol = item.collection.toLowerCase().includes(q);
      const matchBrand = item.subBrand.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      
      return matchName || matchMainCat || matchSubCat || matchMat || matchCol || matchBrand || matchDesc;
    }

    return true;
  });

  if (resultCount) {
    resultCount.textContent = `Showing ${filteredItems.length} retail piece${filteredItems.length === 1 ? '' : 's'}`;
  }

  if (filteredItems.length === 0) {
    gridContainer.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search-minus empty-icon"></i>
        <h3>No matching pieces found</h3>
        <p>Try resetting filters. Use traditional Indian keywords like 'Rani Haar', 'Chandbali', 'Polki', 'Mia', 'Rivaah', or 'Gold Coin'.</p>
        <button class="btn-outline" onclick="resetAllFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  // Item card layout
  gridContainer.innerHTML = filteredItems.map((item, index) => {
    return `
      <div class="product-card intersect" onclick="openDetailModal('${item.id}')" style="--delay: ${(index % 4) * 40}ms">
        <div class="product-card-image">
          <img src="${item.image}" alt="${item.name}" onerror="this.src='assets/images/hero_fallback.jpg'">
          <div class="product-card-tag">${item.subBrand}</div>
        </div>
        <div class="product-card-details">
          <div class="product-card-header-line">
            <span class="product-card-material">${item.material}</span>
            <span class="purity-badge">${item.mainCategory.split(" ")[0]}</span>
          </div>
          <h3 class="product-card-title">${item.name}</h3>
          <p class="product-card-category">${item.subCategory}</p>
          <div class="product-card-footer">
            <span class="product-card-price">${formatCurrency(item.price)}</span>
            <span class="view-details-arrow"><i class="fas fa-arrow-right"></i></span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  reobserveElements();
}

// 4. Detail Modal Handlers
function openDetailModal(itemId) {
  const item = jewelryCatalog.find(i => i.id === itemId);
  if (!item) return;

  state.selectedItem = item;
  
  const modal = document.getElementById("product-detail-modal");
  const modalBody = document.getElementById("modal-detail-content");
  
  if (!modal || !modalBody) return;

  // Dynamic specifications
  const specRows = Object.entries(item.specs).map(([key, val]) => `
    <tr>
      <td class="spec-label">${key}</td>
      <td class="spec-value">${val}</td>
    </tr>
  `).join("");

  modalBody.innerHTML = `
    <div class="modal-layout">
      <div class="modal-gallery">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='assets/images/hero_fallback.jpg'">
        <div class="modal-tag-overlay">${item.subBrand} Collection</div>
      </div>
      <div class="modal-info">
        <div class="modal-header-info">
          <span class="modal-sub-label">${item.subBrand} &bull; ${item.mainCategory} &bull; ${item.material}</span>
          <h2 class="modal-title">${item.name}</h2>
          <div class="modal-price">${formatCurrency(item.price)}</div>
        </div>
        
        <div class="modal-description">
          <h3>Product Story</h3>
          <p>${item.description}</p>
        </div>

        <div class="modal-specifications">
          <h3>Authentic Specifications</h3>
          <table class="specs-table">
            <tbody>
              ${specRows}
              <tr>
                <td class="spec-label">Purity Standard</td>
                <td class="spec-value"><i class="fas fa-certificate text-gold"></i> BIS Hallmark Guarantee</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="modal-cta-box">
          <span class="cta-disclaimer">
            <i class="fas fa-shield-alt text-gold"></i> <strong>LUMIE Brand Promise:</strong> 100% certified diamonds and hallmarked gold. Speak with our virtual concierge quoting SKU: <strong>${item.id}</strong>.
          </span>
          <a href="tel:+911800123456" class="btn-primary-text"><i class="fas fa-phone-alt"></i> Call Concierge</a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("modal-open");
  document.body.style.overflow = "hidden";
}

function closeDetailModal() {
  const modal = document.getElementById("product-detail-modal");
  if (!modal) return;
  modal.classList.remove("modal-open");
  document.body.style.overflow = "";
  state.selectedItem = null;
}

// 5. Interaction State Controllers

function selectCategory(categoryName) {
  state.selectedCategory = categoryName;
  
  renderCategories();
  renderActiveFilterBadges();
  renderProductGrid();
  
  const gridSection = document.getElementById("shop-section");
  if (gridSection) {
    gridSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Sub-Brand Occasion Trigger
function selectSubBrand(brandName) {
  state.selectedSubBrand = brandName;
  
  // Sync select dropdown in UI
  const subBrandSelect = document.getElementById("filter-sub-brand");
  if (subBrandSelect) {
    subBrandSelect.value = brandName;
  }

  // Visual highlight inside custom showcases
  const showcases = document.querySelectorAll(".showcase-card");
  showcases.forEach(card => {
    if (card.dataset.brand === brandName) {
      card.classList.add("active-showcase");
    } else {
      card.classList.remove("active-showcase");
    }
  });

  renderActiveFilterBadges();
  renderProductGrid();

  const gridSection = document.getElementById("shop-section");
  if (gridSection) {
    gridSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleSearch(event) {
  state.searchQuery = event.target.value;
  renderActiveFilterBadges();
  renderProductGrid();
}

function handleFilterChange(filterType, event) {
  if (filterType === "subBrand") {
    state.selectedSubBrand = event.target.value;
  } else {
    state.filters[filterType] = event.target.value;
  }
  renderActiveFilterBadges();
  renderProductGrid();
}

function removeFilterChip(type) {
  if (type === "category") {
    state.selectedCategory = "All";
    renderCategories();
  } else if (type === "subBrand") {
    state.selectedSubBrand = "All";
    const brandSelect = document.getElementById("filter-sub-brand");
    if (brandSelect) brandSelect.value = "All";
  } else if (type === "search") {
    state.searchQuery = "";
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = "";
  } else {
    state.filters[type] = "All";
    const selectEl = document.getElementById(`filter-${type.replace(/([A-Z])/g, "-$1").toLowerCase()}`);
    if (selectEl) selectEl.value = "All";
  }

  renderActiveFilterBadges();
  renderProductGrid();
}

function resetAllFilters() {
  state.selectedCategory = "All";
  state.selectedSubBrand = "All";
  state.searchQuery = "";
  state.filters.subCategory = "All";
  state.filters.material = "All";
  state.filters.collection = "All";

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";

  const subSelect = document.getElementById("filter-sub-category");
  if (subSelect) subSelect.value = "All";

  const matSelect = document.getElementById("filter-material");
  if (matSelect) matSelect.value = "All";

  const colSelect = document.getElementById("filter-collection");
  if (colSelect) colSelect.value = "All";

  const brandSelect = document.getElementById("filter-sub-brand");
  if (brandSelect) brandSelect.value = "All";

  // Reset highlight cards
  const showcases = document.querySelectorAll(".showcase-card");
  showcases.forEach(card => card.classList.remove("active-showcase"));

  renderCategories();
  renderActiveFilterBadges();
  renderProductGrid();
}

// 6. Scroll Entrance Animation Controller
let observer;

function setupIntersectionObserver() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.02
  };

  observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("intersect-active");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  reobserveElements();
}

function reobserveElements() {
  if (!observer) return;
  const elements = document.querySelectorAll(".intersect");
  elements.forEach(el => {
    if (!el.classList.contains("intersect-active")) {
      observer.observe(el);
    }
  });
}

// 7. Initializer on Load
window.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderFeaturedItems();
  setupFilterDropdowns();
  renderActiveFilterBadges();
  renderProductGrid();
  setupIntersectionObserver();

  // Attach search event
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }

  // Attach dropdown change events
  const filterSub = document.getElementById("filter-sub-category");
  if (filterSub) filterSub.addEventListener("change", (e) => handleFilterChange("subCategory", e));

  const filterMat = document.getElementById("filter-material");
  if (filterMat) filterMat.addEventListener("change", (e) => handleFilterChange("material", e));

  const filterCol = document.getElementById("filter-collection");
  if (filterCol) filterCol.addEventListener("change", (e) => handleFilterChange("collection", e));

  const filterBrand = document.getElementById("filter-sub-brand");
  if (filterBrand) filterBrand.addEventListener("change", (e) => handleFilterChange("subBrand", e));

  // Esc key closes modal
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDetailModal();
    }
  });

  // Setup background video error fallback
  const heroVideo = document.getElementById("hero-video");
  const heroFallback = document.getElementById("hero-fallback-bg");
  if (heroVideo && heroFallback) {
    heroVideo.addEventListener("error", () => {
      heroVideo.style.display = "none";
      heroFallback.style.display = "block";
    });
  }

  // Run typewriter effect
  initTypewriter();
});

// Typewriter Effect for Hero Title
function initTypewriter() {
  const titleEl = document.getElementById("hero-title");
  if (!titleEl) return;
  const text = titleEl.getAttribute("data-text") || "Intricate Heritage, Modern Luxury";
  titleEl.textContent = "";
  let i = 0;
  
  function type() {
    if (i < text.length) {
      if (text.substring(i, i + 4) === "<br>") {
        titleEl.innerHTML += "<br>";
        i += 4;
      } else if (text.charAt(i) === "," && text.charAt(i+1) === " ") {
        titleEl.innerHTML += ",<br>";
        i += 2; // skip the space
      } else {
        titleEl.innerHTML += text.charAt(i);
        i++;
      }
      setTimeout(type, 65); // Speed of typing
    }
  }
  setTimeout(type, 300); // Start delay
}
