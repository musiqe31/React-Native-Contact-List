import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';

const ListItem = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity style={styles.listItems}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.name} - {item.phone}</Text>
                <Text onPress={() => deleteItem(item.id)}>X</Text>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    listItems: {
        padding: 15,
        backgroundColor: "#f8f8f8",
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 16
    }
});

export default ListItem

