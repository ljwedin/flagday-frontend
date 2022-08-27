import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function CustomSecondaryButton(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.buttonContainer}
        >
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default CustomSecondaryButton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#272727',
        padding: 10,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FAA815',
        borderWidth: 1,
    },
    buttonText: {
        fontFamily: 'RobotoMono_Bold',
        fontSize: 16,
        color: '#FAA815',
    },
});
