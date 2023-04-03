import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Modal, StyleSheet, Text, View } from "react-native";
import { fetchTitleUpdate } from "../../Helpers/fetchTitleUpdate";

const EditModal = (
  showModal,
  setShowModal,
  editTag,
  setEditTag,
  getData,
  user,
  setTodo
) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}
      >
        <View style={styles.centeredViewInside}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit</Text>

            <TextInput
              placeholder="Title"
              value={editTag.title}
              placeholderTextColor={"#ffffff99"}
              onChangeText={(e) => setEditTag({ ...editTag, title: e })}
              style={styles.textInput}
            />

            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={() =>
                  fetchTitleUpdate(
                    editTag,
                    setShowModal,
                    getData,
                    user,
                    setTodo
                  )
                }
                style={styles.btn}
              >
                <Text style={styles.textStyle}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: "#ccc" }]}
                onPress={() => setShowModal(!showModal)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    top: 0,
    left: 0,
  },
  centeredViewInside: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -22,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    flexDirection: "column",
    width: "90%",
    gap: 45,
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontWeight: 700,
    fontSize: 24,
    textAlign: "center",
  },
  textInput: {
    width: "100%",
    paddingHorizontal: 18,
    color: "#ffff",
    height: 40,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#403E5C",
  },
  btnContainer: {
    flexDirection: "row",
    gap: 15,
  },
  btn: {
    flex: 1,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#24233D",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EditModal;
