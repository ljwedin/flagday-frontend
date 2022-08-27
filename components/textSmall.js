import { StyleSheet, View, Text } from 'react-native';

function TextSmall(props) {
    return <Text style={styles.text}>{props.text}</Text>;
}

export default TextSmall;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-Regular',
        color: '#FAA815',
        fontSize: 14,
    },
});
