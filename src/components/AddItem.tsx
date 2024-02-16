import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, {useState} from 'react'

interface Props {
  addData: () => void,
  setId: React.Dispatch<React.SetStateAction<number>>,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setQte: React.Dispatch<React.SetStateAction<number>>,
  id: number,
  qte: number,
  name: string
}

const AddItem = ({addData, id, qte, name, setId, setName, setQte}: Props) => {
  
  const [stringNumber, setStringNumber] = useState<string>('')

  const setStringToNumber = (stringNum: string): void => {
    let result: number = parseInt(stringNum)
    setQte(result)
    setStringNumber('')
  }

  return (
    <View>
      <Text style={styles.form}>AddItem</Text>
      <View>
        <TextInput placeholder='Name' style={styles.items} value={name} onChangeText={setName} />
        <TextInput placeholder='Qte' style={styles.items} keyboardType='numeric' value={stringNumber} onChangeText={setStringNumber}/>
        <Pressable style={styles.button} onPress={() => {setStringToNumber(stringNumber); addData();}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    fontSize: 18,
  },
  inputs: {
    fontSize: 20,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderBlockColor: 'black',
    borderRadius: 6
  },
  items: {
    fontSize: 18,
    color: '#black',
  },
  button: {
    backgroundColor: '#0284c7',
    padding: 8,

  }
})

export default AddItem