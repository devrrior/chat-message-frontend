import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { Button, Form, Input, Error } from './LoginForm.style';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { authState, loginUser } = useAuth();
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const initialFormValues: FormValues = { email: '', password: '' };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('Invalid email'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values: FormValues, { resetForm }) => {
      resetForm();
      loginUser(values.email, values.password)
        .then(() => {
          navigate('/');
        })
        .catch(() => {
          setError(true);
          setTimeout(() => setError(false), 5000);
        });
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          type={'text'}
          id='email'
          placeholder='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <Error>{formik.errors.email}</Error>
        )}
        <Input
          type={'password'}
          id='password'
          placeholder='Password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <Error>{formik.errors.password}</Error>
        )}
        <Button type='submit'>Login</Button>
        {error && <Error>Email or password incorrect</Error>}
      </Form>
    </>
  );
};
