import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { LoginFormElement } from '../../../interfaces/formInterfaces';
import { Button, Input } from './LoginForm.style';

export const LoginForm = () => {
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent<LoginFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    loginUser(email, password);

    e.currentTarget.elements.email.value = '';
    e.currentTarget.elements.password.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input type={'text'} id='email' placeholder='Email' />
        </div>
        <div>
          <Input type={'password'} id='password' placeholder='Password' />
        </div>
        <Button type='submit'>Login</Button>
      </form>
    </div>
  );
};
