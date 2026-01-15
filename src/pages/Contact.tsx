import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

const businessCategories = [
  'Technology',
  'Cafe',
  'Restaurant',
  'Finance',
  'E-commerce',
  'Food Business',
  'Agriculture',
  'Vertical Farming',
  'Healthcare',
  'Education',
  'Manufacturing',
  'Real Estate',
  'Logistics',
  'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addDoc(collection(db, 'consultations'), {
      ...formData,
      createdAt: serverTimestamp(),
    });

    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0b0d10] text-white px-6 py-32 relative overflow-hidden">

        {/* Background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05),transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

          {/* LEFT — CONTENT */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-light leading-tight">
              Free
              <br />
              <span className="font-normal">Consultation</span>
            </h1>

            <p className="text-gray-300 leading-relaxed max-w-lg">
              We offer one-on-one virtual consultations designed to help you
              think clearly about your business — without pressure or sales
              pitches.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>• Understand how technology can scale your business</li>
              <li>• Identify areas to reduce cost and improve efficiency</li>
              <li>• Explore AI, automation, and digital growth opportunities</li>
              <li>• Get practical ideas tailored to your industry</li>
              <li>• Honest, calm discussion — no obligations</li>
            </ul>

            <p className="text-gray-400 max-w-lg">
              After submitting the form, our team will reach out shortly to
              schedule your consultation.
            </p>
          </div>

          {/* RIGHT — FORM CARD */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10">

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  required
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <input
                  required
                  placeholder="Phone Number"
                  className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />

                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <select
                  required
                  className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-white/40 transition"
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option value="" className="bg-black">
                    Business Category
                  </option>
                  {businessCategories.map((cat) => (
                    <option key={cat} value={cat} className="bg-black">
                      {cat}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="
                    w-full mt-4
                    bg-[#ff5f5f]
                    hover:bg-[#ff4a4a]
                    text-black
                    py-3
                    rounded-lg
                    font-medium
                    transition
                  "
                >
                  Book Consultation
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <h2 className="text-2xl font-medium">
                  Thank you
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We’ve received your details. Our team will contact you shortly
                  to schedule your consultation.
                </p>
              </div>
            )}

          </div>

        </div>
      </div>
    </PageTransition>
  );
}
