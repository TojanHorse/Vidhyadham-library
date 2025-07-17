import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock,
  DollarSign,
  Shield,
  Users,
  Wifi,
  Car,
  Coffee,
  Zap,
  BookOpen,
  Award,
  CheckCircle,
  Star
} from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: "Flexible Study Hours",
      description: "24/7 operation for convenience",
      details: [
        "No weekly off - always available",
        "Study at your preferred time",
        "Perfect for working professionals",
        "Night study sessions supported"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Comfortable Seating",
      description: "Spacious and well-lit environment",
      details: [
        "Ergonomic chairs for long study sessions",
        "Individual power sockets with lights",
        "Ample table space for books and laptops",
        "Climate-controlled AC rooms"
      ]
    },
    {
      icon: <DollarSign className="h-12 w-12 text-blue-600" />,
      title: "Affordable Plans",
      description: "Cost-effective membership options",
      details: [
        "Flexible pricing for all budgets",
        "Daily, monthly, and yearly plans",
        "Special rates for long-term members",
        "Best value in Dehradun"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Safe & Secure",
      description: "CCTV equipped premises",
      details: [
        "24x7 CCTV surveillance",
        "Secure entry and exit",
        "Safe environment for all",
        "Emergency support available"
      ]
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      title: "Exam Preparation Hub",
      description: "Ideal for competitive exams",
      details: [
        "UPSC, SSC, NEET, JEE focused",
        "Daily newspapers available",
        "Quiet, distraction-free zones",
        "Success-oriented atmosphere"
      ]
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Premium Amenities",
      description: "World-class facilities",
      details: [
        "High-speed WiFi connectivity",
        "RO water (hot & cold)",
        "24x7 power backup",
        "Ample parking space"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Half Day Pass",
      price: "₹600",
      period: "half day",
      features: [
        "6 hours access",
        "AC environment",
        "WiFi access",
        "RO water",
        "Parking included"
      ],
      popular: false
    },
    {
      name: "12 Hour Pass",
      price: "₹800",
      period: "12 hours",
      features: [
        "12 hours study time",
        "Extended session",
        "All amenities included",
        "AC environment",
        "WiFi & RO water"
      ],
      popular: true
    },
    {
      name: "24 Hour Pass",
      price: "₹1000",
      period: "24 hours",
      features: [
        "Full day access",
        "24 hours availability",
        "All premium amenities",
        "Reserved seating",
        "Priority support"
      ],
      popular: false
    }
  ];

  const successStories = [
    {
      name: "Rajesh Kumar",
      exam: "UPSC CSE 2023",
      rank: "AIR 145",
      story: "VidhyaDham provided the perfect environment for my UPSC preparation. The 24x7 facility allowed me to study at my optimal hours."
    },
    {
      name: "Priya Sharma",
      exam: "NEET 2023",
      score: "650+ marks",
      story: "The peaceful atmosphere and excellent facilities helped me score 650+ in NEET. Best investment for my medical career!"
    },
    {
      name: "Vikash Singh",
      exam: "SSC CGL 2023",
      rank: "Top 100",
      story: "The study environment at VidhyaDham is unmatched. It played a crucial role in my SSC CGL success."
    }
  ];

  const comparisons = [
    { feature: "24x7 Access", vidhyadham: true, others: false },
    { feature: "AC Environment", vidhyadham: true, others: "Limited" },
    { feature: "High-Speed WiFi", vidhyadham: true, others: "Slow/Unreliable" },
    { feature: "Power Backup", vidhyadham: true, others: false },
    { feature: "CCTV Security", vidhyadham: true, others: "Limited" },
    { feature: "Parking Facility", vidhyadham: true, others: false },
    { feature: "RO Water", vidhyadham: true, others: false },
    { feature: "Affordable Pricing", vidhyadham: true, others: "Expensive" }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose VidhyaDham?</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover what makes us the #1 choice for serious students in Dehradun
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Unmatched Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature designed with your success in mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
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
              How We Compare
            </h2>
            <p className="text-xl text-gray-600">
              See why VidhyaDham stands out from the competition
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Features</th>
                    <th className="px-6 py-4 text-center">VidhyaDham</th>
                    <th className="px-6 py-4 text-center">Others</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr key={item.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {item.vidhyadham === true ? (
                          <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-green-600 font-medium">{item.vidhyadham}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.others === false ? (
                          <span className="text-red-500">✗</span>
                        ) : (
                          <span className="text-yellow-600">{item.others}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
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
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your study schedule and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative bg-white p-8 rounded-lg shadow-lg border-2 ${
                  plan.popular ? 'border-blue-600' : 'border-gray-200'
                } hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-1">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Choose Plan
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{story.exam}</p>
                <p className="text-green-600 font-medium mb-4">{story.rank || story.score}</p>
                <p className="text-gray-600 italic">"{story.story}"</p>
              </motion.div>
            ))}
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
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who made VidhyaDham their study partner. 
              Your success story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Start Your Journey Today
              </motion.a>
              <motion.a
                href="/how-to-visit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Visit Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;