import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import logoWebsite from "@/assets/logo-website.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const productDropdown = [
    { label: "Fragrance Oil", href: "/produk/fragrance-oil" },
    { label: "Botol & Kemasan", href: "/produk/botol-kemasan" },
    { label: "Paket Usaha Refill", href: "/produk/paket-usaha" },
  ];

  const solutionDropdown = [
    { label: "Laundry & Linen", href: "/solusi/laundry-linen" },
    { label: "Hotel & Air Care", href: "/solusi/hotel-air-care" },
    { label: "Retail Refill", href: "/solusi/retail-refill" },
    { label: "Brand Parfum Baru", href: "/solusi/brand-parfum-baru" },
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-brand-light shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-brand-light/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Kampung Melayu, Jakarta Timur</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>sales@centralaroma.com</span>
            </div>
          </div>
          <div className="text-brand-primary font-medium">
            Sejak 1999 • 1000+ Aroma • Trusted Supplier
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoWebsite} 
              alt="Central Aroma" 
              className="h-8 md:h-10 w-auto transition-smooth hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-brand-primary transition-smooth font-medium"
            >
              Beranda
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-foreground hover:text-brand-primary transition-smooth font-medium"
                onMouseEnter={() => setActiveDropdown("products")}
              >
                Produk
                <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-card border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="py-2">
                  {productDropdown.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-3 text-sm text-foreground hover:text-brand-primary hover:bg-muted transition-smooth"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-foreground hover:text-brand-primary transition-smooth font-medium"
                onMouseEnter={() => setActiveDropdown("solutions")}
              >
                Solusi
                <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-card border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="py-2">
                  {solutionDropdown.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-3 text-sm text-foreground hover:text-brand-primary hover:bg-muted transition-smooth"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              to="/layanan" 
              className="text-foreground hover:text-brand-primary transition-smooth font-medium"
            >
              Layanan
            </Link>
            <Link 
              to="/tentang" 
              className="text-foreground hover:text-brand-primary transition-smooth font-medium"
            >
              Tentang
            </Link>
            <Link 
              to="/kontak" 
              className="text-foreground hover:text-brand-primary transition-smooth font-medium"
            >
              Kontak
            </Link>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button variant="hero" size="default" className="hidden md:inline-flex">
              Minta Pricelist
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:bg-muted rounded-md transition-smooth"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-brand-light/50">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-brand-primary transition-smooth">
                Beranda
              </Link>
              
              <div>
                <button
                  onClick={() => handleDropdownToggle("products")}
                  className="flex items-center justify-between w-full text-foreground hover:text-brand-primary transition-smooth"
                >
                  Produk
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "products" && (
                  <div className="ml-4 mt-2 space-y-2">
                    {productDropdown.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block text-sm text-muted-foreground hover:text-brand-primary transition-smooth"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => handleDropdownToggle("solutions")}
                  className="flex items-center justify-between w-full text-foreground hover:text-brand-primary transition-smooth"
                >
                  Solusi
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "solutions" && (
                  <div className="ml-4 mt-2 space-y-2">
                    {solutionDropdown.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block text-sm text-muted-foreground hover:text-brand-primary transition-smooth"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/layanan" className="text-foreground hover:text-brand-primary transition-smooth">
                Layanan
              </Link>
              <Link to="/tentang" className="text-foreground hover:text-brand-primary transition-smooth">
                Tentang
              </Link>
              <Link to="/kontak" className="text-foreground hover:text-brand-primary transition-smooth">
                Kontak
              </Link>
              
              <Button variant="hero" size="lg" className="mt-4">
                Minta Pricelist
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;