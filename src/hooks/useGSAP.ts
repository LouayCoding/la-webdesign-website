'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGSAPOptions {
  scope?: React.RefObject<HTMLElement>;
  dependencies?: any[];
  revertOnUpdate?: boolean;
}

export function useGSAP(
  callback: (context: gsap.Context) => void,
  options: UseGSAPOptions = {}
) {
  const { scope, dependencies = [], revertOnUpdate = true } = options;
  const contextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Create GSAP context
    const context = gsap.context(() => {
      if (contextRef.current) {
        callback(contextRef.current);
      }
    }, scope?.current);

    contextRef.current = context;

    // Cleanup function
    return () => {
      if (revertOnUpdate) {
        context.revert();
      }
    };
  }, dependencies);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      contextRef.current?.revert();
    };
  }, []);

  return contextRef.current;
}

// Hook for scroll-triggered animations
export function useScrollAnimation(
  selector: string,
  animation: gsap.TweenVars,
  trigger?: ScrollTrigger.Vars
) {
  useGSAP(() => {
    if (typeof window === 'undefined') return;

    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    gsap.fromTo(elements, 
      {
        opacity: 0,
        y: 50,
        ...animation.from
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        ...animation,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          ...trigger
        }
      }
    );
  });
}

// Hook for stagger animations
export function useStaggerAnimation(
  selector: string,
  animation: gsap.TweenVars = {},
  staggerAmount: number = 0.1
) {
  useGSAP(() => {
    if (typeof window === 'undefined') return;

    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    gsap.fromTo(elements,
      {
        opacity: 0,
        y: 40,
        ...animation.from
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: staggerAmount,
        ...animation,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
}

// Hook for hover animations
export function useHoverAnimation(selector: string) {
  useGSAP(() => {
    if (typeof window === 'undefined') return;

    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          scale: 1.05,
          y: -5,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  });
}

// Hook for page transitions
export function usePageTransition() {
  useGSAP(() => {
    if (typeof window === 'undefined') return;

    // Animate page entrance
    gsap.fromTo('main', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );
  });
}
