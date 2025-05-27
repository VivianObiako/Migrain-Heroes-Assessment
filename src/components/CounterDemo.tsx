
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { increment, decrement, incrementByAmount, reset } from '@/store/counterSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CounterDemo = () => {
  const { value, history } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>🔄</span>
          <span>Redux Toolkit Demo</span>
        </CardTitle>
        <CardDescription>Interactive counter with state management</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <motion.div
          key={value}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="text-6xl font-bold text-blue-600 mb-4">{value}</div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button onClick={() => dispatch(increment())} variant="default">
              +1
            </Button>
            <Button onClick={() => dispatch(decrement())} variant="outline">
              -1
            </Button>
            <Button onClick={() => dispatch(incrementByAmount(5))} variant="secondary">
              +5
            </Button>
            <Button onClick={() => dispatch(reset())} variant="destructive">
              Reset
            </Button>
          </div>
        </motion.div>
        
        <div className="border-t pt-4">
          <h4 className="font-medium mb-2">History (last 10):</h4>
          <div className="flex flex-wrap gap-1">
            {history.slice(-10).map((val, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-2 py-1 bg-gray-100 rounded text-sm"
              >
                {val}
              </motion.span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CounterDemo;
