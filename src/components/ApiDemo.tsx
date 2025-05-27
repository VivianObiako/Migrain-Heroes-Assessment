
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { fetchPosts, clearError } from '@/store/apiSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ApiDemo = () => {
  const { posts, loading, error } = useSelector((state: RootState) => state.api);
  const dispatch = useDispatch<AppDispatch>();

  const handleFetchPosts = () => {
    dispatch(fetchPosts());
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>🌐</span>
          <span>Axios API Demo</span>
        </CardTitle>
        <CardDescription>Fetch data from JSONPlaceholder API</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={handleFetchPosts} disabled={loading}>
            {loading ? 'Loading...' : 'Fetch Posts'}
          </Button>
          {error && (
            <Button variant="outline" onClick={() => dispatch(clearError())}>
              Clear Error
            </Button>
          )}
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-3 bg-red-100 border border-red-300 rounded text-red-700"
          >
            Error: {error}
          </motion.div>
        )}

        <div className="space-y-3">
          {loading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            ))
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 bg-gray-50 rounded border"
              >
                <h4 className="font-medium text-gray-900 mb-1">{post.title}</h4>
                <p className="text-sm text-gray-600 line-clamp-2">{post.body}</p>
              </motion.div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ApiDemo;
