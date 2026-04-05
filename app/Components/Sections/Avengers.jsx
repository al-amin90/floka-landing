import Image from 'next/image';
import React, { useState } from 'react';

// Social Icons
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-neutral-500">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-neutral-500">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-neutral-500">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const SocialButton = () => (
  <div className="flex gap-3">
    {[FacebookIcon, TwitterIcon, LinkedinIcon].map((Icon, i) => (
      <button
        key={i}
        className="w-8 h-8 rounded-[30%] bg-white flex items-center justify-center  transition-colors duration-200"
      >
        <Icon />    
      </button>
    ))}
  </div>
);

const members = [
  { name: 'Nicolas K. Ellington', role: 'Founder',     img: '/img/people/member1.png' },
  { name: 'Carlos E. Ashcroft',   role: 'CEO',         img: '/img/people/member2.png' },
  { name: 'Leonardo F. Ashton',   role: 'UX Designer', img: '/img/people/member3.png' },
  { name: 'Ricardo P. Winslow',   role: 'UI Designer', img: '/img/people/member4.png' },
];

const MemberCard = ({ name, role, img }) => (
  <div className="bg-[#f7f7f7] rounded-2xl overflow-hidden flex flex-col p-2.5 ">
    {/* Card image area — bg #d2b691 for backgroundless PNGs */}
    <div className="w-full h-[220px] pt-[10px] bg-[#d2b691] rounded-2xl flex items-end justify-center overflow-hidden relative">
      {img ? (
        <img
          src={img}
          alt={name}
          className="w-full h-full object-contain object-bottom"
        />
      ) : (
        // Placeholder silhouette — replace with your PNG
        <div className="w-full h-full flex items-center justify-center text-[#b8956a] text-sm tracking-wide" >
          [ Drop PNG here ]
        </div>
      )}
    </div>

    {/* Card body */}
    <div className="px-5 pt-5 pb-4">
      <p className="text-xl text-neutral-900 leading-tight mb-0.5" >
        {name}
      </p>
      <p className="text-sm tracking-widest uppercase text-neutral-400 mb-3.5" >
        {role}
      </p>
      <div className='mt-6!'>
        <SocialButton />
      </div>
      
    </div>
  </div>
);

const Avengers = () => {
  const [activeTab, setActiveTab] = useState('design');

  return (
    <section className="w-full bg-white rounded-2xl py-16 px-6">
      <div className="max-w-full justify-between flex items-start">

        {/* ── LEFT ── */}
        <div className=" ">
          <p
            className="text-sm tracking-[3px] uppercase text-black mb-4"
            
          >
            Our Avengers
          </p>

          <h2
            className="text-[46px]  leading-[1.15] whitespace-nowrap text-neutral-900 mb-7"
            
          >
            Meet with our team <br />member
          </h2>

          {/* Tabs */}
          <div className="flex gap-7 mb-6">
            {[{ id: 'design', label: 'Design Team' }, { id: 'dev', label: 'Development Team' }].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm tracking-[1.5px] uppercase pb-1 transition-colors font-semibold ${
                  activeTab === tab.id
                    ? 'text-neutral-900 border-b-1 border-neutral-900'
                    : 'text-neutral-400'
                }`}
                
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p
            className="text-lg leading-[1.75] text-[#666666] mb-8 max-w-[340px] whitespace-nowrap "
            
          >
            What began over coffee-fueled brainstorming sessions has <br />grown into a
            thriving digital agency dedicated to helping brands <br />stand out.
          </p>

          {/* Join button */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-neutral-900 rounded-full flex items-center justify-center text-white text-2xl leading-none cursor-pointer select-none">
              +
            </div>
            <span
              className="text-sm tracking-[2px] uppercase font-bold text-neutral-900"
              
            >
              Join With Us
            </span>
          </div>

          {/* Team photo */}
          <div className="mt-10 rounded-2xl overflow-hidden w-full h-[200px] bg-neutral-200">
            {/* Replace src with your actual team photo */}
            <Image src={'/img/people/Team.jpg'} width={1000} height={200} alt="Team" className="w-full h-full object-cover" />
            
          </div>
        </div>

        {/* ── RIGHT: 2×2 grid ── */}
        <div className="w-[50%] grid grid-cols-2 gap-5">
          {members.map((m, i) => (
            <MemberCard key={i} {...m} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Avengers;