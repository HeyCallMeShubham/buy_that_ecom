declare global {

    namespace NodeJS {

        interface processEnv{

            MONGODBURL:string         
            PORT:string  
            NODE_ENV:"development" | "production"


            
            CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
            CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
            CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET


        }

    }

}



 
