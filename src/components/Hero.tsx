import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, FlaskConical, TrendingUp } from "lucide-react";
import perfumeBottle from "@/assets/perfume-bottle-1.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={perfumeBottle} 
          alt="Elegant perfume bottle" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <Award className="w-4 h-4 mr-2" />
            Trusted Partner Since 1999
          </Badge>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Solution for Every{" "}
            <span className="text-transparent bg-gradient-to-r from-brand-primary via-yellow-200 to-brand-primary bg-clip-text">
              Fragrance Need
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            Wangi mewah tanpa mahal—dari formula hingga kemasan. 
            25 tahun pengalaman, 1000+ aroma, R&D in-house untuk solusi parfum terpercaya.
          </p>

          {/* Credibility Indicators */}
          <div className="flex flex-wrap gap-6 mb-8 text-white/90">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="font-medium">25 Tahun Pengalaman</span>
            </div>
            <div className="flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-blue-400" />
              <span className="font-medium">1000+ Aroma Siap</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-400" />
              <span className="font-medium">R&D In-House</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <span className="font-medium">Supply Stabil</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="xl" 
              className="group shadow-hero"
            >
              Minta Pricelist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl"
              className="group"
            >
              Ajukan Sampel
              <FlaskConical className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-white/70 mb-4">Dipercaya oleh:</p>
            <div className="flex flex-wrap gap-4 text-white/80 text-sm">
              <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Toko Parfum</span>
              <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Hotel & Resort</span>
              <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Laundry Premium</span>
              <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Brand Parfum</span>
              <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Distributor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-32 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;