
import React, { useCallback, useEffect, useState } from 'react';
import axios from "axios";
import { useLoginApiMutation } from '../../features/rtkQuery/loginApi';
import { useDispatch } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { setCurrentUser } from '../../features/reducers/user/userSlice';
import ErrorBoundary from '../../error/errorHandlers/ErrorBoundary';

import "../../styles/pages/login.css"




const Login = () => {



  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [userPassword, setPassword] = useState<string>("");


  const dispatch: Dispatch = useDispatch();





  const [loginApi, { data, isLoading, isSuccess, error }]: any = useLoginApiMutation();







  const handleSubmit = (e: any) => {

    e.preventDefault();

    loginApi({ userName: userName, email: email, userPassword: userPassword })

  };




  useEffect(() => {


    console.log(userName, 'userName', email, "userName", userPassword, 'userPassword');

  }, [userName, email, userPassword]);








  if (error) {

    console.log(error, 'error');

  }

  if (data) {



    dispatch(setCurrentUser({ data: data.data, isLoginSuccess: isSuccess }));

  }





  if (isLoading) {

    return <h1>....Loading </h1>


  }



  if (error) {

    return <ErrorBoundary error={error} />

  }


  


  if (isSuccess && data) {

    window.location.href = '/'

  }




  return (

    <div className='login-container'>


      <form className='loginForm' onSubmit={handleSubmit} >

        <label htmlFor="userName">

          userName

          <input type='text' id='userName' placeholder='please enter userName' onChange={(e: any) => setUserName(e.target.value)} />

        </label>


        <label htmlFor="email">

          email

          <input type='email' id='email' placeholder='please enter email' onChange={(e: any) => setEmail(e.target.value)} />

        </label>


        <label htmlFor="password" onChange={(e: any) => setPassword(e.target.value)}>

          password

          <input type='password' id='password' placeholder='please enter password' />

        </label>



        <button type='submit'>submit</button>

      </form>

    </div>
  )
}

export default Login