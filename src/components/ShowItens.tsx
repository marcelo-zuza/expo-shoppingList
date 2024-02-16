import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function ShowItens({items}: any) {
  return (
    <View>
      <FlatList data={items} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => (
        <View style={styles.container}>
          <Text style={styles.items}>{item.id} - {item.name}: {item.qte}</Text>
          <Text style={styles.items}></Text>
        </View>
      )} />

      <Text></Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    borderRadius: 6,
    marginVertical: 15,
  },
  items: {
    fontSize: 18,
    color: '#black',
  }
})