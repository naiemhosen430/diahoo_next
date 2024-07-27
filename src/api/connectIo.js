import { io } from "socket.io-client";

function connectIo() {
  // const socket = io("http://localhost:5000");
  const socket = io("https://api-diahoo.vercel.app", {
    transports: ["polling"],
  });
  return socket;
}

export default connectIo;
