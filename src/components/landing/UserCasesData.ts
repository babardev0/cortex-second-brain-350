
import { UserCasesData, Book } from './UseCasesTypes';

export const userCasesData: UserCasesData = {
  Marketers: {
    title: 'Marketing & E-commerce',
    subtitle: 'apps that convert.',
    description: "Build powerful marketing automation apps, customer engagement platforms, and e-commerce solutions that drive sales and grow your business.",
    quote: "Convert visitors into customers.",
    background: 'bg-[#ff4d3c]',
    textColor: 'text-white',
    ctaText: 'GET QUOTE'
  },
  Designers: {
    title: 'Beautiful UI/UX',
    subtitle: 'that users love.',
    description: '',
    quote: '',
    background: 'bg-[#d8ede7]',
    textColor: 'text-white',
    ctaText: '',
    showImageGrid: true
  },
  Writers: {
    title: 'Content & Media',
    subtitle: 'publishing apps.',
    description: '',
    quote: '',
    background: 'bg-[#f7c2d2]',
    textColor: 'text-white',
    ctaText: 'START PROJECT',
    showNotepad: true
  },
  Researchers: {
    title: 'Enterprise & Business',
    subtitle: 'productivity solutions.',
    description: '',
    quote: '',
    background: 'bg-[#e8f4f8]',
    textColor: 'text-white',
    ctaText: '',
    showBrain: true
  },
  Developers: {
    title: 'Custom Development',
    subtitle: 'for any requirement.',
    description: '',
    quote: '',
    background: 'bg-[#1a1f2c]',
    textColor: 'text-white',
    ctaText: '',
    showDevTools: true
  },
  Everyone: {
    title: 'All Types of Apps',
    subtitle: 'we can handle.',
    description: '',
    quote: '',
    background: 'bg-[#e8ecf0]',
    textColor: 'text-white',
    ctaText: '',
    showTags: true
  }
};

export const booksData: Book[] = [{
  title: "The Creative Mind",
  author: "Maria Johnson",
  coverColor: "bg-[#f97316]",
  textColor: "text-white"
}, {
  title: "Design Patterns",
  author: "Alex Thompson",
  coverColor: "bg-[#8b5cf6]",
  textColor: "text-white"
}, {
  title: "The Art of Focus",
  author: "Sarah Williams",
  coverColor: "bg-[#0ea5e9]",
  textColor: "text-white"
}, {
  title: "Digital Minimalism",
  author: "Cal Newport",
  coverColor: "bg-[#d946ef]",
  textColor: "text-white"
}, {
  title: "Atomic Habits",
  author: "James Clear",
  coverColor: "bg-[#f97316]",
  textColor: "text-white"
}];
