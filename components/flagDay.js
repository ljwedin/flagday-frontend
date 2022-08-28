import { StyleSheet, View } from 'react-native';
import CustomPrimaryButton from './customPrimaryButton';
import CustomSecondaryButton from './customSecondaryButton';
import DisplayFlag from './displayFlag';
import NextFlagDay from './nextFlagday';
import TextLarge from './textLarge';

function onPressPlaceholder() {
    console.log('Pressed button');
}

export default function FlagDay(props) {
    return (
        <View style={styles.container}>
            <DisplayFlag flag={props.flag} />
            <TextLarge text={props.occasion} />
            <NextFlagDay flagDay={props.nextFlagDay} />
            <View>
                <CustomPrimaryButton
                    title={'New flag day'}
                    onPress={onPressPlaceholder}
                />
                <CustomSecondaryButton
                    title={'Edit flag days'}
                    onPress={onPressPlaceholder}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '50%',
        justifyContent: 'space-between',
        // borderColor: 'white',
        // borderWidth: 1,
        alignItems: 'center',
    },
});
