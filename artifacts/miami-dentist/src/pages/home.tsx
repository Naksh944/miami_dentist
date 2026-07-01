import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Menu,
  X,
  Stethoscope,
  Smile,
  Sparkles,
  ShieldAlert,
  Activity,
  ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Link } from "wouter";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Sticky Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <Smile size={24} />
            </div>
            <span className={`text-2xl font-bold tracking-tight font-display ${isScrolled ? "text-primary" : "text-white lg:text-primary"}`}>
              Miami Dentist
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {["Home", "About", "Services", "Reviews", "Gallery", "FAQ", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground/80" : "text-white/90 lg:text-foreground/80"
                }`}
              >
                {item}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-md shadow-primary/20">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6 lg:hidden"
          >
            {["Home", "About", "Services", "Reviews", "Gallery", "FAQ", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-medium text-foreground border-b border-muted pb-4"
              >
                {item}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full py-6 text-lg mt-auto mb-10 w-full shadow-xl shadow-primary/20">
              Book Appointment Now
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Smiling patient in Miami" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:w-2/3"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-2xl"
          >
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary font-medium text-sm mb-6">
              <Star size={14} className="fill-current" />
              <span>Miami's Premier Dental Clinic</span>
            </motion.div>
            
            <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-foreground leading-[1.1] mb-6 tracking-tight">
              Your Smile.<br/>
              <span className="text-primary">Our Priority.</span>
            </motion.h1>
            
            <motion.p variants={FADE_UP} className="text-lg md:text-xl text-foreground/70 mb-8 max-w-lg leading-relaxed">
              Providing exceptional dental care with modern technology and compassionate treatment in the heart of Miami.
            </motion.p>
            
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-primary/25 group">
                Schedule Appointment
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-2 border-primary/20 text-primary hover:bg-primary/5">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-white py-12 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
            {[
              { number: "5,000+", label: "Happy Patients" },
              { number: "20+", label: "Years Experience" },
              { number: "4.9★", label: "Patient Rating" },
              { number: "100%", label: "Modern Equipment" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`text-center ${i % 2 !== 0 ? "border-l border-white/20 md:border-none" : "border-none"}`}
              >
                <div className="text-3xl md:text-4xl font-bold font-display mb-1">{stat.number}</div>
                <div className="text-sm md:text-base text-white/80 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-secondary rounded-3xl transform translate-x-4 translate-y-4"></div>
                <img 
                  src="/images/team.png" 
                  alt="Our Dental Team" 
                  className="relative z-10 rounded-3xl shadow-xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-white"></div>
                      ))}
                    </div>
                    <span className="text-sm font-bold text-foreground">Top Rated</span>
                  </div>
                  <p className="text-xs text-foreground/60">Trusted by thousands of families in South Florida.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <h4 className="text-accent font-semibold tracking-wider uppercase mb-2">About Our Clinic</h4>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
                Redefining the Dental Experience.
              </h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                We believe that visiting the dentist shouldn't be stressful. From our beautifully designed coastal clinic to our state-of-the-art technology, every detail has been crafted with your comfort in mind.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Unrushed, patient-focused care",
                  "Advanced pain-free techniques",
                  "Transparent pricing and treatment plans"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                    <span className="text-foreground/80 font-medium">{point}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-foreground hover:bg-foreground/90 text-white rounded-full px-8 py-6 text-lg">
                Meet The Doctors
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-accent font-semibold tracking-wider uppercase mb-2">Our Services</h4>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
              Comprehensive Care for Your Smile
            </h2>
            <p className="text-lg text-foreground/70">
              From routine cleanings to complete smile makeovers, we offer a full spectrum of dental services under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "General Dentistry", icon: <Activity className="w-8 h-8" />, desc: "Preventative care, cleanings, and exams to keep your smile healthy." },
              { title: "Cosmetic Dentistry", icon: <Sparkles className="w-8 h-8" />, desc: "Veneers, bonding, and makeovers for a flawless smile." },
              { title: "Teeth Whitening", icon: <Smile className="w-8 h-8" />, desc: "Professional grade whitening for a brighter, more confident look." },
              { title: "Dental Implants", icon: <Stethoscope className="w-8 h-8" />, desc: "Permanent, natural-looking replacements for missing teeth." },
              { title: "Invisalign", icon: <CheckCircle2 className="w-8 h-8" />, desc: "Clear aligners to straighten your teeth discreetly." },
              { title: "Emergency Care", icon: <ShieldAlert className="w-8 h-8" />, desc: "Same-day appointments for urgent dental issues." },
              { title: "Root Canal Therapy", icon: <Activity className="w-8 h-8" />, desc: "Painless treatment to save infected or damaged teeth." },
              { title: "Pediatric Dentistry", icon: <Smile className="w-8 h-8" />, desc: "Gentle, fun, and educational care for our youngest patients." },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-muted group"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/60 mb-6 line-clamp-2">{service.desc}</p>
                <a href="#" className="text-primary font-semibold flex items-center text-sm group-hover:text-accent transition-colors">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3">
              <h4 className="text-secondary font-semibold tracking-wider uppercase mb-2">Why Choose Us</h4>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                The Miami Dentist Difference
              </h2>
              <p className="text-white/80 text-lg mb-8">
                We combine luxury hospitality with elite medical expertise to deliver an unparalleled dental experience.
              </p>
              <Button className="bg-white text-primary hover:bg-secondary rounded-full px-8 py-6 text-lg w-full md:w-auto shadow-xl">
                Book Your Visit
              </Button>
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Experienced Team", desc: "Decades of combined experience from top-tier dental institutions." },
                { title: "Latest Technology", desc: "3D imaging, digital impressions, and laser dentistry." },
                { title: "Flexible Financing", desc: "We work with most insurances and offer payment plans." },
                { title: "Comfortable Experience", desc: "Noise-cancelling headphones, blankets, and sedation options." },
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8"
                >
                  <h3 className="text-xl font-bold font-display mb-3">{feature.title}</h3>
                  <p className="text-white/70">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-accent font-semibold tracking-wider uppercase mb-2">Our Experts</h4>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
              Meet The Doctors
            </h2>
            <p className="text-lg text-foreground/70">
              Our specialists are recognized leaders in their fields, dedicated to continuous education and clinical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Michael Chen", role: "Chief Cosmetic Dentist", img: "/images/dentist-1.png", bio: "Renowned for flawless veneer transformations and full mouth restorations." },
              { name: "Dr. Sarah Jenkins", role: "Periodontist", img: "/images/dentist-2.png", bio: "Specializing in pain-free root canals and complex restorative procedures." },
              { name: "Dr. David Torres", role: "Orthodontist", img: "/images/dentist-3.png", bio: "Expert in modern clear aligner therapy and interceptive orthodontics." }
            ].map((doc, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mb-6">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-1">{doc.name}</h3>
                <p className="text-primary font-medium mb-3">{doc.role}</p>
                <p className="text-foreground/70">{doc.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h4 className="text-accent font-semibold tracking-wider uppercase mb-2">Transformations</h4>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
                Smile Gallery
              </h2>
            </div>
            <Button variant="outline" className="rounded-full">View All Cases</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm"
            >
              <div className="flex h-64">
                <div className="w-1/2 relative border-r-4 border-white">
                  <img src="/images/gallery-before-1.png" alt="Before" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">BEFORE</div>
                </div>
                <div className="w-1/2 relative">
                  <img src="/images/gallery-after-1.png" alt="After" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">AFTER</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-display mb-2">Professional Whitening</h3>
                <p className="text-foreground/60 text-sm">A 60-minute in-office treatment utilizing laser technology for immediate results.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm"
            >
              <div className="flex h-64">
                <div className="w-1/2 relative border-r-4 border-white">
                  <div className="w-full h-full bg-muted flex items-center justify-center text-foreground/40 text-sm">Image Loading...</div>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">BEFORE</div>
                </div>
                <div className="w-1/2 relative">
                  <img src="/images/hero.png" alt="After" className="w-full h-full object-cover object-left-top" />
                  <div className="absolute bottom-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">AFTER</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-display mb-2">Porcelain Veneers</h3>
                <p className="text-foreground/60 text-sm">Complete smile makeover with 8 custom-crafted porcelain veneers.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-accent font-semibold tracking-wider uppercase mb-2">Testimonials</h4>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
              Don't Just Take Our Word For It
            </h2>
            <div className="flex justify-center items-center gap-2 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-foreground/70 font-medium">4.9 out of 5 stars based on 500+ reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Sarah Jenkins", text: "Absolutely the best dental experience I've ever had. The clinic is stunning, the staff is incredibly kind, and Dr. Chen is a perfectionist." },
              { name: "Marcus Rodriguez", text: "I've always had severe dental anxiety, but the team here made me feel completely at ease. I didn't feel a thing during my procedure." },
              { name: "Elena V.", text: "Got my veneers done here and I couldn't be happier. They look incredibly natural. Worth every penny for the confidence it gave me." },
              { name: "James T.", text: "State of the art facility. You can tell they invest in the best equipment. Very thorough and professional cleaning." },
              { name: "Amanda Lee", text: "They got me in same-day for an emergency. So grateful for their quick response and excellent care." },
              { name: "David Kim", text: "Transparent pricing, no hidden fees, and excellent clinical work. This is the standard all medical practices should strive for." }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted/30 p-8 rounded-3xl"
              >
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-foreground/80 mb-6 italic">"{review.text}"</p>
                <p className="font-bold font-display text-foreground">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Insurance */}
      <section id="faq" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <h4 className="text-accent font-semibold tracking-wider uppercase mb-2">Common Questions</h4>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-8">
                Frequently Asked Questions
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-border py-2">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">Do you accept insurance?</AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-base leading-relaxed">
                    Yes, we accept most major PPO insurance plans. We will verify your benefits before your appointment and handle all claims processing for you.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-border py-2">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">Do you offer emergency appointments?</AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-base leading-relaxed">
                    Absolutely. We reserve specific blocks of time daily for emergency cases. If you're experiencing pain, call us immediately and we will do our best to see you the same day.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-border py-2">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">Is financing available?</AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-base leading-relaxed">
                    Yes, we partner with CareCredit and LendingClub to offer flexible 0% interest financing plans for up to 24 months for qualifying patients.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-b border-border py-2">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">How often should I visit?</AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-base leading-relaxed">
                    For most patients, we recommend a check-up and cleaning every 6 months. However, patients with specific periodontal conditions may need to visit every 3-4 months.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-b border-border py-2">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">Do you treat children?</AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-base leading-relaxed">
                    Yes! We are a family practice and love treating children. We recommend bringing your child in for their first visit around their first birthday or when their first tooth appears.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-3xl p-10 shadow-sm">
                <h3 className="text-2xl font-bold font-display text-foreground mb-4">Accepted Insurances</h3>
                <p className="text-foreground/70 mb-8">We work with the following providers to maximize your benefits.</p>
                <div className="grid grid-cols-2 gap-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-20 border border-muted rounded-xl flex items-center justify-center bg-muted/20 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                      <span className="font-bold text-foreground/40 uppercase tracking-widest text-sm">PROVIDER {i}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-muted">
                  <p className="text-sm text-foreground/60 mb-4">Don't see your provider? No insurance?</p>
                  <Button variant="outline" className="w-full rounded-full text-primary border-primary/20 hover:bg-primary/5">
                    View In-House Membership Plan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <img src="/images/clinic-interior.png" alt="Clinic Interior" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-display text-white mb-6">
              Ready for a healthier, brighter smile?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Join thousands of satisfied patients in Miami. Book your comprehensive consultation today.
            </p>
            <Button className="bg-white text-primary hover:bg-secondary rounded-full px-10 py-7 text-xl shadow-2xl">
              Book Appointment Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3">
              <h4 className="text-accent font-semibold tracking-wider uppercase mb-2">Get in Touch</h4>
              <h2 className="text-4xl font-bold font-display text-foreground mb-8">
                We'd love to hear from you.
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold font-display text-lg mb-1">Visit Us</h5>
                    <p className="text-foreground/70">1234 Ocean Drive<br/>Miami, FL 33139</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold font-display text-lg mb-1">Call Us</h5>
                    <p className="text-foreground/70">(305) 555-0199</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold font-display text-lg mb-1">Office Hours</h5>
                    <p className="text-foreground/70">Mon-Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-muted relative z-10">
                <h3 className="text-2xl font-bold font-display mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80">Full Name</label>
                      <Input placeholder="John Doe" className="bg-muted/50 border-transparent focus:border-primary rounded-xl py-6" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80">Phone Number</label>
                      <Input placeholder="(305) 000-0000" className="bg-muted/50 border-transparent focus:border-primary rounded-xl py-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Email Address</label>
                    <Input placeholder="john@example.com" type="email" className="bg-muted/50 border-transparent focus:border-primary rounded-xl py-6" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">How can we help?</label>
                    <Textarea placeholder="I'd like to schedule a cleaning..." className="bg-muted/50 border-transparent focus:border-primary rounded-xl min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 text-lg">
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Map Placeholder */}
              <div className="h-64 w-full bg-muted rounded-b-3xl -mt-8 pt-8 flex items-center justify-center relative -z-0 border border-muted border-t-0">
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
                <p className="text-foreground/40 font-medium">Interactive Map Embed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <Smile size={18} />
                </div>
                <span className="text-xl font-bold tracking-tight font-display">
                  Miami Dentist
                </span>
              </div>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Elevating the standard of dental care with modern technology, luxurious comfort, and uncompromising clinical excellence.
              </p>
              <div className="flex gap-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                    <span className="sr-only">Social Link</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-bold mb-6">Quick Links</h5>
              <ul className="space-y-4">
                {["Home", "About Us", "Our Services", "Smile Gallery", "Patient Reviews"].map(link => (
                  <li key={link}><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-6">Services</h5>
              <ul className="space-y-4">
                {["Cosmetic Dentistry", "Invisalign", "Dental Implants", "Teeth Whitening", "Emergency Care"].map(link => (
                  <li key={link}><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-6">Contact</h5>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-primary" />
                  <span>1234 Ocean Drive, Miami, FL 33139</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                  <span>(305) 555-0199</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 flex-shrink-0 text-primary" />
                  <span>Mon-Fri: 8AM - 6PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} Miami Dentist. All rights reserved. Designed for demonstration purposes.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 w-full px-6 flex justify-between items-end pointer-events-none z-50 lg:hidden"
          >
            <div className="w-full pr-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 text-lg shadow-xl shadow-primary/30 pointer-events-auto">
                Book Appointment
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-24 lg:bottom-8 right-6 w-12 h-12 bg-white text-foreground rounded-full shadow-xl flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors z-50 border border-border hidden lg:flex"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
