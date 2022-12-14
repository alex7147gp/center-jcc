import styled from "styled-components";
import {useState} from "react";
import  Navbar from '../components/Navbar'
import  Announcement from '../components/Announcement.jsx'
import  Newslatter from '../components/Newslatter.jsx'
import  Footer from '../components/Footer.jsx'  
import  Ofert from '../components/ofert.jsx';  
import { useFormik } from 'formik';
import {BrowserRouter as Router, useLocation, Link} from 'react-router-dom'
import {Mobil} from '../responsive'
import * as Yup from 'yup';
import {
  Box,
  Checkbox,
  FormHelperText,
  TextField,
  Typography
} from '@mui/material';

const Cont = styled.div`
    overflow:hidden;
`;

const Container = styled.div`
  width: 100vw;
  height: 120vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  ${Mobil({ height : "110vh"})}

`;
const Wrapper = styled.div`
  width: 40%;
  padding: 30px;
  background: white;
  border-radius: 20px ;
  ${Mobil({ padding : "0px", width : "60%"})}

`;
const Form = styled.form`
  display: flex;
  flex-direction:column;
`;
const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: teal;
  border-radius: 5px;
`;
const Imge = styled.img``;

const Register = () =>{

   const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      phone:'',
      policy: false
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      firstName: Yup
        .string()
        .max(255)
        .required(
          'First name is required'),
      lastName: Yup
        .string()
        .max(255)
        .required(
          'Last name is required'),
      phone: Yup
        .string()
        .max(255)
        .required(
          'Phone is required'),  
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required'),
      policy: Yup
        .boolean()
        .oneOf(
          [true],
          'This field must be checked'
        )
    })
  });
   return(
      <Cont>
      <Announcement/>
      <Navbar/>
      <Ofert/>
      <Container>
        <Wrapper>
           <Form onSubmit={formik.handleSubmit}>
             <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Create a new account
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="First Name"
              margin="normal"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"/>
            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              helperText={formik.touched.lastName && formik.errors.lastName}
              label="Last Name"
              margin="normal"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="outlined"/>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"/>
            <TextField
              error={Boolean(formik.touched.phone && formik.errors.phone)}
              fullWidth
              helperText={formik.touched.phone && formik.errors.phone}
              label="Phone"
              margin="normal"
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="numbers"
              value={formik.values.phone}
              variant="outlined"/>         
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"/>
            
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1}}>
            
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}/>
              <Typography
                color="textSecondary"
                variant="body2">
                I have read the
                {' '}
                  <Link
                    color="primary"
                    underline="always"
                    variant="subtitle2">
                    Terms and Conditions
                  </Link>
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>)}
            <Box sx={{ py: 2 }}>
              <Button
                disabled={formik.isSubmitting}
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Have an account?
              {' '}
                <Link
                  to="/Login"
                  variant="subtitle2"
                  underline="hover"
                >
                  Sign In
                </Link>
            </Typography>
           </Form>
        </Wrapper>
      </Container>
      <Newslatter/>
      <Footer/>
   </Cont>      
   )

}

export default Register