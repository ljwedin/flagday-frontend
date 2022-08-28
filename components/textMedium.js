import { StyleSheet, View, Text } from 'react-native';

function TextMedium(props) {
    return <Text style={styles.text}>{props.text}</Text>;
}

export default TextMedium;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-Regular',
        color: '#FAA815',
        fontSize: 16,
    },
});
