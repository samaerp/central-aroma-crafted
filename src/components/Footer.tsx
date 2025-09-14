import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight
} from "lucide-react";
import logoFooter from "@/assets/logo-footer.png";

const Footer = () => {
  const productLinks = [
    { label: "Fragrance Oil", href: "/kontak" }, // Temporarily redirect to contact
    { label: "Botol & Kemasan", href: "/kontak" },
    { label: "Paket Usaha Refill", href: "/kontak" },
  ];

  const solutionLinks = [
    { label: "Laundry & Linen", href: "/kontak" }, // Temporarily redirect to contact
    { label: "Hotel & Air Care", href: "/kontak" },
    { label: "Retail Refill", href: "/kontak" },
    { label: "Brand Parfum Baru", href: "/kontak" },
  ];

  const serviceLinks = [
    { label: "Aroma Development", href: "/layanan" },
    { label: "Maklon Parfum", href: "/layanan" },
    { label: "Konsultasi", href: "/kontak" },
  ];

  const quickLinks = [
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Blog & Insights", href: "/kontak" }, // Temporarily redirect to contact
    { label: "Download Resources", href: "/kontak" }, // Temporarily redirect to contact
    { label: "Kontak", href: "/kontak" },
  ];

  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={logoFooter} 
                alt="Central Aroma" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-white/80 leading-relaxed">
                Solution for Every Fragrance Need. Melayani industri parfum Indonesia sejak 1999 
                dengan komitmen kualitas dan inovasi terdepan.
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="p-2 bg-white/10 rounded-lg hover:bg-brand-primary transition-smooth"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-white/10 rounded-lg hover:bg-brand-primary transition-smooth"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-white/10 rounded-lg hover:bg-brand-primary transition-smooth"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-white/70 hover:text-brand-primary transition-smooth flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-smooth" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-6">Produk & Solusi</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium text-brand-primary mb-2">Produk</h5>
                <ul className="space-y-2">
                  {productLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        to={link.href} 
                        className="text-white/70 hover:text-white transition-smooth text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium text-brand-primary mb-2">Solusi</h5>
                <ul className="space-y-2">
                  {solutionLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        to={link.href} 
                        className="text-white/70 hover:text-white transition-smooth text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-6">Hubungi Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Central Aroma<br />
                    Kampung Melayu, Jakarta Timur<br />
                    DKI Jakarta 13310, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-primary" />
                <a 
                  href="mailto:sales@centralaroma.com" 
                  className="text-white/90 hover:text-brand-primary transition-smooth"
                >
                  sales@centralaroma.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <div className="text-white/90 text-sm">
                  <p>Senin - Jumat: 08:00 - 17:00</p>
                  <p>Sabtu: 08:00 - 15:00</p>
                  <p>Minggu: Tutup</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <Button 
                variant="brand" 
                size="sm" 
                className="mt-4 bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="bg-white/5 rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-semibold mb-4">
              Dapatkan Update Terbaru
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Subscribe untuk mendapatkan info produk baru, tips industri parfum, 
              dan penawaran khusus dari Central Aroma.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <Button variant="brand" size="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 Central Aroma. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-brand-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-brand-primary transition-smooth">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;