import React from 'react';
import { Brush, Home, Palette, Book as Wood, Shield, Droplets } from 'lucide-react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

type ServiceProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedElement animation="fade-up" delay={delay} className="w-full md:w-1/2 lg:w-1/3 p-4">
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

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <AnimatedElement animation="fade-up">
          <SectionTitle
            title="Professional Painting Services by Your Trusted Painting Contractors in Chennai"
            centered={true}
          />
        </AnimatedElement>
        
        <div className="flex flex-wrap -mx-4">
          <ServiceCard
            icon={<Home className="w-8 h-8 text-primary-600" />}
            title="Exterior Painting"
            description="Our exterior painting service will protect your property from the elements while adding curb appeal. We use high-quality, weather-resistant paints to ensure your building looks fresh and beautiful for years to come."
            delay={100}
          />
          
          <ServiceCard
            icon={<Brush className="w-8 h-8 text-primary-600" />}
            title="Interior Painting"
            description="Transform your indoor spaces with our expert interior painting service. We use premium paints and take care of every detail to give your walls a smooth and even finish."
            delay={200}
          />
          
          <ServiceCard
            icon={<Palette className="w-8 h-8 text-primary-600" />}
            title="Texture Painting"
            description="Looking to add a unique touch to your walls? Our texture painting service offers a wide range of finishes and textures to give your space character and charm."
            delay={300}
          />
          
          <ServiceCard
            icon={<Wood className="w-8 h-8 text-primary-600" />}
            title="Wood Painting"
            description="Whether it's wooden doors, windows, or furniture, our wood painting service ensures your wood surfaces get the care they need, providing a durable and elegant finish."
            delay={400}
          />
          
          <ServiceCard
            icon={<Shield className="w-8 h-8 text-primary-600" />}
            title="Metal Painting"
            description="Our metal painting service is designed to protect and beautify your metal surfaces. We apply high-quality paint that prevents rust and adds a polished look to gates, grills, and other metal features."
            delay={500}
          />
          
          <ServiceCard
            icon={<Droplets className="w-8 h-8 text-primary-600" />}
            title="Waterproofing Painting"
            description="Protect your property from water damage with our waterproofing painting service. We use specialized products to create a protective barrier on your walls, preventing leaks and dampness."
            delay={600}
          />
        </div>
      </Container>
    </section>
  );
};

export default Services