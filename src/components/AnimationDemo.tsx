
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AnimationDemo = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const items = [
    { id: '1', title: 'Item 1', color: 'bg-blue-500' },
    { id: '2', title: 'Item 2', color: 'bg-green-500' },
    { id: '3', title: 'Item 3', color: 'bg-purple-500' },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>✨</span>
          <span>Framer Motion Demo</span>
        </CardTitle>
        <CardDescription>Interactive animations and transitions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Button
            onClick={() => setIsVisible(!isVisible)}
            variant="outline"
          >
            Toggle Animation
          </Button>

          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateX: 90 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-center"
              >
                <h3 className="text-xl font-bold">Animated Element!</h3>
                <p className="mt-2">Click toggle to see exit animation</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="border-t pt-4">
          <h4 className="font-medium mb-3">Layout Animations:</h4>
          <div className="grid grid-cols-3 gap-2">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layoutId={item.id}
                onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
                className={`${item.color} text-white p-4 rounded cursor-pointer`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.h3 className="font-medium">{item.title}</motion.h3>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedId && (
              <motion.div
                layoutId={selectedId}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={() => setSelectedId(null)}
              >
                <motion.div
                  className={`${items.find(i => i.id === selectedId)?.color} text-white p-8 rounded-lg max-w-md w-full mx-4`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.h3 className="text-2xl font-bold mb-4">
                    {items.find(i => i.id === selectedId)?.title}
                  </motion.h3>
                  <motion.p className="mb-4">
                    This is an expanded view with shared layout animation!
                  </motion.p>
                  <Button variant="secondary" onClick={() => setSelectedId(null)}>
                    Close
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimationDemo;
