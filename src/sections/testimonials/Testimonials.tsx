import { cn } from '@/lib/utils';

import { Marquee } from '@/components/magicui/marquee/Marquee';
import Container from '@/components/container/Container';

const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john',
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/james',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden border p-4 rounded',
        // dark styles
        'border-gray-50/[.1]bg-gray-50/[.10] hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
export default function Testimonials() {
  return (
    <Container>
      <section className="py-12 md:py-20 px-4 lg:px-0" id="testimonials">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What They <span className="text-orange-400">Say</span> About Us
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Trusted by teams who value speed, clarity, and cutting-edge tech.
          </p>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-zinc-900 to-transparent z-10"></div>

          <Marquee pauseOnHover className="marquee-animate">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="marquee-animate">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-zinc-900 to-transparent z-10"></div>
        </div>
      </section>
    </Container>
  );
}
