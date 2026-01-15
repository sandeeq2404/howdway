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
      <div className="min-h-screen bg-black px-6 py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT — WHY CONSULTATION */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
              Free Consultation
            </h1>

            <p className="text-gray-400 leading-relaxed max-w-lg">
              We offer one-on-one virtual consultations with experienced business
              experts. This is a space to think clearly about your business —
              without pressure, without sales talk.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>• Understand how technology can scale your business</li>
              <li>• Identify areas to reduce cost and improve efficiency</li>
              <li>• Explore AI, automation, and digital growth opportunities</li>
              <li>• Get practical ideas tailored to your industry</li>
              <li>• A calm, honest conversation — nothing more</li>
            </ul>

            <p className="text-gray-400 max-w-lg">
              After booking, we’ll schedule a meeting date and time shortly.
            </p>
          </div>

          {/* RIGHT — FORM */}
          <div className="border border-white/10 rounded-2xl p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  required
                  placeholder="Name"
                  className="w-full bg-black border border-white/20 px-4 py-3 rounded-lg text-white focus:outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <input
                  required
                  placeholder="Phone Number"
                  className="w-full bg-black border border-white/20 px-4 py-3 rounded-lg text-white focus:outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />

                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-black border border-white/20 px-4 py-3 rounded-lg text-white focus:outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <select
                  required
                  className="w-full bg-black border border-white/20 px-4 py-3 rounded-lg text-white focus:outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option value="">Business Category</option>
                  {businessCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="w-full mt-4 bg-white text-black py-3 rounded-full font-medium hover:scale-105 transition"
                >
                  Book Consultation
                </button>
              </form>
            ) : (
              <div className="text-white space-y-4">
                <h2 className="text-2xl font-medium">
                  Thank you
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We’ve received your details.  
                  Our team will reach out shortly to schedule your consultation
                  date and time.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
