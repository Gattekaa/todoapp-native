import connection from "../../config/connection";

export default async function fetchNewTag(setNewTag, /* socket, */ initialState, user, newTag) {
    try {
      const data = await connection.post(`/task/`, {
        id: user.id,
        title: newTag.title,
        description: newTag.description,
      });
      //socket.emit("refresh-data");
    } catch (err) {
      console.log(err);
    } finally {
      setNewTag({ ...initialState });
    }
  }