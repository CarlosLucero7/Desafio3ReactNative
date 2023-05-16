import { StyleSheet, View } from 'react-native';

import Header from './src/components/header';
import StartGame from './src/screens/startGame';
import GameScreen from './src/screens/gameScreen';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import ResultScreeen from './src/screens/resaultScreen';

export default function App() {

  const [loaded] = useFonts({
    "RubikMarker": require('./src/assets/fonts/RubikMarker.ttf')
  })

  const [userNumber, setUserNumber] = useState();
  const [winOrLose, setWinOrLose] = useState(false);
  const [result,setResult] = useState("");
  
  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  };

  const gameResult = (selection, number) =>{
    if((selection==="lower" && userNumber < number) ||
    (selection==="higher" && userNumber > number)) {
      setResult('ganaste');
    } else {
      setResult('perdiste')
    }
    setWinOrLose(true);
  };

  let content = <StartGame onStartGame={handleStartGame} />

  if (userNumber && winOrLose===true) {
    content= <ResultScreeen result={result}/>
  }else if(userNumber){
    content = <GameScreen handleResult={gameResult} />
  }
  if(!loaded) {
    return null;
  };

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
