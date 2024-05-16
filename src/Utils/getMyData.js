const { cookies } = require("next/headers");

export const getMyData = () => {
    // checking authentication 
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accesstoken")?.value || null;
    const userInfo = jwt.decode(JSON.parse(accessToken), process.env.TOKEN_SECRET)

    if (!userInfo){
        return Response.json({ message:"unauthorized!" }, { status: 498 })
    }

    return userInfo
}