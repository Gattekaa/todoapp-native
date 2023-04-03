import connection from "../../config/connection";
import getData from "./getData";

export default async function fetchDelete(id, user, setTodo) {
    try {
      const data = await connection.delete(`/task?id=${id}`);

    } catch (err) {
      console.log(err);
    } finally {
      getData(user, setTodo)
    }
  }