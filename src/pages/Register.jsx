import { RegisterForm } from 'components/ContactForm/authForms/RegisterForm';
import { NavLink } from 'react-router-dom';
import { RegForm } from './Home.styles';

const Register = () => {
  return (
    <RegForm>
      <RegisterForm />
      <p>
        Already registered? <NavLink to={'/login'}>Sign in</NavLink>
      </p>
    </RegForm>
  );
};

export default Register;
