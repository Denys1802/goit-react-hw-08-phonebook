import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormRegister,
  FormPage,
  RegisterButton,
  RegisterInput,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormPage>
      <FormRegister onSubmit={handleSubmit} autoComplete="off">
        <RegisterInput type="text" name="name" placeholder="Username" />

        <RegisterInput type="email" name="email" placeholder="Email" />

        <RegisterInput type="password" name="password" placeholder="Password" />

        <RegisterButton type="submit">Register</RegisterButton>
      </FormRegister>
    </FormPage>
  );
};
