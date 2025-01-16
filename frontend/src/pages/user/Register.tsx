import React, { useEffect, useState } from 'react';
import { useRegisterApiMutation } from '../../features/rtkQuery/RegisterApi';
import ErrorBoundary from '../../error/errorHandlers/ErrorBoundary';

import "../../styles/pages/register.css";

const Register = () => {


    const [inptFieldErr, setInptFieldErr] = useState<boolean>(false);



    const [selectedFile, setSelectedFile] = useState<any>(undefined);

    const [firstName, setFirstName] = useState<string>("");

    const [lastName, setLastName] = useState<string>("");

    const [userName, setUserName] = useState<string>("");

    const [userEmail, setUserEmail] = useState<string>("");

    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const [password, setPassword] = useState<string>("");

    const [confPassword, setConfPassword] = useState<string>("");

    const [city, setCity] = useState<string>("");

    const [state, setState] = useState<string>("");

    const [country, setCountry] = useState<string>("");





    const [registerApi, { data, error, isLoading, isSuccess }]: any = useRegisterApiMutation();



    useEffect(() => {

        //on mount it will render console.log(once)

        console.log(data, 'data');
        console.log(error, 'error');


    }, [data, error]);





    const handleSubmit = async (e: any) => {

        e.preventDefault();

        try {


            if (firstName === "" || lastName === "" || userName === "" || userEmail === "" || phoneNumber === "" || city === "" || state === "" || country === "" || password === "" || confPassword === "") {

                setInptFieldErr(true)

            } else {

                setInptFieldErr(false);

                if (password === confPassword) {

                    const formData: FormData = new FormData();

                    formData.append("profileImage", selectedFile);

                    formData.append("firstName", firstName);

                    formData.append("lastName", lastName);

                    formData.append("userName", userName);

                    formData.append("email", userEmail);

                    formData.append("phoneNumber", phoneNumber);

                    formData.append("password", password);

                    formData.append("city", city);

                    formData.append("state", state);

                    formData.append("country", country);



                    registerApi(formData);

                } else {

                    alert("confirm Password does not match with password");

                }


            }

        } catch (err: any) {

            console.log(err, 'err');

        }

    }


    if (error) {

        return <ErrorBoundary error={error} />

    }


    if (isLoading) {

        return <h1>....Loading </h1>

    }


    if (isSuccess && data) {

        window.location.href = '/login'

    }


    return (

        <div className='register-container'>

            <form onSubmit={handleSubmit} encType='multipart/form' style={{ display: "flex", flexDirection: "column" }}>

                <label htmlFor="profileImage">
                    profileImage
                    <input type='file' id='profileImage' name='profileImage' onChange={(e: any) => setSelectedFile(e.target.files[0])} />
                </label>


                <label htmlFor='firstName'>
                    firstName
                    <input type='text' id='firstName' name='firstName' onChange={(e: any) => setFirstName(e.target.value)} />
                </label>



                <label htmlFor='lastName'>
                    lastName
                    <input type='text' id='lastName' name='lastName' onChange={(e: any) => setLastName(e.target.value)} />
                </label>



                <label htmlFor='userName'>

                    userName
                    <input type='text' id='userName' name='userName' onChange={(e: any) => setUserName(e.target.value)} />
                </label>


                <label htmlFor='userEmail'>
                    userEmail
                    <input type='email' id='userEmail' name='userEmail' onChange={(e: any) => setUserEmail(e.target.value)} />
                </label>



                <label htmlFor='phoneNumber'>
                    phoneNumber
                    <input type='tel' id='phoneNumber' name='phoneNumber' onChange={(e: any) => setPhoneNumber(e.target.value)} />
                </label>



                <label htmlFor='password'>
                    password
                    <input type='password' id='passsword' name='password' onChange={(e: any) => setPassword(e.target.value)} />
                </label>


                <label htmlFor='confPassword'>
                    confPasssword
                    <input type='password' id='confPasssword' name='confPassword' onChange={(e: any) => setConfPassword(e.target.value)} />
                </label>



                <label htmlFor='city'>
                    city
                    <input type='tel' id='city' name='city' onChange={(e: any) => setCity(e.target.value)} />
                </label>


                <label htmlFor='state'>
                    state
                    <input type='text' id='state' name='state' onChange={(e: any) => setState(e.target.value)} />
                </label>


                <label htmlFor='country'>
                    country
                    <input type='text' id='country' name='country' onChange={(e: any) => setCountry(e.target.value)} />
                </label>


                <p className='inputFieldErrorMessage'>{inptFieldErr ? "please fill all the required input fields" : ""}</p>


                <button type='submit'>Submit</button>

            </form>

        </div>

    )
}

export default Register