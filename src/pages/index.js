import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import {
  Award,
  BatteryCharging,
  Building,
  ChevronRight,
  Clock,
  FileText,
  Home,
  Lightbulb,
  MapPin,
  Phone,
  Power,
  Search,
  Settings,
  ShieldCheck,
  Sun,
  Zap
} from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function HomePage() {
  // For counting animation
  const [counting, setCounting] = useState(false);

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
  
    const loadingToast = toast.loading("Sending your message...");
  
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      service: e.target.service.value,
      message: e.target.message.value,
      timestamp: new Date().toISOString(),
    };
  
    try {
      const response = await fetch('https://richyelectricals.vercel.app/api/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
  
      toast.dismiss(loadingToast);
      toast.success("Message sent successfully! We'll get back to you soon.");
  
      e.target.reset();
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Failed to send message. Please try again later.");
      console.error("Error sending message:", error);
    }
  };
  

  // Intersection Observer for animation triggers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "stats") {
              setCounting(true);
            }
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Counter animation
  const Counter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!counting) return;

      let startTime;
      let animationFrame;

      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);

      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <>
<SEOHead 
  title="Richyelectricals GH | Electrical, Generator & Solar Solutions in Ghana"
  description="Trusted electrical experts in Ghana for residential, commercial, and industrial needs. We provide generator sales, solar installations, EV charging setups and more."
  canonicalUrl="https://www.richyelectricalsgh.com/"
