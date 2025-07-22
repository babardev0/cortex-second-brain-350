import { Activity, TrendingUp, Layout, Maximize } from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
interface DeploySectionProps {
  show: boolean;
}
export const DeploySection = ({
  show
}: DeploySectionProps) => {
  const deployFeatures = [{
    icon: <Activity size={32} className="text-primary" />,
    title: "App Store",
    description: "Complete App Store submission process including compliance and optimization."
  }, {
    icon: <TrendingUp size={32} className="text-primary" />,
    title: "Analytics",
    description: "Comprehensive app analytics and user behavior tracking integration."
  }, {
    icon: <Layout size={32} className="text-primary" />,
    title: "Testing",
    description: "Thorough QA testing across all devices and operating system versions."
  }, {
    icon: <Maximize size={32} className="text-primary" />,
    title: "Support",
    description: "Post-launch support, updates, and performance optimization services."
  }];
  return <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <h2 className="text-4xl font-bold text-blue-600 md:text-8xl">Deploy</h2>
          <p className="text-foreground max-w-3xl text-xl md:text-2xl mt-2">
            Launch your mobile app on App Store and Google Play with confidence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {deployFeatures.map((feature, index) => <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </AnimatedTransition>;
};