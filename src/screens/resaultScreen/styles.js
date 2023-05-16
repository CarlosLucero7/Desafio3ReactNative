import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({

container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors.color2,
},
img:{
    width: '80%',
    height: '50%',
},
textContainer:{
    fontSize:25
}
   
});

export default styles;