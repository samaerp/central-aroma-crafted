import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Berapa minimum order quantity (MOQ) untuk produk Central Aroma?",
      answer: "MOQ bervariasi tergantung produk. Untuk fragrance oil biasanya mulai dari 1 liter, botol kemasan mulai dari 100 pcs. Untuk layanan maklon, MOQ mulai dari 500 pcs. Kami juga menyediakan paket sample untuk testing dengan jumlah kecil."
    },
    {
      question: "Bagaimana cara mendapatkan sampel aroma sebelum order?",
      answer: "Anda bisa request sampel melalui form di website kami atau langsung hubungi sales team. Kami menyediakan sampel 5ml untuk testing dengan biaya yang sangat terjangkau. Sampel biasanya dikirim dalam 1-2 hari kerja."
    },
    {
      question: "Berapa lama waktu pengerjaan untuk layanan maklon parfum?",
      answer: "Timeline maklon umumnya 2-4 minggu tergantung kompleksitas formula dan jumlah order. Proses mencakup: brief & sampling (3-5 hari), revisi formula (1-2 minggu), produksi & packaging (1-2 minggu), quality control final (2-3 hari)."
    },
    {
      question: "Apakah Central Aroma melayani pengiriman ke seluruh Indonesia?",
      answer: "Ya, kami melayani pengiriman ke seluruh Indonesia melalui ekspedisi terpercaya seperti JNE, TIKI, dan Pos Indonesia. Untuk area Jakarta, Bogor, Depok, Tangerang, Bekasi tersedia layanan same day delivery."
    },
    {
      question: "Apakah produk sudah memiliki sertifikat BPOM dan halal?",
      answer: "Semua produk fragrance oil kami sudah memiliki sertifikat keamanan dan compliance. Untuk produk maklon, kami membantu proses sertifikasi BPOM dan halal sesuai kebutuhan brand Anda dengan biaya terpisah."
    },
    {
      question: "Bagaimana sistem pembayaran dan apakah ada kredit terms?",
      answer: "Kami menerima pembayaran via transfer bank, cash, dan payment gateway. Untuk client regular dengan track record baik, tersedia credit terms 14-30 hari. New client biasanya menggunakan sistem advance payment atau COD."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-brand-primary/10 text-brand-primary border-brand-primary/20">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Pertanyaan yang Sering{" "}
            <span className="text-brand-primary">Ditanyakan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Temukan jawaban untuk pertanyaan umum tentang produk, layanan, dan proses kerja sama dengan Central Aroma.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
          <div className="bg-white rounded-2xl shadow-card p-8 mb-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-brand-light/50">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand-primary transition-smooth">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-center text-white">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h3 className="font-display text-3xl font-bold mb-4">
              Masih Ada Pertanyaan?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Tim customer service kami siap membantu Anda dengan pertanyaan spesifik 
              tentang produk, harga, atau kebutuhan custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero-outline" size="lg">
                Chat WhatsApp
              </Button>
              <Button variant="brand" size="lg" className="bg-white text-brand-primary hover:bg-white/90">
                Email Sales Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;