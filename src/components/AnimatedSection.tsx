'use client';

import { useEffect, useRef } from 'react';

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

    // Dynamic import GSAP to avoid SSR issues
    const loadGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        const element = sectionRef.current;
        if (!element) return;

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

        // Cleanup function
        return () => {
          tl.kill();
          ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.trigger === element) {
              trigger.kill();
            }
          });
        };
      } catch (error) {
        console.warn('GSAP failed to load:', error);
      }
    };

    loadGSAP();
  }, [animation, delay, duration, stagger, triggerStart, once]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
