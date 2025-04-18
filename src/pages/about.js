// pages/about.js
import { motion } from 'framer-motion';
import {
  Award,
  Briefcase,
  Building,
  CheckCircle,
  ChevronRight,
  ClipboardCheck,
  Clock, MapPin, Phone, Shield,
  Sun,
  Target, Users,
  Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>

    <div className="min-h-screen w-screen pt-24">
     

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10">
          <div className="absolute inset-0 bg-[url('/about-hero.jpg')] bg-cover bg-center opacity-70 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="block">About</span>
              <span className="text-green-500">Richy Electricals</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Our story, our mission, and the expert team powering electrical solutions across Ghana since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/ceo.jpg" 
              alt="Richy Electricals founder" 
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Experience badge */}
          <div className="absolute -bottom-6 -right-6 bg-green-500 rounded-xl shadow-lg p-4 text-white">
            <p className="text-2xl font-bold">15+</p>
            <p className="text-sm">Years Experience</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className='w-full'
      >
        <div className="mb-6">
          <h2 className="inline-block text-sm font-semibold text-green-500 uppercase tracking-wider border-b-2 border-green-500 pb-1 mb-2">Our Story</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">From UK Beginnings to Ghanaian Excellence: Specialized Electrical Services</h3>
        </div>
        
        <p className="text-lg text-gray-600 mb-6">
          Founded in 2010 by Richard Antwi, a certified electrical engineer with deep roots in Ghana, Richy Electricals began in the UK before expanding to Ghana, specializing in fuse board upgrades, rewiring, and electrical inspections.
        </p>
        
        <p className="text-lg text-gray-600 mb-6">
          What started as a modest operation quickly grew as Richard returned to his homeland to bring his expertise back to Ghana. By 2015, we had established our operations across major cities in Ghana, connecting communities with our trusted electrical services including new installations, fault finding, and sustainable energy solutions.
        </p>
        
        <p className="text-lg text-gray-600 mb-6">
          Today, we are proud to employ over 60 electrical professionals at our Accra headquarters, serving residential, commercial, and industrial clients throughout Ghana with a comprehensive range of electrical services while maintaining the same commitment to quality and customer satisfaction that has been our hallmark since day one.
        </p>
        
        <div className="flex items-center space-x-6 text-gray-500 mb-8">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>Established in 2010</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>Ghana-wide Service</span>
          </div>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/services" className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300">
            Our Services
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Mission and Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="inline-block text-sm font-semibold text-green-500 uppercase tracking-wider border-b-2 border-green-500 pb-1 mb-2">Our Purpose</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mission, Vision & Values</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at Richy Electricals
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h4>
              <p className="text-gray-600">
                To provide superior electrical engineering solutions that enhance safety, reliability, and efficiency for homes and businesses across Ghana, delivered with integrity and exceptional customer care tailored to Ghanaian standards.
              </p>
            </motion.div>
            
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h4>
              <p className="text-gray-600">
                To be Ghana&rsquo;s most trusted name in electrical engineering, known for our technical expertise, innovation, and deep understanding of the country&rsquo;s  unique needs, while leading the industry in sustainable electrical solutions that benefit Ghanaian communities.
              </p>
            </motion.div>
            
            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h4>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Excellence in service and workmanship</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Integrity and transparency in all dealings</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Safety as our highest priority</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Innovation and collaboration</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Respect for our clients and team members</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6">
                <h2 className="inline-block text-sm font-semibold text-green-500 uppercase tracking-wider border-b-2 border-green-500 pb-1 mb-2">Why Choose Us</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Richy Electricals Difference</h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                At Richy Electricals, we distinguish ourselves through unwavering commitment to quality, safety, and customer satisfaction throughout Ghana. Here is what sets us apart:
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="w-6 h-6 text-green-500" />,
                    title: "Fully Licensed & Insured",
                    description: "Complete peace of mind with comprehensive coverage and full regulatory compliance throughout Ghana."
                  },
                  {
                    icon: <Users className="w-6 h-6 text-green-500" />,
                    title: "Expert Technical Team",
                    description: "Certified electrical engineers with specialized training and experience working with Ghanaian standards and regulations."
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-green-500" />,
                    title: "Rapid Response Capability",
                    description: "Prompt service with emergency response available 24/7 across all major Ghanaian cities."
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-green-500" />,
                    title: "Ghana-wide Coverage, Local Expertise",
                    description: "Deep knowledge of Ghana's electrical systems, standards, and practices for truly adaptable solutions anywhere in the country."
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-green-100 rounded-full p-3">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <Image 
                  src="/atwork.jpg" 
                  alt="Richy Electricals engineer at work in Ghana" 
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg shadow-md transform translate-y-6"
                />
                <Image 
                  src="/ingh.jpg" 
                  alt="Electrical installation in Ghana" 
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <Image 
                  src="/source.jpg" 
                  alt="Generator project in Ghana" 
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <Image 
                  src="/panel.jpg" 
                  alt="Team working on electrical panel in Ghana" 
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg shadow-md transform translate-y-6"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 z-20">
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">5000+ Projects</p>
                    <p className="text-sm text-gray-500">Across Ghana</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


{/* Our Certifications */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="inline-block text-sm font-semibold text-green-500 uppercase tracking-wider border-b-2 border-green-500 pb-1 mb-2">Credentials</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Ghanaian Certifications & Affiliations</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We maintain the highest industry standards through professional certifications and memberships across Ghana
        </p>
      </motion.div>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {/* EAL Level 3 Diploma */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full mb-4 flex items-center justify-center">
          <Award className="w-8 h-8 text-green-500" />
        </div>
        <h4 className="text-center font-medium text-gray-900 mb-1">EAL Level 3 Diploma</h4>
        <p className="text-sm text-gray-600 text-center">Electrical Installation (600/9331/6)</p>
      </motion.div>
      
      {/* City & Guilds Initial Verification */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
      >
        <div className="w-16 h-16 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-blue-500" />
        </div>
        <h4 className="text-center font-medium text-gray-900 mb-1">City & Guilds 2391-50</h4>
        <p className="text-sm text-gray-600 text-center">Initial Verification of Electrical Installations</p>
      </motion.div>
      
      {/* Periodic Inspection & Testing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full mb-4 flex items-center justify-center">
          <ClipboardCheck className="w-8 h-8 text-green-500" />
        </div>
        <h4 className="text-center font-medium text-gray-900 mb-1">City & Guilds 2391-51</h4>
        <p className="text-sm text-gray-600 text-center">Periodic Inspection & Testing</p>
      </motion.div>
      
      {/* Building Regulations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
      >
        <div className="w-16 h-16 bg-purple-100 rounded-full mb-4 flex items-center justify-center">
          <Briefcase className="w-8 h-8 text-purple-500" />
        </div>
        <h4 className="text-center font-medium text-gray-900 mb-1">Ghana Standards Authority</h4>
        <p className="text-sm text-gray-600 text-center">Licensed Contractor</p>
      </motion.div>
      
      {/* EV Charging Points */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
      >
        <div className="w-16 h-16 bg-red-100 rounded-full mb-4 flex items-center justify-center">
          <Zap className="w-8 h-8 text-red-500" />
        </div>
        <h4 className="text-center font-medium text-gray-900 mb-1">EAL Level 3 Award</h4>
        <p className="text-sm text-gray-600 text-center">Electric Vehicle Charging Points Installation</p>
      </motion.div>
      
      {/* BPEC Solar PV */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
      >
        <div className="w-16 h-16 bg-yellow-100 rounded-full mb-4 flex items-center justify-center">
          <Sun className="w-8 h-8 text-yellow-500" />
        </div>
        <h4 className="text-center font-medium text-gray-900 mb-1">Energy Commission of Ghana</h4>
        <p className="text-sm text-gray-600 text-center">Solar PV & Energy Storage Systems</p>
      </motion.div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.7 }}
      className="mt-12 text-center"
    >
      <p className="text-gray-600 italic">All our technicians are fully qualified and regularly update their certifications</p>
    </motion.div>
  </div>
</section>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="inline-block text-sm font-semibold text-green-500 uppercase tracking-wider border-b-2 border-green-500 pb-1 mb-2">Where We Work</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Ghana Location</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Providing expert electrical services throughout Ghana from our strategically located headquarters
              </p>
            </motion.div>
          </div>

          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="mr-3">
                    <div className="bg-green-100 rounded-full p-2">
                      <MapPin className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Accra</h4>
                    <p className="text-green-500 font-medium">Greater Accra Region</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center">
                    <Building className="w-4 h-4 mr-2 text-gray-400" />
                    45 Independence Avenue, Cantonments, Accra, Ghana
                  </p>
                  <a 
                    href="tel:+233302123456"
                    className="flex items-center hover:text-green-500 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    +233 30 212 3456
                  </a>
                  <a 
                    href="mailto:info@richyelectricals.com.gh" 
                    className="flex items-center text-green-500 hover:underline"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    info@richyelectricals.com.gh
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300">
                Contact Us Today
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Ghana&rsquo;s  Trusted Electrical Team?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Let Richy Electricals bring our expertise to your project, anywhere in Ghana.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full shadow-md transition-all duration-300 w-full sm:w-auto">
                    Get a Free Quote
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/services" className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-8 rounded-full shadow-md transition-all duration-300 w-full sm:w-auto">
                    Explore Our Services
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div></div>
      </section>


      {/* Service Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="inline-block text-sm font-semibold text-green-500 uppercase tracking-wider border-b-2 border-green-500 pb-1 mb-2">Our Coverage</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Serving All Major Regions in Ghana</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our team provides comprehensive electrical services throughout Ghana with strategically positioned technicians
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Greater Accra Region",
              "Ashanti Region",
              "Western Region",
              "Eastern Region",
              "Central Region",
              "Volta Region",
              "Northern Region",
              "Brong-Ahafo Region"
            ].map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-sm p-4 flex items-center hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 bg-green-100 rounded-full mr-3 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-green-500" />
                </div>
                <p className="font-medium text-gray-800">{region}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="text-gray-600">Don&rsquo;t see your region? Contact us - we may still be able to serve you!</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="inline-block text-sm font-semibold text-green-500 uppercase tracking-wider border-b-2 border-green-500 pb-1 mb-2">FAQs</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Common Questions</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Answers to frequently asked questions about our services in Ghana
              </p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Do you provide services outside of major cities in Ghana?",
                  answer: "Yes, we service all regions of Ghana. While our headquarters is in Accra, we have technicians positioned strategically throughout the country to ensure timely service nationwide."
                },
                {
                  question: "Are your electricians certified in Ghana?",
                  answer: "Absolutely. All our electricians are fully certified according to Ghanaian regulations and standards, with many holding additional international certifications. Our team complies with all Ghana Standards Authority requirements."
                },
                {
                  question: "Do you offer emergency electrical services?",
                  answer: "Yes, we provide 24/7 emergency electrical services across Ghana. Our dedicated emergency response team is available at all hours to address urgent electrical issues."
                },
                {
                  question: "Can you help with solar installations for homes and businesses?",
                  answer: "Yes, we specialize in solar installations tailored to Ghana's climate and energy needs. Our solutions include grid-tied systems, battery backup options, and standalone solar setups designed specifically for the Ghanaian environment."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 text-center"
            >
              <p className="text-gray-600">Have more questions? <Link href="/contact" className="text-green-500 hover:underline">Get in touch with our team</Link></p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}