import { StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import TextSmall from './textSmall';
import DisplayFlag from './displayFlag';
import TextLarge from './textLarge';
import FlagDay from './flagDay';

export default function MainPage(props) {
    [userData, setUserData] = useState({
        userId: '',
        country: '',
        flag: '',
        privateFlagDays: [{}, { month: 0, day: 1, occasion: 'placeholder' }],
        countryFlagDays: [],
        userName: '',
    });

    const flagDayDev = {
        month: new Date().getMonth(),
        day: new Date().getDate(),
        occasion: 'Dev Test Day',
    };

    useEffect(() => {
        fetch('https://flagday-backend.herokuapp.com/userData/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: '62e5745d04212c3376581d8c' }),
        })
            .then((res) => res.json())
            .then((data) => setUserData(data));
    }, []);

    return (
        <View style={styles.container}>
            <FlagDay
                flag={userData.flag}
                occasion={flagDayDev.occasion}
                nextFlagDay={userData.privateFlagDays[1]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
