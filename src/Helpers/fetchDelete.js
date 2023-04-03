import connection from "../../config/connection";

export default async function fetchDelete(id, socket) {
  console.log(socket)
    try {
      const data = await connection.delete(`/task?id=${id}`);
      socket.emit("refresh-data");

    } catch (err) {
      console.log(err);
    }
  }