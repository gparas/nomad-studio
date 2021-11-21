import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
  let lineRef = useRef([]);

  useEffect(() => {
    gsap.to(lineRef.current, {
      delay: 0.8,
      ease: 'power3.out',
      y: 10,
      stagger: {
        amount: 0.2,
      },
    });
  }, [lineRef]);

  return (
    <section className="h-screen flex items-center justify-center">
      <h2>
        <div className="h-20 flex justify-end overflow-hidden">
          <div
            ref={(el) => (lineRef.current[0] = el)}
            className="text-7xl font-bold text-outline transform translate-y-24"
          >
            ELEGANT
          </div>
        </div>
        <div className="h-20 flex justify-center overflow-hidden">
          <span
            ref={(el) => (lineRef.current[1] = el)}
            className="text-7xl font-serif transform translate-y-24"
          >
            DIFFERENTIATING
          </span>
        </div>
        <div className="h-20 flex justify-end overflow-hidden">
          <span
            ref={(el) => (lineRef.current[2] = el)}
            className="text-7xl font-bold transform translate-y-24"
          >
            DESIGN
          </span>
        </div>
      </h2>
    </section>
  );
};

export default Contact;
