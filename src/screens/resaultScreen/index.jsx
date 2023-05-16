import { View, Text, Image, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import Card from '../../components/card'
import win from '../../assets/images/win.png'
import lose from '../../assets/images/lose.png'

const ResultScreeen = ({result}) => {

    useEffect(() =>{
        handleImage();
    }, []);
    const [image, setImage] = useState ("");
    const handleImage = () =>{
        if (result === 'ganaste') {
            setImage(win);
            return;
        }
        setImage(lose)
    };

    
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Card>
                <Text style={styles.textContainer}>{`Tú ${result}!`}</Text>
            </Card>
            <Image style={styles.img} source={image} />
        </View>
    </SafeAreaView>
    
  )
}

export default ResultScreeen