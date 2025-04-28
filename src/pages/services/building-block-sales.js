// pages/building-block-sales.js
import { motion } from 'framer-motion';
import { ArrowLeft, Building, ChevronRight, Package, PenToolIcon, Phone, Star, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BuildingBlockSales() {
  // For intersection observer animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);

  // Block product data
  const blockProducts = [
    {
      id: 'hollow-blocks',
      name: 'Hollow Blocks',
      description: 'Durable hollow blocks ideal for walls and partitions, offering excellent thermal insulation.',
      sizes: ['4 inch', '6 inch', '8 inch', '10 inch'],
      image: '/blocks/hollow-blocks.jpeg',
      alt: 'Hollow concrete building blocks stacked neatly'
    },
    {
      id: 'solid-blocks',
      name: 'Solid Blocks',
      description: 'High-strength solid blocks perfect for load-bearing walls and foundations.',
      sizes: ['4 inch', '6 inch', '8 inch'],
      image: '/blocks/solid-blocks.jpeg',
      alt: 'Solid concrete building blocks arranged in rows'
    },
    {
      id: 'interlocking-blocks',
      name: 'Interlocking Blocks',
      description: 'Innovative interlocking design for faster construction with minimal mortar requirements.',
      sizes: ['Standard', 'Wide', 'Corner'],
      image: '/blocks/interlocking-blocks.jpeg',
      alt: 'Interlocking building blocks showing connection mechanism'
    },
    {
      id: 'pavement-blocks',
      name: 'Pavement Blocks',
      description: 'Decorative and functional paving blocks for walkways, driveways, and outdoor spaces.',
      styles: ['Rectangular', 'Hexagonal', 'I-shaped', 'Herringbone'],
      image: '/blocks/pavement-blocks.jpg',
      alt: 'Decorative concrete pavement blocks in various patterns'
    }
  ];

  // Gallery images
  const galleryImages = [
    {
      src: '/blocks/block-production-line.jpeg',
      alt: 'Modern block production line with automated equipment',
      caption: 'Our state-of-the-art block production line'
    },
    {
      src: '/blocks/block-stacking.jpeg',
      alt: 'Workers stacking freshly made blocks for curing',
      caption: 'Quality control and block stacking process'
    },
    {
      src: '/blocks/block-machine.jpeg',
      alt: 'Close-up of block making machine in operation',
      caption: 'Precision block making equipment'
    },
    {
      src: '/blocks/block-yard.jpeg',
      alt: 'Aerial view of block yard with thousands of blocks',
      caption: 'Our extensive block yard with ready inventory'
    },
    {
      src: '/blocks/delivery-truck.jpg',
      alt: 'Delivery truck loaded with building blocks',
      caption: 'Prompt delivery service throughout Ghana'
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: "What types of building blocks do you offer?",
      answer: "We manufacture and supply a wide range of building blocks including hollow blocks, solid blocks, interlocking blocks, and pavement blocks in various sizes and specifications to meet different construction needs."
    },
    {
      question: "Are your blocks certified for quality?",
      answer: "Yes, all our blocks are manufactured according to Ghana Standards Authority specifications and undergo rigorous quality testing for compression strength, dimensional accuracy, and durability."
    },
    {
      question: "Do you offer delivery services?",
      answer: "Yes, we provide delivery services to construction sites throughout Ghana. Our fleet of delivery trucks ensures timely and safe transportation of blocks to your location."
    },
    {
      question: "How do I determine how many blocks I need for my project?",
      answer: "Our technical team can help you calculate the exact number of blocks needed based on your building plans. For a quick estimate, a standard 10ft x 10ft wall requires approximately 120 6-inch hollow blocks."
    },
    {
      question: "Can I visit your facility before placing an order?",
      answer: "Absolutely! We encourage clients to visit our production facility to see our manufacturing process and quality control measures. Please contact us to schedule a visit."
    },
    {
      question: "What is the minimum order quantity?",
      answer: "We accept orders of all sizes, from small quantities for home improvements to large bulk orders for major construction projects. Volume discounts are available for larger orders."
    }
  ];

  return (
    <>
      <div className="min-h-screen pt-10">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gray-50 opacity-70">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Animated geometric shapes */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div
              className="absolute w-64 h-64 rounded-full bg-green-500/5 blur-3xl"
              animate={{ x: [0, 100, 50, 0], y: [0, -50, 100, 0], scale: [1, 1.2, 0.8, 1] }}
              transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
              style={{ top: '20%', left: '10%' }}
            />
            <motion.div
              className="absolute w-96 h-96 rounded-full bg-green-600/5 blur-3xl"
              animate={{ x: [0, -70, 100, 0], y: [0, 100, -50, 0], scale: [1, 0.8, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
              style={{ bottom: '10%', right: '15%' }}
            />
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-gray-600 hover:text-green-500 transition-colors duration-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>

            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-sm font-medium text-green-500 bg-green-50 px-3 py-1 rounded-full">
                    Building Materials
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Premium Building Block Sales
                </h1>

                <p className="text-xl text-gray-600 mb-10 max-w-3xl">
                  High-quality construction blocks manufactured with precision and delivered throughout Ghana. Built to last, designed for efficiency.
                </p>

                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300">
                      Request Pricing
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="tel:+233200000000" className="inline-flex items-center bg-white text-gray-900 font-medium py-3 px-8 rounded-full border border-gray-300 hover:border-gray-400 shadow-md transition-all duration-300">
                      <Phone className="w-5 h-5 mr-2" />
                      Call for Bulk Orders
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Building Blocks</h2>
                  <p className="text-gray-700">
                    At our state-of-the-art facility, we manufacture premium quality building blocks using the finest materials and modern production techniques. Our blocks are renowned throughout Ghana for their consistent dimensions, exceptional strength, and durability in all climate conditions. Whether you're building a residential home, commercial property, or industrial facility, our blocks provide the solid foundation your project deserves.
                  </p>

                  {/* Product Gallery */}
                  <div className="mt-12 mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Production Facility</h3>
                    
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
                      <Image 
                        src={galleryImages[activeGalleryImage].src}
                        alt={galleryImages[activeGalleryImage].alt}
                        layout="fill"
                        objectFit="cover"
                        className="transition-opacity duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white text-sm md:text-base">{galleryImages[activeGalleryImage].caption}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 overflow-x-auto pb-2">
                      {galleryImages.map((image, index) => (
                        <button 
                          key={index}
                          onClick={() => setActiveGalleryImage(index)}
                          className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                            activeGalleryImage === index ? 'border-green-500 opacity-100' : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <Image 
                            src={image.src}
                            alt={`Thumbnail ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Block Products */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Block Products</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {blockProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gray-50 rounded-xl overflow-hidden shadow-sm"
                      >
                        <div className="relative h-48">
                          <Image 
                            src={product.image}
                            alt={product.alt}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                          <p className="text-gray-700 mb-4">{product.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {product.sizes && product.sizes.map((size) => (
                              <span key={size} className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                                {size}
                              </span>
                            ))}
                            {product.styles && product.styles.map((style) => (
                              <span key={style} className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                                {style}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Building Blocks</h3>
                    <ul className="space-y-3">
                      {[
                        "Consistent dimensions for faster and more precise construction",
                        "High compression strength exceeding Ghana Standards Authority requirements",
                        "Weather-resistant and durable in all climate conditions",
                        "Excellent thermal insulation properties",
                        "Produced using environmentally sustainable methods",
                        "Quality raw materials for long-lasting performance",
                        "Multiple sizes and types to suit various construction needs",
                        "Cost-effective compared to traditional building methods"
                      ].map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Process Steps */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">From Factory to Your Site</h2>
                  <div className="space-y-8">
                    {[
                      {
                        title: "Manufacturing",
                        description: "Our blocks are manufactured using state-of-the-art equipment with precise measurements and optimal material ratios for maximum strength and durability."
                      },
                      {
                        title: "Quality Control",
                        description: "Each batch undergoes rigorous quality checks, including compression strength testing, dimension verification, and visual inspection before approval."
                      },
                      {
                        title: "Curing",
                        description: "Blocks are properly cured in controlled conditions for the perfect amount of time to ensure they reach their maximum strength and stability."
                      },
                      {
                        title: "Order Preparation",
                        description: "Once your order is received, our team carefully selects and prepares the blocks, ensuring they meet our quality standards before dispatch."
                      },
                      {
                        title: "Delivery",
                        description: "Our fleet of delivery trucks ensures your blocks arrive safely at your construction site according to your schedule, anywhere in Ghana."
                      }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-12 pb-8"
                      >
                        {/* Line connecting steps */}
                        {index < 4 && (
                          <div className="absolute left-5 top-8 bottom-0 w-0.5 bg-green-200"></div>
                        )}

                        {/* Step number */}
                        <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-12 bg-gray-50 rounded-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Our Building Blocks</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Cost-Effective Construction",
                        description: "Our blocks reduce overall construction costs through faster installation and reduced labor requirements."
                      },
                      {
                        title: "Energy Efficiency",
                        description: "Superior thermal properties help reduce energy costs by maintaining comfortable indoor temperatures."
                      },
                      {
                        title: "Sound Insulation",
                        description: "Excellent acoustic properties provide improved sound insulation for greater privacy and comfort."
                      },
                      {
                        title: "Fire Resistance",
                        description: "Non-combustible materials offer enhanced fire safety for your construction projects."
                      },
                      {
                        title: "Environmental Benefits",
                        description: "Our manufacturing process minimizes waste and uses locally sourced materials where possible."
                      },
                      {
                        title: "Structural Integrity",
                        description: "High compression strength ensures long-lasting structural stability for your buildings."
                      }
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-sm"
                      >
                        <div className="flex items-center mb-4">
                          <div className="bg-green-100 rounded-full p-2 mr-3">
                            <Star className="w-5 h-5 text-green-500" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {benefit.title}
                          </h3>
                        </div>
                        <p className="text-gray-700">{benefit.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* FAQs */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                          className={`w-full flex justify-between items-center text-left p-5 rounded-lg ${
                            activeIndex === index ? 'bg-green-50 text-green-700' : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                          } transition-colors duration-300`}
                        >
                          <span className="font-medium text-lg">{item.question}</span>
                          <div className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                            <ChevronRight className="w-5 h-5 rotate-90" />
                          </div>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-5 bg-white border border-gray-100 rounded-b-lg">
                            <p className="text-gray-700">{item.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Service Contact Card */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Order Building Blocks Today</h3>
                  <p className="text-gray-600 mb-6">Contact our sales team for current pricing and availability. Volume discounts available for bulk orders.</p>
                  <div className="space-y-4 mb-6">
                    <Link
                      href="/contact"
                      className="block w-full bg-green-500 hover:bg-green-600 text-white text-center font-medium py-3 px-4 rounded-lg shadow-md transition-colors duration-300"
                    >
                      Request a Quote
                    </Link>
                    <Link
                      href="tel:+233200000000"
                      className="flex items-center justify-center w-full bg-white border border-gray-300 hover:border-green-300 text-gray-800 text-center font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      +233 20 000 0000
                    </Link>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Delivery Information</h4>
                    <p className="text-gray-600 mb-4">We deliver building blocks to all regions of Ghana, with special rates for Accra, Kumasi, and Takoradi.</p>
                    <h4 className="font-semibold text-gray-800 mb-3">Order Processing</h4>
                    <p className="text-gray-600">Standard Orders: 1-2 business days<br />Large Orders: 3-5 business days</p>
                  </div>
                </div>

                {/* Services */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Building className="w-5 h-5 text-green-500" />,
                        title: "Block Manufacturing",
                        description: "Custom block production to your specifications"
                      },
                      {
                        icon: <Truck className="w-5 h-5 text-green-500" />,
                        title: "Nationwide Delivery",
                        description: "Fast and reliable delivery service"
                      },
                      {
                        icon: <Package className="w-5 h-5 text-green-500" />,
                        title: "Bulk Orders",
                        description: "Special pricing for large construction projects"
                      },
                      {
                        icon: <PenToolIcon className="w-5 h-5 text-green-500" />,
                        title: "Technical Consultation",
                        description: "Expert advice on block selection and usage"
                      }
                    ].map((service, index) => (
                      <div
                        key={index}
                        className="flex items-start p-3 rounded-lg hover:bg-white group transition-colors duration-300"
                      >
                        <div className="bg-green-100 rounded-full p-2 mr-3 group-hover:bg-green-200 transition-colors duration-300">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {service.title}
                          </h4>
                          <p className="text-sm text-gray-500">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-500 to-green-600">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Construction Project?</h2>
              <p className="text-xl text-white/90 mb-8">
                Get high-quality building blocks delivered to your site anywhere in Ghana
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="block bg-white hover:bg-gray-100 text-green-600 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-green-700/20 transition-all duration-300">
                    Request a Free Quote
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="tel:+233200000000" className="block bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-green-900/30 transition-all duration-300">
                    Call Us Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}