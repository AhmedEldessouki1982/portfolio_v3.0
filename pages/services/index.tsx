import TitleChanger from '@/components/TitleChanger';
import Cards from '@/components/Cards';

const Services = () => {
  return (
    <div className="h-full w-full bg-primary/60 text-center text-white">
      <span className="mt-3 inline-block text-xl md:text-3xl">
        Expert in Industrial Automation
      </span>
      <TitleChanger />
      <section>
        <Cards />
      </section>
    </div>
  );
};

export default Services;
//icss.engineer/
