import User from "@/Models/User.Model";
import { dbconnect } from "@/Utils/mongo";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(NextRequest) {
  await dbconnect();
  const userData = await NextRequest.json();
  try {

    const checkUser = await User.findOne({ email: userData.email });


    if (checkUser) {
      return Response.json(
        {
          message: "Email already used!",
          statusCode: 498,
        },
        {
          status: 498,
        }
      );
    }

    const hashPass = bcrypt.hashSync(userData.password, 10);

    const userObj = {
      name: userData.name,
      email: userData.email,
      password: hashPass,
    };

    const newUser = User(userObj);
    await newUser.save();

    const secretKey = process.env.TOKEN_SECRET;
    // const refreshsecretKey = process.env.REFRESH_TOKEN_SECRET;
    const userTokenData = {
      userId: newUser._id,
      email: newUser.email,
    };

    const expirationTimestamp = Math.floor(Date.now() / 1000) + (500 * 60000);
    const token = jwt.sign(
      { ...userTokenData, exp: expirationTimestamp },
      secretKey
    );

    // const refreshtokenexpirationTimestamp = Math.floor(Date.now() / 1000) + (5 * 60);
    // const token = jwt.sign(
    //   { ...userTokenData, exp: refreshtokenexpirationTimestamp },
    //   secretKey
    // );


    return Response.json({
      message: "Successfully registered.",
      data: newUser,
      token,
      statusCode: 200,
    },
    { status: 200 });
  } catch (error) {
    return Response.json({ message:error?.message }, { status: 498 })

  }


}
