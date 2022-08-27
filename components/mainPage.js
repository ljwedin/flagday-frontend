import { StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import TextSmall from './textSmall';
import DisplayFlag from './displayFlag';
import TextLarge from './textLarge';

export default function MainPage(props) {
    [userData, setUserData] = useState({
        userId: '',
        country: '',
        flag: '',
        flagDays: [],
        userName: '',
    });

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
            <TextLarge text={userData.userName} />
            <DisplayFlag flag={userData.flag} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
});
