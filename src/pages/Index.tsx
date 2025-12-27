import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NAFIUROHMAN | Pengembang Kreatif & Desainer</title>
        <meta name="description" content="Portfolio Nafiurohman - Pengembang Kreatif & Desainer yang menciptakan pengalaman digital di persimpangan desain, teknologi, dan seni." />
      </Helmet>
      <main className="scroll-container">
        <Hero />
      </main>
    </>
  );
};

export default Index;
