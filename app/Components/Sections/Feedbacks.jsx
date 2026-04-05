import React from 'react';

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#F97316">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const Avatar = ({ bg }) => (
  <div
    className="w-11 h-11 rounded-full border-2 border-gray-200 -ml-2.5 flex-shrink-0 overflow-hidden flex items-center justify-center"
    style={{ background: bg }}
  >
    <svg viewBox="0 0 42 42" width="42" height="42" xmlns="http://www.w3.org/2000/svg">
      <circle cx="21" cy="16" r="9" fill="rgba(255,255,255,0.45)" />
      <ellipse cx="21" cy="40" rx="15" ry="11" fill="rgba(255,255,255,0.45)" />
    </svg>
  </div>
);

const NameCard = ({ name, role }) => (
  <div className="bg-white rounded-2xl p-7 border border-gray-200">
    <div className="text-[20px] font-bold text-gray-900 tracking-tight mb-1">{name}</div>
    <div className="text-sm text-gray-400">{role}</div>
  </div>
);

const ReviewCard = ({ quote, company }) => (
  <div className="bg-white rounded-2xl p-7 border border-gray-200 flex flex-col justify-between min-h-[340px]">
    <div>
      <StarRating />
      <p className="text-[20px] leading-relaxed text-gray-900">
        " {quote} "
      </p>
    </div>
    <div className="text-sm tracking-widest text-gray-300 uppercase font-medium mt-8">
      " GREAT DESIGN SOLUTIONS "
    </div>
  </div>
);

const quoteText = `As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.`;

const Feedbacks = () => {
  return (
    <div className=" pt-[70px] min-h-screen ">

      {/* ── Label ── */}
      <div className="text-sm tracking-widest text-black uppercase font-medium mb-9 border-b border-gray-300 pb-2">
        User Feedbacks
      </div>

      {/* ── Hero Heading ── */}
      <div className="max-w-3xl ml-[400px] mb-14 ">
        <h1 className="text-5xl  text-gray-900 leading-tight tracking-tighter">
          Accelerating growth, and unlocking new potential.{' '}
          <span className="inline-flex align-middle relative -top-0.5 pl-2">
            <Avatar bg="#c9a882" />
            <Avatar bg="#7a6352" />
            <Avatar bg="#9e8b7d" />
          </span>
          {' '}Let's build your brand—together.
        </h1>
      </div>

      {/* ── Cards Grid ── */}
      <div className="grid grid-cols-3 gap-3.5 max-w-full items-start">

        {/* Column 1 */}
        <div className="flex flex-col gap-3.5">
          <NameCard name="Nicolas K. Ellington" role="IT Specialist" />
          <ReviewCard quote={quoteText} company="Great Design Solutions" />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-3.5">
          <ReviewCard quote={quoteText} company="Great Design Solutions" />
          <NameCard name="Julian T. Beaumont" role="IT Specialist" />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-3.5">
          <NameCard name="Felipe D. Hawthorne" role="IT Specialist" />
          <ReviewCard quote={quoteText} company="Great Design Solutions" />
        </div>

      </div>
    </div>
  );
};

export default Feedbacks;