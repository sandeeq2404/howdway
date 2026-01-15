import PageTransition from '../components/PageTransition';

import kumaravelImg from '../assets/team/kumaravel.webp';
import thamizhImg from '../assets/team/thamizh.webp';
import joeImg from '../assets/team/joe.webp';
import sandeepImg from '../assets/team/sandeep.jpg';

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">

          {/* Story */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed tracking-tight">
            Howdway is built around a simple belief — technology should quietly
            strengthen businesses, not complicate them. We thrive in developing
            AI-driven products that help organizations scale with clarity,
            reduce operational friction, and make confident decisions. Beyond
            building systems, we continue to explore and launch products that
            empower businesses in the long run. Through seminars and webinars,
            we actively share practical AI knowledge, helping teams understand,
            adopt, and grow with emerging technologies.
          </p>

          {/* Team Box */}
          <div className="mt-20 flex justify-center">
            <div
              className="
                w-full max-w-4xl
                bg-white/5
                border border-white/10
                rounded-2xl
                px-8 py-10
              "
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                {/* Member */}
                <TeamMember
                  image={kumaravelImg}
                  name="Kumaravel N"
                  role="CEO"
                />

                <TeamMember
                  image={thamizhImg}
                  name="Thamizhselvan M"
                  role="CTO"
                />

                <TeamMember
                  image={joeImg}
                  name="Joe Blessyn M"
                  role="People & Operations Head"
                />

                <TeamMember
                  image={sandeepImg}
                  name="Sandeep"
                  role="Product & Growth"
                />

              </div>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}

/* ----------------------- */
/* Team Member Component   */
/* ----------------------- */

function TeamMember({
  image,
  name,
  role,
}: {
  image: string;
  name: string;
  role: string;
}) {
  return (
    <div className="text-center">
      <div className="relative w-24 h-24 mx-auto mb-4">
        <img
          src={image}
          alt={name}
          className="
            w-full h-full
            object-cover
            rounded-full
            grayscale
            brightness-75
          "
        />
        <div className="absolute inset-0 rounded-full bg-black/30" />
      </div>

      <h3 className="text-sm font-medium text-white">
        {name}
      </h3>
      <p className="text-xs text-gray-400 mt-1">
        {role}
      </p>
    </div>
  );
}
