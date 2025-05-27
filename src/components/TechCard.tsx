
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface TechCardProps {
  title: string;
  description: string;
  version: string;
  icon: string;
  delay?: number;
}

const TechCard = ({ title, description, version, icon, delay = 0 }: TechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="h-full bg-gradient-to-br from-white to-gray-50 border-2 hover:border-blue-300 transition-colors duration-300">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{icon}</div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="text-sm text-blue-600 font-medium">v{version}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TechCard;
