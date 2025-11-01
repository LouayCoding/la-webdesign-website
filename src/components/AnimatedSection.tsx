'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'stagger';
  delay?: number;
  duration?: number;
  stagger?: number;
  triggerStart?: string;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 0.8,
  stagger = 0.1,
  triggerStart = 'top 85%',
  once = true
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || typeof window === 'undefined') return;

    const element = sectionRef.current;
    const children = element.children;

    // Animation configurations
    const animations = {
      fadeIn: {
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 }
      },
      slideUp: {
        from: { opacity: 0, y: 60 },
        to: { opacity: 1, y: 0 }
      },
      slideLeft: {
        from: { opacity: 0, x: 60 },
        to: { opacity: 1, x: 0 }
      },
      slideRight: {
        from: { opacity: 0, x: -60 },
        to: { opacity: 1, x: 0 }
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 }
      },
      stagger: {
        from: { opacity: 0, y: 40 },
        to: { opacity: 1, y: 0 }
      }
    };

    const config = animations[animation];
    const targets = animation === 'stagger' ? Array.from(children) : element;

    // Set initial state
    gsap.set(targets, config.from);

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: triggerStart,
        toggleActions: once ? 'play none none none' : 'play none none reverse'
      }
    });

    if (animation === 'stagger' && children.length > 0) {
      tl.to(targets, {
        ...config.to,
        duration,
        ease: 'power2.out',
        stagger,
        delay
      });
    } else {
      tl.to(targets, {
        ...config.to,
        duration,
        ease: 'power2.out',
        delay
      });
    }

    // Cleanup
    return () => {
      tl.kill();
    };
  }, [animation, delay, duration, stagger, triggerStart, once]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
