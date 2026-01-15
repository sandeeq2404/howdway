import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="bg-black text-white">

        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-5xl mx-auto text-center">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="text-6xl md:text-8xl font-medium tracking-tight mb-6"
            >
              HOWDWAY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed"
            >
              We design and build AI systems that quietly power modern businesses.
            </motion.p>

          </div>
        </section>

        {/* CLIENTS */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500 text-center mb-12"
            >
              Trusted by teams across education, technology, and creative industries
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                'kmgurukulam.in',
                'littleorchidspreschool.com',
                'Evoq Studios',
                'Howdway Events',
              ].map((client, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-300 text-sm md:text-base"
                >
                  {client}
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        

        {/* CLOSING */}
        <section className="py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              We focus on building systems that last —  
              thoughtful, scalable, and aligned with how real teams work.
            </motion.p>

          </div>
        </section>

      </div>
    </PageTransition>
  );
}
