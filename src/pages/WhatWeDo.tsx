import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Web Development & Digital Growth',
    desc: 'We don’t just build websites; we build high-performance digital engines. From lightning-fast React/Next.js applications to strategic SEO and targeted ad campaigns, we ensure your digital presence converts visitors into loyal customers.',
  },
  {
    title: 'Mobile App Development',
    desc: 'Capture your audience on any device with native-grade performance. We specialize in Flutter and Kotlin to build scalable, cross-platform mobile applications that offer smooth user experiences and robust functionality.',
  },
  {
    title: 'Predictive Machine Learning',
    desc: 'Stop guessing and start predicting. We build custom ML models tailored to your operations—like our logistics engine that analyzes raw material gathering and supply chain data to predict exact delivery times the moment an order is placed.',
  },
  {
    title: 'AI Chatbots & RAG Systems',
    desc: 'Empower your business with intelligence. We deploy RAG (Retrieval-Augmented Generation) chatbots trained securely on your private company data, allowing them to answer complex customer support queries or assist employees instantly.',
  },
  {
    title: 'Business Workflow Automation',
    desc: 'Eliminate manual bottlenecks. We connect your disparate software ecosystems—CRM, billing, and internal tools—to automate repetitive tasks, reduce human error, and free up your team to focus on high-value creative work.',
  },
  {
    title: 'Real-Time Analytics',
    desc: 'Data is only valuable if it’s timely. We engineer streaming data pipelines using technologies like Kafka to visualize your business metrics in real-time, giving you the agility to make critical decisions as events happen.',
  },
  {
    title: 'Cloud & Database Migration',
    desc: 'Modernize your infrastructure without the headache. We handle end-to-end migration from legacy systems to scalable cloud architectures (AWS, Azure, GCP), ensuring zero data loss and optimized costs.',
  },
  {
    title: 'Advanced Data Analytics',
    desc: 'Turn raw numbers into a competitive advantage. Our team creates comprehensive Business Intelligence dashboards and visualizations that reveal hidden market trends, operational inefficiencies, and growth opportunities.',
  },
  {
    title: 'CX Optimization Strategy',
    desc: 'Retain more customers by understanding their behavior. We use data-driven insights to map user journeys, predict churn risks, and create personalized experiences that increase engagement and loyalty.',
  },
  {
    title: 'Custom Software Consultancy',
    desc: 'Have a unique challenge that off-the-shelf software can’t fix? We offer bespoke R&D and engineering services to build custom solutions from the ground up, specifically designed for your undefined or complex problems.',
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative w-full bg-[#0b0d10] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        
        {/* HEADER SECTION with Intro Paragraph */}
        <div className="mb-20 max-w-3xl">
          <div className="mb-20 max-w-3xl">
  <h1 className="text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tight">
    Engineering the <span className="text-[#ff5f5f]">Future</span> of Your Business.
  </h1>
</div>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            At Howdway, we bridge the gap between complex AI technology and practical business results. 
            Whether you need to automate a messy workflow, predict supply chain delays, or build a 
            customer-facing app, our team provides the technical expertise to turn your vision into 
            a scalable reality. We don't just write code; we solve business problems.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-white/10 bg-[#121418] hover:bg-[#1a1d23] transition-colors duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-[#ff5f5f] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              {/* NEW BETTER BUTTON */}
              <div className="mt-auto pt-4 border-t border-white/5">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-[#ff5f5f] transition-colors gap-2"
                >
                  Book Consultation 
                  <span aria-hidden="true" className="text-lg leading-none">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}