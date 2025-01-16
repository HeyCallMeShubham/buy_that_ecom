import { Errorhandler } from "./ErrorHandler";



const generateAccessAndRefreshToken = async (user: any) => {

    try {

        const refreshToken: string = await user.generateRefreshToken();

        const accessToken: string = await user.generateAccessToken();

        return { refreshToken, accessToken };

    } catch (err: any) {

        console.log(err);

        throw new Errorhandler(err.statusCode, err.message);

    }

}


export { generateAccessAndRefreshToken }

