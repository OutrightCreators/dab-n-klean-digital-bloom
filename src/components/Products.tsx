import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard, Product } from "./ProductCard";
import kitchenTowelsImg from "/images/kitchen-towels.jpg";
import facialTissuesImg from "/images/facial-tissues.jpg";
import butterPaperImg from "/images/butter-paper.jpg";
import toiletRollImg from "/images/toilet-roll.jpg";
import napkinsImg from "/images/napkins.jpg";
import paperCupsImg from "/images/paper-cups.png";
import nonWovenImg from "/images/non-woven-tissue.jpg";
import toiletRoll2PlyImg from "/images/toiletRoll2Ply.jpg";
import toiletRoll3PlyImg from "/images/toilet-roll-3ply.jpg";

gsap.registerPlugin(ScrollTrigger);

interface ProductsProps {
  onAddToEnquiry: (product: Product, variant: string, quantity: number) => void;
}

export const Products = ({ onAddToEnquiry }: ProductsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

const products: Product[] = [
  {
    id: "facial-tissues",
    name: "Facial Tissues",
    description:
      "Soft, gentle, and highly absorbent facial tissues made from premium virgin pulp. Ideal for home, office, and personal hygiene.",
    features: [
      "Ultra-soft and skin-friendly",
      "Highly absorbent 2-ply / 3-ply options",
      "Made from premium virgin pulp",
      "Hygienic and dermatologically safe",
    ],
    uses: ["Home", "Office", "Travel", "Personal Care"],
    image: facialTissuesImg,
    variants: ["Box of 100", "Box of 200", "Cube Box", "Family Pack (10 Boxes)"],
  },

  {
    id: "toilet-roll-2ply",
    name: "Toilet Roll – 2 Ply",
    description:
      "Soft yet strong 2-ply toilet rolls designed for everyday use. Perfect for homes, offices, and commercial spaces.",
    features: [
      "2-ply premium comfort",
      "Soft and gentle on skin",
      "High absorbency",
      "Long-lasting rolls",
    ],
    uses: ["Home", "Office", "HoReCa"],
    image: toiletRoll2PlyImg,
    variants: ["Pack of 4", "Pack of 12", "Pack of 24", "Bulk (96 rolls)"],
  },

  {
    id: "toilet-roll-3ply",
    name: "Toilet Roll – 3 Ply",
    description:
      "Ultra-soft, premium 3-ply toilet rolls for superior comfort and durability. Perfect for a premium hygiene experience.",
    features: [
      "3-ply luxurious softness",
      "Highly absorbent layers",
      "Extra strength and durability",
      "Made from premium virgin pulp",
    ],
    uses: ["Home", "Premium Hotels", "Commercial Use"],
    image: toiletRoll3PlyImg,
    variants: ["Pack of 4", "Pack of 12", "Pack of 24", "Bulk (96 rolls)"],
  },

  {
    id: "kitchen-towel",
    name: "Kitchen Towel",
    description:
      "High-absorbency, strong, and grease-resistant kitchen towels for all household cleaning and wiping needs.",
    features: [
      "3-ply/4-ply extra absorbent layers",
      "Grease and spill resistant",
      "Durable and long-lasting",
      "Ideal for household and commercial kitchens",
    ],
    uses: ["Kitchen", "HoReCa", "Cleaning", "Everyday Use"],
    image: kitchenTowelsImg,
    variants: ["Single Roll", "Pack of 2", "Pack of 4", "Bulk (24 rolls)"],
  },

  {
    id: "non-woven-tissue",
    name: "Non-Woven Tissue (Re-usable)",
    description:
      "Eco-friendly, thick, and reusable non-woven tissues designed for heavy-duty cleaning and multipurpose usage.",
    features: [
      "Reusable and washable",
      "Stronger and thicker than paper tissues",
      "Eco-friendly material",
      "Perfect for kitchen and industrial use",
    ],
    uses: ["Kitchen", "Dusting", "Cleaning", "Multipurpose Wiping"],
    image: nonWovenImg,
    variants: ["Pack of 25", "Pack of 50", "Pack of 100", "Bulk Pack"],
  },

  {
    id: "napkins",
    name: "Napkins",
    description:
      "Soft, hygienic paper napkins available in various sizes—ideal for dining tables, events, and everyday use.",
    features: [
      "Soft and absorbent",
      "Food-grade and hygienic",
      "Available in multiple sizes",
      "Durable for dry and wet use",
    ],
    uses: ["Dining", "Events", "Restaurants", "Everyday Use"],
    image: napkinsImg,
    variants: ["Pack of 100", "Pack of 200", "Pack of 500", "Bulk (5000 pcs)"],
  },

  {
    id: "paper-cups",
    name: "Paper Cups",
    description:
      "Strong, leak-resistant paper cups ideal for hot and cold beverages. Made from high-quality food-grade material.",
    features: [
      "100% food-grade material",
      "Leak-resistant structure",
      "Suitable for hot and cold drinks",
      "Eco-friendly and safe",
    ],
    uses: ["Home", "Office", "Cafes", "Events"],
    image: paperCupsImg,
    variants: ["150ml", "200ml", "250ml", "Custom Print Bulk Orders"],
  },
];


  // GSAP fade/slide on scroll (kept simple)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Horizontal scroll with arrows
  const scrollByAmount = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const firstChild = slider.firstElementChild as HTMLElement | null;
    const cardWidth = firstChild?.offsetWidth ?? slider.clientWidth / 3;
    const gap = 32; // ≈ gap-8
    const amount = cardWidth + gap;

    const newScrollLeft =
      direction === "right"
        ? slider.scrollLeft + amount
        : slider.scrollLeft - amount;

    slider.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our complete range of premium tissue and hygiene products,
            designed for comfort, strength, and reliability.
          </p>
        </div>

        <div className="relative">
          {/* Desktop / tablet arrows */}
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            className="
              hidden md:flex items-center justify-center
              absolute left-0 top-1/2 -translate-y-1/2
              h-10 w-10 rounded-full bg-background/90 shadow-md
              hover:bg-background z-20
            "
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            className="
              hidden md:flex items-center justify-center
              absolute right-0 top-1/2 -translate-y-1/2
              h-10 w-10 rounded-full bg-background/90 shadow-md
              hover:bg-background z-20
            "
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Mobile arrows – bottom center */}
          <div className="flex md:hidden justify-center gap-4 mb-4">
            <button
              type="button"
              onClick={() => scrollByAmount("left")}
              className="flex items-center justify-center h-9 w-9 rounded-full bg-background/90 shadow-md hover:bg-background"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount("right")}
              className="flex items-center justify-center h-9 w-9 rounded-full bg-background/90 shadow-md hover:bg-background"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Horizontal grid slider – same card look, now scrollable */}
          <div
            ref={sliderRef}
            className="
              grid grid-flow-col auto-cols-[minmax(260px,1fr)]
              md:auto-cols-[minmax(320px,1fr)]
              lg:auto-cols-[minmax(360px,1fr)]
              gap-8 overflow-x-auto overflow-y-visible scroll-smooth pb-2
              [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            "
          >
            {products.map((product) => (
              <div key={product.id} className="product-card h-full">
                <ProductCard
                  product={product}
                  onAddToEnquiry={onAddToEnquiry}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
