import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation configurations
export const animations = {
  // Page transitions
  pageTransition: {
    duration: 0.6,
    ease: 'power2.inOut'
  },
  
  // Fade in animations
  fadeIn: {
    duration: 0.8,
    ease: 'power2.out',
    y: 30,
    opacity: 0
  },
  
  // Slide up animations
  slideUp: {
    duration: 1,
    ease: 'power3.out',
    y: 60,
    opacity: 0
  },
  
  // Scale animations
  scaleIn: {
    duration: 0.6,
    ease: 'back.out(1.7)',
    scale: 0.8,
    opacity: 0
  },
  
  // Stagger animations
  stagger: {
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.1
  }
};

// Utility functions
export const gsapUtils = {
  // Initialize page animations
  initPageAnimations: () => {
    if (typeof window === 'undefined') return;
    
    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh();
  },
  
  // Fade in animation with scroll trigger
  fadeInOnScroll: (selector: string, options?: gsap.TweenVars) => {
    if (typeof window === 'undefined') return;
    
    gsap.fromTo(selector, 
      {
        opacity: 0,
        y: 30,
        ...options
      },
      {
        opacity: 1,
        y: 0,
        duration: animations.fadeIn.duration,
        ease: animations.fadeIn.ease,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  },
  
  // Slide up animation with scroll trigger
  slideUpOnScroll: (selector: string, options?: gsap.TweenVars) => {
    if (typeof window === 'undefined') return;
    
    gsap.fromTo(selector,
      {
        opacity: 0,
        y: 60,
        ...options
      },
      {
        opacity: 1,
        y: 0,
        duration: animations.slideUp.duration,
        ease: animations.slideUp.ease,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  },
  
  // Stagger animation for multiple elements
  staggerOnScroll: (selector: string, options?: gsap.TweenVars) => {
    if (typeof window === 'undefined') return;
    
    gsap.fromTo(selector,
      {
        opacity: 0,
        y: 40,
        ...options
      },
      {
        opacity: 1,
        y: 0,
        duration: animations.stagger.duration,
        ease: animations.stagger.ease,
        stagger: animations.stagger.stagger,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  },
  
  // Scale in animation
  scaleInOnScroll: (selector: string, options?: gsap.TweenVars) => {
    if (typeof window === 'undefined') return;
    
    gsap.fromTo(selector,
      {
        opacity: 0,
        scale: 0.8,
        ...options
      },
      {
        opacity: 1,
        scale: 1,
        duration: animations.scaleIn.duration,
        ease: animations.scaleIn.ease,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  },
  
  // Hero text animation
  animateHeroText: (titleSelector: string, subtitleSelector: string) => {
    if (typeof window === 'undefined') return;
    
    const tl = gsap.timeline();
    
    tl.fromTo(titleSelector,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo(subtitleSelector,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    );
    
    return tl;
  },
  
  // Button hover animation
  buttonHover: (selector: string) => {
    if (typeof window === 'undefined') return;
    
    const buttons = document.querySelectorAll(selector);
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  },
  
  // Card hover animation
  cardHover: (selector: string) => {
    if (typeof window === 'undefined') return;
    
    const cards = document.querySelectorAll(selector);
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          duration: 0.4,
          ease: 'power2.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: 0.4,
          ease: 'power2.out'
        });
      });
    });
  },
  
  // Cleanup function
  cleanup: () => {
    if (typeof window === 'undefined') return;
    
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf('*');
  }
};

export default gsapUtils;
