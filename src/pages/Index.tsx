
// import { motion } from 'framer-motion';
// import TechCard from '@/components/TechCard';
// import CounterDemo from '@/components/CounterDemo';
// import FormDemo from '@/components/FormDemo';
// import ApiDemo from '@/components/ApiDemo';
// import AnimationDemo from '@/components/AnimationDemo';

// const Index = () => {
//   const technologies = [
//     {
//       title: 'Vite',
//       description: 'Lightning fast build tool and dev server',
//       version: '5.0',
//       icon: '⚡',
//     },
//     {
//       title: 'React',
//       description: 'Modern UI library with hooks and components',
//       version: '18.0',
//       icon: '⚛️',
//     },
//     {
//       title: 'Redux Toolkit',
//       description: 'Efficient Redux for state management',
//       version: 'Latest',
//       icon: '🔄',
//     },
//     {
//       title: 'Formik + Yup',
//       description: 'Form handling with validation',
//       version: 'Latest',
//       icon: '📝',
//     },
//     {
//       title: 'Tailwind CSS',
//       description: 'Utility-first CSS framework',
//       version: 'Latest',
//       icon: '🎨',
//     },
//     {
//       title: 'Shadcn/ui',
//       description: 'Beautiful, accessible UI components',
//       version: 'Latest',
//       icon: '🧱',
//     },
//     {
//       title: 'Framer Motion',
//       description: 'Production-ready motion library',
//       version: 'Latest',
//       icon: '✨',
//     },
//     {
//       title: 'Axios',
//       description: 'Promise-based HTTP client',
//       version: '1.7',
//       icon: '🌐',
//     },
//     {
//       title: 'Jest',
//       description: 'JavaScript testing framework',
//       version: '30.0',
//       icon: '🧪',
//     },
//     {
//       title: 'Cypress',
//       description: 'End-to-end testing framework',
//       version: '15.0',
//       icon: '🔍',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//             Modern Tech Stack Showcase
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             A comprehensive demonstration of cutting-edge web technologies working together seamlessly.
//             Built with Vite 5, React 18, and a powerful ecosystem of modern tools.
//           </p>
//         </motion.div>

//         {/* Technology Grid */}
//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
//             Technologies Used
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
//             {technologies.map((tech, index) => (
//               <div key={tech.title} data-testid="tech-card">
//                 <TechCard
//                   title={tech.title}
//                   description={tech.description}
//                   version={tech.version}
//                   icon={tech.icon}
//                   delay={index * 0.1}
//                 />
//               </div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Interactive Demos */}
//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
//             Interactive Demonstrations
//           </h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <CounterDemo />
//             <FormDemo />
//             <ApiDemo />
//             <AnimationDemo />
//           </div>
//         </motion.section>

//         {/* Footer */}
//         <motion.footer
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="mt-16 text-center text-gray-600"
//         >
//           <div className="border-t pt-8">
//             <p className="text-lg mb-2">
//               Built with ❤️ using modern web technologies
//             </p>
//             <div className="flex justify-center space-x-4 text-sm">
//               <span>🧪 Jest Testing</span>
//               <span>•</span>
//               <span>🔍 Cypress E2E</span>
//               <span>•</span>
//               <span>📱 Responsive Design</span>
//               <span>•</span>
//               <span>⚡ Optimized Performance</span>
//             </div>
//           </div>
//         </motion.footer>
//       </div>
//     </div>
//   );
// };

// export default Index;
