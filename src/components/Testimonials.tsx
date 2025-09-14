import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, Building2, Store, Shirt } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "PT. Grand Hotel Jakarta",
      role: "Procurement Manager",
      industry: "Hotel & Hospitality",
      icon: Building2,
      content: "Central Aroma telah menjadi partner terpercaya kami selama 5 tahun. Kualitas aroma yang konsisten dan layanan yang professional membuat tamu hotel selalu memberikan feedback positif tentang signature scent kami.",
      rating: 5,
      highlight: "Signature scent development yang sempurna"
    },
    {
      name: "Laundry Premium Jakarta",
      role: "Owner",
      industry: "Laundry Services",
      icon: Shirt,
      content: "Sejak menggunakan produk Central Aroma, customer kami sering comment tentang wangi pakaian yang tahan lama. Formula mereka benar-benar aman untuk semua jenis kain dan hasil cuci jadi lebih premium.",
      rating: 5,
      highlight: "Kualitas dan safety terjamin"
    },
    {
      name: "Aroma Boutique Surabaya",
      role: "Founder",
      industry: "Retail Perfume",
      icon: Store,
      content: "Paket usaha refill dari Central Aroma sangat lengkap. Dari training, produk, hingga marketing support. Margin yang didapat juga sangat memuaskan. Highly recommended untuk yang mau mulai bisnis parfum.",
      rating: 5,
      highlight: "ROI tinggi dengan support lengkap"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-brand-primary/10 text-brand-primary border-brand-primary/20">
            <Quote className="w-4 h-4 mr-2" />
            Client Testimonials
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Dipercaya oleh{" "}
            <span className="text-brand-primary">Partner Terbaik</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lebih dari 25 tahun melayani berbagai industri, kepercayaan client adalah prestasi terbaik kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            return (
              <Card 
                key={index} 
                className="relative bg-white border-0 shadow-card hover:shadow-brand transition-spring hover:-translate-y-2 overflow-hidden"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
                
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-brand-primary/60" />
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Highlight */}
                  <div className="mb-6">
                    <Badge variant="outline" className="text-xs bg-brand-primary/5 text-brand-primary border-brand-primary/20">
                      {testimonial.highlight}
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="p-2 bg-brand-primary/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-brand-primary font-medium">
                        {testimonial.industry}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">25+</div>
            <div className="text-muted-foreground">Tahun Pengalaman</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Aroma Tersedia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">500+</div>
            <div className="text-muted-foreground">Client Aktif</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;