import { useContext, useState } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import fetchNewTag from "../../Helpers/fetchNewTag";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const initialState = {
    id: "",
    title: "",
    description: "",
    done: false,
  };
  const [newTag, setNewTag] = useState({
    ...initialState,
  });

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.newTag}>
        <View style={styles.newTagWrapper}>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.newTagBtn}></TouchableOpacity>
            <TextInput
              placeholderTextColor={"#ffff"}
              value={newTag.title}
              maxLength={80}
              onChangeText={(e) =>
                setNewTag({ ...newTag, title: e })
              }
              placeholder="Add a tag"
              style={styles.textInput}
            />
          </View>
          <View style={styles.newTagContainer}>
            <TouchableOpacity onPress={() => fetchNewTag(setNewTag, /* socket, */ initialState, user, newTag)} style={styles.newTagFetchButton}>
              <Text>
                <Icon name="add" size={20} color="#fff" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
