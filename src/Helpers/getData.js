import connection from "../../config/connection";

export default async function getData(user, setTodo) {
    if (!user) return;
    try {
      const { data } = await connection.get(`/task/?id=${user.id}`);
    setTodo(data);
    } catch (err) {
      console.log(err)
    }
  }