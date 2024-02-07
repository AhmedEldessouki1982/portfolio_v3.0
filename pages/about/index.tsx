import { useState } from 'react';
import { aboutMedata } from '@/data/AboutMeData';
import Counter from '@/components/CountWithRatio';
import { Bulb } from '@/components/Bulb';

function About() {
  let [navIndex, setNavindex] = useState(0);
  return (
    <>
      <Bulb />
      <div className=" h-full w-full bg-primary/60 text-white">
        {/* experiance counter */}
        <div className="p-10 text-center">
          <Counter targetNumber={18} speed={150} />
        </div>
        {/* about selector menu items*/}
        <section className="">
          <nav className="flex animate-fadeIn_0.4sec justify-between px-10 text-sm capitalize md:mx-auto md:w-[50%]">
            {aboutMedata.map((data, i) => (
              <li
                key={i}
                onClick={() => setNavindex(i)}
                className={`relative cursor-pointer list-none pb-1 after:absolute after:bottom-0 after:left-0 after:duration-300 after:content-[''] md:text-lg ${
                  i === navIndex
                    ? 'text-yellow after:w-full after:bg-accent'
                    : 'after:w-[50%] after:bg-white'
                } after:h-[3px] after:rounded-sm`}
              >
                {data.title}
              </li>
            ))}
          </nav>

          {/* sub menu */}
          <div className="mx-auto animate-fadeIn_0.5sec pt-5 text-center capitalize">
            {aboutMedata[navIndex].info.map((subject, subjectIndex) => (
              <div
                key={subjectIndex}
                className="px-10 text-lg text-blue/60 md:mb-5 md:text-xl"
              >
                <div className="mt-2 flex flex-row-reverse justify-center gap-2">
                  {subject.subject}
                  <div className="text-4xl">
                    {subject.Icons && <subject.Icons />}
                  </div>
                </div>

                <span
                  className={
                    navIndex > 0
                      ? 'md:text-md ml-3 text-sm capitalize text-white'
                      : 'hidden'
                  }
                >
                  {navIndex > 0 && subject.timePeriod}
                </span>
                {/* about me branching */}
                <span className="text-sm text-white md:text-lg">
                  {subject.branching &&
                    subject.branching.map((branch, branchOrder) => (
                      <div key={branchOrder}>{branch}</div>
                    ))}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
