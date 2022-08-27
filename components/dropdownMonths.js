import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function DropdownMonths(props) {
    const [selectedMonth, setSelectedMonth] = useState();

    return (
        <View style={styles.container}>
            <Picker
                dropdownIconColor="#FAA815"
                selectedValue={selectedMonth}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedMonth(itemValue);
                    props.setMonth(itemIndex);
                }}
                style={styles.picker}
            >
                <Picker.Item label="January" value="0" />
                <Picker.Item label="February" value="1" />
                <Picker.Item label="March" value="2" />
                <Picker.Item label="April" value="3" />
                <Picker.Item label="May" value="4" />
                <Picker.Item label="June" value="5" />
                <Picker.Item label="July" value="6" />
                <Picker.Item label="August" value="7" />
                <Picker.Item label="September" value="8" />
                <Picker.Item label="October" value="9" />
                <Picker.Item label="November" value="10" />
                <Picker.Item label="December" value="11" />
            </Picker>
        </View>
    );
}

export default DropdownMonths;

const styles = StyleSheet.create({
    container: {
        width: '70%',
    },
    picker: {
        color: 'white',
        width: '100%',
    },
});
