import { LoginForm } from 'components/ContactForm/authForms/LoginForm';
import { NavLink } from 'react-router-dom';
import { RegForm } from './Home.styles';

const Login = () => {
  return (
    <RegForm>
      <LoginForm />
      <p className="TextAuth">
        Don't have an account? <NavLink to="/register">Sign up</NavLink>
      </p>
    </RegForm>
  );
};

export default Login;
