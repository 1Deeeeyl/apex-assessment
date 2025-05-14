import Container from '@/components/container/Container';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-20 -right-32 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl opacity-70" />

      <Container>
        <div
          className="relative z-10 py-12 md:py-20 flex flex-col items-center px-4 xl:px-0"
          id="home"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-5">
            <span className="text-orange-400 text-sm font-medium">
              Innovate. Transform. Succeed.
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center  mb-6 max-w-3xl">
            Building <span className="text-orange-400">cutting-edge</span>{' '}
            digital solutions for tomorrow's challenges
          </h1>

          <p className="text-lg text-gray-300 mb-10 max-w-2xl text-center">
            We help ambitious businesses transform ideas into powerful digital
            products and experiences that drive growth and create lasting
            impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded transition-all duration-300 ease-in-out">
              Get Started
            </button>
            <button className="px-8 py-3 border border-gray-600 hover:border-orange-500 text-white font-medium rounded transition-all duration-300 ease-in-out">
              View Our Work
            </button>
            
          </div>

          <div className="mt-20 flex flex-col sm:flex-row justify-center md:justify-start gap-10">
            <div className="flex items-center justify-center flex-col sm:flex-row gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-700">
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
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-white font-semibold">Innovative Solutions</p>
                <p className="text-gray-400 text-sm">Cutting-edge tech</p>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col sm:flex-row gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-700">
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
              <div className="text-center sm:text-left">
                <p className="text-white font-semibold">Secure & Scalable</p>
                <p className="text-gray-400 text-sm">Enterprise-grade</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
