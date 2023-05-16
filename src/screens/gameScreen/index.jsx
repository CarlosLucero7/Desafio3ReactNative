import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import Card from '../../components/card'
import styles from './styles'

const GameScreen = ({handleResult}) => {

    const [currentGuess, setCurrentGuess] = useState();

    useEffect(() => {
        setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1))
    }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pienso que el numero es:</Text>
      <Text style={styles.text}>{currentGuess}</Text>
      <Card>
        <View style={styles.buttoContainer}>
          <TouchableOpacity style={styles.buttonMenor}>
            <Text style={styles.textButton} onPress={()=> handleResult('lower', currentGuess)}>Menor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMayor}>
            <Text style={styles.textButton}onPress={()=> handleResult('higher', currentGuess)}>Mayor</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  )
}

export default GameScreen