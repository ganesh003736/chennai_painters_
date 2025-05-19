import React from 'react';
import { PaintBucket, Users } from 'lucide-react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 mb-12">
      <div className="shrink-0">
        <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <AnimatedElement animation="fade-up">
              <SectionTitle
                title="Quality Features of Chennai Painting Contractors You Can Trust"
                centered={false}
                className="mb-10"
              />
              
              <Feature
                icon={<PaintBucket className="w-6 h-6 text-primary-600" />}
                title="High-Quality Materials"
                description="You get a stunning finish that lasts for years means your space will look beautiful, and you won't have to worry about repainting anytime soon."
              />
              
              <Feature
                icon={<Users className="w-6 h-6 text-primary-600" />}
                title="Experienced Team"
                description="Professional results, delivered efficiently means your project is handled by skilled Chennai painters, giving you peace of mind and confidence in the outcome."
              />
            </AnimatedElement>
          </div>
          
          <div className="w-full lg:w-1/2">
            <AnimatedElement animation="slide-in-right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg" 
                  alt="Professional painting work" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/8092522/pexels-photo-8092522.jpeg" 
                  alt="Quality materials" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features