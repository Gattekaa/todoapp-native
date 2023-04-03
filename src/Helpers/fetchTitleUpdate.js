import connection from "../../config/connection";

export async function fetchTitleUpdate(item, setShowModal, getData, user, setTodo) {
    try {
      const data = await connection.patch(`/task`, {
        ...item,
      });
      getData(user, setTodo)
      setShowModal(false);
    } catch (err) {}
  }