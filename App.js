import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/Header'
import ListContacts from './components/ListContacts'
import Addbtn from './components/AddContact'

export default function App() {
  const [items, setitems] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setitems(json)
      })
  }, [])

  const deleteItem = (id) => {
    setitems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  }
  const addItem = (text) => {
    if (text.length == 0) {
      Alert.alert(
        "Error",
        "Please Enter An Item",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    } else {
      setitems(prevItems => {
        return [{ id: (Math.floor(Math.random() * Math.floor(2000))), name: text }, ...prevItems]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Contact List" />
      <Addbtn addItem={addItem} />
      <FlatList data={items}
        renderItem={({ item }) => <ListContacts item={item} deleteItem={deleteItem} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
