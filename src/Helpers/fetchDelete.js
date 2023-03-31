import connection from "../../config/connection";

export default async function fetchDelete(id) {
    try {
      const data = await connection.delete(`/task?id=${id}`);
    } catch (err) {
      console.log(err);
    }
  }