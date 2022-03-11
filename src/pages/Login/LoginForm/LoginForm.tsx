import { Button, Input } from "./LoginForm.style";

export const LoginForm = () => {
  return (
    <div>
      <form>
        <div>
          <Input type={'text'} placeholder='Email' />
        </div>
        <div>
          <Input type={'text'} placeholder='Password' />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};
