import { useContext, useEffect, useState } from "react";
import { Button, FlatList, SafeAreaView, ScrollView, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, TextInput } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
const { io } = require("socket.io-client");
import fetchNewTag from "../../Helpers/fetchNewTag";
import getData from "../../Helpers/getData";
import Task from "../../Components/Task";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  let socket = io();
  const initialState = {
    id: "",
    title: "",
    description: "",
    done: false,
  };
  const [todo, setTodo] = useState([]);

  const [newTag, setNewTag] = useState({
    ...initialState,
  });

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();
    socket.on("get-data", (data) => {
      console.log('test')
      getData(user, setTodo, setLoading);
    });
  };

  useEffect(() => {
    socketInitializer();
    getData(user, setTodo);

    return () => {
      socket.disconnect();
    };
  }, [user.id]);

  return (
    <SafeAreaView style={styles.container}>
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
                fetchNewTag(setNewTag, /* socket, */ initialState, user, newTag)
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
          renderItem={({item}) => Task(item)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
