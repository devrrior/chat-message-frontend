import { useAuth } from '../../../hooks/useAuth';
import { LoginFormElement } from '../../../interfaces/formInterfaces';
import { Button, Input } from './LoginForm.style';

export const LoginForm = () => {
  const { authState, loginUser } = useAuth();

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
      { console.log('data', authState) }
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
