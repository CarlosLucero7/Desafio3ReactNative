import { View, Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'

import React, { useState } from 'react'
import styles from './styles'
import Card from '../../components/card'
import Input from '../../components/input'

const StartGame = ({ onStartGame }) => {

    const [value, setValue] = useState("");
    const [confirm, setConfirm] = useState(false);
    const [number, setNumber] = useState("");

    const handleInput = text => {
        setValue(text.replace(/[^0-9]/g, ""))
    };
    const handleResetInput = () => {
        setValue("");
        setConfirm(false);
    };
    const handleConfirmation = () => {
        const newValue = parseInt(value);
        if (isNaN(newValue) || newValue <=0 || newValue > 99) return;
        setConfirm(true)
        setNumber(newValue)
        setValue("")
    }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Card>
                    <Text>Escoje un numero</Text>
                    <Input 
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}
                        placeholder="Introduzca el numero"
                        value={value}
                        onChangeText={handleInput}
                    />
                    <View style={styles.buttoContainer}>
                        <TouchableOpacity style={styles.cleanButton} onPress={handleResetInput}>
                            <Text style={styles.textButton}>Eliminar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmation}>
                            <Text style={styles.textButton}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
                {confirm &&(
                    <Card>
                        <Text>Su numero es:</Text>
                        <Text>{number}</Text>
                        <View>
                            <TouchableOpacity style={styles.startButton} onPress={() => onStartGame(number)}>
                                <Text style={styles.textButton}>Comenzar a jugar</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                )}
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default StartGame