import React from 'react';
import { Calendar, FileEdit, Home } from 'lucide-react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

type ProcessStepProps = {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefit: string;
  delay: number;
};

const ProcessStep: React.FC<ProcessStepProps> = ({ number, icon, title, description, benefit, delay }) => {
  return (
    <AnimatedElement animation="fade-up" delay={delay} className="w-full md:w-1/3 p-4">
      <div className="relative">
        <div className="bg-white rounded-xl shadow-md p-8 h-full border border-gray-100 relative z-10">
          <div className="absolute -top-5 -left-2 bg-terracotta-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
            {number}
          </div>
          <div className="p-4 bg-primary-50 rounded-full inline-flex items-center justify-center mb-6 mt-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-primary-600 font-medium">Benefit: {benefit}</p>
        </div>
        
        {number < 3 && (
          <div className="hidden md:block absolute top-1/2 right-0 w-16 h-2 bg-gray-200 transform translate-x-1/2">
            <div className="absolute top-0 left-0 h-full bg-primary-500 w-0 process-line"></div>
          </div>
        )}
      </div>
    </AnimatedElement>
  );
};

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <AnimatedElement animation="fade-up">
          <SectionTitle
            title="Easy as 1-2-3: Transform Your Space with Our Chennai Painters Process"
            centered={true}
          />
        </AnimatedElement>
        
        <div className="flex flex-wrap -mx-4">
          <ProcessStep
            number={1}
            icon={<Calendar className="w-8 h-8 text-primary-600" />}
            title="Book a Consultation"
            description="Contact us to schedule a consultation with your trusted Chennai painter, where we'll discuss your project needs and goals."
            benefit="Get clarity on your vision and how our painting contractors in Chennai can bring it to life"
            delay={100}
          />
          
          <ProcessStep
            number={2}
            icon={<FileEdit className="w-8 h-8 text-primary-600" />}
            title="Get a Personalized Quote"
            description="We provide a detailed, transparent quote based on your requirements."
            benefit="Know exactly what to expect, with no surprises"
            delay={200}
          />
          
          <ProcessStep
            number={3}
            icon={<Home className="w-8 h-8 text-primary-600" />}
            title="Enjoy the Transformation"
            description="Our expert painters handle every detail from start to finish."
            benefit="Sit back and enjoy a beautifully painted space without stress"
            delay={300}
          />
        </div>
      </Container>
    </section>
  );
};

export default Process