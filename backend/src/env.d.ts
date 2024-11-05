declare global {

    namespace NodeJS {

        interface processEnv{

            MONGODBURL:string            
            HOST:string  
            NODE_ENV:"development" | "production"

        }

    }

}



 
