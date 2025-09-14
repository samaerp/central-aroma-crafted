import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, FlaskConical, Factory } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-brand-primary/10 text-brand-primary border-brand-primary/20">
                <Factory className="w-4 h-4 mr-2" />
                Layanan Kami
              </Badge>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Layanan{" "}
                <span className="text-brand-primary">Professional</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Dari pengembangan aroma custom hingga layanan maklon lengkap, 
                Central Aroma siap mewujudkan visi parfum Anda.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Aroma Development */}
              <Card className="border-0 shadow-card hover:shadow-brand transition-spring">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                      <FlaskConical className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-foreground">
                        Aroma Development
                      </h2>
                      <p className="text-brand-primary font-medium">R&D In-House</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Layanan pengembangan aroma custom dengan tim R&D berpengalaman. 
                    Dari brief hingga formula final, kami bantu wujudkan signature scent Anda.
                  </p>

                  <div className="space-y-4 mb-8">
                    <h3 className="font-semibold text-foreground">Proses Development:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">1</div>
                        <span className="text-muted-foreground">Brief & Concept Discussion</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">2</div>
                        <span className="text-muted-foreground">Initial Sampling & Testing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">3</div>
                        <span className="text-muted-foreground">Feedback & Formula Revision</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">4</div>
                        <span className="text-muted-foreground">Final Formula & Documentation</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Konsultasi Development
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Maklon Service */}
              <Card className="border-0 shadow-card hover:shadow-brand transition-spring">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center">
                      <Factory className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-foreground">
                        Maklon Parfum
                      </h2>
                      <p className="text-brand-primary font-medium">Private Label Service</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Layanan maklon lengkap untuk brand parfum Anda. Dari formula, produksi, 
                    hingga packaging dengan brand sendiri. MOQ fleksibel untuk startup.
                  </p>

                  <div className="space-y-4 mb-8">
                    <h3 className="font-semibold text-foreground">5 Langkah Maklon:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">1</div>
                        <span className="text-muted-foreground">Brand Concept & Target Market</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">2</div>
                        <span className="text-muted-foreground">Formula Development & Approval</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">3</div>
                        <span className="text-muted-foreground">Packaging Design & Sampling</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">4</div>
                        <span className="text-muted-foreground">Production & Quality Control</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">5</div>
                        <span className="text-muted-foreground">Delivery & After-sales Support</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Diskusi Maklon Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold mb-4 text-foreground">
                Halaman Detail Segera Hadir
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Kami sedang menyiapkan informasi detail untuk setiap layanan. 
                Sementara itu, hubungi tim kami untuk konsultasi langsung.
              </p>
              <Button variant="hero" size="lg">
                Hubungi Sales Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Services;