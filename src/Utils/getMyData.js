const { cookies } = require("next/headers");
import jwt from "jsonwebtoken";

export const getMyData = () => {
    // checking authentication 
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accesstoken")?.value || null;
    const userInfo = jwt.decode(accessToken, process.env.TOKEN_SECRET)

    if (!userInfo){
        return Response.json({ message:"unauthorized!" }, { status: 498 })
    }

    return userInfo
}