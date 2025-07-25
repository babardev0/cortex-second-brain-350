import { Button } from '@/components/ui/button';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
interface DesignSectionProps {
  show: boolean;
}
export const DesignSection = ({
  show
}: DesignSectionProps) => {
  const templateCategories = [{
    title: "E-commerce Apps",
    templates: ["Shopping Cart", "Product Catalog", "Payment Gateway", "Order Tracking", "User Reviews", "Wishlist", "Search Filters", "Checkout Flow"]
  }, {
    title: "Social Media Apps",
    templates: ["User Profiles", "News Feed", "Chat Interface", "Story Feature", "Live Streaming", "Photo Sharing", "Social Login", "Notification System"]
  }, {
    title: "Business Apps",
    templates: ["Dashboard Analytics", "CRM Interface", "Inventory Management", "Employee Portal", "Task Management", "Time Tracking", "Report Generation", "Meeting Scheduler"]
  }, {
    title: "Entertainment Apps",
    templates: ["Video Player", "Music Streaming", "Game Interface", "AR Filters", "Live Chat", "Content Feed", "Subscription Plans", "Media Gallery"]
  }];
  const [currentTemplates, setCurrentTemplates] = useState<string[]>([]);
  const [category, setCategory] = useState(0);
  const [animating, setAnimating] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCategory(prev => (prev + 1) % templateCategories.length);
        setCurrentTemplates(templateCategories[(category + 1) % templateCategories.length].templates.sort(() => Math.random() - 0.5).slice(0, 8));
        setAnimating(false);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, [category]);
  useEffect(() => {
    setCurrentTemplates(templateCategories[0].templates.sort(() => Math.random() - 0.5).slice(0, 8));
  }, []);
  const changeCategory = (index: number) => {
    if (category === index || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCategory(index);
      setCurrentTemplates(templateCategories[index].templates.sort(() => Math.random() - 0.5).slice(0, 8));
      setAnimating(false);
    }, 500);
  };
  return <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <h2 className="text-4xl font-bold text-blue-600 md:text-8xl">Design</h2>
          <p className="text-foreground max-w-3xl text-xl md:text-2xl mt-2">Professional UI/UX design services for exceptional mobile experiences.</p>
        </div>

        <div className="flex justify-center space-x-2 mb-12">
          {templateCategories.map((cat, idx) => <button key={idx} onClick={() => changeCategory(idx)} className={`w-3 h-3 rounded-full transition-all duration-300 ${category === idx ? 'bg-primary scale-125' : 'bg-muted hover:bg-primary/50'}`} aria-label={cat.title} />)}
        </div>

        <AnimatedTransition show={!animating} animation="fade" duration={500} className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary">
            {templateCategories[category].title}
          </h3>
        </AnimatedTransition>

        <div className="relative">
          <AnimatedTransition show={!animating} animation="fade" duration={500}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {currentTemplates.map((template, idx) => <Card key={idx} className="group overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer">
                  <div className="relative h-40 bg-gradient-to-br from-primary/5 to-primary/20 p-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></div>
                    <span className="font-medium text-lg text-center z-10 group-hover:scale-105 transition-transform duration-300">
                      {template}
                    </span>
                  </div>
                </Card>)}
            </div>
          </AnimatedTransition>
        </div>

        <div className="flex justify-center mt-10">
          
        </div>
      </div>
    </AnimatedTransition>;
};