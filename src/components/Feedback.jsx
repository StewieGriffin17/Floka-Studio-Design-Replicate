import React, { useState } from 'react';
import { motion } from 'framer-motion';

const feedbackData = [
  {
    id: 1,
    name: "Nicolas K. Ellington",
    role: "IT Specialist",
    review: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
    tag: "GREAT DESIGN SOLUTIONS",
    stars: 5,
  },
  {
    id: 2,
    name: "Julian T. Beaumont",
    role: "IT Specialist",
    review: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
    tag: "GREAT DESIGN SOLUTIONS",
    stars: 5,
    reversed: true,
  },
  {
    id: 3,
    name: "Felipe D. Hawthorne",
    role: "IT Specialist",
    review: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
    tag: "GREAT DESIGN SOLUTIONS",
    stars: 5,
  }
];

const WipeCard = ({ children, hovered, style = {} }) => (
  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px', border: '1px solid #e8e8e8', background: '#fff', ...style }}>
    <motion.div
      initial={false}
      animate={{ scaleY: hovered ? 1 : 0 }}
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'absolute', inset: 0, background: '#111',
        transformOrigin: hovered ? 'top' : 'bottom',
        zIndex: 1, pointerEvents: 'none',
      }}
    />
    <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
      {children}
    </div>
  </div>
);

const FeedbackCard = ({ data }) => {
  const [hovered, setHovered] = useState(false);
  const textColor = hovered ? '#fff' : '#1a1a1a';
  const mutedColor = hovered ? '#999' : '#888';

  const NameCard = (
    <WipeCard hovered={hovered} style={{ padding: '20px 22px', marginBottom: '12px' }}>
      <h4 style={{ fontWeight: 600, fontSize: 'clamp(15px, 3.5vw, 16px)', color: textColor, transition: 'color 0.5s' }}>{data.name}</h4>
      <p style={{ color: mutedColor, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '4px', transition: 'color 0.5s' }}>
        {data.role}
      </p>
    </WipeCard>
  );

  const BodyCard = (
    <WipeCard hovered={hovered} style={{ padding: '24px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
        {[...Array(data.stars)].map((_, i) => (
          <span key={i} style={{ color: '#f97316', fontSize: '16px' }}>★</span>
        ))}
      </div>
      <p style={{ fontSize: 'clamp(14px, 3.2vw, 16px)', lineHeight: 1.65, fontWeight: 500, fontStyle: 'italic', flex: 1, color: textColor, transition: 'color 0.5s' }}>
        &quot; {data.review} &quot;
      </p>
      <div style={{ marginTop: '20px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: mutedColor, letterSpacing: '0.15em', transition: 'color 0.5s' }}>
          &quot; {data.tag} &quot;
        </span>
      </div>
    </WipeCard>
  );

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '280px', cursor: 'default' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {data.reversed ? (
        <>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>{BodyCard}</div>
          <div style={{ marginTop: '12px' }}>{NameCard}</div>
        </>
      ) : (
        <>
          {NameCard}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>{BodyCard}</div>
        </>
      )}
    </div>
  );
};

const Feedback = () => {
  return (
    <section className="bg-[#f4f4f2] py-12 px-4 sm:py-16 md:py-24 sm:px-8 md:px-12 lg:px-16 font-sans">
      <div className="max-w-[1300px] mx-auto w-full">

        <div className="border-t border-[#e0e0e0] pt-5 sm:pt-6 mb-12 sm:mb-16 md:mb-[72px]">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8">

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a] shrink-0 pt-1">
              User Feedbacks
            </span>

            <h2 className="max-w-full lg:max-w-[780px] w-full text-[clamp(1.5rem,5vw,3rem)] leading-[1.1] font-medium text-[#1a1a1a] text-left m-0">
              Accelerating growth, and unlocking new potential.{' '}
              <span className="inline-flex items-center align-middle mr-1 sm:mr-2 gap-0 flex-wrap">
                <img src="../../public/avatar1.webp" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white -mr-2 sm:-mr-2.5 z-[3] relative object-cover" alt="" />
                <img src="../../public/avatar2.webp" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white -mr-2 sm:-mr-2.5 z-[2] relative object-cover" alt="" />
                <img src="../../public/avatar3.webp" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white z-[1] relative object-cover" alt="" />
              </span>{' '}
              Let&apos;s build your brand—together.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 items-stretch lg:min-h-[520px]">
          {feedbackData.map((data) => (
            <FeedbackCard key={data.id} data={data} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Feedback;
