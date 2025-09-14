import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, FlaskConical, Building2, Target, Heart } from "lucide-react";
import heritagePhoto from "@/assets/heritage-photo.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description: "25 tahun pengalaman menghasilkan produk parfum berkualitas tinggi dengan standar internasional."
    },
    {
      icon: FlaskConical,
      title: "Inovasi Berkelanjutan",
      description: "Tim R&D in-house yang terus mengembangkan formula dan teknologi terdepan."
    },
    {
      icon: Users,
      title: "Partnership Terpercaya",
      description: "Membangun hubungan jangka panjang dengan client melalui layanan yang konsisten."
    },
    {
      icon: Target,
      title: "Solusi Terintegrasi",
      description: "Menyediakan solusi lengkap dari konsep hingga produk jadi untuk setiap kebutuhan."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-brand-primary/10 text-brand-primary border-brand-primary/20">
                <Building2 className="w-4 h-4 mr-2" />
                Tentang Kami
              </Badge>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Perjalanan{" "}
                <span className="text-brand-primary">Central Aroma</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Sejak 1999, kami telah menjadi mitra terpercaya dalam industri parfum Indonesia, 
                menghadirkan solusi terdepan untuk setiap kebutuhan wewangian.
              </p>
            </div>
          </div>
        </section>

        {/* Heritage Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-4xl font-bold mb-6 text-foreground">
                  Dimulai dari Mimpi Sederhana
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Central Aroma didirikan pada tahun 1999 di Kampung Melayu, Jakarta Timur, 
                    dengan visi sederhana namun ambisius: menyediakan solusi parfum berkualitas 
                    tinggi yang terjangkau untuk semua kalangan.
                  </p>
                  <p>
                    Berawal dari toko kecil dengan koleksi aroma terbatas, kami terus berkembang 
                    dengan mendengarkan kebutuhan pasar dan berinovasi tanpa henti. Hari ini, 
                    dengan lebih dari 1000 aroma dalam koleksi kami, Central Aroma telah menjadi 
                    nama yang dipercaya oleh berbagai industri.
                  </p>
                  <p>
                    Komitmen kami terhadap kualitas, inovasi, dan layanan pelanggan yang excellent 
                    telah membawa kami menjadi salah satu supplier parfum terdepan di Indonesia.
                  </p>
                </div>
              </div>
              <div>
                <div className="relative">
                  <img 
                    src={heritagePhoto} 
                    alt="Central Aroma heritage - old shop photo" 
                    className="w-full rounded-2xl shadow-brand"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium mb-1">Foto Heritage</p>
                    <p className="text-xs opacity-90">Central Aroma - Kampung Melayu, 1999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold mb-6 text-foreground">
                Nilai & Komitmen Kami
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Prinsip-prinsip yang memandu setiap langkah Central Aroma dalam melayani client dan mengembangkan bisnis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-card hover:shadow-brand transition-spring hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-brand-primary" />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats & Achievements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-hero-gradient rounded-3xl p-12 text-white text-center">
              <h2 className="font-display text-4xl font-bold mb-12">
                Pencapaian Central Aroma
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-5xl font-bold mb-2">25+</div>
                  <div className="text-white/80">Tahun Berpengalaman</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">1000+</div>
                  <div className="text-white/80">Jenis Aroma</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <div className="text-white/80">Client Aktif</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">50+</div>
                  <div className="text-white/80">Kota Terjangkau</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-brand-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">Visi Kami</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Menjadi perusahaan parfum terdepan di Indonesia yang diakui atas kualitas produk, 
                    inovasi berkelanjutan, dan kontribusi positif terhadap industri wewangian nasional.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-brand-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">Misi Kami</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Menghadirkan solusi parfum berkualitas tinggi yang inovatif dan terjangkau, 
                    sambil membangun kemitraan jangka panjang dengan client melalui layanan yang excellent 
                    dan dukungan berkelanjutan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;