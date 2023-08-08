import React, { useEffect, useState } from 'react';
import { useToast, Box, Text, Input, Button, Spacer, Link } from '@chakra-ui/react';
import { FormControl, FormHelperText } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { login } from '../Redux/auth.redux/authAction';
import Loading from '../Component/Loading/Loading';

const Login = () => {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // if (isAuth) {
    //   navigate('/');
    // }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isAuth, isLoading, isError } = useSelector((store) => store.authReducer);

  const location = useLocation();

  const handleSubmit = () => {
    if (email === '' || password === '') {
      toast({
        title: 'Please enter all the details',
        description: 'Email or Password Maybe Empty',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });

      return;
    }
    let userData = {
      email,
      password,
    };

    dispatch(login(userData)).then(({ status, msg }) => {
      {
        status == 1
          ? toast({
              title: 'Login Successful.',
              description: msg,
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
          : toast({
              title: 'Error.',
              description: msg,
              status: 'error',
              duration: 9000,
              isClosable: true,
            });

            status==1?localStorage.setItem('auth',true):localStorage.setItem('auth',false)
      }

      if (status == 1) {
        location.state ? navigate(location.state) : navigate('/');
      }
    });
  };

  if (isLoading) return <Loading />;

  return (
    <>
  
        {/* login box */}
        <Box width={{ base: '100%', md: '25%' }} ml={{ base: '0', md: '39em' }}>
          <FormControl>
            <Text fontSize="s" align="left">
              <b>LOG IN</b>
            </Text>
            <Spacer />
            <br />
            <Input
              fontSize="xs"
              required="required"
              name="email"
              type="email"
              placeholder="E-MAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Spacer />
            <br />
            <Input
              fontSize="xs"
              required="required"
              name="password"
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Spacer />
            <br />
            <FormHelperText fontSize="8px" align="left">
              HAVE YOU FORGOTTEN YOUR PASSWORD?
            </FormHelperText>
            <Spacer /> <br />
            <Button
              fontSize="xs"
              borderRadius="none"
              ml="-1em"
              color="white"
              bg="black"
              width={{ base: '100%', md: '300px' }}
              onClick={handleSubmit}
            >
              LOG IN
            </Button>
          </FormControl>
          <FormControl>
         
            <Text fontSize="xs" align="left">
              Don't have account??..
            </Text>
         
           
          
            <Link href="/signup">
              <Text
               
              >
                CREATE ACCOUNT
              </Text>
            </Link>
          </FormControl>
        </Box>

      
   
    </>
  );
};

export default Login;