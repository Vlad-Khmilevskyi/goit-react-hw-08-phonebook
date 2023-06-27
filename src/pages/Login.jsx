import { LoginForm } from 'components/authForms/LoginForm';
import { NavLink } from 'react-router-dom';
import { RegForm } from './Pages.styles';

const Login = () => {
  return (
    <RegForm>
      <LoginForm />
    </RegForm>
  );
};

export default Login;
