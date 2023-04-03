import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
const { io } = require("socket.io-client");
import fetchDelete from "../../Helpers/fetchDelete";
import Animated, { FadeInDown } from "react-native-reanimated";
const Task = (todo, socket) => {
    return (
        <Animated.View entering={FadeInDown} style={styles.container}>
            <TouchableOpacity style={styles.btn} />
            <Text style={styles.title}>{todo?.title}</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => fetchDelete(todo.id, socket)}>
                    <Text style={{transform: [{translateX: 2}]}}><Icon name="trash" size={18} color="#ffff" />;</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{transform: [{translateX: 2}]}}><Icon name="pencil" size={18} color="#ffff" />;</Text>
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
        borderColor: '#ffff',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    }
})

export default Task