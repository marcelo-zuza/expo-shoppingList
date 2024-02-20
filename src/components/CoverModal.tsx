import { StyleSheet, Text, View, Modal, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const CoverModal = () => {

  return (
    <View>
            <View  className='bg-black' style={styles.container}>
                <Text style={styles.text}>Marcelo Zuza</Text>
                <Text style={styles.text}>Web & Mobile</Text>
                <Image source={require('../../assets/favicon1.png')} />
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#171717',

        opacity: 1,
        padding: 230,
    },
    text: {
        color: '#fafafa',
        fontSize: 50,
        
    }
})

export default CoverModal

