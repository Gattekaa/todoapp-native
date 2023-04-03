import { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, TextInput } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import fetchNewTag from "../../Helpers/fetchNewTag";
import getData from "../../Helpers/getData";
import Task from "../../Components/Task";
import EditModal from "../../Components/EditModal";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const initialState = {
    id: "",
    title: "",
    description: "",
    done: false,
  };
  const [showModal, setShowModal] = useState(true)

  const [todo, setTodo] = useState([]);

  const [newTag, setNewTag] = useState({
    ...initialState,
  });

  const [editTag, setEditTag] = useState({
    ...initialState,
  });

useEffect(() => {
  setInterval(() => {
    getData(user, setTodo)
  }, 2000 )
}, [user.id])
  return (
    <SafeAreaView style={styles.container}>
      {showModal ? EditModal(showModal, setShowModal, editTag, setEditTag, getData, user, setTodo) : null}
      <View style={styles.newTag}>
        <View style={styles.newTagWrapper}>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.newTagBtn}></TouchableOpacity>
            <TextInput
              placeholderTextColor={"#ffff"}
              value={newTag.title}
              maxLength={30}
              onChangeText={(e) => setNewTag({ ...newTag, title: e })}
              placeholder="Add a tag"
              style={styles.textInput}
            />
          </View>
          <View style={styles.newTagContainer}>
            <TouchableOpacity
              onPress={() =>
                fetchNewTag(setNewTag, initialState, user, newTag, setTodo)
              }
              style={styles.newTagFetchButton}
            >
              <Text>
                <Icon name="add" size={20} color="#fff" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.tasksContainer}>
        <FlatList
        
          data={todo}
          keyExtractor={(todo) => todo.id}
          ItemSeparatorComponent={() => <View style={{height: 16}} />}
          renderItem={({item}) => Task(item, getData, user, setTodo, showModal, setShowModal, setEditTag)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
