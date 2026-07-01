import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categories = [
  {
    name: "POS Terminals",
    slug: "pos-terminals",
    description:
      "All-in-one touchscreen POS systems designed for fast, reliable checkout experiences.",
    image: "/images/categories/pos-terminals.jpg",
    sortOrder: 1,
  },
  {
    name: "Receipt Printers",
    slug: "receipt-printers",
    description:
      "Fast, reliable thermal printing solutions for receipts and invoices.",
    image: "/images/categories/receipt-printers.jpg",
    sortOrder: 2,
  },
  {
    name: "Barcode Scanners",
    slug: "barcode-scanners",
    description:
      "1D and 2D scanning solutions for inventory and point-of-sale use.",
    image: "/images/categories/barcode-scanners.jpg",
    sortOrder: 3,
  },
  {
    name: "Cash Drawers",
    slug: "cash-drawers",
    description:
      "Secure, heavy-duty cash drawers built for everyday retail operations.",
    image: "/images/categories/cash-drawers.jpg",
    sortOrder: 4,
  },
  {
    name: "Card Readers",
    slug: "card-readers",
    description:
      "EMV and contactless payment terminals for modern payment processing.",
    image: "/images/categories/card-readers.jpg",
    sortOrder: 5,
  },
  {
    name: "POS Accessories",
    slug: "pos-accessories",
    description:
      "Mounts, cables, and other essential accessories for your POS setup.",
    image: "/images/categories/pos-accessories.jpg",
    sortOrder: 6,
  },
];

interface ProductInput {
  name: string;
  slug: string;
  description: string;
  shortDesc: string;
  price: number;
  comparePrice?: number;
  sku: string;
  stock: number;
  images: string[];
  specs: Record<string, string>;
  features: string[];
  categorySlug: string;
  isFeatured: boolean;
}

