import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181820',
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#181820',
        gap: 48,
    },
    title: {
        color: '#ffff',
        fontWeight: 700,
        fontSize: 24,
        marginBottom: 48
    },
    formContainer: {
        width: '80%',
        gap: 16
    },
    textInput: {
        width: '100%',
        paddingHorizontal: 18,
        color: '#ffff',
        height: 40,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#403E5C',
    }, 
    formButton: {
        width: '100%',
        marginTop: 12,
        borderRadius: 12,
        height: 48,
    },
    linearGradient: {
        width: '100%',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'center',
        height: '100%',

    },
    buttonText: {
        color: '#ffff',
        fontWeight: 900
    }, 
    linksContainer: {
        marginTop: 48,
        textAlign: 'center',
        gap: 16
    },
    link: {
        color: '#ffffff99',
        
    },
    bold: {
        textAlign: 'center',

        color: '#ffff',
        fontWeight: 900
    }
})