import { StyleSheet, View } from 'react-native';
import TextMedium from './textMedium';
import TextSmall from './textSmall';

export default function NextFlagDay(props) {
    const months = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
    ];

    const nextFlagDayDate =
        props.flagDay.day + ' ' + months[props.flagDay.month];

    return (
        <View>
            <TextMedium text={'Nästa flaggdag:'} />
            <TextSmall text={nextFlagDayDate} />
            <TextSmall text={props.flagDay.occasion} />
        </View>
    );
}

const style = StyleSheet.create({});
