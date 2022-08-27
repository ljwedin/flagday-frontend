import { StyleSheet, View, Text } from 'react-native-web';
import TextLarge from './text/textLarge';

function Title(props) {
    return (
        <View>
            <TextLarge text={props.text} />
        </View>
    );
}

export default Title;

const styles = StyleSheet.create({});
