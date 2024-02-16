import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import AddItem from './src/components/AddItem'
import ShowItens from './src/components/ShowItens'
//firebase
import db from './src/firebase/db'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, getDocs, setDoc } from "firebase/firestore"; 
import firebase from 'firebase/compat/app';

interface Items {
  id: number;
  qte: number;
  name: string;
}

const App = () => {

  const [items, setItems] = useState<Items[]>([])
  const [id, setId] = useState<number>(0)
  const [qte, setQte] = useState<number>(0)
  const [name, setName] = useState<string>('')

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const newItems: Items[] = [];
    querySnapshot.forEach((doc) => {
      let data: any = doc.data();
      newItems.push(data);
    });
    setItems(newItems);
  }

  useEffect(() => {
      getData()
  }, [])




  return (
    <View style={styles.containter}>
      <Text style={styles.title}>Shopping list</Text>
      <Text style={styles.subTitle}>Powered by</Text>
      <Text style={styles.subTitle}>Marcelo Zuza</Text>
    <View style={styles.subContainer}>
      <AddItem />
      <ShowItens items={items} />
    </View>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: '#334155',
    color: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  subContainer: {
    backgroundColor: '#fafafa',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    width: '50%',
    borderRadius: 6,
    marginVertical: 15,
  },
  title: {
    fontSize: 50,
    color: '#fafafa',
  },
  subTitle: {
    fontSize: 18,
    color: '#fafafa',
  },
})