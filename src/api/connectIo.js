import { io } from "socket.io-client";

function connectIo() {
  // const socket = io("http://localhost:4000");
  const socket = io("https://api-diahoo.vercel.app");
  return socket;
}

export default connectIo;
