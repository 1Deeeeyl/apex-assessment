import Container from '@/components/container/Container';
import { Globe } from '@/components/magicui/globe/Globe';

import sponsor1 from '@/assets/logo/sponsor1.png';
import sponsor2 from '@/assets/logo/sponsor2.png';
import sponsor3 from '@/assets/logo/sponsor3.png';
import sponsor4 from '@/assets/logo/sponsor4.png';
import sponsor5 from '@/assets/logo/sponsor5.png';
import { Marquee } from '@/components/magicui/marquee/Marquee';

export default function AboutUs() {
  const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5];
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-60 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-60 right-40 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      <Container>
        {/* About Us */}
        <section id="aboutUs" className="px-4 xl:px-0">
          <section className="py-12 md:py-20  relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Driving Digital{' '}
                <span className="text-orange-400">Transformation</span>
              </h2>
              <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
                We are a team of passionate engineers, designers, and
                strategists dedicated to building cutting-edge digital solutions
                that transform businesses and create impactful experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="p-6 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl border border-zinc-800 shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500/20 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-400"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Our Mission
                </h3>
                <p className="text-zinc-300">
                  To empower businesses with innovative technology solutions
                  that drive growth, efficiency, and competitive advantage.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl border border-zinc-800 shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500/20 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-400"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m12 16 4-4-4-4M8 12h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Our Vision
                </h3>
                <p className="text-zinc-300">
                  To be the leading technology partner for forward-thinking
                  organizations shaping the future of their industries.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl border border-zinc-800 shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500/20 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-400"
                  >
                    <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13Z" />
                    <circle cx="12" cy="8" r="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Our Values
                </h3>
                <p className="text-zinc-300">
                  Excellence, innovation, integrity, and collaboration form the
                  foundation of everything we do and how we work.
                </p>
              </div>
            </div>
          </section>

          {/* Global Reach - Clients Section */}
          <section className="py-16 md:py-28 px-4 xl:px-0 relative z-10 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-between">
              <div className="w-full md:w-1/2 mb-12 md:mb-0">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    We Have Clients{' '}
                    <span className="text-orange-400">Worldwide</span>
                  </h2>

                  <p className="text-lg text-zinc-300 leading-relaxed max-w-xl">
                    Our global network spans across continents, serving
                    businesses and organizations around the world. From New York
                    to Tokyo, we deliver exceptional solutions to clients in
                    every corner of the globe.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                    <div className="px-6 py-5 bg-gradient-to-br from-orange-500/20 to-orange-500/5 backdrop-blur-sm rounded-xl border border-orange-500/10 shadow-lg shadow-orange-900/5">
                      <p className="font-bold text-3xl text-white">100+</p>
                      <p className="text-zinc-300 mt-1">Countries</p>
                    </div>
                    <div className="px-6 py-5 bg-gradient-to-br from-orange-500/20 to-orange-500/5 backdrop-blur-sm rounded-xl border border-orange-500/10 shadow-lg shadow-orange-900/5">
                      <p className="font-bold text-3xl text-white">1000+</p>
                      <p className="text-zinc-300 mt-1">Projects Deployed</p>
                    </div>
                    <div className="px-6 py-5 bg-gradient-to-br from-orange-500/20 to-orange-500/5 backdrop-blur-sm rounded-xl border border-orange-500/10 shadow-lg shadow-orange-900/5">
                      <p className="font-bold text-3xl text-white">500+</p>
                      <p className="text-zinc-300 mt-1">Major Cities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl transform scale-75" />
                  <div className="aspect-square relative">
                    <Globe className="!absolute !inset-0" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 relative z-10">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
                Our Partners
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Companies We Have<br/>
                <span className="text-orange-400">Worked With</span>
              </h2>
            </div>

            <div className="relative w-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-zinc-900 to-transparent z-10"></div>

              <Marquee pauseOnHover className="[--duration:20s]">
                {sponsors.map((sponsor, key) => (
                  <img
                    key={key}
                    src={sponsor}
                    alt={`Sponsor ${key + 1}`}
                    className="w-auto h-15 filter grayscale brightness-200 mr-25"
                  />
                ))}
              </Marquee>

              <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-zinc-900 to-transparent z-10"></div>
            </div>
          </section>
        </section>
      </Container>
    </div>
  );
}
