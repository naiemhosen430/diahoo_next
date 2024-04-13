import User from "@/Models/User.Model";
import { dbconnect } from "@/Utils/mongo";
import bcrypt from "bcryptjs";
const jwt = require("jsonwebtoken");

export async function POST(NextRequest) {
  await dbconnect();
  try {
    const userData = await NextRequest.json();

    if (userData.email === "" || userData.password === "") {
      return Response.json(
        {
          message: "Every feild required!",
          email: checkUser.email,
          statusCode: 498,
        },
        {
          status: 498,
        }
      );
    }

    const checkUser = await User.findOne({ email: userData.email }).select(
      "password email _id"
    );


    if (!checkUser) {
      return Response.json(
        {
          message: "You have no account!",
          statusCode: 498,
        },
        {
          status: 498,
        }
      );
    }

    const checkPassword = await bcrypt.compare(userData.password, checkUser.password);

    if (!checkPassword) {
      return Response.json(
        {
          message: "Incorrect password!",
          statusCode: 498,
        },
        {
          status: 498,
        }
      );
    }

    const secretKey = process.env.TOKEN_SECRET;
    const userTokenData = {
      userId: checkUser._id,
      email: checkUser.email,
    };

    const expirationTimestamp =
      Math.floor(Date.now() / 1000) + 100 * 365 * 24 * 60 * 60;
    const token = jwt.sign(
      { ...userTokenData, exp: expirationTimestamp },
      secretKey
    );

    const responseData = {
      name: checkUser.name,
      email: checkUser.email,
      id: checkUser._id,
      token,
    };

    return Response.json({
      message: "Successfully registered.",
      data: responseData,
      statusCode: 200,
    },
    { status: 200 });
  } catch (error) {
    return Response.json({ message:error.message }, { status: 498 })
  }
}
