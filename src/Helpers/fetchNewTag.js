import connection from "../../config/connection";
import getData from "./getData";

export default async function fetchNewTag(setNewTag, initialState, user, newTag, setTodo) {
    try {
      const data = await connection.post(`/task/`, {
        id: user?.id,
        title: newTag?.title,
        description: newTag?.description,
        done: newTag?.done
      });
    } catch (err) {
      console.log(err);
    } finally {
      setNewTag({ ...initialState });
      getData(user,setTodo)
    }
  }