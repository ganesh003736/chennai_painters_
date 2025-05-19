import React from 'react';
import { PaintBucket, Clock, CheckCircle, Shield, Award, Users } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import AnimatedElement from '../components/AnimatedElement';
import SectionTitle from '../components/SectionTitle';

const Home: React.FC = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-500 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-accent-500"></div>
        </div>
        
        <Container>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-7/12 z-10">
              <AnimatedElement animation="fade-up">
                <div className="flex items-center space-x-2 mb-6">
                  <PaintBucket className="w-8 h-8 text-accent-500" />
                  <span className="text-lg font-medium text-accent-400">Chennai Painters You Can Trust</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Want a Beautifully Painted Space by Professional Chennai Painters?
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
                  We provide high-quality painting services as the leading painting contractor in Chennai—zero stress, no surprises. Get your dream space painted without the hassle.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-6 h-6 text-accent-500" />
                    <span>No Stress, Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-accent-500" />
                    <span>Professional-Quality Results</span>
                  </div>
                </div>
                
                <Button variant="secondary" size="lg">
                  Get Free Consultation
                </Button>
              </AnimatedElement>
            </div>
            
            <div className="w-full md:w-5/12 mt-12 md:mt-0">
              <AnimatedElement animation="fade-in" delay={300}>
                <div className="relative">
                  <div className="absolute inset-0 bg-terracotta-500 rounded-lg transform rotate-3"></div>
                  <img 
                    src="https://images.pexels.com/photos/8134647/pexels-photo-8134647.jpeg" 
                    alt="Professional painters at work" 
                    className="relative rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
              </AnimatedElement>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <AnimatedElement animation="fade-up">
              <SectionTitle
                title="Is Your Property Suffering from Poor Paint Quality?"
                centered={true}
              />
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Are you tired of dealing with painters who arrive late, leave a mess, and deliver poor-quality results? The stress of hiring unreliable painting contractors in Chennai can turn a simple painting project into a nightmare.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Poor workmanship, hidden costs, and project delays can lead to a frustrating experience. You deserve better.
                </p>
                
                <p className="text-gray-900 font-semibold">
                  Chennai Painter is here to provide a reliable painting solution in Chennai—seamlessly and stress-free. We believe every property deserves to be beautifully painted by professionals without stress or uncertainty.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <Container>
          <AnimatedElement animation="fade-up">
            <SectionTitle
              title="Chennai Painters That Help Homeowners and Businesses Transform Their Spaces with Ease"
              centered={true}
            />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-6">
                  We understand the frustration of dealing with unreliable Chennai painters and poor-quality work. You deserve a seamless painting experience that turns your vision into reality.
                </p>
                
                <p className="text-gray-600">
                  With over 10 years of experience, Chennai Painter is a trusted painting contractor in Chennai dedicated to exceptional quality. Our experienced team ensures that your project is completed on time, within budget, and to your highest satisfaction. We handle everything from start to finish, so you can sit back and enjoy the transformation.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <Clock className="w-10 h-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">10+ Years</h3>
                  <p className="text-gray-600">Of Excellence</p>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <Award className="w-10 h-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">100%</h3>
                  <p className="text-gray-600">Satisfaction</p>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <Users className="w-10 h-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1000+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <Shield className="w-10 h-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
                  <p className="text-gray-600">Guaranteed</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <AnimatedElement animation="fade-up">
            <SectionTitle
              title="Transform Your Space with These Amazing Benefits from Professional Chennai Painters"
              centered={true}
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Quality Results</h3>
                <p className="text-gray-600">
                  Our experienced Chennai painters use high-quality materials to ensure your space looks stunning and the results last. This means your property will stand out and stay beautiful for years.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Stress-Free Process</h3>
                <p className="text-gray-600">
                  From consultation to clean-up, our painting contractors in Chennai handle every detail with care. You can relax, knowing that your painting project will be completed seamlessly, with no hassles or hidden surprises.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transparent Pricing</h3>
                <p className="text-gray-600">
                  We provide upfront, detailed quotes with no hidden fees. You know exactly what to expect, giving you confidence and peace of mind throughout the project.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <Container>
          <AnimatedElement animation="fade-up">
            <SectionTitle
              title="Professional Painting Services by Your Trusted Painting Contractors in Chennai"
              centered={true}
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Exterior Painting",
                  description: "Our exterior painting service will protect your property from the elements while adding curb appeal. We use high-quality, weather-resistant paints to ensure your building looks fresh and beautiful for years to come."
                },
                {
                  title: "Interior Painting",
                  description: "Transform your indoor spaces with our expert interior painting service. We use premium paints and take care of every detail to give your walls a smooth and even finish."
                },
                {
                  title: "Texture Painting",
                  description: "Looking to add a unique touch to your walls? Our texture painting service offers a wide range of finishes and textures to give your space character and charm."
                },
                {
                  title: "Wood Painting",
                  description: "Whether it's wooden doors, windows, or furniture, our wood painting service ensures your wood surfaces get the care they need."
                },
                {
                  title: "Metal Painting",
                  description: "Our metal painting service is designed to protect and beautify your metal surfaces. We apply high-quality paint that prevents rust and adds a polished look to gates, grills, and other metal features."
                },
                {
                  title: "Waterproofing Painting",
                  description: "Protect your property from water damage with our waterproofing painting service. We use specialized products to create a protective barrier on your walls, preventing leaks and dampness."
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <AnimatedElement animation="fade-up">
            <SectionTitle
              title="Easy as 1-2-3: Transform Your Space with Our Chennai Painters Process"
              centered={true}
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Book a Consultation",
                  description: "Contact us to schedule a consultation with your trusted Chennai painter, where we'll discuss your project needs and goals.",
                  benefit: "Get clarity on your vision and how our painting contractors in Chennai can bring it to life."
                },
                {
                  step: 2,
                  title: "Get a Personalized Quote",
                  description: "We provide a detailed, transparent quote based on your requirements.",
                  benefit: "Know exactly what to expect, with no surprises."
                },
                {
                  step: 3,
                  title: "Enjoy the Transformation",
                  description: "Our expert painters handle every detail from start to finish.",
                  benefit: "Sit back and enjoy a beautifully painted space without stress."
                }
              ].map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <p className="text-primary-600 font-medium">Benefit: {step.benefit}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <Container>
          <AnimatedElement animation="fade-up">
            <SectionTitle
              title="Quality Features of Chennai Painting Contractors You Can Trust"
              centered={true}
            />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">High-Quality Materials</h3>
                <p className="text-gray-600">
                  You get a stunning finish that lasts for years means your space will look beautiful, and you won't have to worry about repainting anytime soon.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Experienced Team</h3>
                <p className="text-gray-600">
                  Professional results, delivered efficiently means your project is handled by skilled Chennai painters, giving you peace of mind and confidence in the outcome.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </Container>
      </section>
    </main>
  );
};

export default Home;