import { StyleSheet, View } from 'react-native';
import NextFlagDay from './nextFlagday';

export default function NoFlagDay(props) {
    return (
        <View>
            <Title text={'No flagday'} />
            <NextFlagDay
                nextFlagDayDate={props.nextFlagDayDate}
                nextFlagDayOccasion={props.nextFlagDayOccasion}
            />
        </View>
    );
}

const style = StyleSheet.create({});
