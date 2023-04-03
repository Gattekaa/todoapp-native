import connection from "../../config/connection";

export default async function fetchUpdate(todo, getData, user, setTodo) {
    try {
      const data = await connection.patch(`/task`, {
        ...todo,
        done: !todo.done,
      });

    } catch (err) {
    } finally {
      getData(user, setTodo)
    }
  }