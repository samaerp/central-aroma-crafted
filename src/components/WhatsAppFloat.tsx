import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after component becomes visible
      setTimeout(() => setShowTooltip(true), 500);
      // Hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 5500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    // Get current page title and URL for context
    const currentPage = document.title;
    const currentUrl = window.location.href;
    
    const message = encodeURIComponent(
      `Halo Central Aroma! Saya tertarik dengan produk dan layanan Anda.\n\nHalaman: ${currentPage}\nURL: ${currentUrl}\n\nMohon informasi lebih lanjut, terima kasih.`
    );
    
    // Replace with actual WhatsApp number
    const whatsappNumber = "6281234567890"; // Example number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-4 w-64 p-4 bg-white rounded-lg shadow-hero border border-brand-light animate-in slide-in-from-bottom-2">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-smooth"
              >
                <X className="w-3 h-3 text-gray-400" />
              </button>
              <div className="pr-6">
                <h4 className="font-semibold text-foreground mb-2">
                  💬 Butuh Bantuan?
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Tim sales kami siap membantu dengan pertanyaan produk, harga, atau konsultasi.
                </p>
                <p className="text-xs text-brand-primary font-medium">
                  Respon dalam 1-2 jam kerja
                </p>
              </div>
              {/* Arrow */}
              <div className="absolute top-full right-6 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          )}

          {/* Main Button */}
          <Button
            onClick={handleWhatsAppClick}
            className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-hero hover:shadow-xl transition-spring hover:scale-110 group"
            size="icon"
          >
            <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
          </Button>

          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        </div>
      </div>

      {/* Backdrop for mobile tooltip */}
      {showTooltip && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={() => setShowTooltip(false)}
        />
      )}
    </>
  );
};

export default WhatsAppFloat;