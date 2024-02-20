import { StyleSheet, Text, View, FlatList, Pressable, ScrollView } from 'react-native'
import React from 'react'

export default function ShowItens({items, deleteData, loading, setLoading}: any) {
  return (
    <View style={styles.block} className='my-6'>
      <ScrollView horizontal={true}>
        {loading && <Text style={styles.alert}>Loading...</Text>}
        <FlatList scrollEnabled={true} data={items} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => (
          <View className='bg-white justify-start' style={styles.container}>
            <Text style={styles.items}> {item.qte}  {item.name}</Text>
            <Pressable style={styles.button} onPress={() => deleteData(item.id)}><Text>X</Text></Pressable>
          </View>
        )} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    marginHorizontal: 18,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    borderRadius: 6,
    marginVertical: 4,
    backgroundColor: '#fafafa',
    
  },
  items: {
    fontSize: 22,
    flex: 1,
    color: '#black',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    paddingHorizontal: 8
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 6,
    color: 'white',
    borderRadius: 6,
    alignContent: 'flex-end',
  },
  alert: {
    backgroundColor: '#b91c1c',
    fontSize: 18,
    color: '#fafafa',
    padding: 8,


  }
})