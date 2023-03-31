import connection from "../../config/connection";

export default async function fetchNewTag(setNewTag, socket, initialState, user, newTag) {
  console.log(socket)
    try {
      const data = await connection.post(`/task/`, {
        id: user.id,
        title: newTag.title,
        description: newTag.description,
      });
      socket.emit("refresh-data", "true");
    } catch (err) {
      console.log(err);
    } finally {
      setNewTag({ ...initialState });
    }
  }