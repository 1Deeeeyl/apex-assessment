'use client';

import { cn } from '@/lib/utils';
import { AnimatedList } from '@/components/magicui/animatedList/AnimatedList';

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let updates = [
  {
    name: 'New Component Added',
    description: 'Accordion component added to Design System',

    icon: '📦',
    color: '#6366F1', // Indigo
  },
  {
    name: 'Design Tokens Updated',
    description: 'Spacing and typography tokens refined',

    icon: '🎨',
    color: '#10B981', // Emerald
  },
  {
    name: 'Prototype Linked',
    description: 'New mobile flow added to Figma prototype',

    icon: '🔗',
    color: '#F59E0B', // Amber
  },
  {
    name: 'Accessibility Improved',
    description: 'Contrast ratios updated for better readability',

    icon: '♿',
    color: '#EF4444', // Red
  },
];

updates = Array.from({ length: 10 }, () => updates).flat();

const Notification = ({ name, description, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        'relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4',
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        // light styles

        // dark styles
        'transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
          </figcaption>
          <p className="text-sm font-normal text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-[500px] w-full flex-col overflow-hidden p-2',
        className
      )}
    >
      <AnimatedList>
        {updates.map((item, key) => (
          <Notification {...item} key={key} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
