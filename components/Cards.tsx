import React, { useEffect } from 'react';

interface item {
  id: number;
  subject: string;
}

let items: item[] = [
  {
    id: 1,
    subject: 'Commissioning Management',
  },
  {
    id: 2,
    subject: 'Shutdown & Start-up Management',
  },
];

function Cards(): React.JSX.Element {
  // useeffect and logic for creating new dots in random places
  useEffect(() => {
    const pulses = document.querySelectorAll('#pulses');
    pulses.forEach((pulse) => {
      let t = Math.floor(Math.random() * 100) / 0.5;
      pulse.setAttribute(
        'style',
        `top: ${Math.random() * 250}px; left:${Math.floor(
          Math.random() * 500,
        )}px; animation-delay: ${100 * t}ms;`,
      );
    });
  }, []);

  return (
    <div className="mx-auto my-10 flex h-[20rem] w-3/4 animate-fadeIn_0.3sec flex-col md:flex-row">
      {/* title section */}
      <div className="flex h-full w-full flex-1 flex-col items-center justify-center bg-[#21A0A2] capitalize transition duration-500 hover:saturate-200 hover:filter md:text-3xl">
        commissioning
        <span className="m-5 text-sm">
          I have extensive brownfield & greenfield commissioning experiance
          ranging from O&G to power plants.
        </span>
      </div>
      {/* data section */}
      <div className="relative h-full w-full flex-1 overflow-hidden bg-cardsBG_1 bg-cover bg-center p-2 text-left text-sm capitalize text-white transition duration-500 hover:saturate-200 hover:filter md:text-base">
        {items.map(({ id, subject }) => (
          <span className="text-white" key={id}>
            {id}
            <span className="animate-pulse">.</span> {subject}.
            <br />
          </span>
        ))}
        {/* pulses stars objects */}
        {[...Array(25)].map((_, i) => (
          <div
            id="pulses"
            key={i}
            className={`absolute h-1 w-1 animate-stars rounded-full bg-white/70`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
