import * as Yup from 'yup';

export const initialValues = {
    email:'',
    password:'',
  }
  
export const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
  });
  