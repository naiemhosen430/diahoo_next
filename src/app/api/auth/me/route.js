import User from "@/Models/User.Model";
import { getMyData } from "@/Utils/getMyData";
import { dbconnect } from "@/Utils/mongo";

export async function GET(Request) {
  await dbconnect();

  const data = getMyData()

  try {
      const data = await User.findOne({ _id: id });
      console.log(data)
    
      if (!data) {
        return Response.json(
          {
            message: "Profile not found!",
            statusCode: 498,
          },
          {
            status: 498,
          }
        );
      }
      return Response.json({
        message: "Success.",
        data,
        statusCode: 200,
      },
      { status: 200 }
    );
    
  } catch (error) {
    return Response.json({
        message: error.message,
        statusCode: 498,
      },
      { status: 498 }
    );
  }
}