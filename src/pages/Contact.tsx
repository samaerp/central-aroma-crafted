import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  Building2,
  User,
  FileText
} from "lucide-react";

const Contact = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-brand-primary/10 text-brand-primary border-brand-primary/20">
                <MessageCircle className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Badge>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Mari{" "}
                <span className="text-brand-primary">Berkolaborasi</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Tim ahli kami siap membantu Anda menemukan solusi parfum yang tepat. 
                Hubungi kami untuk konsultasi, penawaran, atau pertanyaan apapun.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="font-display text-3xl font-bold mb-8 text-foreground">
                  Kirim Pesan Anda
                </h2>
                
                <Card className="border-0 shadow-card">
                  <CardContent className="p-8">
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      {/* Basic Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                            <User className="w-4 h-4" />
                            Nama Lengkap *
                          </Label>
                          <Input 
                            id="name" 
                            placeholder="Masukkan nama lengkap"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                            <Mail className="w-4 h-4" />
                            Email *
                          </Label>
                          <Input 
                            id="email" 
                            type="email"
                            placeholder="nama@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                            <Phone className="w-4 h-4" />
                            Telepon/WhatsApp *
                          </Label>
                          <Input 
                            id="phone" 
                            placeholder="08xxxxxxxxxx"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="company" className="flex items-center gap-2 mb-2">
                            <Building2 className="w-4 h-4" />
                            Nama Perusahaan
                          </Label>
                          <Input 
                            id="company" 
                            placeholder="PT. / CV. / Toko ..."
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city" className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4" />
                            Kota
                          </Label>
                          <Input 
                            id="city" 
                            placeholder="Jakarta, Surabaya, dll"
                          />
                        </div>
                        <div>
                          <Label htmlFor="interest" className="flex items-center gap-2 mb-2">
                            <FileText className="w-4 h-4" />
                            Kebutuhan *
                          </Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih kebutuhan" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fragrance-oil">Fragrance Oil</SelectItem>
                              <SelectItem value="packaging">Botol & Kemasan</SelectItem>
                              <SelectItem value="business-package">Paket Usaha Refill</SelectItem>
                              <SelectItem value="custom-development">Aroma Development</SelectItem>
                              <SelectItem value="private-label">Maklon Parfum</SelectItem>
                              <SelectItem value="consultation">Konsultasi Umum</SelectItem>
                              <SelectItem value="partnership">Kemitraan</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="volume" className="mb-2 block">
                          Estimasi Volume/Budget (opsional)
                        </Label>
                        <Input 
                          id="volume" 
                          placeholder="Contoh: 100 liter/bulan, Budget 10-50 juta"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="mb-2 block">
                          Pesan Detil *
                        </Label>
                        <Textarea 
                          id="message"
                          placeholder="Ceritakan kebutuhan spesifik Anda, aplikasi penggunaan, target market, atau pertanyaan lainnya..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        <Send className="w-5 h-5 mr-2" />
                        Kirim Pesan
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-display text-3xl font-bold mb-8 text-foreground">
                  Informasi Kontak
                </h2>

                <div className="space-y-8">
                  {/* Office Address */}
                  <Card className="border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-brand-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Alamat Kantor</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            Central Aroma<br />
                            Kampung Melayu, Jakarta Timur<br />
                            DKI Jakarta 13310, Indonesia
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Details */}
                  <Card className="border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-brand-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Email</h3>
                          <p className="text-muted-foreground">
                            <a 
                              href="mailto:sales@centralaroma.com" 
                              className="hover:text-brand-primary transition-smooth"
                            >
                              sales@centralaroma.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Business Hours */}
                  <Card className="border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-brand-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Jam Operasional</h3>
                          <div className="text-muted-foreground space-y-1">
                            <p>Senin - Jumat: 08:00 - 17:00</p>
                            <p>Sabtu: 08:00 - 15:00</p>
                            <p>Minggu: Tutup</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* WhatsApp CTA */}
                  <Card className="border-0 shadow-card bg-green-50">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="font-semibold text-foreground mb-2">
                          Butuh Respon Cepat?
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Chat langsung dengan sales team kami via WhatsApp untuk konsultasi instan.
                        </p>
                        <Button variant="brand" className="bg-green-600 hover:bg-green-700">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat WhatsApp
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4 text-foreground">
                Lokasi Kami
              </h2>
              <p className="text-muted-foreground">
                Kunjungi showroom kami di Kampung Melayu, Jakarta Timur
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Google Maps integration will be added here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;