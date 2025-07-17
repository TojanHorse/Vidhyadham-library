import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Car, 
  Train, 
  Bus,
  ChevronRight,
  Phone
} from 'lucide-react';

const HowToVisit = () => {
  const [activeWaypoint, setActiveWaypoint] = useState(0);

  const waypoints = [
    {
      id: 1,
      title: "Starting Point",
      location: "Dehradun Railway Station / Bus Stand",
      description: "Begin your journey from Dehradun Railway Station or Interstate Bus Terminal",
      distance: "0 km",
      time: "0 min",
      directions: "Exit from the main gate and head towards RIMC Road"
    },
    {
      id: 2,
      title: "Landmark 1",
      location: "FRI (Forest Research Institute)",
      description: "Famous research institute - a major landmark in Dehradun",
      distance: "3.2 km",
      time: "10 min",
      directions: "From station, head towards FRI Road. The iconic FRI building will be visible."
    },
    {
      id: 3,
      title: "Landmark 2",
      location: "Rajendra Nagar",
      description: "Well-known residential area and junction",
      distance: "5.8 km",
      time: "15 min",
      directions: "Continue towards Rajendra Nagar via main roads."
    },
    {
      id: 4,
      title: "Landmark 3",
      location: "Garhi Cantt Market",
      description: "Local market area - you're getting close!",
      distance: "7.5 km",
      time: "20 min",
      directions: "Head towards Garhi Cantt Market area, then look for RIMC Road."
    },
    {
      id: 5,
      title: "Final Destination",
      location: "VidhyaDham Library - RIMC Road",
      description: "2nd floor above doon sainik school prep academy, Near R.I.MC",
      distance: "8.2 km",
      time: "22 min",
      directions: "2nd floor above doon sainik school prep academy, Near R.I.MC, Dehradun"
    }
  ];

  const nearbyLandmarks = [
    {
      name: "Mahindra Ground, RIMC Garhi Chowk",
      distance: "0.5 km",
      description: "Sports ground and community area"
    },
    {
      name: "FRI (Forest Research Institute)",
      distance: "1.8 km", 
      description: "Historic research institute"
    },
    {
      name: "Birpur",
      distance: "1.2 km",
      description: "Residential locality"
    },
    {
      name: "Rajendra Nagar",
      distance: "2.0 km",
      description: "Major residential area"
    },
    {
      name: "Garhi Cantt Market",
      distance: "0.8 km",
      description: "Local shopping area"
    }
  ];

  const transportOptions = [
    {
      icon: <Train className="h-8 w-8 text-blue-600" />,
      name: "By Train",
      description: "Dehradun Railway Station is well connected to major cities",
      cost: "₹20-35 (Auto from station)",
      time: "20-25 minutes"
    },
    {
      icon: <Bus className="h-8 w-8 text-blue-600" />,
      name: "By Bus",
      description: "Regular buses from Delhi, Haridwar, and other cities",
      cost: "₹25-40 (Auto from bus stand)",
      time: "20-30 minutes"
    },
    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      name: "By Car/Taxi",
      description: "Direct route via NH7 and RIMC Road",
      cost: "₹250-450 (From station/airport)",
      time: "20-25 minutes"
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Visit Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Easy step-by-step directions to reach VidhyaDham Library at RIMC Road, Garhi Cantt
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Route Guide */}
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
              Interactive Route Guide
            </h2>
            <p className="text-xl text-gray-600">
              Follow these 5 waypoints for the easiest route to our library
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Waypoints List */}
            <div className="space-y-4">
              {waypoints.map((waypoint, index) => (
                <motion.div
                  key={waypoint.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveWaypoint(index)}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    activeWaypoint === index
                      ? 'border-blue-600 bg-blue-50 shadow-lg'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      activeWaypoint === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-300 text-gray-700'
                    }`}>
                      {waypoint.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {waypoint.title}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">{waypoint.location}</p>
                      <p className="text-gray-600 text-sm mb-3">{waypoint.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {waypoint.distance}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {waypoint.time}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className={`h-5 w-5 transition-colors ${
                      activeWaypoint === index ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Active Waypoint Details */}
            <motion.div
              key={activeWaypoint}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {waypoints[activeWaypoint].id}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {waypoints[activeWaypoint].title}
                </h3>
                <p className="text-blue-600 font-semibold text-lg">
                  {waypoints[activeWaypoint].location}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Description:</h4>
                  <p className="text-gray-600">{waypoints[activeWaypoint].description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Directions:</h4>
                  <p className="text-gray-600">{waypoints[activeWaypoint].directions}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    Distance: {waypoints[activeWaypoint].distance}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    Time: {waypoints[activeWaypoint].time}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
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
              Nearby Landmarks
            </h2>
            <p className="text-xl text-gray-600">
              Key places within 2 km radius to help you navigate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyLandmarks.map((landmark, index) => (
              <motion.div
                key={landmark.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{landmark.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{landmark.description}</p>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      {landmark.distance} away
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Journey Section */}
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
              Visual Journey
            </h2>
            <p className="text-xl text-gray-600">
              See our location and facilities through images and videos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img 
                src="https://res.cloudinary.com/dnntb7ydk/image/upload/v1752478915/IMG_20250712_170431_iqevie.jpg"
                alt="VidhyaDham Library Exterior View"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900">Library Exterior</h3>
                <p className="text-gray-600 text-sm">Front view of our building on RIMC Road</p>
              </div>
            </motion.div>

            {/* Video 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <video 
                controls
                className="w-full h-64 md:h-80 object-cover"
                poster="https://res.cloudinary.com/dnntb7ydk/image/upload/v1752478915/IMG_20250712_170431_iqevie.jpg"
              >
                <source src="https://res.cloudinary.com/dnntb7ydk/video/upload/v1752478887/VID_20250712_173019_1_vanxde.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900">Library Tour Video 1</h3>
                <p className="text-gray-600 text-sm">Virtual tour of our study spaces</p>
              </div>
            </motion.div>

            {/* Video 2 */}
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <video 
                controls
                className="w-full h-64 md:h-80 object-cover"
                poster="https://res.cloudinary.com/dnntb7ydk/image/upload/v1752478838/IMG_20250712_172038_sgtjwt.jpg"
              >
                <source src="https://res.cloudinary.com/dnntb7ydk/video/upload/v1752478872/VID_20250712_172111_1_elkx9m.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900">Library Tour Video 2</h3>
                <p className="text-gray-600 text-sm">Detailed view </p>
              </div>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img 
                src="https://res.cloudinary.com/dnntb7ydk/image/upload/v1752478838/IMG_20250712_172038_sgtjwt.jpg"
                alt="VidhyaDham Library Interior"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900">Outside Environment</h3>
                <p className="text-gray-600 text-sm">Exterior view of our comfortable study spaces</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us on Map
            </h2>
            <p className="text-xl text-gray-600">
              Located at Mahindra Ground, Garhi Cantt, Dehradun
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg mb-8"
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.023741048061!2d78.01930397560665!3d30.350275174770932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7d6ca0885cd%3A0x1af8d9dc2960daa9!2sVidhyaDham%20Library!5e0!3m2!1sen!2sin!4v1752300432299!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0, minHeight: '300px' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="VidhyaDham Library Location - Mahindra Ground, Garhi Cantt"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 inline-block">
              <p className="text-lg text-gray-700 mb-2">Still finding it hard to find us?</p>
              <a 
              href="tel:+918077360681"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
              >
              <Phone className="h-5 w-5 mr-2" />
              Call us now: +91 8077360681
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transport Options */}
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
              Transportation Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose the best way to reach us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.name}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Cost: {option.cost}</p>
                  <p className="text-sm text-gray-500">Time: {option.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Address & Contact Info */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Complete Address</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-200 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">VidhyaDham Library</p>
                    <p className="text-blue-100">
                      RIMC 2nd Floor, above Doon Sainik School Prep Academy,<br />
                      RIMC Road, Garhi Cantt,<br />
                      Dehradun, Uttarakhand – 248003
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-blue-200 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Need Help Finding Us?</p>
                    <a 
                    href="tel:+918077360681"
                    className="text-blue-100 hover:text-white transition-colors"
                    >
                    Call: +91 8077360681
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Car className="h-6 w-6 text-blue-200 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Parking Available</p>
                    <p className="text-blue-100">
                      Free parking for cars and two-wheelers with CCTV security.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
              >
                Get Detailed Directions
                <Navigation className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowToVisit;