import { cn } from '@/lib/utils';
import { Marquee } from '@/components/magicui/marquee/Marquee';

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

const firstRow = seoInsights.slice(0, seoInsights.length / 2);

const ReviewCard = ({ name, body }: { name: string; body: string }) => {
  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex w-full flex-col items-center justify-center overflow-hidden',
        className
      )}
    >
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review, key) => (
          <ReviewCard key={key} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
