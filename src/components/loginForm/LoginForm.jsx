import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  FormLogin,
  InputLogin,
  LoginButton,
  FormPage,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormPage>
      <FormLogin onSubmit={handleSubmit} autoComplete="off">
        <InputLogin type="email" name="email" placeholder="Email" />
        <InputLogin type="password" name="password" placeholder="Password" />
        <LoginButton type="submit">Log In</LoginButton>
      </FormLogin>
    </FormPage>
  );
};
