import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import AddItem from './src/components/AddItem'
import ShowItens from './src/components/ShowItens'
//firebase
import db from './src/firebase/db'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
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

  const addData = async () => {
    const postsRef = collection(db, "items");
    try {
        await setDoc(doc(postsRef, (items.length+1).toString()), {
            id: items.length + 1,
            qte: qte,
            name: name,
        });
        setId(0)
        setQte(0)
        setName('')
      
        console.log("Document written with ID: ", (items.length+1).toString());
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    getData()
}

  const deleteData = async (id: number) => {
    const docRef = doc(db, "items", id.toString());
    await deleteDoc(docRef);
    getData()
  }


  return (
    <View style={styles.containter}>
      <Text style={styles.title}>Shopping list</Text>
      <Text style={styles.subTitle}>Powered by</Text>
      <Text style={styles.subTitle}>Marcelo Zuza</Text>
    <View style={styles.subContainer}>
      <AddItem addData={addData} id={id} setId={setId} qte={qte} setQte={setQte} name={name} setName={setName} />
      <ShowItens items={items} deleteData={deleteData} />
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
    backgroundColor: '#bef264',
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