const products: ProductInput[] = [
  // POS Terminals
  {
    name: "ProTouch X100",
    slug: "protouch-x100",
    description:
      "The ProTouch X100 is a powerful all-in-one POS terminal featuring a 15.6-inch capacitive touchscreen, Intel processor, and integrated receipt printer. Ideal for busy retail environments that demand speed and reliability.",
    shortDesc: "15.6-inch all-in-one POS terminal with built-in printer",
    price: 899.99,
    comparePrice: 999.99,
    sku: "PT-X100",
    stock: 25,
    images: ["/images/products/protouch-x100-1.jpg", "/images/products/protouch-x100-2.jpg"],
    specs: {
      "Screen Size": "15.6 inches",
      Resolution: "1920 x 1080",
      Processor: "Intel Celeron J4125",
      RAM: "8GB DDR4",
      Storage: "128GB SSD",
      OS: "Windows 10 IoT",
      Connectivity: "Wi-Fi, Ethernet, Bluetooth",
    },
    features: [
      "Capacitive multi-touch display",
      "Built-in thermal receipt printer",
      "VESA mount compatible",
      "Multiple port options (USB, RS232, RJ45)",
      "Energy-efficient design",
    ],
    categorySlug: "pos-terminals",
    isFeatured: true,
  },
  {
    name: "ProTouch Z200",
    slug: "protouch-z200",
    description:
      "The ProTouch Z200 is a premium POS terminal with a 17-inch edge-to-edge display, powerful Intel Core i3 processor, and sleek design. Perfect for high-volume retail and hospitality environments.",
    shortDesc: "17-inch premium POS terminal with edge-to-edge display",
    price: 1299.99,
    comparePrice: 1499.99,
    sku: "PT-Z200",
    stock: 15,
    images: ["/images/products/protouch-z200-1.jpg", "/images/products/protouch-z200-2.jpg"],
    specs: {
      "Screen Size": "17 inches",
      Resolution: "1920 x 1080",
      Processor: "Intel Core i3-1115G4",
      RAM: "16GB DDR4",
      Storage: "256GB SSD",
      OS: "Windows 10 IoT",
      Connectivity: "Wi-Fi 6, Ethernet, Bluetooth 5.0",
    },
    features: [
      "Edge-to-edge IPS display",
      "Ultra-fast processing for multitasking",
      "Anti-fingerprint coated screen",
      "Tool-free maintenance access",
      "Integrated cable management",
    ],
    categorySlug: "pos-terminals",
    isFeatured: true,
  },
  {
    name: "CompactPos C50",
    slug: "compactpos-c50",
    description:
      "The CompactPos C50 is a space-saving POS terminal ideal for small businesses and food trucks. Despite its compact size, it delivers solid performance with a 10.1-inch touchscreen and fanless design.",
    shortDesc: "10.1-inch compact POS terminal for small spaces",
    price: 449.99,
    comparePrice: 499.99,
    sku: "CP-C50",
    stock: 40,
    images: ["/images/products/compactpos-c50-1.jpg", "/images/products/compactpos-c50-2.jpg"],
    specs: {
      "Screen Size": "10.1 inches",
      Resolution: "1280 x 800",
      Processor: "Intel Celeron N4020",
      RAM: "4GB DDR4",
      Storage: "64GB eMMC",
      OS: "Windows 10 IoT / Android 11",
      Connectivity: "Wi-Fi, Ethernet, Bluetooth",
    },
    features: [
      "Compact footprint for tight spaces",
      "Fanless, silent operation",
      "Dual OS support",
      "Adjustable stand with 180° tilt",
      "Low power consumption",
    ],
    categorySlug: "pos-terminals",
    isFeatured: false,
  },

  // Receipt Printers
  {
    name: "SwiftPrint Thermal",
    slug: "swiftprint-thermal",
    description:
      "The SwiftPrint Thermal is a high-speed 80mm thermal receipt printer known for its reliability and fast print speeds. Featuring auto-cutter and multiple connectivity options.",
    shortDesc: "80mm high-speed thermal receipt printer",
    price: 149.99,
    comparePrice: 179.99,
    sku: "SP-T80",
    stock: 60,
    images: ["/images/products/swiftprint-thermal-1.jpg"],
    specs: {
      "Print Width": "80mm",
      "Print Speed": "250mm/s",
      Resolution: "203 dpi",
      Interface: "USB, Serial, Ethernet",
      "Paper Type": "Thermal",
      "Auto Cutter": "Yes (partial cut)",
    },
    features: [
      "Ultra-fast 250mm/s print speed",
      "Easy paper loading with drop-in design",
      "Auto-cutter for clean receipts",
      "Compatible with ESC/POS commands",
      "MTBF: 100 million cuts",
    ],
    categorySlug: "receipt-printers",
    isFeatured: true,
  },
  {
    name: "SwiftPrint Network",
    slug: "swiftprint-network",
    description:
      "The SwiftPrint Network is an 80mm thermal receipt printer with built-in Ethernet and Wi-Fi, making it perfect for networked POS environments. Supports cloud printing and remote management.",
    shortDesc: "80mm networked thermal printer with Wi-Fi and Ethernet",
    price: 199.99,
    comparePrice: 249.99,
    sku: "SP-N80",
    stock: 35,
    images: ["/images/products/swiftprint-network-1.jpg"],
    specs: {
      "Print Width": "80mm",
      "Print Speed": "200mm/s",
      Resolution: "203 dpi",
      Interface: "Ethernet, Wi-Fi, USB",
      "Paper Type": "Thermal",
      "Cloud Printing": "Supported",
    },
    features: [
      "Built-in Wi-Fi and Ethernet",
      "Cloud printing compatible",
      "Remote printer management",
      "Prints from any device on the network",
      "Status monitoring via web interface",
    ],
    categorySlug: "receipt-printers",
    isFeatured: false,
  },
  {
    name: "MiniPrint Compact",
    slug: "miniprint-compact",
    description:
      "The MiniPrint Compact is a 58mm portable receipt printer perfect for mobile POS and on-the-go businesses. Lightweight and rechargeable with Bluetooth connectivity.",
    shortDesc: "58mm portable Bluetooth receipt printer",
    price: 89.99,
    comparePrice: 109.99,
    sku: "MP-C58",
    stock: 75,
    images: ["/images/products/miniprint-compact-1.jpg"],
    specs: {
      "Print Width": "58mm",
      "Print Speed": "90mm/s",
      Resolution: "203 dpi",
      Interface: "Bluetooth 5.0, USB",
      "Battery": "2000mAh rechargeable",
      "Paper Type": "Thermal",
    },
    features: [
      "Ultra-portable and lightweight",
      "Long-lasting rechargeable battery",
      "Bluetooth for wireless printing",
      "Compatible with iOS and Android",
      "Includes belt clip and carry case",
    ],
    categorySlug: "receipt-printers",
    isFeatured: false,
  },

  // Barcode Scanners
  {
    name: "ScanMaster Pro 2D",
    slug: "scanmaster-pro-2d",
    description:
      "The ScanMaster Pro 2D is a professional-grade barcode scanner capable of reading 1D and 2D barcodes including QR codes. Features rapid decoding and a rugged design built for daily use.",
    shortDesc: "Professional 1D/2D barcode scanner with rapid decode",
    price: 89.99,
    comparePrice: 109.99,
    sku: "SM-P2D",
    stock: 50,
    images: ["/images/products/scanmaster-pro-2d-1.jpg"],
    specs: {
      "Scan Type": "1D and 2D",
      "Scan Speed": "100 scans/second",
      "Interface": "USB (HID)",
      "Range": "0-500mm",
      "IP Rating": "IP42",
      "Drop Spec": "1.5m onto concrete",
    },
    features: [
      "Reads all 1D and 2D barcodes",
      "Rapid 100 scans/second decoding",
      "Rugged drop-resistant construction",
      "Hands-free presentation mode",
      "Plug-and-play USB connectivity",
    ],
    categorySlug: "barcode-scanners",
    isFeatured: true,
  },
  {
    name: "ScanMaster 1D",
    slug: "scanmaster-1d",
    description:
      "The ScanMaster 1D is an affordable and reliable linear barcode scanner for retail checkout. Ergonomic design with a comfortable grip for all-day scanning comfort.",
    shortDesc: "Affordable 1D linear barcode scanner",
    price: 49.99,
    comparePrice: 59.99,
    sku: "SM-1D",
    stock: 80,
    images: ["/images/products/scanmaster-1d-1.jpg"],
    specs: {
      "Scan Type": "1D (linear)",
      "Scan Speed": "60 scans/second",
      "Interface": "USB (HID)",
      "Range": "0-400mm",
      "Weight": "120g",
      "Cable Length": "1.8m",
    },
    features: [
      "Lightweight ergonomic design",
      "Fast 60 scans/second",
      "Long 1.8m cable for flexibility",
      "Built-in buzzer and LED indicator",
      "Compatible with all major POS software",
    ],
    categorySlug: "barcode-scanners",
    isFeatured: false,
  },
  {
    name: "ScanMaster Presentation",
    slug: "scanmaster-presentation",
    description:
      "The ScanMaster Presentation is a hands-free barcode scanner with a large scan window. Ideal for high-volume retail checkout where speed and convenience are essential.",
    shortDesc: "Hands-free presentation barcode scanner",
    price: 129.99,
    comparePrice: 149.99,
    sku: "SM-PS",
    stock: 30,
    images: ["/images/products/scanmaster-presentation-1.jpg"],
    specs: {
      "Scan Type": "1D and 2D",
      "Scan Speed": "120 scans/second",
      "Interface": "USB (HID), RS232",
      "Range": "0-300mm (auto-sense)",
      "Scan Window": "120mm x 80mm",
      "Power": "5V USB or external adapter",
    },
    features: [
      "Hands-free auto-sense scanning",
      "Large scan window for easy use",
      "Fast 120 scans/second",
      "Adjustable stand with multiple angles",
      "Buzzer and LED scan confirmation",
    ],
    categorySlug: "barcode-scanners",
    isFeatured: false,
  },

  // Cash Drawers
  {
    name: "SecureVault Drawer",
    slug: "securevault-drawer",
    description:
      "The SecureVault Drawer is a heavy-duty steel cash drawer with a 5-bill and 8-coin layout. Features a 3-position lock, RJ11 printer kick接口, and smooth ball-bearing slides.",
    shortDesc: "Heavy-duty steel cash drawer with 5-bill, 8-coin layout",
    price: 129.99,
    comparePrice: 149.99,
    sku: "SV-D15",
    stock: 45,
    images: ["/images/products/securevault-drawer-1.jpg"],
    specs: {
      Material: "Heavy-gauge steel",
      "Bill Compartments": "5",
      "Coin Compartments": "8",
      Lock: "3-position (locked, unlocked, open)",
      Interface: "RJ11 printer kick接口",
      Dimensions: "410mm x 360mm x 100mm",
    },
    features: [
      "Heavy-duty steel construction",
      "Smooth ball-bearing drawer slides",
      "Printer-triggered auto-open via RJ11",
      "Removable coin tray",
      "Includes two keys",
    ],
    categorySlug: "cash-drawers",
    isFeatured: true,
  },
  {
    name: "SecureVault Slim",
    slug: "securevault-slim",
    description:
      "The SecureVault Slim is a space-saving cash drawer with a slim profile perfect for compact POS setups. Features 4-bill and 5-coin compartments with a durable design.",
    shortDesc: "Slim-profile cash drawer with 4-bill, 5-coin layout",
    price: 99.99,
    comparePrice: 119.99,
    sku: "SV-SL",
    stock: 55,
    images: ["/images/products/securevault-slim-1.jpg"],
    specs: {
      Material: "Steel with powder-coated finish",
      "Bill Compartments": "4",
      "Coin Compartments": "5",
      Lock: "Key lock",
      Interface: "RJ11 printer kick接口",
      Dimensions: "350mm x 320mm x 80mm",
    },
    features: [
      "Slim profile saves counter space",
      "Durable powder-coated finish",
      "RJ11 printer-triggered open",
      "Removable coin tray insert",
      "Smooth and quiet operation",
    ],
    categorySlug: "cash-drawers",
    isFeatured: false,
  },

  // Card Readers
  {
    name: "PayLink EMV",
    slug: "paylink-emv",
    description:
      "The PayLink EMV is a compact chip card reader supporting EMV and NFC contactless payments. Integrates seamlessly with popular POS software via USB connection.",
    shortDesc: "Compact EMV chip and NFC contactless card reader",
    price: 59.99,
    comparePrice: 69.99,
    sku: "PL-EMV",
    stock: 100,
    images: ["/images/products/paylink-emv-1.jpg"],
    specs: {
      "Card Types": "EMV chip, NFC contactless",
      Interface: "USB",
      "Supported Brands": "Visa, Mastercard, Amex, Discover",
      "NFC Range": "Up to 5cm",
      Dimensions: "70mm x 55mm x 15mm",
      Certification: "PCI PTS 5.x",
    },
    features: [
      "EMV chip card support",
      "NFC contactless payment ready",
      "Plug-and-play USB setup",
      "LED and beep payment confirmation",
      "Compact countertop footprint",
    ],
    categorySlug: "card-readers",
    isFeatured: true,
  },
  {
    name: "PayLink Wireless",
    slug: "paylink-wireless",
    description:
      "The PayLink Wireless is a Bluetooth-enabled card reader for mobile and countertop POS use. Supports EMV, NFC, and magnetic stripe payments with a long-lasting rechargeable battery.",
    shortDesc: "Bluetooth wireless card reader with EMV and NFC",
    price: 199.99,
    comparePrice: 249.99,
    sku: "PL-WL",
    stock: 40,
    images: ["/images/products/paylink-wireless-1.jpg"],
    specs: {
      "Card Types": "EMV chip, NFC contactless, Magnetic stripe",
      Interface: "Bluetooth 5.0, USB-C",
      "Battery": "1500mAh rechargeable",
      "Battery Life": "Up to 8 hours active use",
      "Supported Brands": "Visa, Mastercard, Amex, Discover, Apple Pay, Google Pay",
      Certification: "PCI PTS 5.x",
    },
    features: [
      "Wireless Bluetooth connectivity",
      "Supports chip, swipe, and tap payments",
      "Long-lasting rechargeable battery",
      "Compatible with iOS, Android, and Windows",
      "End-to-end encryption",
    ],
    categorySlug: "card-readers",
    isFeatured: false,
  },

  // POS Accessories
  {
    name: "MountPro Stand",
    slug: "mountpro-stand",
    description:
      "The MountPro Stand is an adjustable universal POS terminal stand with cable management. Supports screens from 10 to 17 inches with tilt, swivel, and height adjustment.",
    shortDesc: "Adjustable universal POS terminal stand",
    price: 79.99,
    comparePrice: 99.99,
    sku: "MP-STD",
    stock: 70,
    images: ["/images/products/mountpro-stand-1.jpg"],
    specs: {
      "Screen Compatibility": "10-17 inches",
      "Weight Capacity": "5kg",
      "Adjustments": "Tilt, swivel, height",
      "VESA Mount": "75x75mm, 100x100mm",
      Material: "Aluminum alloy",
      "Cable Management": "Built-in routing",
    },
    features: [
      "Universal compatibility with major brands",
      "Full range tilt and swivel adjustment",
      "Sturdy aluminum alloy base",
      "Built-in cable management",
      "Tool-free assembly",
    ],
    categorySlug: "pos-accessories",
    isFeatured: true,
  },
  {
    name: "CableConnect Kit",
    slug: "cableconnect-kit",
    description:
      "The CableConnect Kit is a comprehensive set of cables for connecting POS peripherals. Includes USB, serial, power, and RJ11 cables to get your POS system up and running.",
    shortDesc: "Comprehensive POS cable connectivity kit",
    price: 39.99,
    comparePrice: 49.99,
    sku: "CCK-10",
    stock: 120,
    images: ["/images/products/cableconnect-kit-1.jpg"],
    specs: {
      Contents: "10 cables",
      "Cable Types": "USB-A, USB-B, RS232 Serial, RJ11, DC Power",
      "USB Length": "1.8m each",
      "Serial Length": "1.8m",
      "RJ11 Length": "1.5m",
      Compatibility: "Universal POS equipment",
    },
    features: [
      "Everything you need to connect your POS",
      "High-quality shielding for reliability",
      "Labeled cables for easy identification",
      "Compatible with all major POS brands",
      "Velcro ties included for cable management",
    ],
    categorySlug: "pos-accessories",
    isFeatured: false,
  },
];

