import React, { useEffect, useState } from 'react'

const Register = () => {


    const [selectedFile, setSelectedFile] = useState<any>(undefined);
    const [firstName, setFirstName] = useState<any>(undefined);





    useEffect(() => {


        //on mount it will render console.log(once)

        console.log(selectedFile, 'selectedFile')


    }, [selectedFile]);



    const handleSubmit = async (e: any) => {

        e.preventDefault()

        try {

            const formData: FormData = new FormData();

            formData.append("profileImage", selectedFile);
            formData.append("firstName", firstName);

            const data = await fetch("https://localhost:4431/upload", {

                method: "POST",
                body: formData


            })

        } catch (err: any) {

            console.log(err);

        }

    }



    return (

        <div className=''>

            <form onSubmit={handleSubmit} encType='multipart/form'>

                <input type='file' id='image' name='profileImage' onChange={(e: any) => setSelectedFile(e.target.files[0])} />

                <input type='text' id='firstName' name='firstName' onChange={(e: any) => setFirstName(e.target.value)} />

                <button type='submit'>Submit</button>

            </form>

        </div>

    )
}

export default Register