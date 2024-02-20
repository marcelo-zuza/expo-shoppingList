import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, {useState} from 'react'

interface Props {
  addData: () => void,
  setId: React.Dispatch<React.SetStateAction<number>>,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setStringNumber: React.Dispatch<React.SetStateAction<string>>,
  id: number,
  stringNumber: string,
  name: string
}

const AddItem = ({addData, id, stringNumber, setStringNumber, name, setId, setName}: Props) => {
  
  return (
    <View>
      <Text style={styles.form}>Add Item</Text>
      <View>
        <TextInput placeholder='Name of the item' style={styles.items} value={name} onChangeText={setName} />
        <TextInput placeholder='Quantity' style={styles.items} keyboardType='numeric' value={stringNumber} onChangeText={setStringNumber}/>
      </View>
      <Pressable style={styles.button} onPress={addData}><Text style={styles.buttonText}>Add</Text></Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    fontSize: 28,
    textAlign: 'center',
  },
  inputs: {
    fontSize: 20,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderBlockColor: 'black',
    borderRadius: 6
  },
  items: {
    fontSize: 18,
    color: '#6b7280',
    backgroundColor: '#f8fafc',
    paddingHorizontal: 2,
    paddingVertical: 4,
    borderRadius: 8,
    marginVertical: 4
  },
  button: {
    backgroundColor: '#0284c7',
    padding: 8,
    borderRadius: 6
  },
  buttonText: {
    color: '#fafafa',
    textAlign: 'center',
    fontSize: 18
  }
})

export default AddItem