async function main() {
  console.log("Seeding database...\n");

  // Seed categories
  console.log("Seeding categories...");
  const categoryMap: Record<string, string> = {};

  for (const cat of categories) {
    const result = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {
        name: cat.name,
        description: cat.description,
        image: cat.image,
        sortOrder: cat.sortOrder,
      },
      create: {
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        image: cat.image,
        sortOrder: cat.sortOrder,
      },
    });
    categoryMap[cat.slug] = result.id;
    console.log(`  ✓ ${cat.name} (${result.id})`);
  }

  console.log(`\nSeeded ${Object.keys(categoryMap).length} categories.\n`);

  // Seed products
  console.log("Seeding products...");

  for (const product of products) {
    const categoryId = categoryMap[product.categorySlug];
    if (!categoryId) {
      console.error(`  ✗ Category not found for slug: ${product.categorySlug}`);
      continue;
    }

    const result = await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        name: product.name,
        description: product.description,
        shortDesc: product.shortDesc,
        price: product.price,
        comparePrice: product.comparePrice ?? null,
        sku: product.sku,
        stock: product.stock,
        images: product.images,
        specs: product.specs,
        features: product.features,
        categoryId,
        isFeatured: product.isFeatured,
      },
      create: {
        name: product.name,
        slug: product.slug,
        description: product.description,
        shortDesc: product.shortDesc,
        price: product.price,
        comparePrice: product.comparePrice ?? null,
        sku: product.sku,
        stock: product.stock,
        images: product.images,
        specs: product.specs,
        features: product.features,
        categoryId,
        isFeatured: product.isFeatured,
      },
    });
    console.log(`  ✓ ${result.name} — $${result.price} (${result.id})`);
  }

  console.log(`\nSeeded ${products.length} products.`);
  console.log("\nDatabase seeding complete!");
}

main()
  .catch((e) => {
    console.error("Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
