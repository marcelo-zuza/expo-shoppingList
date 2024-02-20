import { StyleSheet, Text, View, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'

const CoverModal = () => {

    const [modalVisible, setModalVisible] = useState<boolean>(false)

    useEffect(()=>{
        const showModal = () => {
            setModalVisible(true)
            setTimeout(()=>{
                setModalVisible(false)
            }, 2000)
        }
    })

  return (
    <View>
        <Modal visible={modalVisible} animationType='fade' transparent={true}>
            <View style={styles.container}>
                <Text>Marcelo Zuza</Text>
                <Text>Web & Mobile</Text>
            </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#171717',
        color: '#fafafa',
        fontSize: 18
    }
})

export default CoverModal

