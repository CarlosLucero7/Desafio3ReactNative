import { StyleSheet, View } from 'react-native';

import Header from './src/components/header';
import StartGame from './src/screens/startGame';
import GameScreen from './src/screens/gameScreen';
import { useState } from 'react';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    "RubikMarker": require('./src/assets/fonts/RubikMarker.ttf')
  })

  const [userNumber, setUserNumber] = useState();

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }
  let content = <StartGame onStartGame={handleStartGame} />

  if (userNumber) {
    content = <GameScreen />
  }
  if(!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title={"Adivina el numero"} newStyles={styles.headerTitle}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontFamily: "RubikMarker",
  }
});
