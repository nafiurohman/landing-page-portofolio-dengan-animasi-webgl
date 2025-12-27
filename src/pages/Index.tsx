import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NAFIUROHMAN | Creative Developer & Designer</title>
        <meta name="description" content="Portfolio of Nafiurohman - Creative Developer & Designer crafting digital experiences at the intersection of design, technology, and art." />
      </Helmet>
      <main className="scroll-container">
        <Hero />
      </main>
    </>
  );
};

export default Index;
