import { useState } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { FeatureIllustration } from './FeatureIllustration';
import { FeatureIcon } from './FeatureIllustrations/FeatureIcon';
interface ManageSectionProps {
  show: boolean;
}
export const ManageSection = ({
  show
}: ManageSectionProps) => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const features = [{
    title: "iOS Apps",
    description: "Native iOS development using Swift and SwiftUI for optimal performance and user experience."
  }, {
    title: "Android Apps",
    description: "Native Android development with Kotlin and modern Android frameworks."
  }, {
    title: "Cross-Platform",
    description: "React Native and Flutter apps that work seamlessly across both platforms."
  }, {
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces designed for maximum user engagement."
  }, {
    title: "Backend Integration",
    description: "Robust backend services, APIs, and database integration for your mobile apps."
  }, {
    title: "E-commerce",
    description: "Full-featured shopping apps with payment gateway integration and inventory management."
  }, {
    title: "Social Apps",
    description: "Social networking features, real-time chat, and community building functionality."
  }, {
    title: "Enterprise",
    description: "Custom enterprise mobile solutions for business process automation and productivity."
  }, {
    title: "Gaming",
    description: "Mobile game development with engaging gameplay and monetization strategies."
  }, {
    title: "AR/VR",
    description: "Augmented and virtual reality mobile experiences using latest technologies."
  }, {
    title: "IoT Apps",
    description: "Internet of Things integration for smart device control and monitoring."
  }, {
    title: "Maintenance",
    description: "Ongoing app maintenance, updates, and performance optimization services."
  }];
  const handleFeatureClick = (index: number) => {
    setActiveFeature(index === activeFeature ? null : index);
  };
  return <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <h2 className="text-4xl font-bold text-blue-600 md:text-8xl">Develop</h2>
          <p className="text-foreground max-w-3xl text-xl md:text-2xl mt-2">Comprehensive mobile app development services for every platform.</p>
        </div>

        <FeatureIllustration featureIndex={activeFeature} className="transition-all duration-500" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => <div key={index} className={`flex flex-col items-center text-center transition-all duration-300 ${activeFeature === index ? 'scale-105' : 'hover:scale-102'} cursor-pointer`} onClick={() => handleFeatureClick(index)}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${activeFeature === index ? 'bg-primary/20 ring-2 ring-primary/50' : 'bg-primary/10'}`}>
                <FeatureIcon index={index} size={32} />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </AnimatedTransition>;
};