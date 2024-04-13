import User from "@/Models/User.Model";
import { dbconnect } from "@/Utils/mongo";

export async function GET(Request) {
  await dbconnect();
  const id = Request.url.split("user/")[1];
  console.log(id)
  
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
  { status: 200 });
}