import Container from '@/components/container/Container';
import { ShineBorder } from '@/components/magicui/border/ShineBorder';

export default function ContactUs() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <Container>
        <section id="contactUs" className="py-20 relative z-10 px-4 xl:px-0">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-orange-400">Transform</span> Your
              Business?
            </h2>
            <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
              Our team of experts is ready to help you navigate your digital
              transformation journey. Reach out today to schedule a
              consultation.
            </p>
          </div>

          <div className="bg-zinc-950 relative p-8 md:p-10 rounded-2xl mb-12">
            <ShineBorder shineColor={['#FF6B00', '#FFA64D', '#FFBE7B']} />

            <div className="flex flex-col md:flex-row gap-10">
              {/* Contact Form */}
              <div className="space-y-6 w-full">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Send Us a Message
                </h3>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-zinc-300 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-zinc-900/70 border border-zinc-800 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-300 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-zinc-900/70 border border-zinc-800 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-zinc-300 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      placeholder="Tell us about your project..."
                      className="border bg-zinc-900/70  border-zinc-800 rounded max-h-40 p-2 resize-none overflow-y-auto text-sm w-full px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      rows={5}
                    />
                  </div>
                 

                  <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-medium py-3 px-6 rounded transition-colors duration-300 shadow-lg shadow-orange-600/20">
                    Send Message
                  </button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 w-fit">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded bg-orange-500/20 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-400"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Phone</h4>
                      <p className="text-zinc-300">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded bg-orange-500/20 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-400"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <p className="text-zinc-300">contact@yourcompany.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded bg-orange-500/20 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-400"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        Office Location
                      </h4>
                      <p className="text-zinc-300">
                        123 Tech Avenue, Suite 100
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-white font-medium mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded bg-zinc-800 hover:bg-orange-500/30 transition-colors duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-orange-400"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded bg-zinc-800 hover:bg-orange-500/30 transition-colors duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-orange-400"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded bg-zinc-800 hover:bg-orange-500/30 transition-colors duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-orange-400"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded bg-zinc-800 hover:bg-orange-500/30 transition-colors duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-orange-400"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <p className="text-zinc-300 mb-6">
              Prefer to talk directly? Schedule a quick call with our team.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 text-white hover:border-orange-500/50 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-orange-400 mr-2"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <path d="M10 17l5-5-5-5" />
                <path d="M15 12H3" />
              </svg>
              Schedule a Call
            </a>
          </div>
        </section>
      </Container>
    </div>
  );
}
