import { StyleSheet, Text, View, Animated, Modal } from 'react-native'
import React, {useState, useEffect} from 'react'
import AddItem from './src/components/AddItem'
import ShowItens from './src/components/ShowItens'
import CoverModal from './src/components/CoverModal'
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
  const [stringNumber, setStringNumber] = useState<any>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [modalVisible, setModalVisible] = useState<boolean>(true)
  // Animations
  const [animatedBlock, setAnimatedBlock] = useState(new Animated.Value(0))

  Animated.timing(animatedBlock, {
    toValue: 200,
    duration: 1000,
    useNativeDriver: true
  }).start()

  const getData = async () => {
    setLoading(true)
    const querySnapshot = await getDocs(collection(db, "items"));
    const newItems: Items[] = [];
    querySnapshot.forEach((doc) => {
      let data: any = doc.data();
      newItems.push(data);
    });
    setLoading(false)
    setItems(newItems);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
      getData()
  }, [])

  const addData = async () => {
    if (isNaN(stringNumber) || stringNumber === '') {
      alert("Invalid number:" + stringNumber);
      return;
    }
    const postsRef = collection(db, "items");
    try {
        await setDoc(doc(postsRef, (items.length+1).toString()), {
            id: items.length + 1,
            qte: stringNumber,
            name: name,
        });
        setId(0)
        setStringNumber('')
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
      <Modal style={styles.modalBlock} animationType='fade' visible={modalVisible} >
        <CoverModal />
      </Modal>
      <Text style={styles.title}>Shopping list</Text>
      <Text style={styles.subTitle}>Powered by</Text>
      <Text style={styles.subTitle}>Marcelo Zuza</Text>
    <View style={styles.subContainer}>
      <AddItem addData={addData} id={id} setId={setId} stringNumber={stringNumber} setStringNumber={setStringNumber} name={name} setName={setName} />
      <Animated.View style={{width: animatedBlock}}>
        <ShowItens items={items} deleteData={deleteData} loading={loading} setLoading={setLoading} />
      </Animated.View>
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
  modalBlock: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#171717',
  }
})