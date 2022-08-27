import { StyleSheet, View, Text } from 'react-native';

function TextLarge(props) {
    return <Text style={styles.text}>{props.text}</Text>;
}

export default TextLarge;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-SemiBold',
        color: '#FAA815',
        fontSize: 24,
    },
});
