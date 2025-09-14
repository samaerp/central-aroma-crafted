import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shirt, 
  Building2, 
  Store, 
  Sparkles,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import lavenderField from "@/assets/lavender-field.jpg";

const UseCases = () => {
  const useCases = [
    {
      icon: Shirt,
      title: "Laundry & Linen",
      industry: "Hospitality & Care",
      description: "Solusi wangi premium untuk laundry hotel, rumah sakit, dan layanan cuci premium. Formula aman fabric dengan daya tahan lama.",
      benefits: [
        "Safe untuk semua jenis kain",
        "Tahan hingga 3x pencucian",
        "Aroma profesional & mewah",
        "Harga grosir kompetitif"
      ],
      applications: ["Hotel Linen", "Hospital Laundry", "Premium Dry Clean", "Spa & Resort"],
      cta: "Solusi Laundry",
      badge: "Fabric Safe",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building2,
      title: "Hotel & Air Care",
      industry: "Hospitality & Commercial",
      description: "Sistem aroma untuk lobby, kamar, dan area publik. Menciptakan signature scent yang memorable untuk guest experience.",
      benefits: [
        "Signature scent development",
        "Sistem diffuser support",
        "Konsistensi aroma 24/7",
        "Custom intensity level"
      ],
      applications: ["Hotel Lobby", "Spa Treatment", "Office Space", "Retail Store"],
      cta: "Air Care Solution",
      badge: "Signature Scent",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Store,
      title: "Retail Refill",
      industry: "Retail & Distribution",
      description: "Paket lengkap untuk bisnis refill parfum. Mulai dari starter kit hingga pengembangan toko dengan margin tinggi.",
      benefits: [
        "Margin keuntungan 60-80%",
        "Training & support lengkap",
        "Marketing materials ready",
        "Produk berkualitas premium"
      ],
      applications: ["Toko Parfum", "Booth Mall", "Online Store", "Reseller Network"],
      cta: "Paket Bisnis",
      badge: "High Margin",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Sparkles,
      title: "Brand Parfum Baru",
      industry: "Beauty & Personal Care",
      description: "Layanan maklon lengkap untuk brand parfum baru. Dari konsep, formula, hingga kemasan dengan brand Anda sendiri.",
      benefits: [
        "R&D custom formula",
        "Private label packaging",
        "MOQ rendah untuk startup",
        "Quality control ketat"
      ],
      applications: ["Beauty Brand", "Personal Label", "Corporate Gift", "Event Merchandise"],
      cta: "Maklon Service",
      badge: "Full Service",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={lavenderField} 
          alt="Lavender field background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-brand-primary/10 text-brand-primary border-brand-primary/20">
            <Building2 className="w-4 h-4 mr-2" />
            Industry Solutions
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Solusi untuk Setiap{" "}
            <span className="text-brand-primary">Industri</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dari laundry premium hingga brand parfum baru, kami memahami kebutuhan unik 
            setiap industri dan menyediakan solusi yang tepat sasaran.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <Card 
                key={index} 
                className="group bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-brand transition-spring hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${useCase.gradient} text-white shadow-lg`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-semibold text-foreground">
                          {useCase.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {useCase.industry}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs font-medium">
                      {useCase.badge}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {useCase.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.applications.map((app, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-spring"
                  >
                    {useCase.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-brand-light/50 shadow-card">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Tidak Menemukan yang Sesuai?
            </h3>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ceritakan kebutuhan spesifik Anda kepada tim konsultan kami. 
              Kami siap mengembangkan solusi custom untuk industri Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Konsultasi Custom Solution
              </Button>
              <Button variant="outline" size="lg">
                Lihat Semua Industri
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;