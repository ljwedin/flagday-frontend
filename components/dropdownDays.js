import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';

function DropdownDays(props) {
    const [selectedDay, setSelectedDay] = useState();

    function getDays(month) {
        return new Date(2000, month, 0).getDate();
    }

    let days = 0;
    let daysArray = [];

    if (props.month !== 1) {
        days = getDays(props.month + 1);
    } else {
        days = 29;
    }

    for (let i = 0; i < days; i++) {
        daysArray.push(i + 1);
    }

    return (
        <View style={styles.container}>
            <Picker
                dropdownIconColor="#FAA815"
                selectedValue={selectedDay}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedDay(itemValue);
                    props.setDay(itemValue);
                }}
                style={styles.picker}
            >
                {daysArray.map((day) => (
                    <Picker.Item label={day.toString()} value={day} key={day} />
                ))}
            </Picker>
        </View>
    );
}

export default DropdownDays;

const styles = StyleSheet.create({
    container: {
        width: '70%',
    },
    picker: {
        color: 'white',
        width: '100%',
    },
});
