import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Users, 
  Award,
  Wifi,
  Shield,
  Clock,
  Coffee,
  Car,
  Zap
} from 'lucide-react';

const About = () => {
  const facilities = [
    { icon: <Clock className="h-6 w-6" />, title: "24x7 Open", description: "No weekly off" },
    { icon: <Wifi className="h-6 w-6" />, title: "High-Speed WiFi", description: "Seamless connectivity" },
    { icon: <Shield className="h-6 w-6" />, title: "CCTV Surveillance", description: "Secure environment" },
    { icon: <Coffee className="h-6 w-6" />, title: "RO Water", description: "Hot & Cold available" },
    { icon: <Car className="h-6 w-6" />, title: "Parking Facility", description: "Hassle-free parking" },
    { icon: <Zap className="h-6 w-6" />, title: "Power Backup", description: "24x7 uninterrupted" }
  ];

  const galleryImages = [
    "https://res.cloudinary.com/dnntb7ydk/image/upload/v1752298900/6309993057830945893_121_cfiobn.jpg",
    "https://res.cloudinary.com/dnntb7ydk/image/upload/v1752298900/6309993057830945896_121_wjhoqi.jpg",
    "https://res.cloudinary.com/dnntb7ydk/image/upload/v1752298900/6309993057830945895_121_yykgt1.jpg",
    "https://res.cloudinary.com/dnntb7ydk/image/upload/v1752298900/6309993057830945894_121_ebv0pb.jpg"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About VidhyaDham Library</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering students and professionals with the perfect study environment since our inception
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  VidhyaDham Library is a premium reading and study space in Dehradun, designed for students, 
                  professionals, and book lovers seeking a peaceful and productive environment. With modern 
                  amenities, high-speed internet, and a noise-free ambiance, we provide the ideal setting to 
                  focus and achieve academic and career goals.
                </p>
                <p>
                  Located in the heart of Dehradun at Shaheed Durga Marg, we understand the challenges faced 
                  by competitive exam aspirants. Our mission is to provide a comprehensive study environment 
                  that eliminates distractions and maximizes productivity.
                </p>
                <p>
                  Since our establishment, we have been committed to creating a space where knowledge meets 
                  comfort, where determination meets resources, and where dreams meet reality.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://res.cloudinary.com/dnntb7ydk/image/upload/v1752298900/6309993057830945895_121_yykgt1.jpg"
                alt="VidhyaDham Library Interior"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide a world-class study environment that empowers students and professionals 
                to achieve their academic and career goals through focused learning, modern amenities, 
                and unwavering support for their educational journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and preferred study destination in Uttarakhand, where every 
                student finds the perfect environment to unlock their potential and transform their 
                aspirations into achievements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every amenity you need for successful studying, all under one roof
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 text-blue-600">
                  {facility.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Take a Virtual Tour
            </h2>
            <p className="text-xl text-gray-600">
              See our beautiful and well-equipped study spaces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <img 
                  src={image} 
                  alt={`Library Interior ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-60 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Study Area {index + 1}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Students Choose Us */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Students Choose VidhyaDham
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              More than just a library - we're your partner in success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Users className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community of Achievers</h3>
              <p className="text-blue-100">
                Join a community of dedicated students and professionals all working towards their goals
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Award className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
              <p className="text-blue-100">
                Hundreds of successful students have achieved their dreams studying at VidhyaDham
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Target className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Focused Environment</h3>
              <p className="text-blue-100">
                Specially designed for competitive exam preparation with zero distractions
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;