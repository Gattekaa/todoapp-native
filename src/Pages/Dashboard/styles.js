import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24233D',
        gap: 48
    },
    newTag: {
        width: '100%',
        backgroundColor: '#FFFFFF1A'
    }, 
    newTagWrapper: {
    },
    inputContainer: {
        paddingHorizontal: 32,
        paddingVertical: 8,
        height: 65,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    }, 
    newTagBtn: {
        width: 35,
        height: 35,
        borderWidth: 1,
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
        color: '#ffff'
    }, 
    newTagContainer: {
        width: '100%',
        paddingHorizontal: 32,
        paddingVertical: 8,
        backgroundColor: '#ffffff1a',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }, 
    newTagFetchButton: {
        width: 35,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF1A'
    },
    tasksContainer: {
        gap: 16,
        flex: 1
    }
})

export default styles