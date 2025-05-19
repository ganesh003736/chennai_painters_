import React from 'react';
import { ShieldCheck, Paintbrush, Calculator } from 'lucide-react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

type BenefitProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedElement animation="fade-up" delay={delay} className="w-full md:w-1/3 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform border border-gray-100">
        <div className="p-4 bg-primary-50 rounded-full inline-flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </AnimatedElement>
  );
};

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <AnimatedElement animation="fade-up">
          <SectionTitle
            title="Transform Your Space with These Amazing Benefits from Professional Chennai Painters"
            subtitle="Experience the difference with our professional Chennai painters"
            centered={true}
          />
        </AnimatedElement>
        
        <div className="flex flex-wrap -mx-4">
          <BenefitCard
            icon={<Paintbrush className="w-8 h-8 text-primary-600" />}
            title="Professional Quality Results"
            description="Our experienced Chennai painters use high-quality materials to ensure your space looks stunning and the results last. This means your property will stand out and stay beautiful for years."
            delay={100}
          />
          
          <BenefitCard
            icon={<ShieldCheck className="w-8 h-8 text-primary-600" />}
            title="Stress-Free Process"
            description="From consultation to clean-up, our painting contractors in Chennai handle every detail with care. You can relax, knowing that your painting project will be completed seamlessly, with no hassles or hidden surprises."
            delay={200}
          />
          
          <BenefitCard
            icon={<Calculator className="w-8 h-8 text-primary-600" />}
            title="Transparent Pricing"
            description="We provide upfront, detailed quotes with no hidden fees. You know exactly what to expect, giving you confidence and peace of mind throughout the project."
            delay={300}
          />
        </div>
      </Container>
    </section>
  );
};

export default Benefits