/>

    <div className="min-h-screen">
     
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10">
          <div className="absolute inset-0 bg-[url('/ghana-hero-bg.jpg')] bg-cover bg-center opacity-70 mix-blend-overlay"></div>
        </div>

        {/* Animated geometric shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-green-500/10 blur-3xl"
            animate={{
              x: [0, 100, 50, 0],
              y: [0, -50, 100, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "easeInOut",
            }}
            style={{ top: "20%", left: "10%" }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-yellow-400/20 blur-3xl"
            animate={{
              x: [0, -70, 100, 0],
              y: [0, 100, -50, 0],
              scale: [1, 0.8, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "easeInOut",
            }}
            style={{ bottom: "10%", right: "15%" }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="block">Premier Electrical Solutions</span>
              <span className="text-green-400">in Ghana</span>
            </h1>
            <p className="text-lg md:text-xl text-green-400 mb-8">
              Specializing in power solutions, electrical installations, solar energy systems, and generator sales for homes and businesses across Ghana.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                >
                  Get a Free Quote
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="tel:+233209222856"
                  className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full border border-white/30 transition-all duration-300 items-center"
                >
                  Call Us Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scrolldown indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/80 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Ghana Location Section */}
      <section className="py-16 bg-gray-900 text-white animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <MapPin className="w-8 h-8 text-green-500 mr-3" />
              <div>
                <h3 className="text-xl font-bold">Accra Headquarters</h3>
                <p className="text-gray-300">Serving all of Ghana and neighboring countries</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Expert Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive electrical and power solutions delivered throughout Ghana by our team of certified professionals.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Power className="w-10 h-10 text-green-500" />,
                title: "Fuse Board Upgrades",
                description:
                  "Modern fuse board installations to improve safety and meet current electrical regulations in your Ghanaian property.",
                link: "/services#fuse-board-upgrades",
              },
              {
                icon: <Settings className="w-10 h-10 text-green-500" />,
                title: "Generator Sales & Installation",
                description:
                  "High-quality standby generators and power plants for reliable backup power during outages, with professional installation.",
                link: "/services#generator-sales",
              },
              {
                icon: <Sun className="w-10 h-10 text-green-500" />,
                title: "Solar Energy Solutions",
                description:
                  "Complete solar panel systems sales and installation for sustainable, clean energy for homes and businesses across Ghana.",
                link: "/services#solar-energy",
              },
              {
                icon: <FileText className="w-10 h-10 text-green-500" />,
                title: "Electrical Inspections",
                description:
                  "Thorough condition reports and periodic inspections to ensure your electrical systems are safe and compliant with Ghanaian standards.",
                link: "/services#electrical-inspections",
              },
              {
                icon: <Home className="w-10 h-10 text-green-500" />,
                title: "New Installations",
                description:
                  "Complete electrical system installations for new builds, renovations, and property developments throughout Ghana.",
                link: "/services#new-installations",
              },
              {
                icon: <BatteryCharging className="w-10 h-10 text-green-500" />,
                title: "EV Charging Stations",
                description:
                  "Installation of electric vehicle charging points for homes and businesses, supporting Ghana's green transportation future.",
                link: "/services#ev-charging",
              },
              {
                icon: <Search className="w-10 h-10 text-green-500" />,
                title: "Fault Finding",
                description:
                  "Expert diagnosis and resolution of electrical faults, trips, and other electrical issues in your home or business.",
                link: "/services#fault-finding",
              },
              {
                icon: <Lightbulb className="w-10 h-10 text-green-500" />,
                title: "Commercial Lighting",
                description:
                  "Energy-efficient lighting solutions for commercial properties, enhancing workspace productivity and reducing power consumption.",
                link: "/services#commercial-lighting",
              },
              {
                icon: <Zap className="w-10 h-10 text-green-500" />,
                title: "Rewiring Services",
                description:
                  "Partial or full property rewiring with minimal disruption, upgrading old or dangerous wiring systems in Ghanaian properties.",
                link: "/services#rewiring",
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
                title: "UPS Systems",
                description:
                  "Uninterruptible Power Supply systems for critical infrastructure and equipment protection during power fluctuations.",
                link: "/services#ups-systems",
              },
              {
                icon: <Clock className="w-10 h-10 text-green-500" />,
                title: "Emergency Call-outs",
                description:
                  "24/7 emergency electrical assistance with rapid response throughout Ghana when you need it most.",
                link: "/services#emergency",
              },
              {
                icon: <Building className="w-10 h-10 text-green-500" />,
                title: "Building Block Sales",
                description: "High-quality building blocks available in various sizes and materials, perfect for all your construction projects throughout Ghana.",
                link: "/services/building-block-sales",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300"
              >
                <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Learn more <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
                <Image
                  src="/atwork.jpg" 
                  alt="Richy Electricals engineers at work in Ghana" 
                  className="w-full h-full object-cover" 
                  width={1200} 
                  height={800} 
                  layout="intrinsic" 
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 z-20">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-2 mr-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Serving</p>
                    <p className="font-bold text-gray-900">All Ghana Regions</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ghana&#39;s Trusted Electrical Experts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience across Ghana, Richy Electricals has built a reputation for excellence,
                reliability, and exceptional service throughout the country.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of certified electrical engineers specializes in complete power solutions,
                providing high-quality services tailored to Ghanaian standards and regulations.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Headquarters in Accra serving all regions of Ghana",
                  "Team of certified electrical and solar energy experts",
                  "Residential, commercial, and industrial projects nationwide",
                  "Authorized dealer for top generator and solar panel brands",
                  "Comprehensive warranties on all work and products",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300"
                >
                  About Our Company
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats"
        className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white animate-on-scroll"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 15, suffix: "+", label: "Years Experience" },
              { value: 1500, suffix: "+", label: "Ghana Projects Completed" },
              { value: 16, suffix: "+", label: "Ghana Regions Served" },
              { value: 98, suffix: "%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-green-50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="relative p-12 md:p-16">
              {/* Background animated elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-500 opacity-10 rounded-full"></div>
                <div className="absolute right-20 bottom-10 w-64 h-64 bg-green-500 opacity-5 rounded-full"></div>
                <div className="absolute left-10 bottom-0 w-40 h-40 bg-yellow-500 opacity-5 rounded-full"></div>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-8 md:mb-0 md:mr-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready for Power Solutions?
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 md:mb-0 max-w-xl">
                    Contact our Accra office today for a free consultation and
                    quote. Our team of experts is ready to help with all
                    your electrical, solar, and generator needs.
                  </p>
                </div>

                <div className="flex flex-col space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 w-full"
                    >
                      Get a Free Quote
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="tel:+233209222856"
                      className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-3 px-8 rounded-full transition-all duration-300 w-full"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us: +233 20 922 2856
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Certifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fully certified and compliant with all Ghanaian electrical standards to ensure the highest quality and safety in every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-green-600 h-2"></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Energy Commission of Ghana</h3>
                <p className="text-gray-600 text-center">Licensed Electrical Contractor</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Ghana Standards Authority</h3>
                <p className="text-gray-600 text-center">Certified Electrical Equipment Installer</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-yellow-600 h-2"></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Renewable Energy Association</h3>
                <p className="text-gray-600 text-center">Certified Solar PV System Installer</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-red-600 h-2"></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Ghana Fire Service</h3>
                <p className="text-gray-600 text-center">Fire Safety Electrical Installation Certificate</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-purple-600 h-2"></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Electricity Company of Ghana</h3>
                <p className="text-gray-600 text-center">Electricity Grid Connection Certified Partner</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-orange-600 h-2"></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">ISO 9001:2015</h3>
                <p className="text-gray-600 text-center">Quality Management System Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* FAQ Section */}
            <section className="py-20 animate-on-scroll">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Find answers to common questions about our electrical services in London
                  </p>
                </motion.div>
              </div>
    
              <div className="max-w-3xl mx-auto">
                {[
                  {
                    question: "Do you serve all London areas?",
                    answer:
                      "Yes, we offer our electrical services throughout all London boroughs and some surrounding areas. Our central London headquarters allows us to respond quickly to clients across the capital.",
                  },
                  {
                    question: "How often should I have an electrical inspection?",
                    answer:
                      "For homeowners, we recommend an Electrical Installation Condition Report (EICR) every 10 years. For rental properties, UK regulations require an EICR every 5 years. Commercial properties should have inspections more frequently, typically every 3-5 years depending on the type of business.",
                  },
                  {
                    question: "What does a fuse board upgrade involve?",
                    answer:
                      "A fuse board upgrade involves replacing your old fuse box with a modern consumer unit that includes residual current devices (RCDs) and miniature circuit breakers (MCBs) for improved safety. The process typically takes a day to complete and will bring your electrical system up to current UK standards.",
                  },
                  {
                    question: "Do you offer emergency electrical services?",
                    answer:
                      "Yes, we provide 24/7 emergency electrical services throughout London. For electrical emergencies, our technicians aim to respond within 1-2 hours to address potentially dangerous situations quickly and safely.",
                  },
                  {
                    question: "Are your electricians qualified and certified?",
                    answer:
                      "All our electricians are fully qualified, certified, and registered with relevant UK electrical governing bodies. They regularly undergo training to stay updated with the latest regulations and safety standards, ensuring all work is compliant with British Standards.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-6"
                  >
                    <details className="group rounded-lg bg-white p-6 shadow-md [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">
                          {faq.question}
                        </h3>
                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M18 12H6"
                            />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-4 text-gray-600">{faq.answer}</p>
                    </details>
                  </motion.div>
                ))}
              </div>
    
              <div className="text-center mt-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/faq"
                    className="inline-flex items-center text-green-500 font-medium hover:text-green-600 transition-colors"
                  >
                    View all FAQs <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Request a Free Quote
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team in Accra will get back to you
                within 24 hours with a customized solution for your electrical needs.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+233 20 922 2856</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">Regimanuel estate balloon gate 4th link house 9, Kwabenya</p>
                    <p className="text-gray-600">Accra, Ghana</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-600">Monday-Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </a>
                <a href="https://twitter.com" className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                  </svg>
                </a>
                <a href="https://instagram.com" className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-full transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <form onSubmit={handleContactFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select a service</option>
                      <option value="Electrical Installation">Electrical Installation</option>
                      <option value="Generator Sales">Generator Sales & Installation</option>
                      <option value="Solar Installation">Solar Installation</option>
                      <option value="UPS Systems">UPS Systems</option>
                      <option value="Rewiring">Rewiring Services</option>
                      <option value="Emergency">Emergency Call-out</option>
                      <option value="EV Charging">EV Charging Station</option>
                      <option value="Other">Other (Please specify)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                      placeholder="Describe your project or requirements..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast notifications */}
      <Toaster position="bottom-right" />
    </div>
    </>
  );
}