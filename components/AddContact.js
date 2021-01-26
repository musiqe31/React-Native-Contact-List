import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


const AddItem = ({ addItem }) => {

    const [text, settext] = useState("")
    const onChanges = (e) => {
        settext(e)
    }

    return (
        <View>
            <TextInput onChangeText={onChanges} placeholder="Add Contact... ex.. 'John - 888-888-8888'" style={styles.input} />
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btnText}><Text>+</Text>  Add Contact</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c3bad8',
        padding: 9,
        margin: 5
    },
    btnText: {
        color: "darkslateblue",
        fontSize: 20,
        textAlign: 'center'
    }
});

export default AddItem;