import connection from "../../config/connection";

export default async function fetchNewTag(setNewTag, initialState, user, newTag) {
    try {
      const data = await connection.post(`/task/`, {
        id: user.id,
        title: newTag.title,
        description: newTag.description,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setNewTag({ ...initialState });
    }
  }