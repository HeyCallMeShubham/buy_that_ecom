declare global {

    namespace NodeJS {

        interface processEnv{

            MONGODBURL:string         
            PORT:string  
            NODE_ENV:"development" | "production"

        }

    }

}



 
