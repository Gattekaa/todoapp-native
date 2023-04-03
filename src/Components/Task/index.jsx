import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
const { io } = require("socket.io-client");
import fetchDelete from "../../Helpers/fetchDelete";
import Animated, { FadeInDown } from "react-native-reanimated";
import fetchUpdate from "../../Helpers/fetchUpdate";
const Task = (todo, getData, user, setTodo, showModal, setShowModal, setEditTag) => {
    return (
        <Animated.View entering={FadeInDown} style={styles.container}>
            <TouchableOpacity onPress={() => fetchUpdate(todo, getData,  user, setTodo)} style={[{backgroundColor: todo.done ? "#6bb100" : "transparent"},styles.btn]}>
            {todo.done ? <MaterialCommunityIcons name="check"  color={'white'} size={20} /> : null}
            </TouchableOpacity>
            <Text style={styles.title}>{todo?.title}</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => fetchDelete(todo.id, user, setTodo)}>
                    <Text><Icon name="trash" size={18} color="#ffff" />;</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setEditTag({id: todo.id, title: todo.title}), setShowModal(!showModal)}} style={styles.btn}>
                    <Text><Icon name="pencil" size={18} color="#ffff" />;</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 32,
        paddingVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF1A',
        gap: 16,

    }, 
    title: {
        color: '#ffff',
        fontWeight: 700,
        flex: 1
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8
    },
    btn: {
        width: 35,
        height: 35,
        borderWidth: 1,
        borderRadius: 9999,
        borderColor: '#ccc',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    }
})

export default Task