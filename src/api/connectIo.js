import { io } from "socket.io-client";

function connectIo() {
  const socket = io("http://localhost:4000");
  return socket;
}

export default connectIo;
