import React from 'react';
function TitleChanger(): React.JSX.Element {
  return (
    <section className="flex w-screen animate-fadeIn_0.5sec flex-wrap justify-center p-5 pt-5 md:gap-1 md:text-xl">
      <div className="mr-1 inline-block md:w-[181px]">Making industries</div>
      <div className="flex h-6 w-32 animate-slideAnimation flex-col overflow-hidden border-r-2 border-yellow">
        <span className=" mt-[-1.7rem] animate-displacer">safer</span>
        <span className="mt-3 md:mt-2">better</span>
      </div>
      <div>through innovation and engineering excellence</div>
    </section>
  );
}
export default TitleChanger;
