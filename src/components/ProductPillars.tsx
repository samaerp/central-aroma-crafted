import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FlaskConical, 
  Package, 
  Lightbulb, 
  ShoppingBag, 
  Factory,
  ArrowRight,
  Sparkles
} from "lucide-react";

const ProductPillars = () => {
  const pillars = [
    {
      icon: FlaskConical,
      title: "Fragrance Oil",
      subtitle: "Bibit Parfum Premium",
      description: "1000+ aroma siap pilih untuk fine fragrance, laundry, air-care. Formula berkualitas tinggi dengan konsistensi terjaga.",
      features: ["Fine Fragrance", "Laundry Safe", "Air Care", "Long Lasting"],
      badge: "1000+ Aroma",
      color: "text-blue-600"
    },
    {
      icon: Package,
      title: "Botol & Kemasan",
      subtitle: "Variasi Lengkap",
      description: "Roll on, spray, tutup segel, berbagai ukuran. Kemasan berkualitas untuk produk parfum yang professional.",
      features: ["Roll On", "Spray Bottle", "Sealed Cap", "Custom Size"],
      badge: "Best Quality",
      color: "text-green-600"
    },
    {
      icon: Lightbulb,
      title: "Aroma Development",
      subtitle: "R&D In-House",
      description: "Custom accord, sampling & revisi. Tim R&D berpengalaman siap mengembangkan aroma sesuai brief Anda.",
      features: ["Custom Formula", "Sampling", "Revisi", "NDA & SLA"],
      badge: "R&D Expert",
      color: "text-purple-600"
    },
    {
      icon: ShoppingBag,
      title: "Paket Usaha Refill",
      subtitle: "Starter Kit Lengkap",
      description: "Paket lengkap untuk memulai bisnis refill. Termasuk produk, kemasan, panduan, dan estimasi margin.",
      features: ["Starter Kit", "Training", "Marketing Support", "High Margin"],
      badge: "Business Ready",
      color: "text-orange-600"
    },
    {
      icon: Factory,
      title: "Maklon Parfum",
      subtitle: "Private Label",
      description: "Layanan maklon parfum 5 langkah lengkap. Dari konsep hingga produk jadi dengan brand Anda sendiri.",
      features: ["5 Step Process", "Custom Branding", "MOQ Flexible", "Quality Control"],
      badge: "Full Service",
      color: "text-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-brand-primary/10 text-brand-primary border-brand-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Core Products & Services
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            5 Pilar Solusi{" "}
            <span className="text-brand-primary">Central Aroma</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dari bibit parfum berkualitas hingga layanan pengembangan produk lengkap, 
            kami menyediakan solusi terpadu untuk segala kebutuhan parfum Anda.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <Card 
                key={index} 
                className="group card-gradient border-0 shadow-card hover:shadow-brand transition-spring hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-white shadow-sm ${pillar.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <Badge variant="outline" className="text-xs font-medium">
                      {pillar.badge}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-brand-primary font-medium mb-3">
                      {pillar.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {pillar.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-brand-primary group-hover:text-white transition-spring"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-white">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Butuh Solusi Khusus?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Tim konsultan kami siap membantu Anda menemukan solusi parfum yang tepat 
              untuk kebutuhan bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero-outline" size="lg">
                Konsultasi Gratis
              </Button>
              <Button variant="brand" size="lg">
                Lihat Semua Produk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPillars;