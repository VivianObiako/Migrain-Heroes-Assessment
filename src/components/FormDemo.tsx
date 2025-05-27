
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  age: Yup.number()
    .min(1, 'Age must be at least 1')
    .max(120, 'Age must be less than 120')
    .required('Age is required'),
});

const FormDemo = () => {
  const { toast } = useToast();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>📝</span>
          <span>Formik + Yup Demo</span>
        </CardTitle>
        <CardDescription>Form validation and submission</CardDescription>
      </CardHeader>
      <CardContent>
        <Formik
          initialValues={{ name: '', email: '', age: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              toast({
                title: "Form Submitted!",
                description: `Hello ${values.name}! Your data has been processed.`,
              });
              resetForm();
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Label htmlFor="name">Name</Label>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className={errors.name && touched.name ? 'border-red-500' : ''}
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Label htmlFor="email">Email</Label>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={errors.email && touched.email ? 'border-red-500' : ''}
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Label htmlFor="age">Age</Label>
                <Field
                  as={Input}
                  id="age"
                  name="age"
                  type="number"
                  placeholder="Enter your age"
                  className={errors.age && touched.age ? 'border-red-500' : ''}
                />
                <ErrorMessage name="age" component="div" className="text-red-500 text-sm mt-1" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Submitting...' : 'Submit Form'}
                </Button>
              </motion.div>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default FormDemo;
