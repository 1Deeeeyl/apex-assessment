import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Palette, Share2Icon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedBeamDemo } from '@/components/animatedBeamDemo/AnimatedBeamDemo';
import { AnimatedListDemo } from '@/components/animatedListDemo/AnimatedListDemo';
import { BentoCard, BentoGrid } from '@/components/magicui/bento/BentoGridrid';
import { Marquee } from '@/components/magicui/marquee/Marquee';
import Container from '@/components/container/Container'

const seoInsights = [
  {
    name: 'Keyword Optimization',
    body: 'Choosing the right keywords ensures your content ranks for what people actually search.',
  },
  {
    name: 'Technical SEO',
    body: 'Improving site speed, crawlability, and structure helps search engines index your site efficiently.',
  },
  {
    name: 'Backlink Strategy',
    body: 'High-quality backlinks from reputable sources signal trust and authority to search engines.',
  },
  {
    name: 'On-Page SEO',
    body: 'Optimizing meta tags, headers, and content helps both users and search engines understand your pages.',
  },
  {
    name: 'Content Relevance',
    body: 'Fresh, useful, and well-structured content keeps users engaged and improves rankings.',
  },
  {
    name: 'Mobile Optimization',
    body: 'Search engines prioritize mobile-friendly websites in search results.',
  },
];

const features = [
  {
    Icon: MagnifyingGlassIcon,
    name: 'SEO & Performance',
    description:
      'Optimized code, fast loading, and search-friendly practices to boost visibility.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {seoInsights.map((f, key) => (
          <figure
            key={key}
            className={cn(
              'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
              'border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]',
              'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none rounded'
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Palette,
    name: 'UI/UX Design Systems',
    description:
      'Build scalable, consistent, and accessible design systems that empower dev and design teams.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: 'Integrations',
    description:
      'We utilize all tools available to provide you with the best experience.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-3',
    background: (
      <AnimatedBeamDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
];

export default function BentoDemo() {
  return (
    <Container>
      <section className="py-12 md:py-20 px-4 lg:px-0" id="services">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-orange-400">Services</span>
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            We deliver cutting-edge solutions that transform businesses,
            streamline operations, and drive sustainable growth in the digital
            landscape.
          </p>
        </div>
        <BentoGrid>
          {features.map((feature, key) => (
            <BentoCard key={key} {...feature} />
          ))}
        </BentoGrid>
      </section>
    </Container>
  );
}
