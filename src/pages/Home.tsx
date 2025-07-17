import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Wifi, 
  Shield, 
  Car, 
  Zap, 
  Coffee,
  Users,
  Star,
  ChevronRight
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "24x7 Open",
      description: "No weekly off - Your study schedule is never interrupted"
    },
    {
      icon: <Wifi className="h-8 w-8 text-blue-600" />,
      title: "High-Speed WiFi",
      description: "Seamless internet access for research and study"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "CCTV Surveillance",
      description: "Ensuring a secure and monitored environment"
    },
    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      title: "Parking Facility",
      description: "Hassle-free parking for all visitors"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "24x7 Power Backup",
      description: "No interruptions due to power cuts"
    },
    {
      icon: <Coffee className="h-8 w-8 text-blue-600" />,
      title: "RO Water (Hot/Cold)",
      description: "Stay refreshed with clean and safe drinking water"
    }
  ];

  const stats = [
    { number: "24/7", label: "Open Hours" },
    { number: "100+", label: "Study Seats" },
    { number: "500+", label: "Happy Students" },
    { number: "5⭐", label: "Rating" }
  ];



  const successStories = [
    {
      name: "Harsh Chauhan",
      // exam: "UPSC CSE 2023",
      // achievement: "AIR 145",
      quote: "Vidhyadham Library in Garhi Cantt is one of the best places to study. It has a calm and clean environment, perfect for focusing. The AC keeps it cool, there's clean drinking water, and the washrooms are neat. It's a great spot for students and anyone who needs a quiet place to study.",
      rating: 5
    },
    {
      name: "Vanshika Thapa", 
      // exam: "NEET 2023",
      // achievement: "650+ marks",
      quote: "Perfect library for students , quiet and well maintained.The environment really pushes you to stay focused , the seating is comfortable for long hours .Overall, it’s an ideal spot for students preparing for exams.",
      rating: 5
    },
    {
      name: "Komal Joshi",
      // exam: "SSC CGL 2023", 
      // achievement: "Top 100",
      quote: "I had such a wonderful time at this library! It has a cozy and quiet atmosphere, which makes it perfect for studying. The facilities are fantastic too. I definitely recommend checking it out",
      rating: 5
    }
  ];

  // Get 3 random reviews each time component renders
  const displayedReviews = React.useMemo(() => {
    const reviews = [
      {
        text: "Vidhyadham Library in Garhi Cantt is one of the best places to study. It has a calm and clean environment, perfect for focusing. The AC keeps it cool, there's clean drinking water, and the washrooms are neat.",
        author: "Harsh Chauhan",
        rating: 5,
        link: "https://g.co/kgs/UaTKPTE"
      },
      {
        text: "The library provides a nice and quiet environment to study. It's at a convenient location and also quite affordable. The owner is friendly and supportive. Highly recommended!",
        author: "Shanul Nautiyal",
        rating: 5,
        link: "https://share.google/2mOwNUnLV3z56tQOQ"
      },
      {
        text: "I had such a wonderful time at this library! It has a cozy and quiet atmosphere, which makes it perfect for studying. The facilities are fantastic too. I definitely recommend checking it out!",
        author: "Komal Joshi",
        rating: 5,
        link: "https://share.google/7ICa9V14rw9c7lqdL"
      },
      {
        text: "Whether you're a bookworm, a student, or simply looking for a quiet space to relax, this library is a must-visit. My visit was a thoroughly enjoyable experience.",
        author: "Shashikant Pal",
        rating: 5,
        link: "https://share.google/SmQvrHk2rbPd5aUt5"
      },
      {
        text: "Perfect library for students, quiet and well-maintained. The environment really pushes you to stay focused. The seating is comfortable for long hours.",
        author: "Vanshika Thapa",
        rating: 5,
        link: "https://share.google/aMZgU6s30jZZwpzsg"
      },
      {
        text: "Vidhyadham Library offers a peaceful and well-organized space perfect for focused study. Affordable fee structure and great atmosphere.",
        author: "Anshika Thapa",
        rating: 5,
        link: "https://share.google/coLhqMKQAIfKfsW3T"
      },
      {
        text: "Peaceful environment with great facilities like CCTV surveillance, potable water, and AC. Perfect for study lovers.",
        author: "NeverendingF00tsteps",
        rating: 5,
        link: "https://share.google/kYMFwwtsXaEhZ1hGj"
      },
      {
        text: "One of the best libraries in Dehradun. Polite librarian, peaceful ambiance, Wi-Fi and clean drinking water. Pocket friendly!",
        author: "Sahil Thapa",
        rating: 5,
        link: "https://share.google/2xDLOtjmXjE78twIl"
      },
      {
        text: "This library has a very peaceful atmosphere which is essential for a student. Highly recommended!",
        author: "Sonali",
        rating: 5,
        link: "https://share.google/5im2hEKkoMzozW6Nn"
      },
      {
        text: "Good environment for study. Everything was clean—desks, chairs, washrooms. Totally recommend visiting!",
        author: "Muskan Thapa",
        rating: 5,
        link: "https://share.google/85gte3vZQw6GZJTdn"
      },
      {
        text: "The 24x7 timing is great for night owls. The library is well-managed and CCTV-secured. Great for exam preparation too.",
        author: "Yash Mengwal",
        rating: 5,
        link: "https://share.google/ibaAHn2hz3AYLIOij"
      },
      {
        text: "Everything was perfect—from peaceful environment to the facilities. Highly recommended for students.",
        author: "Rajni Thapa",
        rating: 5,
        link: "https://share.google/QL3dvMYlrDi3vPWfN"
      },
      {
        text: "Clean, quiet, and professional—exactly what a good library should be. The high-speed Wi-Fi never disappoints.",
        author: "XD GHOUL GAMING",
        rating: 5,
        link: "https://share.google/v2h0X36fsiE5WXgRQ"
      },
      {
        text: "Excellent environment and sitting area. Fully hygienic. One of the best libraries in Garhi Cantt area.",
        author: "Robin Thakur",
        rating: 5,
        link: "https://share.google/DqJ9rbKV9FTdDjI3s"
      },
      {
        text: "Well-organized library with helpful staff and a good collection of books and journals. Very professional.",
        author: "Ankit Dhoundiyal",
        rating: 5,
        link: "https://share.google/6lZEQS96DNRIZ26FU"
      },
      {
        text: "Peaceful environment, great experience, and excellent staff. Worth your time. Must try at least once.",
        author: "Mohit Singh",
        rating: 5,
        link: "https://share.google/lvHaUJt3hjygeMRw9"
      },
      {
        text: "Quiet, clean, 24×7 study space with Wi-Fi and polite staff. Perfect for focused work.",
        author: "Saumya Singh",
        rating: 5,
        link: "https://share.google/FDTT1b8AnHSrMy3li"
      }
    ];
    
    const getRandomReviews = (reviewList: typeof reviews, count: number = 3) => {
      const shuffled = [...reviewList].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
    return getRandomReviews(reviews);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dnntb7ydk/image/upload/v1752298900/6309993057830945895_121_yykgt1.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Success Journey Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Premium study space in Dehradun • 24x7 Open • AC Rooms • High-Speed WiFi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Visit Us Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              World-Class Facilities
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need for focused study and competitive exam preparation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
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
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real students who chose VidhyaDham
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{story.exam}</p>
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {story.achievement}
                  </div>
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 italic text-center leading-relaxed">
                  "{story.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews About Us Section */}
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
              Reviews About Us
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from our community
            </p>
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedReviews.map((review, index) => (
              <motion.a
                key={index}
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-300"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gray-300" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic text-sm leading-relaxed">"{review.text}"</p>
                <div className="border-t pt-3">
                  <p className="font-bold text-gray-900">{review.author}</p>
                  <p className="text-xs text-blue-600">Google Review</p>
                </div>
                <div className="mt-2 text-xs text-gray-400 flex items-center">
                  <span>Click to view full review</span>
                  <ChevronRight className="h-3 w-3 ml-1" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Add Review Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-8 rounded-xl border-2 border-blue-100"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Share Your Experience</h3>
              <p className="text-gray-600">Your feedback helps us improve and guides other students</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://maps.app.goo.gl/gypEsVfAQYvVoThbA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                <Star className="mr-2 h-5 w-5" />
                Write a Google Review
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                <Users className="mr-2 h-5 w-5" />
                Share Feedback Directly
              </motion.a>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Your honest review helps us maintain quality and assists fellow students in making informed decisions
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8⭐</div>
              <div className="text-gray-600">Average Rating</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Google Reviews</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Students</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Recommendation Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Success Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful students who chose VidhyaDham Library for their competitive exam preparation.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
            >
              Contact Us Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;